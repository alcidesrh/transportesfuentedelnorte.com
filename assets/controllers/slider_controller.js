import { Controller } from "@hotwired/stimulus";
import { gsap, Linear } from "gsap";
/*
 * The following line makes this controller "lazy": it won't be downloaded until needed
 * See https://github.com/symfony/stimulus-bridge#lazy-controllers
 */
export default class extends Controller {
  static targets = ["slider"];
  static values = {
    images: String,
  };
  count = 1;
  images = [];
  slider = null;
  connect() {
    if (!this.hasSliderTarget) {
      return;
    }
    this.slider = gsap.timeline({ repeat: -1, yoyo: true });
    for (let i = 0; i < this.sliderTarget.children.length; i++) {
      this.slider.to(this.sliderTarget.children[i], {
        x: "110%",
        y: "-100%",
        display: "none",
        rotation: -27,
        duration: 3,
        delay: 3,
        ease: Linear.easeInOut,
        force3D: true,
      });
    }
    this.slider.play();
  }
  control({ detail: { stop } }) {
    this.slider.paused(stop);
  }
}
