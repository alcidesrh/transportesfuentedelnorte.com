import { Controller } from "@hotwired/stimulus";

/*
 * The following line makes this controller "lazy": it won't be downloaded until needed
 * See https://github.com/symfony/stimulus-bridge#lazy-controllers
 */
/* stimulusFetch: 'lazy' */
export default class extends Controller {
  static targets = ["pdf_link"];
  connect() {
    this.dispatch("reserva", { detail: { paso: 4 } });

    window.scrollTo({ top: 0, behavior: "smooth" });

    this.pdf_linkTarget.click();
  }
}
