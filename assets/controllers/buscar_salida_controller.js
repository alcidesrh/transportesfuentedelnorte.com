import { Controller } from "@hotwired/stimulus";
import flatpickr from "flatpickr";
import "flatpickr/dist/l10n/es.js";
import { useDispatch } from "stimulus-use";
/*
 * The following line makes this controller 'lazy': it won't be downloaded until needed
 * See https://github.com/symfony/stimulus-bridge#lazy-controllers
 */
/* stimulusFetch: 'lazy' */
export default class extends Controller {
  static targets = [
    "buscar_salidas_submit",
    "lista",
    "salida_fecha",
    "hora",
    "bus_clase",
    "minutos",
    "salida_id",
    "primer_render",
  ];
  static values = {
    idioma: String,
    idaVuelta: String,
    primerRender: String,
    noScroll: String,
  };

  salida_calendario = null;
  salida_id = null;

  connect() {
    if (!this.primerRenderValue) {
      useDispatch(this);
      this.dispatch("reservacion_paso", { paso: 1 });
      if (!this.noScrollValue) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
    if (this.hasListaTarget) {
      const el = this.listaTarget.querySelector(".salida-selected");
      if (el) {
        this.salida_id = el.dataset.id;
      }
    }
  }
  abrirFechaSalida() {
    this.salida_calendario.open();
  }
  idiomaValueChanged() {
    this.salida_calendario = flatpickr(this.salida_fechaTarget, {
      locale: this.idiomaValue,
      dateFormat: this.idiomaValue == "es" ? "d/m/Y" : "Y-m-d",
    });

    if (!this.idaVueltaValue && this.salida_fechaTarget.value) {
      this.dispatch("min_fecha", {
        detail: { fecha: this.salida_fechaTarget.value },
      });
    }
  }

  buscarSalida() {
    this.buscar_salidas_submitTarget.click();
  }

  elegir(event) {
    const el = this.listaTarget.querySelector(".salida-selected");
    if (el) {
      el.classList.remove("salida-selected");
    }

    if (this.salida_id == event.currentTarget.dataset.id) {
      this.salida_id = null;
      this.salida_idTarget.value = null;
      this.buscar_salidas_submitTarget.click();
      return;
    }
    this.salida_id = event.currentTarget.dataset.id;

    this.listaTarget
      .querySelector("#_" + event.currentTarget.dataset.id)
      .classList.add("salida-selected");

    this.horaTarget.value = event.currentTarget.querySelector(
      `#_${this.salida_id}_horario`
    ).dataset.value;
    this.bus_claseTarget.value = event.currentTarget.querySelector(
      `#_${this.salida_id}_bus_clase`
    ).dataset.value;
    this.minutosTarget.value = event.currentTarget.querySelector(
      `#_${this.salida_id}_minutos`
    ).dataset.value;
    this.salida_idTarget.value = this.salida_id;

    this.buscar_salidas_submitTarget.click();
  }

  minFecha(event) {
    if (this.idaVueltaValue) {
      // alert(this.salida_fechaTarget.value);
      this.salida_calendario = flatpickr(this.salida_fechaTarget, {
        locale: this.idiomaValue,
        dateFormat: this.idiomaValue == "es" ? "d/m/Y" : "Y-m-d",
        minDate: event.detail.fecha,
      });
    }
  }
}
