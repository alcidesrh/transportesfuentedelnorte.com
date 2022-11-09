<?php

namespace App\Services;

use App\Entity\Asiento;
use App\Entity\Reservacion;
use DateInterval;
use DateTimeZone;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Validator\Constraints\Timezone;
use Symfony\Contracts\HttpClient\HttpClientInterface;

class RemoteDatabaseQueries
{
    public function __construct(public EntityManagerInterface $system_fdn_entitymanager, private HttpClientInterface $client, private $FDN_HOST)
    {
    }
    public function getEstaciones(): array
    {
        $sql = "SELECT DISTINCT e.id as estacion_id, e.nombre as estacion_nombre, e.direccion as estacion_direccion, e.alias as estacion_alias, e.inicia_ruta as estacion_activa, d.nombre as departamento_nombre, d.id as departamento_id
                from estacion e left join departamento d on e.departamento_id = d.id";
        return $this->execute_query($sql);
    }

    public function getSalidas($salida, $llegada, $fecha): array | null
    {
        // return [
        //     0 => [
        //         "salida_id" => "250861",
        //         "horario" => "2022-04-05 05:45:00.000000",
        //         "bus_clase" => "Clase Oro / Maya de Oro",
        //         "kilometros" => 480,
        //         "minutos" => 600,
        //     ],
        //     1 => [
        //         "salida_id" => "250862",
        //         "horario" => "2022-04-05 10:00:00.000000",
        //         "bus_clase" => "Clase Oro / Maya de Oro",
        //         "kilometros" => 480,
        //         "minutos" => 600,
        //     ],
        //     2 => [
        //         "salida_id" => "251706",
        //         "horario" => "2022-04-05 11:15:00.000000",
        //         "bus_clase" => "Clase Oro / Maya de Oro",
        //         "kilometros" => 480,
        //         "minutos" => 600,
        //     ],
        //     3 => [
        //         "salida_id" => "250863",
        //         "horario" => "2022-04-05 14:00:00.000000",
        //         "bus_clase" => "Clase Oro / Maya de Oro",
        //         "kilometros" => 480,
        //         "minutos" => 600,
        //     ],
        //     4 => [
        //         "salida_id" => "250866",
        //         "horario" => "2022-04-05 19:00:00.000000",
        //         "bus_clase" => "Maya de Oro GL",
        //         "kilometros" => 480,
        //         "minutos" => 600,
        //     ],
        //     5 => [
        //         "salida_id" => "250868",
        //         "horario" => "2022-04-05 21:00:00.000000",
        //         "bus_clase" => "Maya de Oro GL",
        //         "kilometros" => 480,
        //         "minutos" => 600,
        //     ],
        //     6 => [
        //         "salida_id" => "250869",
        //         "horario" => "2022-04-05 21:30:00.000000",
        //         "bus_clase" => "Premier VIP",
        //         "kilometros" => 480,
        //         "minutos" => null,
        //     ]
        // ];

        $fecha->setTimeZone(new DateTimeZone('UTC'));
        $fecha->setTime(0, 0, 0);
        $fecha2 = clone $fecha;
        $fecha2->setTime(23, 59, 59);
        $fecha2->setTimeZone(new DateTimeZone('UTC'));

        $sql = "SELECT DISTINCT salida.id as salida_id, salida.fecha as horario, bus_clase.nombre as bus_clase, ruta.kilometros, (select tiempo.minutos from tiempo where tiempo.clasebus_id = bus_clase.id and tiempo.ruta_codigo = ruta.codigo and tiempo.estacion_destino_id = ruta.estacion_destino_id) as minutos 
        from salida
        left join bus_tipo on salida.tipo_bus_id = bus_tipo.id 
        left join bus_clase on bus_tipo.clase_id = bus_clase.id 
        left join itineario on itineario.id = salida.itinerario_id
        left join ruta on itineario.ruta_codigo = ruta.codigo
        left join salida_estado on salida_estado.id = salida.estado_id
        where salida_estado.id in (1,2,3) and ruta.estacion_origen_id = ? and ruta.estacion_destino_id = ? and salida.fecha between ? and ? 
        order by salida.fecha asc";

        try {
            return $this->execute_query($sql, [$salida, $llegada, $fecha, $fecha2]);
        } catch (\Exception $e) {
            return ['error' => $e->getMessage()];
        }
    }

