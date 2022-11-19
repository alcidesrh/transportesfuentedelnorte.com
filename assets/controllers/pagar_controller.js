import { Controller } from "@hotwired/stimulus";
/*
 * The following line makes this controller "lazy": it won't be downloaded until needed
 * See https://github.com/symfony/stimulus-bridge#lazy-controllers
 */
/* stimulusFetch: 'lazy' */
export default class extends Controller {
  static targets = ["precio"];
  static values = {
    precio: Number,
    precioDolar: Number,
  };

  connect() {
    this.dispatch("reservacion_paso", { detail: { paso: 3 } });
    window.scrollTo({ top: 0, behavior: "smooth" });

    const mensaje = document.getElementById("msg-pagando");
    if (mensaje) {
      mensaje.classList.add("hidden");
    }

    const headers = new Headers();
    headers.append(
      "X-CSCAPI-KEY",
      "bUlhOE80NXJOeEJNMkppZ0FZY240a3oyRkgyQUMwamVyd1hJWmZhWg=="
    );

    const requestOptions = {
      method: "GET",
      headers: headers,
      redirect: "follow",
    };
    alert("sdsd");
    fetch("https://api.countrystatecity.in/v1/countries", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result, 1111))
      .catch((error) => console.log("error", error));
  }
  moneda(event) {
    this.precioTarget.value = event.currentTarget.dataset.precio;
  }
  mensaje() {
    const mensaje = document.getElementById("msg-pagando");
    if (mensaje) {
      mensaje.classList.remove("hidden");
    }
  }
}
