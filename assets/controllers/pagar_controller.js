import { Controller } from "@hotwired/stimulus";
import { useDispatch } from "stimulus-use";
/*
 * The following line makes this controller "lazy": it won't be downloaded until needed
 * See https://github.com/symfony/stimulus-bridge#lazy-controllers
 */
/* stimulusFetch: 'lazy' */
export default class extends Controller {
  static targets = ["precio"];
  static values = {
    precio: Number,
    precioDolar: Number,
  };

  connect() {
    if (!this.primerRenderValue) {
      useDispatch(this);
      this.dispatch("reservacion_paso", { paso: 3 });
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    const mensaje = document.getElementById("msg-pagando");
    if (mensaje) {
      mensaje.classList.add("hidden");
    }
  }
  moneda(event) {
    this.precioTarget.value = event.currentTarget.dataset.precio;
  }
  mensaje() {
    const mensaje = document.getElementById("msg-pagando");
    if (mensaje) {
      mensaje.classList.remove("hidden");
    }
  }
}
