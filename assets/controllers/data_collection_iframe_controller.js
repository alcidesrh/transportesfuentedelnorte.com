import { Controller } from "@hotwired/stimulus";

import { visit } from "@hotwired/turbo";

/*
 * The following line makes this controller "lazy": it won't be downloaded until needed
 * See https://github.com/symfony/stimulus-bridge#lazy-controllers
 */
export default class extends Controller {
  static targets = ["form"];
  static values = {
    payerAuthenticationCheckEnrollmentUrl: String,
    errorServerSentEventUrl: String,
  };
  connect() {
    this.formTarget.submit();
    const payerAuthenticationCheckEnrollmentUrl =
      this.payerAuthenticationCheckEnrollmentUrlValue;
    let complete = false;
    window.addEventListener(
      "message",
      function (event) {
        if (event.origin === "https://centinelapistag.cardinalcommerce.com") {
          if (!complete) {
            const form = document.createElement("form");
            form.action = payerAuthenticationCheckEnrollmentUrl;
            form.id = "payer_authentication_check_enrollment";
            const element = document.createElement("input");
            element.value = "complete";
            element.name = "iframe_collection";
            element.type = "hidden";
            form.appendChild(element);

            const form_viejo = document.getElementById(
              "payer_authentication_check_enrollment"
            );
            if (form_viejo) {
              form_viejo.remove();
            }

            document.getElementById("reservacion-form").appendChild(form);
            form.requestSubmit();
            complete = true;
          }
        }
      },
      false
    );
    const url = this.errorServerSentEventUrlValue;
    setTimeout(function () {
      if (!complete) {
        fetch(url + "/?iframe_collection_error=1").then(() => {
          const loading = document.getElementById("turbo-loading");
          if (loading) {
            document.getElementById("turbo-loading").classList.remove("!flex");
          }
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
      }
    }, 10000);
  }

  disconnect() {
    window.removeEventListener("message", () => {});
  }
}
