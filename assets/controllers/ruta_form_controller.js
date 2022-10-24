import { Controller } from "@hotwired/stimulus";
import { useDispatch } from "stimulus-use";
/*
 * The following line makes this controller "lazy": it won't be downloaded until needed
 * See https://github.com/symfony/stimulus-bridge#lazy-controllers
 */
/* stimulusFetch: 'lazy' */
export default class extends Controller {
  static values = {
    primerRender: String,
  };
  connect() {
    if (!this.primerRenderValue) {
      useDispatch(this);
      this.dispatch("reservacion_paso", { paso: 0 });
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
}