webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_bulma_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/bulma.scss */ "./styles/bulma.scss");
/* harmony import */ var _styles_bulma_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_bulma_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Hello__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Hello */ "./components/Hello.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_Background__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Background */ "./components/Background.js");
/* harmony import */ var _components_Skills__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Skills */ "./components/Skills.js");
/* harmony import */ var _components_Experience__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Experience */ "./components/Experience.js");
/* harmony import */ var _components_ViewportHeader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/ViewportHeader */ "./components/ViewportHeader.js");

var _jsxFileName = "/Users/pandasa/Documents/pandasa123.github.io/pages/index.js";








 // TODO: Add favicon

var Index = function Index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      useDarkMode = _useState2[0],
      setDarkMode = _useState2[1];

  var hour = new Date().getHours();

  if (hour > 19 || hour < 11) {
    setDarkMode(false);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    document.querySelector('html').style.backgroundColor = useDarkMode === true ? 'hsl(0, 0%, 21%)' : 'white';
  });
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ViewportHeader__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    toggle: setDarkMode,
    theme: useDarkMode,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Hello__WEBPACK_IMPORTED_MODULE_3__["default"], {
    theme: useDarkMode,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Background__WEBPACK_IMPORTED_MODULE_6__["default"], {
    theme: useDarkMode,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Skills__WEBPACK_IMPORTED_MODULE_7__["default"], {
    theme: useDarkMode,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Experience__WEBPACK_IMPORTED_MODULE_8__["default"], {
    theme: useDarkMode,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    theme: useDarkMode,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.900a802619d20e9fc176.hot-update.js.map