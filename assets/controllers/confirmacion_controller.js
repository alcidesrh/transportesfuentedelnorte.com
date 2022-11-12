import { Controller } from "@hotwired/stimulus";
/*
 * The following line makes this controller "lazy": it won't be downloaded until needed
 * See https://github.com/symfony/stimulus-bridge#lazy-controllers
 */
/* stimulusFetch: 'lazy' */
export default class extends Controller {
  static targets = ["pdf_link"];
  connect() {
    window.scrollTo(0, 0);

    const mensaje = document.getElementById("msg-pagando");
    if (mensaje) {
      mensaje.classList.add("hidden");
    }

    this.dispatch("reserva", { detail: { paso: 4 } });

    if (this.hasPdf_linkTarget) {
      this.pdf_linkTarget.click();
    }
  }
}
