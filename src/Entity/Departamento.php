<?php

namespace App\Entity;

use App\Repository\DepartamentoRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: DepartamentoRepository::class)]
class Departamento
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 80)]
    private ?string $nombre = null;

    #[ORM\OneToMany(mappedBy: 'departamento', targetEntity: Estacion::class)]
    private Collection $estaciones;

    public function __construct()
    {
        $this->estaciones = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNombre(): ?string
    {
        return $this->nombre;
    }

    public function setNombre(string $nombre): self
    {
        $this->nombre = $nombre;

        return $this;
    }

    /**
     * @return Collection<int, Estacion>
     */
    public function getEstaciones(): Collection
    {
        return $this->estaciones;
    }

    public function addEstacione(Estacion $estacione): self
    {
        if (!$this->estaciones->contains($estacione)) {
            $this->estaciones->add($estacione);
            $estacione->setDepartamento($this);
        }

        return $this;
    }

    public function removeEstacione(Estacion $estacione): self
    {
        if ($this->estaciones->removeElement($estacione)) {
            // set the owning side to null (unless already changed)
            if ($estacione->getDepartamento() === $this) {
                $estacione->setDepartamento(null);
            }
        }

        return $this;
    }
}