    public function getAsientos($id_salida): array | null
    {
        $sql_asientos = "SELECT boleto.id as boleto, reservacion.id as reservacion, bus_asiento.id, bus_asiento.nivel2, bus_asiento.numero, bus_asiento.coordenadaX, bus_asiento.coordenadaY, bus_tipo.totalAsientos, clase_asiento.id as clase, salida.id as salida_id from bus_tipo
                left join salida on bus_tipo.id = salida.tipo_bus_id
                left join bus_asiento on bus_asiento.tipoBus_id = bus_tipo.id
                left join clase_asiento on clase_asiento.id = bus_asiento.clase_id
                left join boleto on (boleto.salida_id = salida.id and boleto.asiento_bus_id = bus_asiento.id)
                left join reservacion on (reservacion.estado_id = 1 and reservacion.asiento_bus_id = bus_asiento.id)
                where salida.id = ?";

        $sql_senales = "SELECT bus_senal.nivel2, bus_senal.coordenadaX, bus_senal.coordenadaY, bus_senal_tipo.id as conductor_puerta from bus_tipo
                left join salida on bus_tipo.id = salida.tipo_bus_id
                left join bus_senal on bus_senal.tipoBus_id = bus_tipo.id
                left join bus_senal_tipo on bus_senal_tipo.id = bus_senal.tipo_id
                where salida.id = ?";

        // return [$this->asientos(), []];
        if ($asientos = $this->execute_query($sql_asientos, [$id_salida])) {
            $senales = $this->execute_query($sql_senales, [$id_salida]);
            return [$asientos, $senales];
        }
        return null;
    }

    public function execute_query($sql, $params = [])
    {
        try {
            $query = $this->system_fdn_entitymanager->getConnection()->prepare($sql);
            foreach ($params as $key => $value) {
                $query->bindValue($key + 1, $value);
            }
            return $query->executeQuery()->fetchAllAssociative();
        } catch (\Throwable $th) {
            if ($th->getCode() == 258 || $th->getCode() == 10057) {
                return null;
            }
            throw $th;
        }
    }

    public function asientos()
    {

        $asientos = [];

        for ($i = 1, $cont = 1, $y = 50; $i < 15; $i++, $y += 50) {

            for ($k = 0, $j = 0; $k < 4; $k++, $j += 50) {
                if ($k == 2) {
                    $j = 150;
                }
                $asientos[] = [
                    'boleto' => '',
                    'reservacion' => '',
                    'id' => rand(100, 10000),
                    'nivel2' => false,
                    'numero' => $cont++,
                    'coordenadaX' => $j,
                    'coordenadaY' => $y,
                    'clase' => 1
                ];
            }
        }

        return $asientos;
    }

