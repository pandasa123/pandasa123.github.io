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
      lineNumber: 9
    },
    __self: this
  });
  var moon = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    alt: "Moon Icon",
    src: "/static/nightLight/moon.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  });

  if (props.theme) {
    sun = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      alt: "Sun Icon",
      src: "/static/nightLight/sun-white.svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    });
    moon = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      alt: "Moon Icon",
      src: "/static/nightLight/moon-white.svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    });
  }

  var setToggle = function setToggle(e) {
    props.toggle(e.target.checked);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "level",
    style: {
      maxWidth: '100px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "level-item",
    style: {
      paddingRight: '8px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "nightLightSwitch",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ion-icon", {
    name: "heart",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "level-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
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
      lineNumber: 30
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "nightLightSwitch",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ion-icon", {
    name: "heart",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (NightLight);

/***/ }),

/***/ "./node_modules/mdi-react/WeatherSunnyIcon.js":
/*!****************************************************!*\
  !*** ./node_modules/mdi-react/WeatherSunnyIcon.js ***!
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

var WeatherSunnyIcon = function WeatherSunnyIcon(_ref) {
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
    React.createElement('path', { d: 'M12,7C14.76,7 17,9.24 17,12C17,14.76 14.76,17 12,17C9.24,17 7,14.76 7,12C7,9.24 9.24,7 12,7M12,9C10.34,9 9,10.34 9,12C9,13.66 10.34,15 12,15C13.66,15 15,13.66 15,12C15,10.34 13.66,9 12,9M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M3.36,17L5.12,13.23C5.26,14 5.53,14.78 5.95,15.5C6.37,16.24 6.91,16.86 7.5,17.37L3.36,17M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M20.64,17L16.5,17.36C17.09,16.85 17.62,16.22 18.04,15.5C18.46,14.77 18.73,14 18.87,13.21L20.64,17M12,22L9.59,18.56C10.33,18.83 11.14,19 12,19C12.82,19 13.63,18.83 14.37,18.56L12,22Z' })
  );
};

var WeatherSunnyIcon$1 = React.memo ? React.memo(WeatherSunnyIcon) : WeatherSunnyIcon;

module.exports = WeatherSunnyIcon$1;


/***/ })

})
//# sourceMappingURL=index.js.630595f185fe05560a4d.hot-update.js.map