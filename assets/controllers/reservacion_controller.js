import { Controller } from "@hotwired/stimulus";

/*
 * The following line makes this controller "lazy": it won't be downloaded until needed
 * See https://github.com/symfony/stimulus-bridge#lazy-controllers
 */
/* stimulusFetch: 'lazy' */
export default class extends Controller {
  static targets = ["pasos"];
  static values = {
    tesv: String,
  };
  setPaso(event) {
    this.pasosTarget.children[event.detail.paso - 1].classList.remove("active");
    this.pasosTarget.children[event.detail.paso - 1].classList.add("complete");
    this.pasosTarget.children[event.detail.paso].classList.add("active");
  }
  connect() {}
}
