import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  tomSelect = null;
  primera_accion = true;
  initialize() {
    this._onPreConnect = this._onPreConnect.bind(this);
    this._onConnect = this._onConnect.bind(this);
  }

  connect() {
    this.element.addEventListener(
      "autocomplete:pre-connect",
      this._onPreConnect
    );
    this.element.addEventListener("autocomplete:connect", this._onConnect);
  }

  disconnect() {
    // You should always remove listeners when the controller is disconnected to avoid side-effects
    this.element.removeEventListener(
      "autocomplete:pre-connect",
      this._onConnect
    );
    this.element.removeEventListener(
      "autocomplete:connect",
      this._onPreConnect
    );
  }

  _onPreConnect(event) {
    // TomSelect has not been initialized - options can be changed

    event.detail.options.onChange = (value) => {
      if (value) {
        this.tomSelect.blur();
      }
    };
  }

  _onConnect(event) {
    event.detail.options.hideSelected = false;
    this.tomSelect = event.detail.tomSelect;
  }

  provincia(event = null) {
    this.ciudad();

    const frame = document.getElementById("provincia-frame");
    frame.src = frame.dataset.provinciasRuta + "/" + event.currentTarget.value;
  }

  ciudad(event = null) {
    const frame = document.getElementById("ciudad-frame");
    frame.src =
      frame.dataset.municipiosRuta +
      "/" +
      (event ? event.currentTarget.value : "?reset=1");
  }
}
