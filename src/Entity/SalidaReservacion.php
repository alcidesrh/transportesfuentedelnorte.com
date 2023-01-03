<?php

namespace App\Entity;

use App\Repository\SalidaReservacionRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: SalidaReservacionRepository::class)]
class SalidaReservacion
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $bus_clase = null;

    #[ORM\Column(nullable: true)]
    private ?int $minutos = null;

    #[ORM\Column(type: Types::BIGINT, nullable: true)]
    private ?string $salida_id = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $salida_fecha = null;

    #[ORM\Column(length: 10, nullable: true)]
    private ?string $hora = null;

    #[ORM\OneToMany(mappedBy: 'salidaReservacion', targetEntity: Asiento::class, orphanRemoval: true)]
    private Collection $asientos;

    public function __construct()
    {
        $this->asientos = new ArrayCollection();
        $this->salida_fecha = new \DateTime();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function setId(int $id): self
    {
        $this->id = $id;

        return $this;
    }

    public function getBusClase(): ?string
    {
        return $this->bus_clase;
    }

    public function setBusClase(?string $bus_clase): self
    {
        $this->bus_clase = $bus_clase;

        return $this;
    }

    public function getMinutos(): ?int
    {
        return $this->minutos;
    }

    public function setMinutos(?int $minutos): self
    {
        $this->minutos = $minutos;

        return $this;
    }

    public function getSalidaId(): ?string
    {
        return $this->salida_id;
    }

    public function setSalidaId(?string $salida_id): self
    {
        $this->salida_id = $salida_id;

        return $this;
    }

    public function getSalidaFecha(): ?\DateTimeInterface
    {
        return $this->salida_fecha;
    }

    public function setSalidaFecha(\DateTimeInterface $salida_fecha): self
    {
        $this->salida_fecha = $salida_fecha;

        return $this;
    }

    public function getHora(): ?string
    {
        return $this->hora;
    }

    public function setHora($hora): self
    {
        $this->hora = $hora;

        return $this;
    }

    /**
     * @return Collection<int, Asiento>
     */
    public function getAsientos(): Collection
    {
        return $this->asientos;
    }

    public function addAsiento(Asiento $asiento): self
    {
        if (!$this->asientos->contains($asiento)) {
            $this->asientos->add($asiento);
            $asiento->setSalidaReservacion($this);
        }

        return $this;
    }

    public function removeAsiento(Asiento $asiento): self
    {
        if ($this->asientos->removeElement($asiento)) {
            // set the owning side to null (unless already changed)
            if ($asiento->getSalidaReservacion() === $this) {
                $asiento->setSalidaReservacion(null);
            }
        }

        return $this;
    }
}
