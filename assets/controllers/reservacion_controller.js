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
  paso = null;
  connect() {
    const mensaje = document.getElementById("msg-pagando");
    if (mensaje) {
      mensaje.classList.add("hidden");
    }
    if (this.pasoValue) {
      this.blur();
      this.sliderStop(true);
    } else {
      this.blur(false);
      this.sliderStop(false);
    }

    this.paso = this.pasoValue;
  }

  sliderStop(stop) {
    this.dispatch("slider", { detail: { stop: stop } });
  }

  setPaso(event) {
    console.log(event.detail.paso);
    event.preventDefault();
    if (this.hasAlertTarget && event.detail.paso != 0 && this.alertTarget) {
      this.alertTarget.classList.add("hidden");
    }

    if (this.paso == event.detail.paso) {
      return;
    }
    const paso = event.detail.paso;
    this.paso = paso;
    this.blur(paso);
    this.sliderStop(paso);

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
        this.sliderStop(false);
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
      document.querySelector("main").classList.add("reservando");
    } else {
      document.querySelector("main").classList.remove("reservando");
    }
  }
}