    public function getAsientosPrecios(Reservacion $reservacion)
    {
        $host = $this->FDN_HOST;
        $response = $this->client->request(
            'POST',
            $this->FDN_HOST . 'calcularImporteTotalMonedaBase.json',
            // 'http://grupofuentedelnorte.com/app_dev.php/api/calcularImporteTotalMonedaBase.json',

            [
                'body' => [
                    'idEstacionOrigen' => $reservacion->getRuta()->getEstacionSalida()->getId(),
                    'idEstacionDestino' => $reservacion->getRuta()->getEstacionLlegada()->getId(),
                    'idSalida' => $reservacion->getSalida()->getSalidaId(),
                    'asientos' => json_encode($reservacion->getSalida()->getAsientos()->map(fn (Asiento $item) => ['id' => $item->getAsientoId()])->toArray())
                ]
            ]
        );

        $result = json_decode($response->getContent());

        if ($reservacion->isIdaVuelta()) {
            $response = $this->client->request(
                'POST',
                $this->FDN_HOST . 'calcularImporteTotalMonedaBase.json',
                [
                    'body' => [
                        'idEstacionOrigen' => $reservacion->getRuta()->getEstacionLlegada()->getId(),
                        'idEstacionDestino' => $reservacion->getRuta()->getEstacionSalida()->getId(),
                        'idSalida' => $reservacion->getRegreso()->getSalidaId(),
                        'asientos' => json_encode($reservacion->getRegreso()->getAsientos()->map(fn (Asiento $item) => ['id' => $item->getAsientoId()])->toArray())
                    ]
                ]
            );

            $result_regreso = json_decode($response->getContent());
            $result->total = intval($result->total) + intval($result_regreso->total);
            if ($result_regreso->error && !$result->error) {
                $result->error = $result_regreso->error;
            }
        }

        return $result;
    }

    public function crearBoleto(Reservacion $reservacion, $regreso = false)
    {
        $salida = ['salida_id' => $reservacion->getSalida()->getSalidaId(), 'salida_asientos' => $reservacion->getSalida()->getAsientos()->map(fn (Asiento $item) => $item->getAsientoId())->toArray()];

        $regreso = [];
        if ($reservacion->isIdaVuelta()) {
            $regreso = ['regreso_id' => $reservacion->getRegreso()->getSalidaId(), 'regreso_asientos' => $reservacion->getRegreso()->getAsientos()->map(fn (Asiento $item) => $item->getAsientoId())->toArray()];
        }

        $response = $this->client->request(
            'POST',
            // $this->FDN_HOST . 'emitirBoletos.json',
            'http://grupofuentedelnorte.com/app_dev.php/api/emitirBoletos.json',
            [
                'body' => [
                    'salidas' => json_encode(array_merge($salida, $regreso)),
                    'cliente' => json_encode($reservacion->getCliente()->getClienteId() ? ['id' => $reservacion->getCliente()->getClienteId()] : ['nombre' => $reservacion->getCliente()->getNombre(), 'apellido' => $reservacion->getCliente()->getApellido(), 'nit' => $reservacion->getCliente()->getNit(), 'telefono' => $reservacion->getCliente()->getTelefono(), 'email' => $reservacion->getCliente()->getEmail()])
                ]
            ]
        );

        try {
            $result = json_decode($response->getContent(), true);
        } catch (\Exception $e) {
            $result = ['error' => $e->getMessage()];
        }

        return $result;
    }

    public function anularReservacion(Reservacion $reservacion)
    {
        $param = ['id' => $reservacion->getBoletoTicketId()];
        if ($reservacion->getStatus() == Reservacion::STATUS_ANULADA_ERROR) {
            $param['anular_sat'] = true;
        }

        try {
            $reservacion->incrementarAnularIntentos();
            $response = $this->client->request(
                'POST',
                $this->FDN_HOST . 'anularBoleto',
                // 'http://grupofuentedelnorte.com/app_dev.php/api/calcularImporteTotalMonedaBase.json',

                [
                    'body' => $param
                ]
            );

            $result = json_decode($response->getContent(), true);
            if (isset($result['anulado'])) {
                if ($result['anulado']) {
                    $reservacion->setStatus(Reservacion::STATUS_ANULADA);
                } else {
                    $reservacion->setStatus(Reservacion::STATUS_ANULADA_ERROR);
                }
                return true;
            } else if (isset($result['error'])) {
                return ['error' => $result['error']];
            }
            if ($reservacion->getAnularIntentos() >= 10) {
                $reservacion->setStatus(Reservacion::STATUS_ANULADA);
            }
        } catch (\Exception $e) {

            return ['error' => $e->getMessage()];
        }

        return false;
    }
}
