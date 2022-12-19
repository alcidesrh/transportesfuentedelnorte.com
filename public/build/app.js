(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./asiento_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/asiento_controller.js",
	"./authentication_check_enrollment_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/authentication_check_enrollment_controller.js",
	"./autocomplete_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/autocomplete_controller.js",
	"./buscar_salida_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/buscar_salida_controller.js",
	"./confirmacion_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/confirmacion_controller.js",
	"./data_collection_iframe_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/data_collection_iframe_controller.js",
	"./pagar_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/pagar_controller.js",
	"./reservacion_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/reservacion_controller.js",
	"./ruta_form_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/ruta_form_controller.js",
	"./slider_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/slider_controller.js",
	"./typed_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/typed_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tom_select_dist_css_tom_select_default_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tom-select/dist/css/tom-select.default.css */ "./node_modules/tom-select/dist/css/tom-select.default.css");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  'symfony--ux-autocomplete--autocomplete': Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! @symfony/ux-autocomplete/dist/controller.js */ "./node_modules/@symfony/ux-autocomplete/dist/controller.js")),
  'symfony--ux-turbo--turbo-core': Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! @symfony/ux-turbo/dist/turbo_controller.js */ "./node_modules/@symfony/ux-turbo/dist/turbo_controller.js")),
  'symfony--ux-turbo-mercure--turbo-stream': Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! @symfony/ux-turbo-mercure/dist/turbo_stream_controller.js */ "./node_modules/@symfony/ux-turbo-mercure/dist/turbo_stream_controller.js")),
  'symfony--ux-typed': Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! @symfony/ux-typed/dist/controller.js */ "./node_modules/@symfony/ux-typed/dist/controller.js")),
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/asiento_controller.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/asiento_controller.js ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ controller)
/* harmony export */ });
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");

const controller = (function() {
    return class LazyController extends _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__.Controller {
        constructor(context) {
            super(context);
            this.__stimulusLazyController = true;
        }
        initialize() {
            if (this.application.controllers.find((controller) => {
                return controller.identifier === this.identifier && controller.__stimulusLazyController;
            })) {
                return;
            }
            __webpack_require__.e(/*! import() */ "assets_controllers_asiento_controller_js").then(__webpack_require__.bind(__webpack_require__, /*! ./assets/controllers/asiento_controller.js */ "./assets/controllers/asiento_controller.js")).then((controller) => {
                this.application.register(this.identifier, controller.default);
            });
        }
    }
})();


/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/authentication_check_enrollment_controller.js":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/authentication_check_enrollment_controller.js ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
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
 * The following line makes this controller "lazy": it won't be downloaded until needed
 * See https://github.com/symfony/stimulus-bridge#lazy-controllers
 */

var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      var _this = this;

      var stepUpForm = document.querySelector("#step-up-form");

      if (stepUpForm) {
        stepUpForm.submit();
        document.getElementById("reserva-wrap").classList.remove("reserva");
        var loading = document.getElementById("turbo-loading");

        if (loading) {
          document.getElementById("turbo-loading").classList.remove("!flex");
        }

        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }

      var eventSource = new EventSource(this.challengeResponseValue);

      eventSource.onmessage = function (event) {
        var _document$querySelect;

        document.getElementById("reserva-wrap").classList.add("reserva");
        var loading = document.getElementById("turbo-loading");

        if (loading) {
          document.getElementById("turbo-loading").classList.add("!flex");
        }

        (_document$querySelect = document.querySelector("#authentication_check_enrollment>*")) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.remove();
        var form = document.createElement("form");
        form.action = _this.authenticationValidationRouteValue;
        form.method = "POST";
        form.id = "payer-authentication-validation-form";
        var response = JSON.parse(event.data);

        for (var key in response) {
          var element = document.createElement("input");
          element.value = response[key];
          element.name = key;
          element.type = "hidden";
          form.append(element);
        }

        var form_viejo = document.getElementById("payer-authentication-validation-form");

        if (form_viejo) {
          form_viejo.remove();
        }

        document.getElementById("reservacion-form").appendChild(form);
        form.requestSubmit();
      };
    }
  }]);

  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_14__.Controller);

_defineProperty(_default, "values", {
  challengeResponse: String,
  authenticationValidationRoute: String
});



/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/autocomplete_controller.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/autocomplete_controller.js ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__);
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

    _defineProperty(_assertThisInitialized(_this), "tomSelect", null);

    _defineProperty(_assertThisInitialized(_this), "primera_accion", true);

    return _this;
  }

  _createClass(_default, [{
    key: "initialize",
    value: function initialize() {
      this._onPreConnect = this._onPreConnect.bind(this);
      this._onConnect = this._onConnect.bind(this);
    }
  }, {
    key: "connect",
    value: function connect() {
      this.element.addEventListener("autocomplete:pre-connect", this._onPreConnect);
      this.element.addEventListener("autocomplete:connect", this._onConnect);
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      // You should always remove listeners when the controller is disconnected to avoid side-effects
      this.element.removeEventListener("autocomplete:pre-connect", this._onConnect);
      this.element.removeEventListener("autocomplete:connect", this._onPreConnect);
    }
  }, {
    key: "_onPreConnect",
    value: function _onPreConnect(event) {
      var _this2 = this;

      // TomSelect has not been initialized - options can be changed
      event.detail.options.onChange = function (value) {
        if (value) {
          _this2.tomSelect.blur();
        }
      };
    }
  }, {
    key: "_onConnect",
    value: function _onConnect(event) {
      event.detail.options.hideSelected = false;
      this.tomSelect = event.detail.tomSelect;
    }
  }, {
    key: "provincia",
    value: function provincia() {
      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (event.currentTarget.value != 233 || event.currentTarget.value != 39) {
        document.querySelector("#codigo_postal").classList.add("hidden");
        document.querySelector("#codigo_postal").removeAttribute("required");
      } else {
        document.querySelector("#codigo_postal").classList.remove("hidden");
        document.querySelector("#codigo_postal").setAttribute("required", "required");
      } // this.ciudad();


      var frame = document.getElementById("provincia-frame");
      frame.src = frame.dataset.provinciasRuta + "/" + event.currentTarget.value;
    }
  }, {
    key: "ciudad",
    value: function ciudad(event) {
      var frame = document.getElementById("ciudad-frame");
      console.log(event);
      frame.src = frame.dataset.municipiosRuta + "/" + (event ? event.currentTarget.value : "?reset=1");
    }
  }]);

  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_14__.Controller);



/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/buscar_salida_controller.js":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/buscar_salida_controller.js ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ controller)
/* harmony export */ });
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");

const controller = (function() {
    return class LazyController extends _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__.Controller {
        constructor(context) {
            super(context);
            this.__stimulusLazyController = true;
        }
        initialize() {
            if (this.application.controllers.find((controller) => {
                return controller.identifier === this.identifier && controller.__stimulusLazyController;
            })) {
                return;
            }
            Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_flatpickr_dist_esm_index_js-node_modules_flatpickr_dist_l10n_es_js"), __webpack_require__.e("assets_controllers_buscar_salida_controller_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./assets/controllers/buscar_salida_controller.js */ "./assets/controllers/buscar_salida_controller.js")).then((controller) => {
                this.application.register(this.identifier, controller.default);
            });
        }
    }
})();


/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/confirmacion_controller.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/confirmacion_controller.js ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ controller)
/* harmony export */ });
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");

const controller = (function() {
    return class LazyController extends _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__.Controller {
        constructor(context) {
            super(context);
            this.__stimulusLazyController = true;
        }
        initialize() {
            if (this.application.controllers.find((controller) => {
                return controller.identifier === this.identifier && controller.__stimulusLazyController;
            })) {
                return;
            }
            __webpack_require__.e(/*! import() */ "assets_controllers_confirmacion_controller_js").then(__webpack_require__.bind(__webpack_require__, /*! ./assets/controllers/confirmacion_controller.js */ "./assets/controllers/confirmacion_controller.js")).then((controller) => {
                this.application.register(this.identifier, controller.default);
            });
        }
    }
})();


