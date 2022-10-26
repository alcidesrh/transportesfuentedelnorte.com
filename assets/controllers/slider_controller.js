import { Controller } from "@hotwired/stimulus";
import { gsap } from "gsap";
/*
 * The following line makes this controller "lazy": it won't be downloaded until needed
 * See https://github.com/symfony/stimulus-bridge#lazy-controllers
 */
/* stimulusFetch: 'lazy' */
export default class extends Controller {
  static targets = ["slider"];
  static values = {
    images: String,
  };
  count = 1;
  images = [];
  connect() {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    for (let i = 0; i < this.sliderTarget.children.length; i++) {
      tl.to(this.sliderTarget.children[i], {
        opacity: 0,
        height: 0,
        duration: 3,
        delay: 5,
      });
    }
    tl.play();
  }
}
