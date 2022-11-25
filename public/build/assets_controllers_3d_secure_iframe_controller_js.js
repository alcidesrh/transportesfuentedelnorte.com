"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["assets_controllers_3d_secure_iframe_controller_js"],{

/***/ "./assets/controllers/3d_secure_iframe_controller.js":
/*!***********************************************************!*\
  !*** ./assets/controllers/3d_secure_iframe_controller.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
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


/*
 * The following line makes this controller "lazy": it won't be downloaded until needed
 * See https://github.com/symfony/stimulus-bridge#lazy-controllers
 */

/* stimulusFetch: 'lazy' */

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
      var ddcForm = document.querySelector("#ddc-form");

      if (ddcForm) {
        // ddc form exists
        ddcForm.submit();
      }

      window.addEventListener("message", function (event) {
        //{MessageType: "profile.completed", Session Id: "0_57f063fd-659a-4779-b45b-9e456fdb7935", Status: true}
        console.log(event);

        if (event.origin === "https://centinelapistag.cardinalcommerce.com") {
          var _data = JSON.parse(event.data);

          console.log("Merchant received a message:", _data);
        }

        if (data !== undefined && data.Status) {
          console.log("Songbird ran DF successfully");
        }
      }, false);
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      // You should always remove listeners when the controller is disconnected to avoid side-effects
      window.removeEventListener("message", function () {});
    }
  }]);

  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_13__.Controller);



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzX2NvbnRyb2xsZXJzXzNkX3NlY3VyZV9pZnJhbWVfY29udHJvbGxlcl9qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O1dBRUUsbUJBQVU7TUFDUixJQUFJQyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixXQUF2QixDQUFkOztNQUNBLElBQUlGLE9BQUosRUFBYTtRQUNYO1FBQ0FBLE9BQU8sQ0FBQ0csTUFBUjtNQUNEOztNQUNEQyxNQUFNLENBQUNDLGdCQUFQLENBQ0UsU0FERixFQUVFLFVBQUNDLEtBQUQsRUFBVztRQUNUO1FBQ0FDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaOztRQUNBLElBQUlBLEtBQUssQ0FBQ0csTUFBTixLQUFpQiw4Q0FBckIsRUFBcUU7VUFDbkUsSUFBSUMsS0FBSSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV04sS0FBSyxDQUFDSSxJQUFqQixDQUFYOztVQUNBSCxPQUFPLENBQUNDLEdBQVIsQ0FBWSw4QkFBWixFQUE0Q0UsS0FBNUM7UUFDRDs7UUFDRCxJQUFJQSxJQUFJLEtBQUtHLFNBQVQsSUFBc0JILElBQUksQ0FBQ0ksTUFBL0IsRUFBdUM7VUFDckNQLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDhCQUFaO1FBQ0Q7TUFDRixDQVpILEVBYUUsS0FiRjtJQWVEOzs7V0FFRCxzQkFBYTtNQUNYO01BQ0FKLE1BQU0sQ0FBQ1csbUJBQVAsQ0FBMkIsU0FBM0IsRUFBc0MsWUFBTSxDQUFFLENBQTlDO0lBQ0Q7Ozs7RUEzQjBCaEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvM2Rfc2VjdXJlX2lmcmFtZV9jb250cm9sbGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tIFwiQGhvdHdpcmVkL3N0aW11bHVzXCI7XG5cbi8qXG4gKiBUaGUgZm9sbG93aW5nIGxpbmUgbWFrZXMgdGhpcyBjb250cm9sbGVyIFwibGF6eVwiOiBpdCB3b24ndCBiZSBkb3dubG9hZGVkIHVudGlsIG5lZWRlZFxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9zeW1mb255L3N0aW11bHVzLWJyaWRnZSNsYXp5LWNvbnRyb2xsZXJzXG4gKi9cbi8qIHN0aW11bHVzRmV0Y2g6ICdsYXp5JyAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgY29ubmVjdCgpIHtcbiAgICB2YXIgZGRjRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGRjLWZvcm1cIik7XG4gICAgaWYgKGRkY0Zvcm0pIHtcbiAgICAgIC8vIGRkYyBmb3JtIGV4aXN0c1xuICAgICAgZGRjRm9ybS5zdWJtaXQoKTtcbiAgICB9XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcIm1lc3NhZ2VcIixcbiAgICAgIChldmVudCkgPT4ge1xuICAgICAgICAvL3tNZXNzYWdlVHlwZTogXCJwcm9maWxlLmNvbXBsZXRlZFwiLCBTZXNzaW9uIElkOiBcIjBfNTdmMDYzZmQtNjU5YS00Nzc5LWI0NWItOWU0NTZmZGI3OTM1XCIsIFN0YXR1czogdHJ1ZX1cbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xuICAgICAgICBpZiAoZXZlbnQub3JpZ2luID09PSBcImh0dHBzOi8vY2VudGluZWxhcGlzdGFnLmNhcmRpbmFsY29tbWVyY2UuY29tXCIpIHtcbiAgICAgICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJNZXJjaGFudCByZWNlaXZlZCBhIG1lc3NhZ2U6XCIsIGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhICE9PSB1bmRlZmluZWQgJiYgZGF0YS5TdGF0dXMpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlNvbmdiaXJkIHJhbiBERiBzdWNjZXNzZnVsbHlcIik7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmYWxzZVxuICAgICk7XG4gIH1cblxuICBkaXNjb25uZWN0KCkge1xuICAgIC8vIFlvdSBzaG91bGQgYWx3YXlzIHJlbW92ZSBsaXN0ZW5lcnMgd2hlbiB0aGUgY29udHJvbGxlciBpcyBkaXNjb25uZWN0ZWQgdG8gYXZvaWQgc2lkZS1lZmZlY3RzXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsICgpID0+IHt9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJkZGNGb3JtIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic3VibWl0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsIm9yaWdpbiIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJ1bmRlZmluZWQiLCJTdGF0dXMiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==