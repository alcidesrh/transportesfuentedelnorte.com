import { Controller } from "@hotwired/stimulus";
import { gsap, Linear } from "gsap";
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
      // tl.fromTo(
      //   this.sliderTarget.children[i],
      //   // { opacity: 0.3 },
      //   // { display: "block", opacity: 1, duration: 1 }
      //   { x: 0, display: "block" },
      //   // { y: "100%" },
      //   { x: "110%", rotation: 27, duration: 3, delay: 7 }
      // );
      tl.to(this.sliderTarget.children[i], {
        // opacity: 0.3,
        // duration: 2,
        // delay: 5,
        // display: "block",
        x: "110%",
        y: "-100%",
        display: "none",
        rotation: -27,
        duration: 3,
        delay: 10,
        ease: Linear.easeInOut,
        force3D: true,
      });
      // tl.to(this.sliderTarget.children[i], {
      //   // opacity: 0.3,
      //   // duration: 2,
      //   // delay: 5,
      //   display: "none",
      // });
    }
    tl.play();
  }
}
