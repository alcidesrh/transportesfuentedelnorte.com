import { Controller } from "@hotwired/stimulus";
/*
 * The following line makes this controller "lazy": it won't be downloaded until needed
 * See https://github.com/symfony/stimulus-bridge#lazy-controllers
 */
/* stimulusFetch: 'lazy' */
export default class extends Controller {
  static targets = ["pdf_link"];

  static values = {
    descargar: Boolean,
  };

  connect() {
    window.scrollTo(0, 0);
    if (this.descargarValue) {
      this.dispatch("reserva", { detail: { paso: 4 } });

      if (this.hasPdf_linkTarget) {
        this.pdf_linkTarget.click();
      }
    }
  }
}
