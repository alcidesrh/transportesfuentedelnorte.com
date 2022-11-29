import { Controller } from "@hotwired/stimulus";

import { visit } from "@hotwired/turbo";

/*
 * The following line makes this controller "lazy": it won't be downloaded until needed
 * See https://github.com/symfony/stimulus-bridge#lazy-controllers
 */
export default class extends Controller {
  static targets = ["form"];
  static values = {
    procesarPagoUrl: String,
  };
  connect() {
    this.formTarget.submit();
    const procesarPagoUrlValue = this.procesarPagoUrlValue;
    window.addEventListener(
      "message",
      function (event) {
        if (event.origin === "https://centinelapistag.cardinalcommerce.com") {
          fetch(procesarPagoUrlValue);
        }
      },
      false
    );
  }

  disconnect() {
    window.removeEventListener("message", () => {});
  }
}