/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/data_collection_iframe_controller.js":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/data_collection_iframe_controller.js ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
/* harmony import */ var _hotwired_turbo__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @hotwired/turbo */ "./node_modules/@hotwired/turbo/dist/turbo.es2017-esm.js");
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
 * The following line makes this controller "lazy": it won't be downloaded until needed
 * See https://github.com/symfony/stimulus-bridge#lazy-controllers
 */

var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.formTarget.submit();
      var payerAuthenticationCheckEnrollmentUrl = this.payerAuthenticationCheckEnrollmentUrlValue;
      var complete = false;
      window.addEventListener("message", function (event) {
        if (event.origin === "https://centinelapistag.cardinalcommerce.com") {
          if (!complete) {
            var form = document.createElement("form");
            form.action = payerAuthenticationCheckEnrollmentUrl;
            form.id = "payer_authentication_check_enrollment";
            var element = document.createElement("input");
            element.value = "complete";
            element.name = "iframe_collection";
            element.type = "hidden";
            form.appendChild(element);
            var form_viejo = document.getElementById("payer_authentication_check_enrollment");

            if (form_viejo) {
              form_viejo.remove();
            }

            document.getElementById("reservacion-form").appendChild(form);
            form.requestSubmit();
            complete = true;
          }
        }
      }, false);
      var url = this.errorServerSentEventUrlValue;
      setTimeout(function () {
        if (!complete) {
          fetch(url + "/?iframe_collection_error=1").then(function () {
            var loading = document.getElementById("turbo-loading");

            if (loading) {
              document.getElementById("turbo-loading").classList.remove("!flex");
            }

            window.scrollTo({
              top: 0,
              behavior: "smooth"
            });
          });
        }
      }, 10000);
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      window.removeEventListener("message", function () {});
    }
  }]);

  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_16__.Controller);

_defineProperty(_default, "targets", ["form"]);

_defineProperty(_default, "values", {
  payerAuthenticationCheckEnrollmentUrl: String,
  errorServerSentEventUrl: String
});



/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/pagar_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/pagar_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ controller)
/* harmony export */ });
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");

const controller = (function() {
    return class LazyController extends _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__.Controller {
        constructor(context) {
            super(context);
            this.__stimulusLazyController = true;
        }
        initialize() {
            if (this.application.controllers.find((controller) => {
                return controller.identifier === this.identifier && controller.__stimulusLazyController;
            })) {
                return;
            }
            Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_imask_esm_index_js"), __webpack_require__.e("assets_controllers_pagar_controller_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./assets/controllers/pagar_controller.js */ "./assets/controllers/pagar_controller.js")).then((controller) => {
                this.application.register(this.identifier, controller.default);
            });
        }
    }
})();


/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/reservacion_controller.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/reservacion_controller.js ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ controller)
/* harmony export */ });
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");

const controller = (function() {
    return class LazyController extends _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__.Controller {
        constructor(context) {
            super(context);
            this.__stimulusLazyController = true;
        }
        initialize() {
            if (this.application.controllers.find((controller) => {
                return controller.identifier === this.identifier && controller.__stimulusLazyController;
            })) {
                return;
            }
            __webpack_require__.e(/*! import() */ "assets_controllers_reservacion_controller_js").then(__webpack_require__.bind(__webpack_require__, /*! ./assets/controllers/reservacion_controller.js */ "./assets/controllers/reservacion_controller.js")).then((controller) => {
                this.application.register(this.identifier, controller.default);
            });
        }
    }
})();


/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/ruta_form_controller.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/ruta_form_controller.js ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ controller)
/* harmony export */ });
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");

const controller = (function() {
    return class LazyController extends _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__.Controller {
        constructor(context) {
            super(context);
            this.__stimulusLazyController = true;
        }
        initialize() {
            if (this.application.controllers.find((controller) => {
                return controller.identifier === this.identifier && controller.__stimulusLazyController;
            })) {
                return;
            }
            __webpack_require__.e(/*! import() */ "assets_controllers_ruta_form_controller_js").then(__webpack_require__.bind(__webpack_require__, /*! ./assets/controllers/ruta_form_controller.js */ "./assets/controllers/ruta_form_controller.js")).then((controller) => {
                this.application.register(this.identifier, controller.default);
            });
        }
    }
})();


/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/slider_controller.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/slider_controller.js ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
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
 * The following line makes this controller "lazy": it won't be downloaded until needed
 * See https://github.com/symfony/stimulus-bridge#lazy-controllers
 */

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

    _defineProperty(_assertThisInitialized(_this), "count", 1);

    _defineProperty(_assertThisInitialized(_this), "images", []);

    _defineProperty(_assertThisInitialized(_this), "slider", null);

    return _this;
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      if (!this.hasSliderTarget) {
        return;
      }

      this.slider = gsap__WEBPACK_IMPORTED_MODULE_15__.gsap.timeline({
        repeat: -1,
        yoyo: true,
        delay: 3
      }); //, delay: 15

      for (var i = 0; i < this.sliderTarget.children.length; i++) {
        this.slider.to(this.sliderTarget.children[i], {
          x: "100%",
          y: "-100%",
          display: "none",
          rotation: -27,
          duration: 3,
          delay: 10
        });
      }

      this.slider.play();
    }
  }, {
    key: "control",
    value: function control(_ref) {
      var stop = _ref.detail.stop;
      this.slider.paused(stop);
    }
  }]);

  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_14__.Controller);

_defineProperty(_default, "targets", ["slider"]);

_defineProperty(_default, "values", {
  images: String
});



/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/typed_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/typed_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! typed.js */ "./node_modules/typed.js/lib/typed.js");
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(typed_js__WEBPACK_IMPORTED_MODULE_16__);
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

    _defineProperty(_assertThisInitialized(_this), "typed", null);

    return _this;
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      var _this2 = this;

      var options = {
        strings: this.stringsValue,
        typeSpeed: this.typeSpeedValue,
        smartBackspace: this.smartBackspaceValue,
        startDelay: this.startDelayValue,
        backSpeed: this.backSpeedValue,
        shuffle: this.shuffleValue,
        backDelay: this.backDelayValue,
        fadeOut: this.fadeOutValue,
        fadeOutClass: this.fadeOutClassValue,
        fadeOutDelay: this.fadeOutDelayValue,
        loop: this.loopValue,
        loopCount: this.loopCountValue,
        showCursor: this.showCursorValue,
        cursorChar: this.cursorCharValue,
        autoInsertCss: this.autoInsertCssValue,
        attr: this.attrValue,
        bindInputFocusEvents: this.bindInputFocusEventsValue,
        contentType: this.contentTypeValue
      };
      options.backDelay = 2000;
      options.smartBackspace = true;
      options.startDelay = 1000;
      options.backSpeed = 20;
      options.showCursor = false;

      options.onStop = function (t) {
        var type_placeholder = document.getElementById("typed-placeholder");

        if (type_placeholder) {
          type_placeholder.classList.remove("hidden");
        }
      };

      options.onComplete = function (t) {
        var type_placeholder = document.getElementById("typed-placeholder");

        if (type_placeholder) {
          type_placeholder.classList.remove("hidden");

          _this2.typed.destroy();
        }
      };

      this.typed = new (typed_js__WEBPACK_IMPORTED_MODULE_16___default())(this.element, options);
      var event = new CustomEvent("typed-stop", {
        detail: {
          typed: this.typed
        }
      });
      document.dispatchEvent(event);
    }
  }]);

  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_15__.Controller);

_defineProperty(_default, "values", {
  strings: Array,
  typeSpeed: {
    type: Number,
    "default": 30
  },
  smartBackspace: {
    type: Boolean,
    "default": true
  },
  startDelay: Number,
  backSpeed: Number,
  shuffle: Boolean,
  backDelay: {
    type: Number,
    "default": 700
  },
  fadeOut: Boolean,
  fadeOutClass: {
    type: String,
    "default": "typed-fade-out"
  },
  fadeOutDelay: {
    type: Number,
    "default": 500
  },
  loop: Boolean,
  loopCount: {
    type: Number,
    "default": Infinity
  },
  showCursor: {
    type: Boolean,
    "default": true
  },
  cursorChar: {
    type: String,
    "default": ""
  },
  autoInsertCss: {
    type: Boolean,
    "default": true
  },
  attr: String,
  bindInputFocusEvents: Boolean,
  contentType: {
    type: String,
    "default": "html"
  }
});



