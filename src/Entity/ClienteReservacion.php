<?php

namespace App\Entity;

use App\Repository\ClienteReservacionRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ClienteReservacionRepository::class)]
class ClienteReservacion
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 25, nullable: true)]
    private ?string $nit = null;

    #[ORM\Column(length: 255)]
    private ?string $nombre = null;

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $email = null;

    #[ORM\Column(length: 20, nullable: true)]
    private ?string $telefono = null;

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $apellido = null;

    #[ORM\Column(length: 255)]
    private ?string $direccion = null;

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $localidad = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $area_administrativa = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $pais = null;

    #[ORM\Column(length: 50, nullable: true)]
    private ?string $codigo_postal = null;

    #[ORM\Column(nullable: true)]
    private ?int $cliente_id = null;

    public function __construct()
    {
        $this->direccion = 'sin dirección';
        $this->nit = 'CF';
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNit(): ?string
    {
        return $this->nit;
    }

    public function setNit(?string $nit): self
    {
        $this->nit = $nit;

        return $this;
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

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(?string $email): self
    {
        $this->email = $email ?? 'unkow';

        return $this;
    }

    public function getTelefono(): ?string
    {
        return $this->telefono;
    }

    public function setTelefono(?string $telefono): self
    {
        $this->telefono = $telefono ?? 'unkow';

        return $this;
    }

    public function getApellido(): ?string
    {
        return $this->apellido;
    }

    public function setApellido(?string $apellido): self
    {
        $this->apellido = $apellido;

        return $this;
    }

    public function getDireccion(): ?string
    {
        return $this->direccion ?? 'unkow';
    }

    public function setDireccion(string $direccion): self
    {
        $this->direccion = $direccion;

        return $this;
    }

    public function getLocalidad(): ?string
    {
        return $this->localidad ?? 'unkow';
    }

    public function setLocalidad(?string $localidad): self
    {
        $this->localidad = $localidad;

        return $this;
    }

    public function getAreaAdministrativa(): ?string
    {
        return $this->area_administrativa ?? 'GT';
    }

    public function setAreaAdministrativa(?string $area_administrativa): self
    {
        $this->area_administrativa = $area_administrativa;

        return $this;
    }

    public function getPais(): ?string
    {
        return $this->pais;
    }

    public function setPais(?string $pais): self
    {
        $this->pais = $pais;

        return $this;
    }

    public function getCodigoPostal(): ?string
    {
        return $this->codigo_postal ?? 'unkow';
    }

    public function setCodigoPostal(?string $codigo_postal): self
    {
        $this->codigo_postal = $codigo_postal;

        return $this;
    }

    public function getClienteId(): ?int
    {
        return $this->cliente_id;
    }

    public function setClienteId(?int $cliente_id): self
    {
        $this->cliente_id = $cliente_id;

        return $this;
    }

    public function getNombreCompleto()
    {
        return $this->nombre . ' ' . $this->apellido;
    }
}
