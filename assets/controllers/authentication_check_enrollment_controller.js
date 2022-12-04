import { Controller } from "@hotwired/stimulus";

/*
 * The following line makes this controller "lazy": it won't be downloaded until needed
 * See https://github.com/symfony/stimulus-bridge#lazy-controllers
 */

export default class extends Controller {
  static values = {
    challengeResponse: String,
    authenticationValidationRoute: String,
  };
  connect() {
    const stepUpForm = document.querySelector("#step-up-form");
    if (stepUpForm) {
      stepUpForm.submit();

      document.getElementById("reserva-wrap").classList.remove("reserva");

      const loading = document.getElementById("turbo-loading");
      if (loading) {
        document.getElementById("turbo-loading").classList.remove("!flex");
      }

      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    const eventSource = new EventSource(this.challengeResponseValue);

    eventSource.onmessage = (event) => {
      document.getElementById("reserva-wrap").classList.add("reserva");

      const loading = document.getElementById("turbo-loading");
      if (loading) {
        document.getElementById("turbo-loading").classList.add("!flex");
      }
      document.querySelector("#authentication_check_enrollment>*")?.remove();

      const form = document.createElement("form");
      form.action = this.authenticationValidationRouteValue;
      form.method = "POST";
      form.id = "payer-authentication-validation-form";

      const response = JSON.parse(event.data);
      for (var key in response) {
        const element = document.createElement("input");
        element.value = response[key];
        element.name = key;
        element.type = "hidden";
        form.append(element);
      }
      const form_viejo = document.getElementById(
        "payer-authentication-validation-form"
      );
      if (form_viejo) {
        form_viejo.remove();
      }

      document.getElementById("reservacion-form").appendChild(form);
      form.requestSubmit();
    };
  }
}
