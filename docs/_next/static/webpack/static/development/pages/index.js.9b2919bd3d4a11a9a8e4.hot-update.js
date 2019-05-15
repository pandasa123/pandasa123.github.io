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
  var theme = props.theme;
  var hour = new Date().getHours();

  if (hour > 19 || hour < 8) {
    theme = true;
  }

  var setToggle = function setToggle(e) {
    props.toggle(e.target.checked);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: props.theme ? 'columns is-mobile is-dark has-text-white' : 'columns is-mobile',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "has-text-right column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
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
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdi_react_WeatherSunnyIcon__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
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
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "switchRoundedSuccess",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
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
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdi_react_WeatherNightIcon__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (NightLight);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_bulma_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/bulma.scss */ "./styles/bulma.scss");
/* harmony import */ var _styles_bulma_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_bulma_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Hello__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Hello */ "./components/Hello.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_Background__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Background */ "./components/Background.js");
/* harmony import */ var _components_Skills__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Skills */ "./components/Skills.js");
/* harmony import */ var _components_Experience__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Experience */ "./components/Experience.js");
/* harmony import */ var _components_ViewportHeader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/ViewportHeader */ "./components/ViewportHeader.js");





var _jsxFileName = "/Users/pandasa/Documents/pandasa123.github.io/pages/index.js";








 // TODO: Add favicon

var theme = false;

var toggleTheme = function toggleTheme(newTheme) {
  theme = newTheme;
  alert(theme);
};

var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Index, _React$Component);

  function Index() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Index).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.querySelector('html').style.backgroundColor = theme === true ? 'hsl(0, 0%, 21%)' : 'white';
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_ViewportHeader__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_8__["default"], {
        toggle: toggleTheme,
        theme: theme,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Hello__WEBPACK_IMPORTED_MODULE_7__["default"], {
        theme: theme,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Background__WEBPACK_IMPORTED_MODULE_10__["default"], {
        theme: theme,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Skills__WEBPACK_IMPORTED_MODULE_11__["default"], {
        theme: theme,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Experience__WEBPACK_IMPORTED_MODULE_12__["default"], {
        theme: theme,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_9__["default"], {
        theme: theme,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.9b2919bd3d4a11a9a8e4.hot-update.js.map