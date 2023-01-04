<?php

// src/Components/ButtonLinkComponent.php

namespace App\Components;

use Symfony\UX\TwigComponent\Attribute\AsTwigComponent;

#[AsTwigComponent('asiento')]
class AsientoComponent
{
    public string $color = 'gray';

    public string $coordX;

    public string $coordY;

    public bool $asiento = true;

    public bool $chofer = true;

    public int $numero;

    public int $id;

    public bool $ocupado = false;

    public bool $elegido = true;

    public bool|null $regreso = false;

    public function mount(array $data)
    {
        //     ["boleto"]=>
        // string(7) "3865656"
        // ["reservacion"]=>
        // NULL
        // ["id"]=>
        // string(4) "1398"
        // ["nivel2"]=>
        // int(0)
        // ["numero"]=>
        // int(9)
        // ["coordenadaX"]=>
        // int(0)
        // ["coordenadaY"]=>
        // int(150)
        // ["totalAsientos"]=>
        // int(50)
        // ["clase"]=>
        // string(1) "1"

        if (isset($data['conductor_puerta'])) {
            $this->asiento = false;
            if (1 == $data['conductor_puerta']) {
                $this->chofer = false;
            }
        } else {
            if (($data['boleto'] && 4 != $data['boleto_estado']) || $data['reservacion']) {
                $this->color = '#EF4443';
                $this->ocupado = true;
            }
            $this->numero = $data['numero'];
            $this->id = $data['id'];
            $this->elegido = isset($data['elegido']);
        }

        $this->coordX = ($data['coordenadaX'] * 1.32).'px';

        $this->coordY = ($data['coordenadaY'] * 1.32).'px';

    //     if (!isset($data['numero']) || 1 == $data['clase'] || $) {
    //         $this->coordY = ($data['coordenadaY'] * 1.32).'px';
    //     } else {
    //         $this->coordY = $data['coordenadaY'].'px';
    //     }

        // $this->coordY = $data['coordenadaY'].'px';
    }
}
