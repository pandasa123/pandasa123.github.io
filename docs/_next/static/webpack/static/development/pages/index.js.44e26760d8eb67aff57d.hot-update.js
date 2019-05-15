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
  var sun = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    alt: "Sun Icon",
    src: "/static/nightLight/sun.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  });
  var moon = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    alt: "Moon Icon",
    src: "/static/nightLight/moon.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  });

  if (props.theme) {
    sun = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      alt: "Sun Icon",
      src: "/static/nightLight/sun-white.svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    });
    moon = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      alt: "Moon Icon",
      src: "/static/nightLight/moon-white.svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    });
  }

  var setToggle = function setToggle(e) {
    props.toggle(e.target.checked);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: props.theme ? 'level is-dark' : 'level',
    style: {
      maxWidth: '100px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "level-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "nightLightSwitch",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon has-text-white",
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
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "level-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    id: "nightLightSwitch",
    type: "checkbox",
    name: "nightLightSwitch",
    className: "switch is-rounded is-success",
    onClick: setToggle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "nightLightSwitch",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdi_react_WeatherNightIcon__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (NightLight);

/***/ })

})
//# sourceMappingURL=index.js.44e26760d8eb67aff57d.hot-update.js.map