<?php

// src/Components/ButtonLinkComponent.php
namespace App\Components;

use App\Entity\Slider;
use App\Repository\SliderRepository;
use Liip\ImagineBundle\Imagine\Cache\CacheManager;
use Symfony\UX\TwigComponent\Attribute\AsTwigComponent;

#[AsTwigComponent('slider')]
class SliderComponent
{

    public function __construct(private SliderRepository $sliderRepository, private CacheManager $imagineCacheManager)
    {
    }

    public function getSlider()
    {
        $slider = $this->sliderRepository->findOneBy([]);

        return $slider;
    }
}
