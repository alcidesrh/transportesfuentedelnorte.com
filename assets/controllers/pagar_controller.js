import { Controller } from "@hotwired/stimulus";
import IMask from "imask";
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

    this.mask();
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

  mask() {
    IMask(document.querySelector("#cliente_reservacion_pago_datos_numero"), {
      mask: "0000 0000 0000 000[0]",
    });

    IMask(
      document.querySelector(
        "#cliente_reservacion_pago_datos_codigo_seguridad"
      ),
      {
        mask: "000[0]",
      }
    );
  }

  onSubmit() {
    document.querySelector("#error_pago > *")?.remove();
  }
}
