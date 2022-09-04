import { Controller } from "@hotwired/stimulus";
import flatpickr from "flatpickr";
/*
 * The following line makes this controller "lazy": it won't be downloaded until needed
 * See https://github.com/symfony/stimulus-bridge#lazy-controllers
 */
/* stimulusFetch: 'lazy' */
export default class extends Controller {
  static targets = ["fechaSalida"];
  static values = {
    fecha: String,
  };
  connect() {
    const picker = flatpickr(this.fechaSalidaTarget, {});
    picker.open();
  }
}