/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/* harmony import */ var _turbo_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./turbo-events */ "./assets/turbo-events.js");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)
 // start the Stimulus application




/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");
 // Registers Stimulus controllers from controllers.json and in the controllers/ directory

var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$")); // register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/turbo-events.js":
/*!********************************!*\
  !*** ./assets/turbo-events.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _hotwired_turbo__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @hotwired/turbo */ "./node_modules/@hotwired/turbo/dist/turbo.es2017-esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }























function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


document.addEventListener("turbo:before-fetch-request", /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(event) {
    var frameId, loading;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            document.removeEventListener("typed-stop", _onStopTyped);
            frameId = event.detail.fetchOptions.headers["Turbo-Frame"];

            if (frameId && !document.getElementById(frameId).dataset.noloading) {
              loading = document.getElementById("turbo-loading");

              if (loading) {
                document.getElementById("turbo-loading").classList.add("!flex");
              }

              event.detail.fetchOptions.headers["turbo-request"] = true;
            }

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());
document.addEventListener("turbo:before-fetch-response", function (event) {
  var fetchResponse = event.detail.fetchResponse;
  document.addEventListener("typed-stop", _onStopTyped);

  if (fetchResponse.response.headers.get("session-terminada")) {
    event.preventDefault();
    _hotwired_turbo__WEBPACK_IMPORTED_MODULE_21__.clearCache();
    _hotwired_turbo__WEBPACK_IMPORTED_MODULE_21__.visit(fetchResponse.response.headers.get("Turbo-Location"));
  } else if (fetchResponse.response.headers.get("procesando-pago")) {
    event.preventDefault();
  } else if (fetchResponse.response.headers.get("error-pago")) {
    event.preventDefault();
    var loading = document.getElementById("turbo-loading");

    if (loading) {
      document.getElementById("turbo-loading").classList.remove("!flex");
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
});

function _onStopTyped(_ref2) {
  var typed = _ref2.detail.typed;
  typed.stop();
}

document.addEventListener("turbo:frame-load", function (event) {
  var loading = document.getElementById("turbo-loading");

  if (loading) {
    document.getElementById("turbo-loading").classList.remove("!flex");
  }
});

/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_symfony_ux-autocomple-3b0ea0"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBL0IsQ0FBbUMsaUJBQW5DLENBQUosRUFBMkQ7SUFDaEUxSSxLQUFLLENBQUMySSxjQUFOO0VBQ0QsQ0FGTSxNQUVBLElBQUlGLGFBQWEsQ0FBQ2pJLFFBQWQsQ0FBdUIrSCxPQUF2QixDQUErQkcsR0FBL0IsQ0FBbUMsWUFBbkMsQ0FBSixFQUFzRDtJQUMzRDFJLEtBQUssQ0FBQzJJLGNBQU47SUFDQSxJQUFNcEosT0FBTyxHQUFHTixRQUFRLENBQUNHLGNBQVQsQ0FBd0IsZUFBeEIsQ0FBaEI7O0lBQ0EsSUFBSUcsT0FBSixFQUFhO01BQ1hOLFFBQVEsQ0FBQ0csY0FBVCxDQUF3QixlQUF4QixFQUF5Q0MsU0FBekMsQ0FBbURDLE1BQW5ELENBQTBELE9BQTFEO0lBQ0Q7O0lBRURFLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQjtNQUFFQyxHQUFHLEVBQUUsQ0FBUDtNQUFVQyxRQUFRLEVBQUU7SUFBcEIsQ0FBaEI7RUFDRDtBQUNGLENBcEJEOztBQXNCQSxTQUFTeUksWUFBVCxRQUE2QztFQUFBLElBQVhiLEtBQVcsU0FBckIxRixNQUFxQixDQUFYMEYsS0FBVztFQUMzQ0EsS0FBSyxDQUFDNUMsSUFBTjtBQUNEOztBQUVEMUYsUUFBUSxDQUFDMEMsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFVBQUMzQixLQUFELEVBQVc7RUFDdkQsSUFBTVQsT0FBTyxHQUFHTixRQUFRLENBQUNHLGNBQVQsQ0FBd0IsZUFBeEIsQ0FBaEI7O0VBQ0EsSUFBSUcsT0FBSixFQUFhO0lBQ1hOLFFBQVEsQ0FBQ0csY0FBVCxDQUF3QixlQUF4QixFQUF5Q0MsU0FBekMsQ0FBbURDLE1BQW5ELENBQTBELE9BQTFEO0VBQ0Q7QUFDRixDQUxEOzs7Ozs7Ozs7Ozs7QUN6Q0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vIFxcLltqdF1zeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvYXNpZW50b19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9hdXRoZW50aWNhdGlvbl9jaGVja19lbnJvbGxtZW50X2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2F1dG9jb21wbGV0ZV9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9idXNjYXJfc2FsaWRhX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2NvbmZpcm1hY2lvbl9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9kYXRhX2NvbGxlY3Rpb25faWZyYW1lX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL3BhZ2FyX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL3Jlc2VydmFjaW9uX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL3J1dGFfZm9ybV9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9zbGlkZXJfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvdHlwZWRfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3R1cmJvLWV2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2FzaWVudG9fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2FzaWVudG9fY29udHJvbGxlci5qc1wiLFxuXHRcIi4vYXV0aGVudGljYXRpb25fY2hlY2tfZW5yb2xsbWVudF9jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvYXV0aGVudGljYXRpb25fY2hlY2tfZW5yb2xsbWVudF9jb250cm9sbGVyLmpzXCIsXG5cdFwiLi9hdXRvY29tcGxldGVfY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2F1dG9jb21wbGV0ZV9jb250cm9sbGVyLmpzXCIsXG5cdFwiLi9idXNjYXJfc2FsaWRhX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9idXNjYXJfc2FsaWRhX2NvbnRyb2xsZXIuanNcIixcblx0XCIuL2NvbmZpcm1hY2lvbl9jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvY29uZmlybWFjaW9uX2NvbnRyb2xsZXIuanNcIixcblx0XCIuL2RhdGFfY29sbGVjdGlvbl9pZnJhbWVfY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2RhdGFfY29sbGVjdGlvbl9pZnJhbWVfY29udHJvbGxlci5qc1wiLFxuXHRcIi4vcGFnYXJfY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL3BhZ2FyX2NvbnRyb2xsZXIuanNcIixcblx0XCIuL3Jlc2VydmFjaW9uX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9yZXNlcnZhY2lvbl9jb250cm9sbGVyLmpzXCIsXG5cdFwiLi9ydXRhX2Zvcm1fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL3J1dGFfZm9ybV9jb250cm9sbGVyLmpzXCIsXG5cdFwiLi9zbGlkZXJfY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL3NsaWRlcl9jb250cm9sbGVyLmpzXCIsXG5cdFwiLi90eXBlZF9jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvdHlwZWRfY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC5banRdc3g/JFwiOyIsImltcG9ydCAndG9tLXNlbGVjdC9kaXN0L2Nzcy90b20tc2VsZWN0LmRlZmF1bHQuY3NzJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgJ3N5bWZvbnktLXV4LWF1dG9jb21wbGV0ZS0tYXV0b2NvbXBsZXRlJzogaW1wb3J0KC8qIHdlYnBhY2tNb2RlOiBcImVhZ2VyXCIgKi8gJ0BzeW1mb255L3V4LWF1dG9jb21wbGV0ZS9kaXN0L2NvbnRyb2xsZXIuanMnKSxcbiAgJ3N5bWZvbnktLXV4LXR1cmJvLS10dXJiby1jb3JlJzogaW1wb3J0KC8qIHdlYnBhY2tNb2RlOiBcImVhZ2VyXCIgKi8gJ0BzeW1mb255L3V4LXR1cmJvL2Rpc3QvdHVyYm9fY29udHJvbGxlci5qcycpLFxuICAnc3ltZm9ueS0tdXgtdHVyYm8tbWVyY3VyZS0tdHVyYm8tc3RyZWFtJzogaW1wb3J0KC8qIHdlYnBhY2tNb2RlOiBcImVhZ2VyXCIgKi8gJ0BzeW1mb255L3V4LXR1cmJvLW1lcmN1cmUvZGlzdC90dXJib19zdHJlYW1fY29udHJvbGxlci5qcycpLFxuICAnc3ltZm9ueS0tdXgtdHlwZWQnOiBpbXBvcnQoLyogd2VicGFja01vZGU6IFwiZWFnZXJcIiAqLyAnQHN5bWZvbnkvdXgtdHlwZWQvZGlzdC9jb250cm9sbGVyLmpzJyksXG59OyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuY29uc3QgY29udHJvbGxlciA9IChmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gY2xhc3MgTGF6eUNvbnRyb2xsZXIgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICAgICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICAgICAgc3VwZXIoY29udGV4dCk7XG4gICAgICAgICAgICB0aGlzLl9fc3RpbXVsdXNMYXp5Q29udHJvbGxlciA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFwcGxpY2F0aW9uLmNvbnRyb2xsZXJzLmZpbmQoKGNvbnRyb2xsZXIpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udHJvbGxlci5pZGVudGlmaWVyID09PSB0aGlzLmlkZW50aWZpZXIgJiYgY29udHJvbGxlci5fX3N0aW11bHVzTGF6eUNvbnRyb2xsZXI7XG4gICAgICAgICAgICB9KSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGltcG9ydCgnL3Jvb3QvdHJhbnNwb3J0ZXNmdWVudGVkZWxub3J0ZS5jb20vYXNzZXRzL2NvbnRyb2xsZXJzL2FzaWVudG9fY29udHJvbGxlci5qcycpLnRoZW4oKGNvbnRyb2xsZXIpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGxpY2F0aW9uLnJlZ2lzdGVyKHRoaXMuaWRlbnRpZmllciwgY29udHJvbGxlci5kZWZhdWx0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufSkoKTtcbmV4cG9ydCB7IGNvbnRyb2xsZXIgYXMgZGVmYXVsdCB9OyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tIFwiQGhvdHdpcmVkL3N0aW11bHVzXCI7XG5cbi8qXG4gKiBUaGUgZm9sbG93aW5nIGxpbmUgbWFrZXMgdGhpcyBjb250cm9sbGVyIFwibGF6eVwiOiBpdCB3b24ndCBiZSBkb3dubG9hZGVkIHVudGlsIG5lZWRlZFxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9zeW1mb255L3N0aW11bHVzLWJyaWRnZSNsYXp5LWNvbnRyb2xsZXJzXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgc3RhdGljIHZhbHVlcyA9IHtcbiAgICBjaGFsbGVuZ2VSZXNwb25zZTogU3RyaW5nLFxuICAgIGF1dGhlbnRpY2F0aW9uVmFsaWRhdGlvblJvdXRlOiBTdHJpbmcsXG4gIH07XG4gIGNvbm5lY3QoKSB7XG4gICAgY29uc3Qgc3RlcFVwRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3RlcC11cC1mb3JtXCIpO1xuICAgIGlmIChzdGVwVXBGb3JtKSB7XG4gICAgICBzdGVwVXBGb3JtLnN1Ym1pdCgpO1xuXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc2VydmEtd3JhcFwiKS5jbGFzc0xpc3QucmVtb3ZlKFwicmVzZXJ2YVwiKTtcblxuICAgICAgY29uc3QgbG9hZGluZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHVyYm8tbG9hZGluZ1wiKTtcbiAgICAgIGlmIChsb2FkaW5nKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHVyYm8tbG9hZGluZ1wiKS5jbGFzc0xpc3QucmVtb3ZlKFwiIWZsZXhcIik7XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5zY3JvbGxUbyh7IHRvcDogMCwgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgZXZlbnRTb3VyY2UgPSBuZXcgRXZlbnRTb3VyY2UodGhpcy5jaGFsbGVuZ2VSZXNwb25zZVZhbHVlKTtcblxuICAgIGV2ZW50U291cmNlLm9ubWVzc2FnZSA9IChldmVudCkgPT4ge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNlcnZhLXdyYXBcIikuY2xhc3NMaXN0LmFkZChcInJlc2VydmFcIik7XG5cbiAgICAgIGNvbnN0IGxvYWRpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInR1cmJvLWxvYWRpbmdcIik7XG4gICAgICBpZiAobG9hZGluZykge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInR1cmJvLWxvYWRpbmdcIikuY2xhc3NMaXN0LmFkZChcIiFmbGV4XCIpO1xuICAgICAgfVxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhdXRoZW50aWNhdGlvbl9jaGVja19lbnJvbGxtZW50PipcIik/LnJlbW92ZSgpO1xuXG4gICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgICBmb3JtLmFjdGlvbiA9IHRoaXMuYXV0aGVudGljYXRpb25WYWxpZGF0aW9uUm91dGVWYWx1ZTtcbiAgICAgIGZvcm0ubWV0aG9kID0gXCJQT1NUXCI7XG4gICAgICBmb3JtLmlkID0gXCJwYXllci1hdXRoZW50aWNhdGlvbi12YWxpZGF0aW9uLWZvcm1cIjtcblxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpO1xuICAgICAgZm9yICh2YXIga2V5IGluIHJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGVsZW1lbnQudmFsdWUgPSByZXNwb25zZVtrZXldO1xuICAgICAgICBlbGVtZW50Lm5hbWUgPSBrZXk7XG4gICAgICAgIGVsZW1lbnQudHlwZSA9IFwiaGlkZGVuXCI7XG4gICAgICAgIGZvcm0uYXBwZW5kKGVsZW1lbnQpO1xuICAgICAgfVxuICAgICAgY29uc3QgZm9ybV92aWVqbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgICBcInBheWVyLWF1dGhlbnRpY2F0aW9uLXZhbGlkYXRpb24tZm9ybVwiXG4gICAgICApO1xuICAgICAgaWYgKGZvcm1fdmllam8pIHtcbiAgICAgICAgZm9ybV92aWVqby5yZW1vdmUoKTtcbiAgICAgIH1cblxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNlcnZhY2lvbi1mb3JtXCIpLmFwcGVuZENoaWxkKGZvcm0pO1xuICAgICAgZm9ybS5yZXF1ZXN0U3VibWl0KCk7XG4gICAgfTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gXCJAaG90d2lyZWQvc3RpbXVsdXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgdG9tU2VsZWN0ID0gbnVsbDtcbiAgcHJpbWVyYV9hY2Npb24gPSB0cnVlO1xuICBpbml0aWFsaXplKCkge1xuICAgIHRoaXMuX29uUHJlQ29ubmVjdCA9IHRoaXMuX29uUHJlQ29ubmVjdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uQ29ubmVjdCA9IHRoaXMuX29uQ29ubmVjdC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29ubmVjdCgpIHtcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwiYXV0b2NvbXBsZXRlOnByZS1jb25uZWN0XCIsXG4gICAgICB0aGlzLl9vblByZUNvbm5lY3RcbiAgICApO1xuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiYXV0b2NvbXBsZXRlOmNvbm5lY3RcIiwgdGhpcy5fb25Db25uZWN0KTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3QoKSB7XG4gICAgLy8gWW91IHNob3VsZCBhbHdheXMgcmVtb3ZlIGxpc3RlbmVycyB3aGVuIHRoZSBjb250cm9sbGVyIGlzIGRpc2Nvbm5lY3RlZCB0byBhdm9pZCBzaWRlLWVmZmVjdHNcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwiYXV0b2NvbXBsZXRlOnByZS1jb25uZWN0XCIsXG4gICAgICB0aGlzLl9vbkNvbm5lY3RcbiAgICApO1xuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgXCJhdXRvY29tcGxldGU6Y29ubmVjdFwiLFxuICAgICAgdGhpcy5fb25QcmVDb25uZWN0XG4gICAgKTtcbiAgfVxuXG4gIF9vblByZUNvbm5lY3QoZXZlbnQpIHtcbiAgICAvLyBUb21TZWxlY3QgaGFzIG5vdCBiZWVuIGluaXRpYWxpemVkIC0gb3B0aW9ucyBjYW4gYmUgY2hhbmdlZFxuXG4gICAgZXZlbnQuZGV0YWlsLm9wdGlvbnMub25DaGFuZ2UgPSAodmFsdWUpID0+IHtcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICB0aGlzLnRvbVNlbGVjdC5ibHVyKCk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIF9vbkNvbm5lY3QoZXZlbnQpIHtcbiAgICBldmVudC5kZXRhaWwub3B0aW9ucy5oaWRlU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLnRvbVNlbGVjdCA9IGV2ZW50LmRldGFpbC50b21TZWxlY3Q7XG4gIH1cblxuICBwcm92aW5jaWEoZXZlbnQgPSBudWxsKSB7XG4gICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUgIT0gMjMzIHx8IGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUgIT0gMzkpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29kaWdvX3Bvc3RhbFwiKS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb2RpZ29fcG9zdGFsXCIpLnJlbW92ZUF0dHJpYnV0ZShcInJlcXVpcmVkXCIpOyBcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb2RpZ29fcG9zdGFsXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvZGlnb19wb3N0YWxcIikuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgXCJyZXF1aXJlZFwiKTsgIFxuXG4gICAgfVxuICAgIC8vIHRoaXMuY2l1ZGFkKCk7XG4gICAgY29uc3QgZnJhbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb3ZpbmNpYS1mcmFtZVwiKTtcbiAgICBmcmFtZS5zcmMgPSBmcmFtZS5kYXRhc2V0LnByb3ZpbmNpYXNSdXRhICsgXCIvXCIgKyBldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlO1xuICB9XG5cbiAgY2l1ZGFkKGV2ZW50KSB7XG4gICAgY29uc3QgZnJhbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNpdWRhZC1mcmFtZVwiKTtcbiAgICBjb25zb2xlLmxvZyhldmVudCk7XG4gICAgZnJhbWUuc3JjID1cbiAgICAgIGZyYW1lLmRhdGFzZXQubXVuaWNpcGlvc1J1dGEgK1xuICAgICAgXCIvXCIgK1xuICAgICAgKGV2ZW50ID8gZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSA6IFwiP3Jlc2V0PTFcIik7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuY29uc3QgY29udHJvbGxlciA9IChmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gY2xhc3MgTGF6eUNvbnRyb2xsZXIgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICAgICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICAgICAgc3VwZXIoY29udGV4dCk7XG4gICAgICAgICAgICB0aGlzLl9fc3RpbXVsdXNMYXp5Q29udHJvbGxlciA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFwcGxpY2F0aW9uLmNvbnRyb2xsZXJzLmZpbmQoKGNvbnRyb2xsZXIpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udHJvbGxlci5pZGVudGlmaWVyID09PSB0aGlzLmlkZW50aWZpZXIgJiYgY29udHJvbGxlci5fX3N0aW11bHVzTGF6eUNvbnRyb2xsZXI7XG4gICAgICAgICAgICB9KSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGltcG9ydCgnL3Jvb3QvdHJhbnNwb3J0ZXNmdWVudGVkZWxub3J0ZS5jb20vYXNzZXRzL2NvbnRyb2xsZXJzL2J1c2Nhcl9zYWxpZGFfY29udHJvbGxlci5qcycpLnRoZW4oKGNvbnRyb2xsZXIpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGxpY2F0aW9uLnJlZ2lzdGVyKHRoaXMuaWRlbnRpZmllciwgY29udHJvbGxlci5kZWZhdWx0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufSkoKTtcbmV4cG9ydCB7IGNvbnRyb2xsZXIgYXMgZGVmYXVsdCB9OyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuY29uc3QgY29udHJvbGxlciA9IChmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gY2xhc3MgTGF6eUNvbnRyb2xsZXIgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICAgICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICAgICAgc3VwZXIoY29udGV4dCk7XG4gICAgICAgICAgICB0aGlzLl9fc3RpbXVsdXNMYXp5Q29udHJvbGxlciA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFwcGxpY2F0aW9uLmNvbnRyb2xsZXJzLmZpbmQoKGNvbnRyb2xsZXIpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udHJvbGxlci5pZGVudGlmaWVyID09PSB0aGlzLmlkZW50aWZpZXIgJiYgY29udHJvbGxlci5fX3N0aW11bHVzTGF6eUNvbnRyb2xsZXI7XG4gICAgICAgICAgICB9KSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGltcG9ydCgnL3Jvb3QvdHJhbnNwb3J0ZXNmdWVudGVkZWxub3J0ZS5jb20vYXNzZXRzL2NvbnRyb2xsZXJzL2NvbmZpcm1hY2lvbl9jb250cm9sbGVyLmpzJykudGhlbigoY29udHJvbGxlcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwbGljYXRpb24ucmVnaXN0ZXIodGhpcy5pZGVudGlmaWVyLCBjb250cm9sbGVyLmRlZmF1bHQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59KSgpO1xuZXhwb3J0IHsgY29udHJvbGxlciBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gXCJAaG90d2lyZWQvc3RpbXVsdXNcIjtcblxuaW1wb3J0IHsgdmlzaXQgfSBmcm9tIFwiQGhvdHdpcmVkL3R1cmJvXCI7XG5cbi8qXG4gKiBUaGUgZm9sbG93aW5nIGxpbmUgbWFrZXMgdGhpcyBjb250cm9sbGVyIFwibGF6eVwiOiBpdCB3b24ndCBiZSBkb3dubG9hZGVkIHVudGlsIG5lZWRlZFxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9zeW1mb255L3N0aW11bHVzLWJyaWRnZSNsYXp5LWNvbnRyb2xsZXJzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gIHN0YXRpYyB0YXJnZXRzID0gW1wiZm9ybVwiXTtcbiAgc3RhdGljIHZhbHVlcyA9IHtcbiAgICBwYXllckF1dGhlbnRpY2F0aW9uQ2hlY2tFbnJvbGxtZW50VXJsOiBTdHJpbmcsXG4gICAgZXJyb3JTZXJ2ZXJTZW50RXZlbnRVcmw6IFN0cmluZyxcbiAgfTtcbiAgY29ubmVjdCgpIHtcbiAgICB0aGlzLmZvcm1UYXJnZXQuc3VibWl0KCk7XG4gICAgY29uc3QgcGF5ZXJBdXRoZW50aWNhdGlvbkNoZWNrRW5yb2xsbWVudFVybCA9XG4gICAgICB0aGlzLnBheWVyQXV0aGVudGljYXRpb25DaGVja0Vucm9sbG1lbnRVcmxWYWx1ZTtcbiAgICBsZXQgY29tcGxldGUgPSBmYWxzZTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwibWVzc2FnZVwiLFxuICAgICAgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5vcmlnaW4gPT09IFwiaHR0cHM6Ly9jZW50aW5lbGFwaXN0YWcuY2FyZGluYWxjb21tZXJjZS5jb21cIikge1xuICAgICAgICAgIGlmICghY29tcGxldGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICAgICAgICAgIGZvcm0uYWN0aW9uID0gcGF5ZXJBdXRoZW50aWNhdGlvbkNoZWNrRW5yb2xsbWVudFVybDtcbiAgICAgICAgICAgIGZvcm0uaWQgPSBcInBheWVyX2F1dGhlbnRpY2F0aW9uX2NoZWNrX2Vucm9sbG1lbnRcIjtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICBlbGVtZW50LnZhbHVlID0gXCJjb21wbGV0ZVwiO1xuICAgICAgICAgICAgZWxlbWVudC5uYW1lID0gXCJpZnJhbWVfY29sbGVjdGlvblwiO1xuICAgICAgICAgICAgZWxlbWVudC50eXBlID0gXCJoaWRkZW5cIjtcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGZvcm1fdmllam8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgICAgICAgICAgXCJwYXllcl9hdXRoZW50aWNhdGlvbl9jaGVja19lbnJvbGxtZW50XCJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoZm9ybV92aWVqbykge1xuICAgICAgICAgICAgICBmb3JtX3ZpZWpvLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc2VydmFjaW9uLWZvcm1cIikuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgICAgICAgICBmb3JtLnJlcXVlc3RTdWJtaXQoKTtcbiAgICAgICAgICAgIGNvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmYWxzZVxuICAgICk7XG4gICAgY29uc3QgdXJsID0gdGhpcy5lcnJvclNlcnZlclNlbnRFdmVudFVybFZhbHVlO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFjb21wbGV0ZSkge1xuICAgICAgICBmZXRjaCh1cmwgKyBcIi8/aWZyYW1lX2NvbGxlY3Rpb25fZXJyb3I9MVwiKS50aGVuKCgpID0+IHtcbiAgICAgICAgICBjb25zdCBsb2FkaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0dXJiby1sb2FkaW5nXCIpO1xuICAgICAgICAgIGlmIChsb2FkaW5nKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInR1cmJvLWxvYWRpbmdcIikuY2xhc3NMaXN0LnJlbW92ZShcIiFmbGV4XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oeyB0b3A6IDAsIGJlaGF2aW9yOiBcInNtb290aFwiIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCAxMDAwMCk7XG4gIH1cblxuICBkaXNjb25uZWN0KCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCAoKSA9PiB7fSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuY29uc3QgY29udHJvbGxlciA9IChmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gY2xhc3MgTGF6eUNvbnRyb2xsZXIgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICAgICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICAgICAgc3VwZXIoY29udGV4dCk7XG4gICAgICAgICAgICB0aGlzLl9fc3RpbXVsdXNMYXp5Q29udHJvbGxlciA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFwcGxpY2F0aW9uLmNvbnRyb2xsZXJzLmZpbmQoKGNvbnRyb2xsZXIpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udHJvbGxlci5pZGVudGlmaWVyID09PSB0aGlzLmlkZW50aWZpZXIgJiYgY29udHJvbGxlci5fX3N0aW11bHVzTGF6eUNvbnRyb2xsZXI7XG4gICAgICAgICAgICB9KSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGltcG9ydCgnL3Jvb3QvdHJhbnNwb3J0ZXNmdWVudGVkZWxub3J0ZS5jb20vYXNzZXRzL2NvbnRyb2xsZXJzL3BhZ2FyX2NvbnRyb2xsZXIuanMnKS50aGVuKChjb250cm9sbGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hcHBsaWNhdGlvbi5yZWdpc3Rlcih0aGlzLmlkZW50aWZpZXIsIGNvbnRyb2xsZXIuZGVmYXVsdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn0pKCk7XG5leHBvcnQgeyBjb250cm9sbGVyIGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcbmNvbnN0IGNvbnRyb2xsZXIgPSAoZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGNsYXNzIExhenlDb250cm9sbGVyIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICAgICAgICAgIHN1cGVyKGNvbnRleHQpO1xuICAgICAgICAgICAgdGhpcy5fX3N0aW11bHVzTGF6eUNvbnRyb2xsZXIgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hcHBsaWNhdGlvbi5jb250cm9sbGVycy5maW5kKChjb250cm9sbGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRyb2xsZXIuaWRlbnRpZmllciA9PT0gdGhpcy5pZGVudGlmaWVyICYmIGNvbnRyb2xsZXIuX19zdGltdWx1c0xhenlDb250cm9sbGVyO1xuICAgICAgICAgICAgfSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbXBvcnQoJy9yb290L3RyYW5zcG9ydGVzZnVlbnRlZGVsbm9ydGUuY29tL2Fzc2V0cy9jb250cm9sbGVycy9yZXNlcnZhY2lvbl9jb250cm9sbGVyLmpzJykudGhlbigoY29udHJvbGxlcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwbGljYXRpb24ucmVnaXN0ZXIodGhpcy5pZGVudGlmaWVyLCBjb250cm9sbGVyLmRlZmF1bHQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59KSgpO1xuZXhwb3J0IHsgY29udHJvbGxlciBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5jb25zdCBjb250cm9sbGVyID0gKGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBjbGFzcyBMYXp5Q29udHJvbGxlciBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgICAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgICAgICAgICBzdXBlcihjb250ZXh0KTtcbiAgICAgICAgICAgIHRoaXMuX19zdGltdWx1c0xhenlDb250cm9sbGVyID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpbml0aWFsaXplKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuYXBwbGljYXRpb24uY29udHJvbGxlcnMuZmluZCgoY29udHJvbGxlcikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb250cm9sbGVyLmlkZW50aWZpZXIgPT09IHRoaXMuaWRlbnRpZmllciAmJiBjb250cm9sbGVyLl9fc3RpbXVsdXNMYXp5Q29udHJvbGxlcjtcbiAgICAgICAgICAgIH0pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW1wb3J0KCcvcm9vdC90cmFuc3BvcnRlc2Z1ZW50ZWRlbG5vcnRlLmNvbS9hc3NldHMvY29udHJvbGxlcnMvcnV0YV9mb3JtX2NvbnRyb2xsZXIuanMnKS50aGVuKChjb250cm9sbGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hcHBsaWNhdGlvbi5yZWdpc3Rlcih0aGlzLmlkZW50aWZpZXIsIGNvbnRyb2xsZXIuZGVmYXVsdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn0pKCk7XG5leHBvcnQgeyBjb250cm9sbGVyIGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSBcIkBob3R3aXJlZC9zdGltdWx1c1wiO1xuaW1wb3J0IHsgZ3NhcCB9IGZyb20gXCJnc2FwXCI7XG4vKlxuICogVGhlIGZvbGxvd2luZyBsaW5lIG1ha2VzIHRoaXMgY29udHJvbGxlciBcImxhenlcIjogaXQgd29uJ3QgYmUgZG93bmxvYWRlZCB1bnRpbCBuZWVkZWRcbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UjbGF6eS1jb250cm9sbGVyc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICBzdGF0aWMgdGFyZ2V0cyA9IFtcInNsaWRlclwiXTtcbiAgc3RhdGljIHZhbHVlcyA9IHtcbiAgICBpbWFnZXM6IFN0cmluZyxcbiAgfTtcbiAgY291bnQgPSAxO1xuICBpbWFnZXMgPSBbXTtcbiAgc2xpZGVyID0gbnVsbDtcbiAgY29ubmVjdCgpIHtcbiAgICBpZiAoIXRoaXMuaGFzU2xpZGVyVGFyZ2V0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2xpZGVyID0gZ3NhcC50aW1lbGluZSh7IHJlcGVhdDogLTEsIHlveW86IHRydWUsIGRlbGF5OiAzIH0pOyAvLywgZGVsYXk6IDE1XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNsaWRlclRhcmdldC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5zbGlkZXIudG8odGhpcy5zbGlkZXJUYXJnZXQuY2hpbGRyZW5baV0sIHtcbiAgICAgICAgeDogXCIxMDAlXCIsXG4gICAgICAgIHk6IFwiLTEwMCVcIixcbiAgICAgICAgZGlzcGxheTogXCJub25lXCIsXG4gICAgICAgIHJvdGF0aW9uOiAtMjcsXG4gICAgICAgIGR1cmF0aW9uOiAzLFxuICAgICAgICBkZWxheTogMTAsXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5zbGlkZXIucGxheSgpO1xuICB9XG4gIGNvbnRyb2woeyBkZXRhaWw6IHsgc3RvcCB9IH0pIHtcbiAgICB0aGlzLnNsaWRlci5wYXVzZWQoc3RvcCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tIFwiQGhvdHdpcmVkL3N0aW11bHVzXCI7XG5pbXBvcnQgVHlwZWQgZnJvbSBcInR5cGVkLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gIHN0YXRpYyB2YWx1ZXMgPSB7XG4gICAgc3RyaW5nczogQXJyYXksXG4gICAgdHlwZVNwZWVkOiB7IHR5cGU6IE51bWJlciwgZGVmYXVsdDogMzAgfSxcbiAgICBzbWFydEJhY2tzcGFjZTogeyB0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiB0cnVlIH0sXG4gICAgc3RhcnREZWxheTogTnVtYmVyLFxuICAgIGJhY2tTcGVlZDogTnVtYmVyLFxuICAgIHNodWZmbGU6IEJvb2xlYW4sXG4gICAgYmFja0RlbGF5OiB7IHR5cGU6IE51bWJlciwgZGVmYXVsdDogNzAwIH0sXG4gICAgZmFkZU91dDogQm9vbGVhbixcbiAgICBmYWRlT3V0Q2xhc3M6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiBcInR5cGVkLWZhZGUtb3V0XCIgfSxcbiAgICBmYWRlT3V0RGVsYXk6IHsgdHlwZTogTnVtYmVyLCBkZWZhdWx0OiA1MDAgfSxcbiAgICBsb29wOiBCb29sZWFuLFxuICAgIGxvb3BDb3VudDogeyB0eXBlOiBOdW1iZXIsIGRlZmF1bHQ6IEluZmluaXR5IH0sXG4gICAgc2hvd0N1cnNvcjogeyB0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiB0cnVlIH0sXG4gICAgY3Vyc29yQ2hhcjogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6IFwiXCIgfSxcbiAgICBhdXRvSW5zZXJ0Q3NzOiB7IHR5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IHRydWUgfSxcbiAgICBhdHRyOiBTdHJpbmcsXG4gICAgYmluZElucHV0Rm9jdXNFdmVudHM6IEJvb2xlYW4sXG4gICAgY29udGVudFR5cGU6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiBcImh0bWxcIiB9LFxuICB9O1xuICB0eXBlZCA9IG51bGw7XG4gIGNvbm5lY3QoKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIHN0cmluZ3M6IHRoaXMuc3RyaW5nc1ZhbHVlLFxuICAgICAgdHlwZVNwZWVkOiB0aGlzLnR5cGVTcGVlZFZhbHVlLFxuICAgICAgc21hcnRCYWNrc3BhY2U6IHRoaXMuc21hcnRCYWNrc3BhY2VWYWx1ZSxcbiAgICAgIHN0YXJ0RGVsYXk6IHRoaXMuc3RhcnREZWxheVZhbHVlLFxuICAgICAgYmFja1NwZWVkOiB0aGlzLmJhY2tTcGVlZFZhbHVlLFxuICAgICAgc2h1ZmZsZTogdGhpcy5zaHVmZmxlVmFsdWUsXG4gICAgICBiYWNrRGVsYXk6IHRoaXMuYmFja0RlbGF5VmFsdWUsXG4gICAgICBmYWRlT3V0OiB0aGlzLmZhZGVPdXRWYWx1ZSxcbiAgICAgIGZhZGVPdXRDbGFzczogdGhpcy5mYWRlT3V0Q2xhc3NWYWx1ZSxcbiAgICAgIGZhZGVPdXREZWxheTogdGhpcy5mYWRlT3V0RGVsYXlWYWx1ZSxcbiAgICAgIGxvb3A6IHRoaXMubG9vcFZhbHVlLFxuICAgICAgbG9vcENvdW50OiB0aGlzLmxvb3BDb3VudFZhbHVlLFxuICAgICAgc2hvd0N1cnNvcjogdGhpcy5zaG93Q3Vyc29yVmFsdWUsXG4gICAgICBjdXJzb3JDaGFyOiB0aGlzLmN1cnNvckNoYXJWYWx1ZSxcbiAgICAgIGF1dG9JbnNlcnRDc3M6IHRoaXMuYXV0b0luc2VydENzc1ZhbHVlLFxuICAgICAgYXR0cjogdGhpcy5hdHRyVmFsdWUsXG4gICAgICBiaW5kSW5wdXRGb2N1c0V2ZW50czogdGhpcy5iaW5kSW5wdXRGb2N1c0V2ZW50c1ZhbHVlLFxuICAgICAgY29udGVudFR5cGU6IHRoaXMuY29udGVudFR5cGVWYWx1ZSxcbiAgICB9O1xuXG4gICAgb3B0aW9ucy5iYWNrRGVsYXkgPSAyMDAwO1xuICAgIG9wdGlvbnMuc21hcnRCYWNrc3BhY2UgPSB0cnVlO1xuICAgIG9wdGlvbnMuc3RhcnREZWxheSA9IDEwMDA7XG4gICAgb3B0aW9ucy5iYWNrU3BlZWQgPSAyMDtcbiAgICBvcHRpb25zLnNob3dDdXJzb3IgPSBmYWxzZTtcblxuICAgIG9wdGlvbnMub25TdG9wID0gKHQpID0+IHtcbiAgICAgIGNvbnN0IHR5cGVfcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInR5cGVkLXBsYWNlaG9sZGVyXCIpO1xuICAgICAgaWYgKHR5cGVfcGxhY2Vob2xkZXIpIHtcbiAgICAgICAgdHlwZV9wbGFjZWhvbGRlci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBvcHRpb25zLm9uQ29tcGxldGUgPSAodCkgPT4ge1xuICAgICAgY29uc3QgdHlwZV9wbGFjZWhvbGRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHlwZWQtcGxhY2Vob2xkZXJcIik7XG4gICAgICBpZiAodHlwZV9wbGFjZWhvbGRlcikge1xuICAgICAgICB0eXBlX3BsYWNlaG9sZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgICAgIHRoaXMudHlwZWQuZGVzdHJveSgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLnR5cGVkID0gbmV3IFR5cGVkKHRoaXMuZWxlbWVudCwgb3B0aW9ucyk7XG5cbiAgICBjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudChcInR5cGVkLXN0b3BcIiwge1xuICAgICAgZGV0YWlsOiB7IHR5cGVkOiB0aGlzLnR5cGVkIH0sXG4gICAgfSk7XG4gICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gIH1cbn1cbiIsIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgXCIuL3N0eWxlcy9hcHAuY3NzXCI7XG5cbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxuaW1wb3J0IFwiLi9ib290c3RyYXBcIjtcblxuaW1wb3J0IFwiLi90dXJiby1ldmVudHNcIjtcbiIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xuXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxuICAgICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuL2NvbnRyb2xsZXJzJyxcbiAgICB0cnVlLFxuICAgIC9cXC5banRdc3g/JC9cbikpO1xuXG4vLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxuLy8gYXBwLnJlZ2lzdGVyKCdzb21lX2NvbnRyb2xsZXJfbmFtZScsIFNvbWVJbXBvcnRlZENvbnRyb2xsZXIpO1xuIiwiaW1wb3J0ICogYXMgVHVyYm8gZnJvbSBcIkBob3R3aXJlZC90dXJib1wiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidHVyYm86YmVmb3JlLWZldGNoLXJlcXVlc3RcIiwgYXN5bmMgKGV2ZW50KSA9PiB7XG4gIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0eXBlZC1zdG9wXCIsIF9vblN0b3BUeXBlZCk7XG5cbiAgY29uc3QgZnJhbWVJZCA9IGV2ZW50LmRldGFpbC5mZXRjaE9wdGlvbnMuaGVhZGVyc1tcIlR1cmJvLUZyYW1lXCJdO1xuICBpZiAoZnJhbWVJZCAmJiAhZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZnJhbWVJZCkuZGF0YXNldC5ub2xvYWRpbmcpIHtcbiAgICBjb25zdCBsb2FkaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0dXJiby1sb2FkaW5nXCIpO1xuICAgIGlmIChsb2FkaW5nKSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInR1cmJvLWxvYWRpbmdcIikuY2xhc3NMaXN0LmFkZChcIiFmbGV4XCIpO1xuICAgIH1cbiAgICBldmVudC5kZXRhaWwuZmV0Y2hPcHRpb25zLmhlYWRlcnNbXCJ0dXJiby1yZXF1ZXN0XCJdID0gdHJ1ZTtcbiAgfVxufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0dXJibzpiZWZvcmUtZmV0Y2gtcmVzcG9uc2VcIiwgKGV2ZW50KSA9PiB7XG4gIGNvbnN0IGZldGNoUmVzcG9uc2UgPSBldmVudC5kZXRhaWwuZmV0Y2hSZXNwb25zZTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidHlwZWQtc3RvcFwiLCBfb25TdG9wVHlwZWQpO1xuXG4gIGlmIChmZXRjaFJlc3BvbnNlLnJlc3BvbnNlLmhlYWRlcnMuZ2V0KFwic2Vzc2lvbi10ZXJtaW5hZGFcIikpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIFR1cmJvLmNsZWFyQ2FjaGUoKTtcbiAgICBUdXJiby52aXNpdChmZXRjaFJlc3BvbnNlLnJlc3BvbnNlLmhlYWRlcnMuZ2V0KFwiVHVyYm8tTG9jYXRpb25cIikpO1xuICB9IGVsc2UgaWYgKGZldGNoUmVzcG9uc2UucmVzcG9uc2UuaGVhZGVycy5nZXQoXCJwcm9jZXNhbmRvLXBhZ29cIikpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9IGVsc2UgaWYgKGZldGNoUmVzcG9uc2UucmVzcG9uc2UuaGVhZGVycy5nZXQoXCJlcnJvci1wYWdvXCIpKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBsb2FkaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0dXJiby1sb2FkaW5nXCIpO1xuICAgIGlmIChsb2FkaW5nKSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInR1cmJvLWxvYWRpbmdcIikuY2xhc3NMaXN0LnJlbW92ZShcIiFmbGV4XCIpO1xuICAgIH1cblxuICAgIHdpbmRvdy5zY3JvbGxUbyh7IHRvcDogMCwgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBfb25TdG9wVHlwZWQoeyBkZXRhaWw6IHsgdHlwZWQgfSB9KSB7XG4gIHR5cGVkLnN0b3AoKTtcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInR1cmJvOmZyYW1lLWxvYWRcIiwgKGV2ZW50KSA9PiB7XG4gIGNvbnN0IGxvYWRpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInR1cmJvLWxvYWRpbmdcIik7XG4gIGlmIChsb2FkaW5nKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0dXJiby1sb2FkaW5nXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCIhZmxleFwiKTtcbiAgfVxufSk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiQ29udHJvbGxlciIsInN0ZXBVcEZvcm0iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdWJtaXQiLCJnZXRFbGVtZW50QnlJZCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImxvYWRpbmciLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInRvcCIsImJlaGF2aW9yIiwiZXZlbnRTb3VyY2UiLCJFdmVudFNvdXJjZSIsImNoYWxsZW5nZVJlc3BvbnNlVmFsdWUiLCJvbm1lc3NhZ2UiLCJldmVudCIsImFkZCIsImZvcm0iLCJjcmVhdGVFbGVtZW50IiwiYWN0aW9uIiwiYXV0aGVudGljYXRpb25WYWxpZGF0aW9uUm91dGVWYWx1ZSIsIm1ldGhvZCIsImlkIiwicmVzcG9uc2UiLCJKU09OIiwicGFyc2UiLCJkYXRhIiwia2V5IiwiZWxlbWVudCIsInZhbHVlIiwibmFtZSIsInR5cGUiLCJhcHBlbmQiLCJmb3JtX3ZpZWpvIiwiYXBwZW5kQ2hpbGQiLCJyZXF1ZXN0U3VibWl0IiwiY2hhbGxlbmdlUmVzcG9uc2UiLCJTdHJpbmciLCJhdXRoZW50aWNhdGlvblZhbGlkYXRpb25Sb3V0ZSIsIl9vblByZUNvbm5lY3QiLCJiaW5kIiwiX29uQ29ubmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGV0YWlsIiwib3B0aW9ucyIsIm9uQ2hhbmdlIiwidG9tU2VsZWN0IiwiYmx1ciIsImhpZGVTZWxlY3RlZCIsImN1cnJlbnRUYXJnZXQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJmcmFtZSIsInNyYyIsImRhdGFzZXQiLCJwcm92aW5jaWFzUnV0YSIsImNvbnNvbGUiLCJsb2ciLCJtdW5pY2lwaW9zUnV0YSIsInZpc2l0IiwiZm9ybVRhcmdldCIsInBheWVyQXV0aGVudGljYXRpb25DaGVja0Vucm9sbG1lbnRVcmwiLCJwYXllckF1dGhlbnRpY2F0aW9uQ2hlY2tFbnJvbGxtZW50VXJsVmFsdWUiLCJjb21wbGV0ZSIsIm9yaWdpbiIsInVybCIsImVycm9yU2VydmVyU2VudEV2ZW50VXJsVmFsdWUiLCJzZXRUaW1lb3V0IiwiZmV0Y2giLCJ0aGVuIiwiZXJyb3JTZXJ2ZXJTZW50RXZlbnRVcmwiLCJnc2FwIiwiaGFzU2xpZGVyVGFyZ2V0Iiwic2xpZGVyIiwidGltZWxpbmUiLCJyZXBlYXQiLCJ5b3lvIiwiZGVsYXkiLCJpIiwic2xpZGVyVGFyZ2V0IiwiY2hpbGRyZW4iLCJsZW5ndGgiLCJ0byIsIngiLCJ5IiwiZGlzcGxheSIsInJvdGF0aW9uIiwiZHVyYXRpb24iLCJwbGF5Iiwic3RvcCIsInBhdXNlZCIsImltYWdlcyIsIlR5cGVkIiwic3RyaW5ncyIsInN0cmluZ3NWYWx1ZSIsInR5cGVTcGVlZCIsInR5cGVTcGVlZFZhbHVlIiwic21hcnRCYWNrc3BhY2UiLCJzbWFydEJhY2tzcGFjZVZhbHVlIiwic3RhcnREZWxheSIsInN0YXJ0RGVsYXlWYWx1ZSIsImJhY2tTcGVlZCIsImJhY2tTcGVlZFZhbHVlIiwic2h1ZmZsZSIsInNodWZmbGVWYWx1ZSIsImJhY2tEZWxheSIsImJhY2tEZWxheVZhbHVlIiwiZmFkZU91dCIsImZhZGVPdXRWYWx1ZSIsImZhZGVPdXRDbGFzcyIsImZhZGVPdXRDbGFzc1ZhbHVlIiwiZmFkZU91dERlbGF5IiwiZmFkZU91dERlbGF5VmFsdWUiLCJsb29wIiwibG9vcFZhbHVlIiwibG9vcENvdW50IiwibG9vcENvdW50VmFsdWUiLCJzaG93Q3Vyc29yIiwic2hvd0N1cnNvclZhbHVlIiwiY3Vyc29yQ2hhciIsImN1cnNvckNoYXJWYWx1ZSIsImF1dG9JbnNlcnRDc3MiLCJhdXRvSW5zZXJ0Q3NzVmFsdWUiLCJhdHRyIiwiYXR0clZhbHVlIiwiYmluZElucHV0Rm9jdXNFdmVudHMiLCJiaW5kSW5wdXRGb2N1c0V2ZW50c1ZhbHVlIiwiY29udGVudFR5cGUiLCJjb250ZW50VHlwZVZhbHVlIiwib25TdG9wIiwidCIsInR5cGVfcGxhY2Vob2xkZXIiLCJvbkNvbXBsZXRlIiwidHlwZWQiLCJkZXN0cm95IiwiQ3VzdG9tRXZlbnQiLCJkaXNwYXRjaEV2ZW50IiwiQXJyYXkiLCJOdW1iZXIiLCJCb29sZWFuIiwiSW5maW5pdHkiLCJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwicmVxdWlyZSIsImNvbnRleHQiLCJUdXJibyIsIl9vblN0b3BUeXBlZCIsImZyYW1lSWQiLCJmZXRjaE9wdGlvbnMiLCJoZWFkZXJzIiwibm9sb2FkaW5nIiwiZmV0Y2hSZXNwb25zZSIsImdldCIsInByZXZlbnREZWZhdWx0IiwiY2xlYXJDYWNoZSJdLCJzb3VyY2VSb290IjoiIn0=