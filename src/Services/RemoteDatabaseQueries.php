<?php

namespace App\Services;

use Doctrine\ORM\EntityManagerInterface;

class RemoteDatabaseQueries
{
    public function __construct(public EntityManagerInterface $system_fdn_entitymanager)
    {
    }
    public function getEstaciones(): array
    {
        $sql = "SELECT DISTINCT e.id as estacion_id, e.nombre as estacion_nombre, e.direccion as estacion_direccion, e.alias as estacion_alias, e.inicia_ruta as estacion_activa, d.nombre as departamento_nombre, d.id as departamento_id
                from estacion e left join departamento d on e.departamento_id = d.id";
        return $this->execute_query($sql);
    }

    public function getSalidas($fecha = null): array | null
    {
        if (!$fecha) {
            return null;
        }

        return [
            0 => [
                "salida_id" => "250861",
                "horario" => "2022-04-05 05:45:00.000000",
                "bus_clase" => "Clase Oro / Maya de Oro",
                "kilometros" => 480,
                "minutos" => 600,
            ],
            1 => [
                "salida_id" => "250862",
                "horario" => "2022-04-05 10:00:00.000000",
                "bus_clase" => "Clase Oro / Maya de Oro",
                "kilometros" => 480,
                "minutos" => 600,
            ],
            2 => [
                "salida_id" => "251706",
                "horario" => "2022-04-05 11:15:00.000000",
                "bus_clase" => "Clase Oro / Maya de Oro",
                "kilometros" => 480,
                "minutos" => 600,
            ],
            3 => [
                "salida_id" => "250863",
                "horario" => "2022-04-05 14:00:00.000000",
                "bus_clase" => "Clase Oro / Maya de Oro",
                "kilometros" => 480,
                "minutos" => 600,
            ],
            4 => [
                "salida_id" => "250866",
                "horario" => "2022-04-05 19:00:00.000000",
                "bus_clase" => "Maya de Oro GL",
                "kilometros" => 480,
                "minutos" => 600,
            ],
            5 => [
                "salida_id" => "250868",
                "horario" => "2022-04-05 21:00:00.000000",
                "bus_clase" => "Maya de Oro GL",
                "kilometros" => 480,
                "minutos" => 600,
            ],
            6 => [
                "salida_id" => "250869",
                "horario" => "2022-04-05 21:30:00.000000",
                "bus_clase" => "Premier VIP",
                "kilometros" => 480,
                "minutos" => null,
            ]
        ];

        $fecha->setTime(0, 0, 0);
        $fecha2 = clone $fecha;
        $fecha2->setTime(23, 59, 59);

        $sql = "SELECT DISTINCT salida.id as salida_id, salida.fecha as horario, bus_clase.nombre as bus_clase, ruta.kilometros, (select tiempo.minutos from tiempo where tiempo.clasebus_id = bus_clase.id and tiempo.ruta_codigo = ruta.codigo and tiempo.estacion_destino_id = ruta.estacion_destino_id) as minutos 
        from salida
        left join bus_tipo on salida.tipo_bus_id = bus_tipo.id 
        left join bus_clase on bus_tipo.clase_id = bus_clase.id 
        left join itineario on itineario.id = salida.itinerario_id
        left join ruta on itineario.ruta_codigo = ruta.codigo
        where ruta.estacion_origen_id = ? and ruta.estacion_destino_id = ? and salida.fecha between ? and ? 
        order by salida.fecha asc";

        $return = $this->execute_query($sql, [1, 3, $fecha, $fecha2]);
        return $return;
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
}
