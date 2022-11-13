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
  flag = null;
  connect() {
    const mensaje = document.getElementById("msg-pagando");
    if (mensaje) {
      mensaje.classList.add("hidden");
    }
    if (this.pasoValue) {
      this.flag = 1;
      this.blur();
      this.sliderStop(true);
    }
  }

  sliderStop(stop) {
    window.onload = () => {
      this.dispatch("slider", { detail: { stop: stop } });
    };
  }

  setPaso(event) {
    event.preventDefault();

    const paso = event.detail.paso;

    if (this.hasAlertTarget && paso != 0 && this.alertTarget) {
      this.alertTarget.classList.add("hidden");
    }

    if (this.flag == 1 && paso == this.pasoValue) {
      this.flag = 2;
      return;
    }

    if (paso != 0) {
      this.blur();
      this.dispatch("slider", { detail: { stop: true } });
    } else {
      this.blur(false);
      this.dispatch("slider", { detail: { stop: false } });
    }
    if (
      this.pasosTarget.querySelector(".active") &&
      typeof this.pasosTarget.querySelector(".active") != "undefined"
    ) {
      this.pasosTarget.querySelector(".active").classList.remove("active");
    }
    if (paso > 0 && this.pasosTarget.children[paso - 1]) {
      this.pasosTarget.children[paso - 1].classList.add("complete");
      if (paso == 4) {
        this.blur(false);
        this.dispatch("slider", { detail: { stop: false } });
      }
    }
    if (
      typeof this.pasosTarget.children[paso] &&
      typeof this.pasosTarget.children[paso] != "undefined"
    ) {
      this.pasosTarget.children[paso].classList.remove("complete");
      this.pasosTarget.children[paso].classList.add("active");
    }
  }

  blur(add = true) {
    if (add) {
      const sections = document
        .querySelector("main")
        .classList.add("reservando");
    } else {
      const sections = document
        .querySelector("main")
        .classList.remove("reservando");
    }
  }
}
