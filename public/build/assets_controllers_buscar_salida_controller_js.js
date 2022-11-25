"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["assets_controllers_buscar_salida_controller_js"],{

/***/ "./assets/controllers/buscar_salida_controller.js":
/*!********************************************************!*\
  !*** ./assets/controllers/buscar_salida_controller.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
/* harmony import */ var flatpickr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! flatpickr */ "./node_modules/flatpickr/dist/esm/index.js");
/* harmony import */ var flatpickr_dist_l10n_es_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! flatpickr/dist/l10n/es.js */ "./node_modules/flatpickr/dist/l10n/es.js");
/* harmony import */ var flatpickr_dist_l10n_es_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_l10n_es_js__WEBPACK_IMPORTED_MODULE_16__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/*
 * The following line makes this controller 'lazy': it won't be downloaded until needed
 * See https://github.com/symfony/stimulus-bridge#lazy-controllers
 */

/* stimulusFetch: 'lazy' */

var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    var _this;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "salida_calendario", null);

    _defineProperty(_assertThisInitialized(_this), "salida_id", null);

    return _this;
  }

  _createClass(_default, [{
    key: "initialize",
    value: function initialize() {
      if (this.hasListaTarget) {
        var el = this.listaTarget.querySelector(".salida-selected");

        if (el) {
          this.salida_id = el.dataset.id;
        }
      }

      if (!(this.formSubmittedValue == 1)) {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
        this.dispatch("reservacion_paso", {
          detail: {
            paso: 1
          }
        });
      }
    }
  }, {
    key: "connect",
    value: function connect() {}
  }, {
    key: "abrirFechaSalida",
    value: function abrirFechaSalida() {
      this.salida_calendario.open();
    }
  }, {
    key: "idiomaValueChanged",
    value: function idiomaValueChanged() {
      this.salida_calendario = (0,flatpickr__WEBPACK_IMPORTED_MODULE_15__["default"])(this.salida_fechaTarget, {
        locale: this.idiomaValue,
        dateFormat: this.idiomaValue == "es" ? "d/m/Y" : "Y-m-d",
        disableMobile: "true" // minDate: "today",

      });

      if (this.hasIs_ida_vueltaTarget && this.salida_fechaTarget.value) {
        this.dispatch("min-fecha", {
          detail: {
            fecha: this.salida_fechaTarget.value
          }
        });
      }
    }
  }, {
    key: "buscarSalida",
    value: function buscarSalida() {
      this.buscar_salidas_submitTarget.click();
    }
  }, {
    key: "elegir",
    value: function elegir(event) {
      var el = this.listaTarget.querySelector(".salida-selected");

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
      this.listaTarget.querySelector("#_" + event.currentTarget.dataset.id).classList.add("salida-selected");
      this.horaTarget.value = event.currentTarget.querySelector("#_".concat(this.salida_id, "_horario")).dataset.value;
      this.bus_claseTarget.value = event.currentTarget.querySelector("#_".concat(this.salida_id, "_bus_clase")).dataset.value;
      this.minutosTarget.value = event.currentTarget.querySelector("#_".concat(this.salida_id, "_minutos")).dataset.value;
      this.salida_idTarget.value = this.salida_id;
      this.buscar_salidas_submitTarget.click();
    }
  }, {
    key: "minFecha",
    value: function minFecha(event) {
      this.salida_calendario = (0,flatpickr__WEBPACK_IMPORTED_MODULE_15__["default"])(this.salida_fechaTarget, {
        locale: this.idiomaValue,
        dateFormat: this.idiomaValue == "es" ? "d/m/Y" : "Y-m-d",
        minDate: event.detail.fecha,
        disableMobile: "true"
      });
    }
  }]);

  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_14__.Controller);

_defineProperty(_default, "targets", ["buscar_salidas_submit", "lista", "salida_fecha", "hora", "bus_clase", "minutos", "salida_id", "is_ida_vuelta"]);

