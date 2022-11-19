"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["assets_controllers_reservacion_controller_js"],{

/***/ "./assets/controllers/reservacion_controller.js":
/*!******************************************************!*\
  !*** ./assets/controllers/reservacion_controller.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

    _defineProperty(_assertThisInitialized(_this), "paso", null);

    return _this;
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      var mensaje = document.getElementById("msg-pagando");

      if (mensaje) {
        mensaje.classList.add("hidden");
      }

      if (this.pasoValue) {
        this.blur();
        this.sliderStop(true);
      } else {
        this.blur(false);
        this.sliderStop(false);
      }

      this.paso = this.pasoValue;
    }
  }, {
    key: "sliderStop",
    value: function sliderStop(stop) {
      this.dispatch("slider", {
        detail: {
          stop: stop
        }
      });
    }
  }, {
    key: "setPaso",
    value: function setPaso(event) {
      console.log(event.detail.paso);
      event.preventDefault();

      if (this.hasAlertTarget && event.detail.paso != 0 && this.alertTarget) {
        this.alertTarget.classList.add("hidden");
      }

      if (this.paso == event.detail.paso) {
        return;
      }

      var paso = event.detail.paso;
      this.paso = paso;
      this.blur(paso);
      this.sliderStop(paso);

      if (this.pasosTarget.querySelector(".active") && typeof this.pasosTarget.querySelector(".active") != "undefined") {
        this.pasosTarget.querySelector(".active").classList.remove("active");
      }

      if (paso > 0 && this.pasosTarget.children[paso - 1]) {
        this.pasosTarget.children[paso - 1].classList.add("complete");

        if (paso == 4) {
          this.blur(false);
          this.sliderStop(false);
        }
      }

      if (_typeof(this.pasosTarget.children[paso]) && typeof this.pasosTarget.children[paso] != "undefined") {
        this.pasosTarget.children[paso].classList.remove("complete");
        this.pasosTarget.children[paso].classList.add("active");
      }
    }
  }, {
    key: "blur",
    value: function blur() {
      var add = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (add) {
        document.querySelector("main").classList.add("reservando");
      } else {
        document.querySelector("main").classList.remove("reservando");
      }
    }
  }]);

  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_15__.Controller);

_defineProperty(_default, "targets", ["pasos", "alert"]);

_defineProperty(_default, "values", {
  paso: Number
});



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzX2NvbnRyb2xsZXJzX3Jlc2VydmFjaW9uX2NvbnRyb2xsZXJfanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJEQU1TOzs7Ozs7O1dBQ1AsbUJBQVU7TUFDUixJQUFNQyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixhQUF4QixDQUFoQjs7TUFDQSxJQUFJRixPQUFKLEVBQWE7UUFDWEEsT0FBTyxDQUFDRyxTQUFSLENBQWtCQyxHQUFsQixDQUFzQixRQUF0QjtNQUNEOztNQUNELElBQUksS0FBS0MsU0FBVCxFQUFvQjtRQUNsQixLQUFLQyxJQUFMO1FBQ0EsS0FBS0MsVUFBTCxDQUFnQixJQUFoQjtNQUNELENBSEQsTUFHTztRQUNMLEtBQUtELElBQUwsQ0FBVSxLQUFWO1FBQ0EsS0FBS0MsVUFBTCxDQUFnQixLQUFoQjtNQUNEOztNQUVELEtBQUtDLElBQUwsR0FBWSxLQUFLSCxTQUFqQjtJQUNEOzs7V0FFRCxvQkFBV0ksSUFBWCxFQUFpQjtNQUNmLEtBQUtDLFFBQUwsQ0FBYyxRQUFkLEVBQXdCO1FBQUVDLE1BQU0sRUFBRTtVQUFFRixJQUFJLEVBQUVBO1FBQVI7TUFBVixDQUF4QjtJQUNEOzs7V0FFRCxpQkFBUUcsS0FBUixFQUFlO01BQ2JDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFLLENBQUNELE1BQU4sQ0FBYUgsSUFBekI7TUFDQUksS0FBSyxDQUFDRyxjQUFOOztNQUNBLElBQUksS0FBS0MsY0FBTCxJQUF1QkosS0FBSyxDQUFDRCxNQUFOLENBQWFILElBQWIsSUFBcUIsQ0FBNUMsSUFBaUQsS0FBS1MsV0FBMUQsRUFBdUU7UUFDckUsS0FBS0EsV0FBTCxDQUFpQmQsU0FBakIsQ0FBMkJDLEdBQTNCLENBQStCLFFBQS9CO01BQ0Q7O01BRUQsSUFBSSxLQUFLSSxJQUFMLElBQWFJLEtBQUssQ0FBQ0QsTUFBTixDQUFhSCxJQUE5QixFQUFvQztRQUNsQztNQUNEOztNQUNELElBQU1BLElBQUksR0FBR0ksS0FBSyxDQUFDRCxNQUFOLENBQWFILElBQTFCO01BQ0EsS0FBS0EsSUFBTCxHQUFZQSxJQUFaO01BQ0EsS0FBS0YsSUFBTCxDQUFVRSxJQUFWO01BQ0EsS0FBS0QsVUFBTCxDQUFnQkMsSUFBaEI7O01BRUEsSUFDRSxLQUFLVSxXQUFMLENBQWlCQyxhQUFqQixDQUErQixTQUEvQixLQUNBLE9BQU8sS0FBS0QsV0FBTCxDQUFpQkMsYUFBakIsQ0FBK0IsU0FBL0IsQ0FBUCxJQUFvRCxXQUZ0RCxFQUdFO1FBQ0EsS0FBS0QsV0FBTCxDQUFpQkMsYUFBakIsQ0FBK0IsU0FBL0IsRUFBMENoQixTQUExQyxDQUFvRGlCLE1BQXBELENBQTJELFFBQTNEO01BQ0Q7O01BQ0QsSUFBSVosSUFBSSxHQUFHLENBQVAsSUFBWSxLQUFLVSxXQUFMLENBQWlCRyxRQUFqQixDQUEwQmIsSUFBSSxHQUFHLENBQWpDLENBQWhCLEVBQXFEO1FBQ25ELEtBQUtVLFdBQUwsQ0FBaUJHLFFBQWpCLENBQTBCYixJQUFJLEdBQUcsQ0FBakMsRUFBb0NMLFNBQXBDLENBQThDQyxHQUE5QyxDQUFrRCxVQUFsRDs7UUFDQSxJQUFJSSxJQUFJLElBQUksQ0FBWixFQUFlO1VBQ2IsS0FBS0YsSUFBTCxDQUFVLEtBQVY7VUFDQSxLQUFLQyxVQUFMLENBQWdCLEtBQWhCO1FBQ0Q7TUFDRjs7TUFDRCxJQUNFLFFBQU8sS0FBS1csV0FBTCxDQUFpQkcsUUFBakIsQ0FBMEJiLElBQTFCLENBQVAsS0FDQSxPQUFPLEtBQUtVLFdBQUwsQ0FBaUJHLFFBQWpCLENBQTBCYixJQUExQixDQUFQLElBQTBDLFdBRjVDLEVBR0U7UUFDQSxLQUFLVSxXQUFMLENBQWlCRyxRQUFqQixDQUEwQmIsSUFBMUIsRUFBZ0NMLFNBQWhDLENBQTBDaUIsTUFBMUMsQ0FBaUQsVUFBakQ7UUFDQSxLQUFLRixXQUFMLENBQWlCRyxRQUFqQixDQUEwQmIsSUFBMUIsRUFBZ0NMLFNBQWhDLENBQTBDQyxHQUExQyxDQUE4QyxRQUE5QztNQUNEO0lBQ0Y7OztXQUVELGdCQUFpQjtNQUFBLElBQVpBLEdBQVksdUVBQU4sSUFBTTs7TUFDZixJQUFJQSxHQUFKLEVBQVM7UUFDUEgsUUFBUSxDQUFDa0IsYUFBVCxDQUF1QixNQUF2QixFQUErQmhCLFNBQS9CLENBQXlDQyxHQUF6QyxDQUE2QyxZQUE3QztNQUNELENBRkQsTUFFTztRQUNMSCxRQUFRLENBQUNrQixhQUFULENBQXVCLE1BQXZCLEVBQStCaEIsU0FBL0IsQ0FBeUNpQixNQUF6QyxDQUFnRCxZQUFoRDtNQUNEO0lBQ0Y7Ozs7RUFyRTBCckI7O3FDQUNWLENBQUMsT0FBRCxFQUFVLE9BQVY7O29DQUNEO0VBQ2RTLElBQUksRUFBRWM7QUFEUSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9yZXNlcnZhY2lvbl9jb250cm9sbGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tIFwiQGhvdHdpcmVkL3N0aW11bHVzXCI7XG4vKlxuICogVGhlIGZvbGxvd2luZyBsaW5lIG1ha2VzIHRoaXMgY29udHJvbGxlciBcImxhenlcIjogaXQgd29uJ3QgYmUgZG93bmxvYWRlZCB1bnRpbCBuZWVkZWRcbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UjbGF6eS1jb250cm9sbGVyc1xuICovXG4vKiBzdGltdWx1c0ZldGNoOiAnbGF6eScgKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gIHN0YXRpYyB0YXJnZXRzID0gW1wicGFzb3NcIiwgXCJhbGVydFwiXTtcbiAgc3RhdGljIHZhbHVlcyA9IHtcbiAgICBwYXNvOiBOdW1iZXIsXG4gIH07XG4gIHBhc28gPSBudWxsO1xuICBjb25uZWN0KCkge1xuICAgIGNvbnN0IG1lbnNhamUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1zZy1wYWdhbmRvXCIpO1xuICAgIGlmIChtZW5zYWplKSB7XG4gICAgICBtZW5zYWplLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgfVxuICAgIGlmICh0aGlzLnBhc29WYWx1ZSkge1xuICAgICAgdGhpcy5ibHVyKCk7XG4gICAgICB0aGlzLnNsaWRlclN0b3AodHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYmx1cihmYWxzZSk7XG4gICAgICB0aGlzLnNsaWRlclN0b3AoZmFsc2UpO1xuICAgIH1cblxuICAgIHRoaXMucGFzbyA9IHRoaXMucGFzb1ZhbHVlO1xuICB9XG5cbiAgc2xpZGVyU3RvcChzdG9wKSB7XG4gICAgdGhpcy5kaXNwYXRjaChcInNsaWRlclwiLCB7IGRldGFpbDogeyBzdG9wOiBzdG9wIH0gfSk7XG4gIH1cblxuICBzZXRQYXNvKGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coZXZlbnQuZGV0YWlsLnBhc28pO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKHRoaXMuaGFzQWxlcnRUYXJnZXQgJiYgZXZlbnQuZGV0YWlsLnBhc28gIT0gMCAmJiB0aGlzLmFsZXJ0VGFyZ2V0KSB7XG4gICAgICB0aGlzLmFsZXJ0VGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucGFzbyA9PSBldmVudC5kZXRhaWwucGFzbykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBwYXNvID0gZXZlbnQuZGV0YWlsLnBhc287XG4gICAgdGhpcy5wYXNvID0gcGFzbztcbiAgICB0aGlzLmJsdXIocGFzbyk7XG4gICAgdGhpcy5zbGlkZXJTdG9wKHBhc28pO1xuXG4gICAgaWYgKFxuICAgICAgdGhpcy5wYXNvc1RhcmdldC5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZVwiKSAmJlxuICAgICAgdHlwZW9mIHRoaXMucGFzb3NUYXJnZXQucXVlcnlTZWxlY3RvcihcIi5hY3RpdmVcIikgIT0gXCJ1bmRlZmluZWRcIlxuICAgICkge1xuICAgICAgdGhpcy5wYXNvc1RhcmdldC5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgICBpZiAocGFzbyA+IDAgJiYgdGhpcy5wYXNvc1RhcmdldC5jaGlsZHJlbltwYXNvIC0gMV0pIHtcbiAgICAgIHRoaXMucGFzb3NUYXJnZXQuY2hpbGRyZW5bcGFzbyAtIDFdLmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0ZVwiKTtcbiAgICAgIGlmIChwYXNvID09IDQpIHtcbiAgICAgICAgdGhpcy5ibHVyKGZhbHNlKTtcbiAgICAgICAgdGhpcy5zbGlkZXJTdG9wKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKFxuICAgICAgdHlwZW9mIHRoaXMucGFzb3NUYXJnZXQuY2hpbGRyZW5bcGFzb10gJiZcbiAgICAgIHR5cGVvZiB0aGlzLnBhc29zVGFyZ2V0LmNoaWxkcmVuW3Bhc29dICE9IFwidW5kZWZpbmVkXCJcbiAgICApIHtcbiAgICAgIHRoaXMucGFzb3NUYXJnZXQuY2hpbGRyZW5bcGFzb10uY2xhc3NMaXN0LnJlbW92ZShcImNvbXBsZXRlXCIpO1xuICAgICAgdGhpcy5wYXNvc1RhcmdldC5jaGlsZHJlbltwYXNvXS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgfVxuXG4gIGJsdXIoYWRkID0gdHJ1ZSkge1xuICAgIGlmIChhZGQpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpLmNsYXNzTGlzdC5hZGQoXCJyZXNlcnZhbmRvXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKS5jbGFzc0xpc3QucmVtb3ZlKFwicmVzZXJ2YW5kb1wiKTtcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwibWVuc2FqZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGFzc0xpc3QiLCJhZGQiLCJwYXNvVmFsdWUiLCJibHVyIiwic2xpZGVyU3RvcCIsInBhc28iLCJzdG9wIiwiZGlzcGF0Y2giLCJkZXRhaWwiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJwcmV2ZW50RGVmYXVsdCIsImhhc0FsZXJ0VGFyZ2V0IiwiYWxlcnRUYXJnZXQiLCJwYXNvc1RhcmdldCIsInF1ZXJ5U2VsZWN0b3IiLCJyZW1vdmUiLCJjaGlsZHJlbiIsIk51bWJlciJdLCJzb3VyY2VSb290IjoiIn0=