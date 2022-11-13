import { Controller } from "@hotwired/stimulus";
import * as Turbo from "@hotwired/turbo";
/*
 * The following line makes this controller "lazy": it won't be downloaded until needed
 * See https://github.com/symfony/stimulus-bridge#lazy-controllers
 */
export default class extends Controller {
  static targets = ["placeholder"];
  initialize() {
    this._onPreConnect = this._onPreConnect.bind(this);
    this._onConnect = this._onConnect.bind(this);
  }

  connect() {
    this.element.addEventListener("typed:pre-connect", this._onPreConnect);
    this.element.addEventListener("typed:connect", this._onConnect);
  }

  disconnect() {
    // You should always remove listeners when the controller is disconnected to avoid side-effects
    this.element.removeEventListener("typed:pre-connect", this._onConnect);
    this.element.removeEventListener("typed:connect", this._onPreConnect);
  }
  _onPreConnect(event) {
    event.detail.options.backDelay = 2000;
    event.detail.options.smartBackspace = true;
    event.detail.options.startDelay = 10;
    event.detail.options.backSpeed = 20;
    event.detail.options.showCursor = false;
    event.detail.options.onStop = (t) => {
      const type_placeholder = document.getElementById("typed-placeholder");
      if (type_placeholder) {
        type_placeholder.classList.remove("hidden");
      }
    };
  }

  _onConnect(event) {
    const event2 = new CustomEvent("typed-stop", {
      detail: { typed: event.detail.typed },
    });
    document.dispatchEvent(event2);
  }
}