_defineProperty(_default, "values", {
  idioma: String,
  idaVuelta: String,
  formSubmitted: String
});



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzX2NvbnRyb2xsZXJzX2J1c2Nhcl9zYWxpZGFfY29udHJvbGxlcl9qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dFQWtCc0I7O2dFQUNSOzs7Ozs7O1dBRVosc0JBQWE7TUFDWCxJQUFJLEtBQUtFLGNBQVQsRUFBeUI7UUFDdkIsSUFBTUMsRUFBRSxHQUFHLEtBQUtDLFdBQUwsQ0FBaUJDLGFBQWpCLENBQStCLGtCQUEvQixDQUFYOztRQUNBLElBQUlGLEVBQUosRUFBUTtVQUNOLEtBQUtHLFNBQUwsR0FBaUJILEVBQUUsQ0FBQ0ksT0FBSCxDQUFXQyxFQUE1QjtRQUNEO01BQ0Y7O01BRUQsSUFBSSxFQUFFLEtBQUtDLGtCQUFMLElBQTJCLENBQTdCLENBQUosRUFBcUM7UUFDbkNDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQjtVQUFFQyxHQUFHLEVBQUUsQ0FBUDtVQUFVQyxRQUFRLEVBQUU7UUFBcEIsQ0FBaEI7UUFDQSxLQUFLQyxRQUFMLENBQWMsa0JBQWQsRUFBa0M7VUFBRUMsTUFBTSxFQUFFO1lBQUVDLElBQUksRUFBRTtVQUFSO1FBQVYsQ0FBbEM7TUFDRDtJQUNGOzs7V0FDRCxtQkFBVSxDQUFFOzs7V0FDWiw0QkFBbUI7TUFDakIsS0FBS0MsaUJBQUwsQ0FBdUJDLElBQXZCO0lBQ0Q7OztXQUNELDhCQUFxQjtNQUNuQixLQUFLRCxpQkFBTCxHQUF5QmhCLHNEQUFTLENBQUMsS0FBS2tCLGtCQUFOLEVBQTBCO1FBQzFEQyxNQUFNLEVBQUUsS0FBS0MsV0FENkM7UUFFMURDLFVBQVUsRUFBRSxLQUFLRCxXQUFMLElBQW9CLElBQXBCLEdBQTJCLE9BQTNCLEdBQXFDLE9BRlM7UUFHMURFLGFBQWEsRUFBRSxNQUgyQyxDQUkxRDs7TUFKMEQsQ0FBMUIsQ0FBbEM7O01BTUEsSUFBSSxLQUFLQyxzQkFBTCxJQUErQixLQUFLTCxrQkFBTCxDQUF3Qk0sS0FBM0QsRUFBa0U7UUFDaEUsS0FBS1gsUUFBTCxDQUFjLFdBQWQsRUFBMkI7VUFDekJDLE1BQU0sRUFBRTtZQUFFVyxLQUFLLEVBQUUsS0FBS1Asa0JBQUwsQ0FBd0JNO1VBQWpDO1FBRGlCLENBQTNCO01BR0Q7SUFDRjs7O1dBRUQsd0JBQWU7TUFDYixLQUFLRSwyQkFBTCxDQUFpQ0MsS0FBakM7SUFDRDs7O1dBRUQsZ0JBQU9DLEtBQVAsRUFBYztNQUNaLElBQU0xQixFQUFFLEdBQUcsS0FBS0MsV0FBTCxDQUFpQkMsYUFBakIsQ0FBK0Isa0JBQS9CLENBQVg7O01BQ0EsSUFBSUYsRUFBSixFQUFRO1FBQ05BLEVBQUUsQ0FBQzJCLFNBQUgsQ0FBYUMsTUFBYixDQUFvQixpQkFBcEI7TUFDRDs7TUFFRCxJQUFJLEtBQUt6QixTQUFMLElBQWtCdUIsS0FBSyxDQUFDRyxhQUFOLENBQW9CekIsT0FBcEIsQ0FBNEJDLEVBQWxELEVBQXNEO1FBQ3BELEtBQUtGLFNBQUwsR0FBaUIsSUFBakI7UUFDQSxLQUFLMkIsZUFBTCxDQUFxQlIsS0FBckIsR0FBNkIsSUFBN0I7UUFDQSxLQUFLRSwyQkFBTCxDQUFpQ0MsS0FBakM7UUFDQTtNQUNEOztNQUNELEtBQUt0QixTQUFMLEdBQWlCdUIsS0FBSyxDQUFDRyxhQUFOLENBQW9CekIsT0FBcEIsQ0FBNEJDLEVBQTdDO01BQ0EsS0FBS0osV0FBTCxDQUNHQyxhQURILENBQ2lCLE9BQU93QixLQUFLLENBQUNHLGFBQU4sQ0FBb0J6QixPQUFwQixDQUE0QkMsRUFEcEQsRUFFR3NCLFNBRkgsQ0FFYUksR0FGYixDQUVpQixpQkFGakI7TUFJQSxLQUFLQyxVQUFMLENBQWdCVixLQUFoQixHQUF3QkksS0FBSyxDQUFDRyxhQUFOLENBQW9CM0IsYUFBcEIsYUFDakIsS0FBS0MsU0FEWSxlQUV0QkMsT0FGc0IsQ0FFZGtCLEtBRlY7TUFHQSxLQUFLVyxlQUFMLENBQXFCWCxLQUFyQixHQUE2QkksS0FBSyxDQUFDRyxhQUFOLENBQW9CM0IsYUFBcEIsYUFDdEIsS0FBS0MsU0FEaUIsaUJBRTNCQyxPQUYyQixDQUVuQmtCLEtBRlY7TUFHQSxLQUFLWSxhQUFMLENBQW1CWixLQUFuQixHQUEyQkksS0FBSyxDQUFDRyxhQUFOLENBQW9CM0IsYUFBcEIsYUFDcEIsS0FBS0MsU0FEZSxlQUV6QkMsT0FGeUIsQ0FFakJrQixLQUZWO01BR0EsS0FBS1EsZUFBTCxDQUFxQlIsS0FBckIsR0FBNkIsS0FBS25CLFNBQWxDO01BRUEsS0FBS3FCLDJCQUFMLENBQWlDQyxLQUFqQztJQUNEOzs7V0FFRCxrQkFBU0MsS0FBVCxFQUFnQjtNQUNkLEtBQUtaLGlCQUFMLEdBQXlCaEIsc0RBQVMsQ0FBQyxLQUFLa0Isa0JBQU4sRUFBMEI7UUFDMURDLE1BQU0sRUFBRSxLQUFLQyxXQUQ2QztRQUUxREMsVUFBVSxFQUFFLEtBQUtELFdBQUwsSUFBb0IsSUFBcEIsR0FBMkIsT0FBM0IsR0FBcUMsT0FGUztRQUcxRGlCLE9BQU8sRUFBRVQsS0FBSyxDQUFDZCxNQUFOLENBQWFXLEtBSG9DO1FBSTFESCxhQUFhLEVBQUU7TUFKMkMsQ0FBMUIsQ0FBbEM7SUFNRDs7OztFQTdGMEJ2Qjs7cUNBQ1YsQ0FDZix1QkFEZSxFQUVmLE9BRmUsRUFHZixjQUhlLEVBSWYsTUFKZSxFQUtmLFdBTGUsRUFNZixTQU5lLEVBT2YsV0FQZSxFQVFmLGVBUmU7O29DQVVEO0VBQ2R1QyxNQUFNLEVBQUVDLE1BRE07RUFFZEMsU0FBUyxFQUFFRCxNQUZHO0VBR2RFLGFBQWEsRUFBRUY7QUFIRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9idXNjYXJfc2FsaWRhX2NvbnRyb2xsZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gXCJAaG90d2lyZWQvc3RpbXVsdXNcIjtcbmltcG9ydCBmbGF0cGlja3IgZnJvbSBcImZsYXRwaWNrclwiO1xuaW1wb3J0IFwiZmxhdHBpY2tyL2Rpc3QvbDEwbi9lcy5qc1wiO1xuLypcbiAqIFRoZSBmb2xsb3dpbmcgbGluZSBtYWtlcyB0aGlzIGNvbnRyb2xsZXIgJ2xhenknOiBpdCB3b24ndCBiZSBkb3dubG9hZGVkIHVudGlsIG5lZWRlZFxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9zeW1mb255L3N0aW11bHVzLWJyaWRnZSNsYXp5LWNvbnRyb2xsZXJzXG4gKi9cbi8qIHN0aW11bHVzRmV0Y2g6ICdsYXp5JyAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgc3RhdGljIHRhcmdldHMgPSBbXG4gICAgXCJidXNjYXJfc2FsaWRhc19zdWJtaXRcIixcbiAgICBcImxpc3RhXCIsXG4gICAgXCJzYWxpZGFfZmVjaGFcIixcbiAgICBcImhvcmFcIixcbiAgICBcImJ1c19jbGFzZVwiLFxuICAgIFwibWludXRvc1wiLFxuICAgIFwic2FsaWRhX2lkXCIsXG4gICAgXCJpc19pZGFfdnVlbHRhXCIsXG4gIF07XG4gIHN0YXRpYyB2YWx1ZXMgPSB7XG4gICAgaWRpb21hOiBTdHJpbmcsXG4gICAgaWRhVnVlbHRhOiBTdHJpbmcsXG4gICAgZm9ybVN1Ym1pdHRlZDogU3RyaW5nLFxuICB9O1xuXG4gIHNhbGlkYV9jYWxlbmRhcmlvID0gbnVsbDtcbiAgc2FsaWRhX2lkID0gbnVsbDtcblxuICBpbml0aWFsaXplKCkge1xuICAgIGlmICh0aGlzLmhhc0xpc3RhVGFyZ2V0KSB7XG4gICAgICBjb25zdCBlbCA9IHRoaXMubGlzdGFUYXJnZXQucXVlcnlTZWxlY3RvcihcIi5zYWxpZGEtc2VsZWN0ZWRcIik7XG4gICAgICBpZiAoZWwpIHtcbiAgICAgICAgdGhpcy5zYWxpZGFfaWQgPSBlbC5kYXRhc2V0LmlkO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghKHRoaXMuZm9ybVN1Ym1pdHRlZFZhbHVlID09IDEpKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oeyB0b3A6IDAsIGJlaGF2aW9yOiBcInNtb290aFwiIH0pO1xuICAgICAgdGhpcy5kaXNwYXRjaChcInJlc2VydmFjaW9uX3Bhc29cIiwgeyBkZXRhaWw6IHsgcGFzbzogMSB9IH0pO1xuICAgIH1cbiAgfVxuICBjb25uZWN0KCkge31cbiAgYWJyaXJGZWNoYVNhbGlkYSgpIHtcbiAgICB0aGlzLnNhbGlkYV9jYWxlbmRhcmlvLm9wZW4oKTtcbiAgfVxuICBpZGlvbWFWYWx1ZUNoYW5nZWQoKSB7XG4gICAgdGhpcy5zYWxpZGFfY2FsZW5kYXJpbyA9IGZsYXRwaWNrcih0aGlzLnNhbGlkYV9mZWNoYVRhcmdldCwge1xuICAgICAgbG9jYWxlOiB0aGlzLmlkaW9tYVZhbHVlLFxuICAgICAgZGF0ZUZvcm1hdDogdGhpcy5pZGlvbWFWYWx1ZSA9PSBcImVzXCIgPyBcImQvbS9ZXCIgOiBcIlktbS1kXCIsXG4gICAgICBkaXNhYmxlTW9iaWxlOiBcInRydWVcIixcbiAgICAgIC8vIG1pbkRhdGU6IFwidG9kYXlcIixcbiAgICB9KTtcbiAgICBpZiAodGhpcy5oYXNJc19pZGFfdnVlbHRhVGFyZ2V0ICYmIHRoaXMuc2FsaWRhX2ZlY2hhVGFyZ2V0LnZhbHVlKSB7XG4gICAgICB0aGlzLmRpc3BhdGNoKFwibWluLWZlY2hhXCIsIHtcbiAgICAgICAgZGV0YWlsOiB7IGZlY2hhOiB0aGlzLnNhbGlkYV9mZWNoYVRhcmdldC52YWx1ZSB9LFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgYnVzY2FyU2FsaWRhKCkge1xuICAgIHRoaXMuYnVzY2FyX3NhbGlkYXNfc3VibWl0VGFyZ2V0LmNsaWNrKCk7XG4gIH1cblxuICBlbGVnaXIoZXZlbnQpIHtcbiAgICBjb25zdCBlbCA9IHRoaXMubGlzdGFUYXJnZXQucXVlcnlTZWxlY3RvcihcIi5zYWxpZGEtc2VsZWN0ZWRcIik7XG4gICAgaWYgKGVsKSB7XG4gICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKFwic2FsaWRhLXNlbGVjdGVkXCIpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNhbGlkYV9pZCA9PSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWQpIHtcbiAgICAgIHRoaXMuc2FsaWRhX2lkID0gbnVsbDtcbiAgICAgIHRoaXMuc2FsaWRhX2lkVGFyZ2V0LnZhbHVlID0gbnVsbDtcbiAgICAgIHRoaXMuYnVzY2FyX3NhbGlkYXNfc3VibWl0VGFyZ2V0LmNsaWNrKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2FsaWRhX2lkID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkO1xuICAgIHRoaXMubGlzdGFUYXJnZXRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI19cIiArIGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZClcbiAgICAgIC5jbGFzc0xpc3QuYWRkKFwic2FsaWRhLXNlbGVjdGVkXCIpO1xuXG4gICAgdGhpcy5ob3JhVGFyZ2V0LnZhbHVlID0gZXZlbnQuY3VycmVudFRhcmdldC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYCNfJHt0aGlzLnNhbGlkYV9pZH1faG9yYXJpb2BcbiAgICApLmRhdGFzZXQudmFsdWU7XG4gICAgdGhpcy5idXNfY2xhc2VUYXJnZXQudmFsdWUgPSBldmVudC5jdXJyZW50VGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgI18ke3RoaXMuc2FsaWRhX2lkfV9idXNfY2xhc2VgXG4gICAgKS5kYXRhc2V0LnZhbHVlO1xuICAgIHRoaXMubWludXRvc1RhcmdldC52YWx1ZSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQucXVlcnlTZWxlY3RvcihcbiAgICAgIGAjXyR7dGhpcy5zYWxpZGFfaWR9X21pbnV0b3NgXG4gICAgKS5kYXRhc2V0LnZhbHVlO1xuICAgIHRoaXMuc2FsaWRhX2lkVGFyZ2V0LnZhbHVlID0gdGhpcy5zYWxpZGFfaWQ7XG5cbiAgICB0aGlzLmJ1c2Nhcl9zYWxpZGFzX3N1Ym1pdFRhcmdldC5jbGljaygpO1xuICB9XG5cbiAgbWluRmVjaGEoZXZlbnQpIHtcbiAgICB0aGlzLnNhbGlkYV9jYWxlbmRhcmlvID0gZmxhdHBpY2tyKHRoaXMuc2FsaWRhX2ZlY2hhVGFyZ2V0LCB7XG4gICAgICBsb2NhbGU6IHRoaXMuaWRpb21hVmFsdWUsXG4gICAgICBkYXRlRm9ybWF0OiB0aGlzLmlkaW9tYVZhbHVlID09IFwiZXNcIiA/IFwiZC9tL1lcIiA6IFwiWS1tLWRcIixcbiAgICAgIG1pbkRhdGU6IGV2ZW50LmRldGFpbC5mZWNoYSxcbiAgICAgIGRpc2FibGVNb2JpbGU6IFwidHJ1ZVwiLFxuICAgIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQ29udHJvbGxlciIsImZsYXRwaWNrciIsImhhc0xpc3RhVGFyZ2V0IiwiZWwiLCJsaXN0YVRhcmdldCIsInF1ZXJ5U2VsZWN0b3IiLCJzYWxpZGFfaWQiLCJkYXRhc2V0IiwiaWQiLCJmb3JtU3VibWl0dGVkVmFsdWUiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInRvcCIsImJlaGF2aW9yIiwiZGlzcGF0Y2giLCJkZXRhaWwiLCJwYXNvIiwic2FsaWRhX2NhbGVuZGFyaW8iLCJvcGVuIiwic2FsaWRhX2ZlY2hhVGFyZ2V0IiwibG9jYWxlIiwiaWRpb21hVmFsdWUiLCJkYXRlRm9ybWF0IiwiZGlzYWJsZU1vYmlsZSIsImhhc0lzX2lkYV92dWVsdGFUYXJnZXQiLCJ2YWx1ZSIsImZlY2hhIiwiYnVzY2FyX3NhbGlkYXNfc3VibWl0VGFyZ2V0IiwiY2xpY2siLCJldmVudCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImN1cnJlbnRUYXJnZXQiLCJzYWxpZGFfaWRUYXJnZXQiLCJhZGQiLCJob3JhVGFyZ2V0IiwiYnVzX2NsYXNlVGFyZ2V0IiwibWludXRvc1RhcmdldCIsIm1pbkRhdGUiLCJpZGlvbWEiLCJTdHJpbmciLCJpZGFWdWVsdGEiLCJmb3JtU3VibWl0dGVkIl0sInNvdXJjZVJvb3QiOiIifQ==