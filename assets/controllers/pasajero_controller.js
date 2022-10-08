import { Controller } from "@hotwired/stimulus";
import MicroModal from "micromodal";

/*
 * The following line makes this controller "lazy": it won't be downloaded until needed
 * See https://github.com/symfony/stimulus-bridge#lazy-controllers
 */
/* stimulusFetch: 'lazy' */
export default class extends Controller {
  static targets = ["asientos_salida", "asientos_regreso"];
  static values = {
    primerRender: String,
  };
  asientos_salida = [];
  asientos_regreso = [];
  connect() {
    if (!this.primerRenderValue) {
      this.dispatch("reservacion_paso", { detail: { paso: 2 } });
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  agregar_cliente({ detail: { asiento, regreso, eliminar } }) {
    if (regreso) {
      if (eliminar) {
        this.asientos_regreso.splice(this.asientos_regreso.indexOf(asiento), 1);
      } else {
        this.asientos_regreso.push(asiento);
      }
      this.asientos_regresoTarget.value = JSON.stringify(this.asientos_regreso);
    } else {
      if (eliminar) {
        this.asientos_salida.splice(this.asientos_salida.indexOf(asiento), 1);
      } else {
        this.asientos_salida.push(asiento);
      }
      this.asientos_salidaTarget.value = JSON.stringify(this.asientos_salida);
    }
  }
}
