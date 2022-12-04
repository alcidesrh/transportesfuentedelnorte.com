<?php

// src/Components/ButtonLinkComponent.php
namespace App\Components;

use Symfony\UX\TwigComponent\Attribute\AsTwigComponent;

#[AsTwigComponent('alert')]
class AlertComponent
{

    public string $text;

    public string|null $class = null;

    public string|null $icon = null;

    public string|null $icon_class = 'fill-cyan-500';

    public string|null $attr = null;
}
