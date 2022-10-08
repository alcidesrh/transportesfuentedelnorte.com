import { Controller } from "@hotwired/stimulus";

/*
 * The following line makes this controller "lazy": it won't be downloaded until needed
 * See https://github.com/symfony/stimulus-bridge#lazy-controllers
 */
/* stimulusFetch: 'lazy' */
export default class extends Controller {
  static targets = ["pasos"];

  setPaso({ detail: { paso } }) {
    if (typeof this.pasosTarget.querySelector(".active") != "undefined") {
      this.pasosTarget.querySelector(".active").classList.remove("active");
    }
    if (paso > 0) {
      this.pasosTarget.children[paso - 1].classList.add("complete");
    }
    if (typeof this.pasosTarget.children[paso] != "undefined") {
      this.pasosTarget.children[paso].classList.remove("complete");
      this.pasosTarget.children[paso].classList.add("active");
    }
  }
}
