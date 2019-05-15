webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/NightLight.js":
/*!**********************************!*\
  !*** ./components/NightLight.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mdi_react_WeatherSunnyIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mdi-react/WeatherSunnyIcon */ "./node_modules/mdi-react/WeatherSunnyIcon.js");
/* harmony import */ var mdi_react_WeatherSunnyIcon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mdi_react_WeatherSunnyIcon__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mdi_react_WeatherNightIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mdi-react/WeatherNightIcon */ "./node_modules/mdi-react/WeatherNightIcon.js");
/* harmony import */ var mdi_react_WeatherNightIcon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mdi_react_WeatherNightIcon__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/pandasa/Documents/pandasa123.github.io/components/NightLight.js";


 // TODO: Fix vertical lineup.
// TODO: Fix jump to left on resize
// TODO: Add functional dark mode using is-dark class

var NightLight = function NightLight(props) {
  var local = !props.theme;
  var hour = new Date().getHours();

  if (hour > 19 || hour < 11) {
    props.toggle(true);
    local = false;
  }

  var setToggle = function setToggle(e) {
    props.toggle(e.target.checked);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: local ? 'columns is-mobile is-dark has-text-white' : 'columns is-mobile',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "has-text-right column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon",
    style: {
      position: 'relative',
      top: '6px',
      right: '7px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdi_react_WeatherSunnyIcon__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    id: "switchRoundedSuccess",
    type: "checkbox",
    name: "switchRoundedSuccess",
    className: "switch is-rounded is-success",
    onClick: setToggle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "switchRoundedSuccess",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon",
    style: {
      position: 'relative',
      top: '6px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdi_react_WeatherNightIcon__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (NightLight);

/***/ })

})
//# sourceMappingURL=index.js.fcdf836f8928ea591341.hot-update.js.map