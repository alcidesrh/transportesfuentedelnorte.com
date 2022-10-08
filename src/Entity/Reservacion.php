<?php

namespace App\Entity;

use App\Repository\ReservacionRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Timestampable\Traits\TimestampableEntity;

#[ORM\Entity(repositoryClass: ReservacionRepository::class)]
class Reservacion
{
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
}
