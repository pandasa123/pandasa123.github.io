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
    style: {
      paddingRight: '8px'
    },
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
    className: "icon",
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

/***/ }),

/***/ "./node_modules/mdi-react/WeatherNightIcon.js":
/*!****************************************************!*\
  !*** ./node_modules/mdi-react/WeatherNightIcon.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var WeatherNightIcon = function WeatherNightIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === undefined ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === undefined ? 24 : _ref$size,
      children = _ref.children,
      props = objectWithoutProperties(_ref, ['color', 'size', 'children']);

  var className = 'mdi-icon ' + (props.className || '');

  return React.createElement(
    'svg',
    _extends({}, props, { className: className, width: size, height: size, fill: color, viewBox: '0 0 24 24' }),
    React.createElement('path', { d: 'M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z' })
  );
};

var WeatherNightIcon$1 = React.memo ? React.memo(WeatherNightIcon) : WeatherNightIcon;

module.exports = WeatherNightIcon$1;


/***/ })

})
//# sourceMappingURL=index.js.7865dae6d6c6c7d6f260.hot-update.js.map