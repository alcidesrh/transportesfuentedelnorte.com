import { Controller } from "@hotwired/stimulus";
/*
 * The following line makes this controller "lazy": it won't be downloaded until needed
 * See https://github.com/symfony/stimulus-bridge#lazy-controllers
 */
/* stimulusFetch: 'lazy' */
export default class extends Controller {
  static targets = ["pasos", "alert"];
  static values = {
    paso: Number,
  };

  connect() {
    console.log(1);
    if (this.pasoValue != 0) {
      this.blur();
      this.dispatch("slider", { detail: { stop: true } });
    }
  }

  setPaso({ detail: { paso } }) {
    if (this.hasAlertTarget && paso != 0) {
      this.alertTarget.classList.add("hidden");
    }
    if (paso != 0) {
      this.blur();
      this.dispatch("slider", { detail: { stop: true } });
    } else {
      this.blur(false);
      this.dispatch("slider", { detail: { stop: false } });
    }
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

  blur(add = true) {
    const sections = document.getElementsByTagName("section");

    Array.prototype.filter.call(sections, (section) =>
      add
        ? section.classList.add("section-blur")
        : section.classList.remove("section-blur")
    );
  }
}
