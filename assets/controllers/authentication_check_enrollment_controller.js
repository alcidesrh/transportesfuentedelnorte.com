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
      console.log(event.data, JSON.parse(event.data));

      document.getElementById("reserva-wrap").classList.add("reserva");

      const loading = document.getElementById("turbo-loading");
      if (loading) {
        document.getElementById("turbo-loading").classList.add("!flex");
      }

      document.getElementById("authentication_check_enrollment").remove();

      fetch(this.authenticationValidationRouteValue, {
        method: "POST", // or 'PUT'
        body: event.data, // data can be `string` or {object}!
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .catch((error) => console.error("Error:", error))
        .then((response) => console.log("Success:", response));
    };
  }
}
