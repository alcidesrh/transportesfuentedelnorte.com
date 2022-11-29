import { Controller } from "@hotwired/stimulus";
/*
 * The following line makes this controller "lazy": it won't be downloaded until needed
 * See https://github.com/symfony/stimulus-bridge#lazy-controllers
 */
/* stimulusFetch: 'lazy' */
export default class extends Controller {
  static targets = ["precio", "municipio"];
  static values = {
    precio: Number,
    precioDolar: Number,
  };

  connect() {
    this.dispatch("reservacion_paso", { detail: { paso: 3 } });
    window.scrollTo({ top: 0, behavior: "smooth" });
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
