<?php

// src/Components/ButtonLinkComponent.php
namespace App\Components;

use Symfony\UX\TwigComponent\Attribute\AsTwigComponent;

#[AsTwigComponent('alert')]
class AlertComponent
{

    public string $text;

    public string $icon = 'info';
}
