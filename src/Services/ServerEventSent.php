<?php

namespace App\Services;

use Symfony\Component\Mercure\HubInterface;

class ServerEventSent
{

    public function __construct(private HubInterface $hub)
    {
    }


    public function reservaError()
    {
    }
}
