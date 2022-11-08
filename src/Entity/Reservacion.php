<?php

namespace App\Entity;

use App\Repository\ReservacionRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Timestampable\Traits\TimestampableEntity;

#[ORM\Entity(repositoryClass: ReservacionRepository::class)]
class Reservacion
{
    const STATUS_INCOMPLETA = "incompleta";
    const STATUS_COMPLETADA = "completada";
    const STATUS_ANULADA = "anulada";
    const STATUS_ANULADA_ERROR = "anular_pendiente";
    const STATUS_CANCELADA = "cancelada";

    use TimestampableEntity;

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'reservaciones')]
    #[ORM\JoinColumn(nullable: false)]
    private ?RutaReservacion $ruta = null;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(onDelete: "set null")]
    private ?SalidaReservacion $salida = null;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(onDelete: "set null")]
    private ?SalidaReservacion $regreso = null;

    #[ORM\Column(nullable: true)]
    private ?bool $ida_vuelta = null;

    #[ORM\Column(type: Types::SMALLINT, nullable: true)]
    private ?int $paso_completado = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    private ?ClienteReservacion $cliente = null;

    #[ORM\Column(nullable: true)]
    private ?float $precio = null;

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $transaccion_id = null;

    #[ORM\Column(length: 20, nullable: true)]
    private ?string $status = null;

    #[ORM\Column(length: 5, nullable: true)]
    private ?string $moneda = null;

    #[ORM\Column(nullable: true)]
    private ?int $factura_id = null;

    #[ORM\Column(length: 50, nullable: true)]
    private ?string $factura_dte = null;

    #[ORM\Column(nullable: true)]
    private ?int $boleto_ticket_id = null;

    #[ORM\Column(type: Types::SMALLINT, nullable: true)]
    private ?int $anular_intentos = null;

    public function __construct()
    {
        $this->status = self::STATUS_INCOMPLETA;
        $this->anular_intentos = 0;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getRuta(): ?RutaReservacion
    {
        return $this->ruta;
    }

    public function setRuta(?RutaReservacion $ruta): self
    {
        $this->ruta = $ruta;

        return $this;
    }

    public function getSalida(): ?SalidaReservacion
    {
        return $this->salida;
    }

    public function setSalida(?SalidaReservacion $salida): self
    {
        $this->salida = $salida;

        return $this;
    }

    public function getRegreso(): ?SalidaReservacion
    {
        return $this->regreso;
    }

    public function setRegreso(?SalidaReservacion $regreso): self
    {
        $this->regreso = $regreso;

        return $this;
    }

    public function isIdaVuelta(): ?bool
    {
        return $this->ida_vuelta;
    }

    public function setIdaVuelta(?bool $ida_vuelta): self
    {
        $this->ida_vuelta = $ida_vuelta;

        return $this;
    }

    public function getPasoCompletado(): ?int
    {
        return $this->paso_completado;
    }

    public function setPasoCompletado(?int $paso_completado): self
    {
        $this->paso_completado = $paso_completado;

        return $this;
    }

    public function getCliente(): ?ClienteReservacion
    {
        return $this->cliente;
    }

    public function setCliente(?ClienteReservacion $cliente): self
    {
        $this->cliente = $cliente;

        return $this;
    }

    public function getPrecio(): ?float
    {
        return $this->precio;
    }

    public function setPrecio(?float $precio): self
    {
        $this->precio = $precio;

        return $this;
    }

    public function getTransaccionId(): ?string
    {
        return $this->transaccion_id;
    }

    public function setTransaccionId(?string $transaccion_id): self
    {
        $this->transaccion_id = $transaccion_id;

        return $this;
    }

    public function getStatus(): ?string
    {
        return $this->status;
    }

    public function setStatus(?string $status): self
    {
        $this->status = $status;

        return $this;
    }

    public function getMoneda(): ?string
    {
        return $this->moneda;
    }

    public function setMoneda(?string $moneda): self
    {
        $this->moneda = $moneda;

        return $this;
    }



    public function getFacturaId(): ?int
    {
        return $this->factura_id;
    }

    public function setFacturaId(?int $factura_id): self
    {
        $this->factura_id = $factura_id;

        return $this;
    }

    public function getFacturaDte(): ?string
    {
        return $this->factura_dte;
    }

    public function setFacturaDte(?string $factura_dte): self
    {
        $this->factura_dte = $factura_dte;

        return $this;
    }

    public function getBoletoTicketId(): ?int
    {
        return $this->boleto_ticket_id;
    }

    public function setBoletoTicketId(?int $boleto_ticket_id): self
    {
        $this->boleto_ticket_id = $boleto_ticket_id;

        return $this;
    }

    public function getRutaForAdmin()
    {
        return $this->ruta->getEstacionSalida()->getNombre() . ' - ' . $this->ruta->getEstacionLlegada()->getNombre();
    }

    public function getAnularIntentos(): ?int
    {
        return $this->anular_intentos;
    }

    public function setAnularIntentos(?int $anular_intentos): self
    {
        $this->anular_intentos = $anular_intentos;

        return $this;
    }

    public function incrementarAnularIntentos(): self
    {
        $this->anular_intentos++;

        return $this;
    }
}
