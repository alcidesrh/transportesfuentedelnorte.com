<?php

namespace App\Entity;

use App\Repository\RutaReservacionRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use Gedmo\Timestampable\Traits\TimestampableEntity;

#[ORM\Entity(repositoryClass: RutaReservacionRepository::class)]
class RutaReservacion
{
    use TimestampableEntity;

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(nullable: false)]
    #[Assert\NotBlank]
    private ?Estacion $estacion_salida = null;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(nullable: false)]
    #[Assert\NotBlank]
    private ?Estacion $estacion_llegada = null;

    #[ORM\OneToMany(mappedBy: 'ruta', targetEntity: Reservacion::class)]
    private Collection $reservaciones;

    public function __construct()
    {
        $this->reservaciones = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEstacionSalida(): ?Estacion
    {
        return $this->estacion_salida;
    }

    public function setEstacionSalida(?Estacion $estacion_salida): self
    {
        $this->estacion_salida = $estacion_salida;

        return $this;
    }

    public function getEstacionLlegada(): ?Estacion
    {
        return $this->estacion_llegada;
    }

    public function setEstacionLlegada(?Estacion $estacion_llegada): self
    {
        $this->estacion_llegada = $estacion_llegada;

        return $this;
    }

    /**
     * @return Collection<int, Reservacion>
     */
    public function getReservaciones(): Collection
    {
        return $this->reservaciones;
    }

    public function addReservacione(Reservacion $reservacione): self
    {
        if (!$this->reservaciones->contains($reservacione)) {
            $this->reservaciones->add($reservacione);
            $reservacione->setRuta($this);
        }

        return $this;
    }

    public function removeReservacione(Reservacion $reservacione): self
    {
        if ($this->reservaciones->removeElement($reservacione)) {
            // set the owning side to null (unless already changed)
            if ($reservacione->getRuta() === $this) {
                $reservacione->setRuta(null);
            }
        }

        return $this;
    }
}
