<?php

namespace App\Services;

use DateInterval;
use DateTime;
use Doctrine\DBAL\ParameterType;
use Doctrine\ORM\EntityManagerInterface;

class RemoteDatabaseQueries
{
    public function __construct(public EntityManagerInterface $systemfdnEntityManager)
    {
    }
    public function getEstaciones(): array
    {

        $sql = "SELECT e.id, e.nombre as estacion, d.nombre as departamento
                from estacion e left join departamento d on e.departamento_id = d.id 
                where e.departamento_id is not null and e.inicia_ruta is not null group by e.id, e.nombre, d.nombre;";

        // $query = $systemfdnEntityManager->getConnection()->prepare($sql)->executeQuery()->fetchAllAssociative();
        return $this->systemfdnEntityManager->getConnection()->fetchAllAssociative($sql);
    }

    public function getSalidas(): array
    {
        $fecha = new DateTime();
        $fecha->sub(new DateInterval('P143D'));

        $fecha->setTime(0, 0, 0);
        $fecha2 = clone $fecha;
        $fecha2->setTime(23, 59, 59);

        $sql = "SELECT DISTINCT salida.id as salida_id, salida.fecha as horario, bus_clase.nombre as bus_clase, ruta.kilometros, (select tiempo.minutos from tiempo where tiempo.clasebus_id = bus_clase.id and tiempo.ruta_codigo = ruta.codigo and tiempo.estacion_destino_id = ruta.estacion_destino_id) as minutos 
        from salida
        left join bus_tipo on salida.tipo_bus_id = bus_tipo.id 
        left join bus_clase on bus_tipo.clase_id = bus_clase.id 
        left join itineario on itineario.id = salida.itinerario_id
        left join ruta on itineario.ruta_codigo = ruta.codigo
        where salida.estado_id in (1,2,3) and ruta.estacion_origen_id = ? and ruta.estacion_destino_id = ? and salida.fecha between ? and ? 
        order by salida.fecha asc";

        $query = $this->systemfdnEntityManager->getConnection()->prepare($sql);
        $query->bindValue(1, 1);
        $query->bindValue(2, 3);
        $query->bindValue(3, $fecha);
        $query->bindValue(4, $fecha2);
        $query->bindValue(5, 3);
        $return = $query->executeQuery()->fetchAllAssociative();
        return $return;
    }

    public function getAsientos(): array
    {
        $sql = "SELECT bus_asiento.id, bus_asiento.nivel2, bus_asiento.numero, bus_asiento.coordenadaX, bus_asiento.coordenadaY, bus_tipo.totalAsientos, clase_asiento.id as clase from bus_tipo
                left join salida on bus_tipo.id = salida.tipo_bus_id
                left join bus_asiento on bus_asiento.tipoBus_id = bus_tipo.id
                left join clase_asiento on clase_asiento.id = bus_asiento.clase_id
                where salida.id = ?";

        $query = $this->systemfdnEntityManager->getConnection()->prepare($sql);
        $query->bindValue(1, 251954);
        $return = $query->executeQuery()->fetchAllAssociative();
        return $return;
    }

    // public function index(RemoteDatabaseQueries $systemfdnEntityManager): JsonResponse
    // {
    //     try {
    //         $rsm = new ResultSetMapping();
    //         $rsm->addScalarResult('id', 'id');
    //         $rsm->addScalarResult('fecha_creacion', 'fecha_creacion');

    //         // SELECT
    //         $sql = "SELECT * from encomienda where encomienda.id = '1007611'";
    //         // $query = $systemfdnEntityManager->getConnection()->prepare($sql)->executeQuery()->fetchAllAssociative();
    //         $query = $systemfdnEntityManager->getConnection()->fetchAllAssociative($sql);

    //         // INSERT
    //         // $sql = "INSERT INTO banco (alias, nombre, telefono, direccion) VALUES ('value11', 'value2', 'value3', 'value4')";
    //         // $query = $systemfdnEntityManager->getConnection()->prepare($sql)->executeStatement();

    //         // UPDATE
    //         // $sql = "UPDATE banco SET alias = 'alias', nombre = 'alcides' where id = 1;";
    //         // $query = $systemfdnEntityManager->getConnection()->prepare($sql)->executeStatement();

    //         // DELETE
    //         $sql = "DELETE from banco where id = 1";
    //         $query = $systemfdnEntityManager->getConnection()->prepare($sql)->executeStatement();
    //         // $query = $systemfdnEntityManager->createNativeQuery("SELECT * from encomienda where encomienda.id = '1007611'", $rsm)->getResult();
    //         $query = $systemfdnEntityManager->createNativeQuery("SELECT encomienda.id as id from encomienda where encomienda.id = '1007611'", $rsm)->getResult();
    //         // $query->setParameter(1, 'romanb');
    //         // var_dump(count($query));
    //     } catch (\Throwable $e) {

    //         $e = 0;
    //     }

    //     return $this->json([
    //         'message' => 'Welcome to your new controller!',
    //         'path' => 'src/Controller/TestControlleruta.php',
    //     ]);
    // }
}
