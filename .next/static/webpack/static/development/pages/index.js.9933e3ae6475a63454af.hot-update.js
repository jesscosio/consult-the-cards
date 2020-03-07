webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/boards/celtic-cross.js":
/*!**************************************!*\
  !*** ./pages/boards/celtic-cross.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _data_cards__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../data/cards */ "./data/cards.json");
var _data_cards__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data/cards */ "./data/cards.json", 1);
/* harmony import */ var _components_cards_Card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/cards/Card */ "./components/cards/Card.js");






var _jsxFileName = "/Users/jess/Desktop/projects/web/tarot-app/pages/boards/celtic-cross.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;


var NUMCARDS = 10;
var NUMDECK = 78;
/** will return a random integer between 1 and 78 (number of tarot cards) */

function getRandomInt() {
  return Math.floor(Math.random() * Math.floor(NUMDECK));
}

function getRandomCards() {
  var cardList = [];

  var cardsArr = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_5___default()(_data_cards__WEBPACK_IMPORTED_MODULE_8__["cards"]);

  var _loop = function _loop() {
    var index = getRandomInt();
    var cardToAdd = cardsArr[index];

    if (!cardList.find(function (someCard) {
      return someCard === cardToAdd;
    })) {
      cardList.push(cardToAdd);
    }
  };

  while (cardList.length < NUMCARDS) {
    _loop();
  }

  return cardList;
} // let cx = classNames.bind(styles);


var CelticCross =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(CelticCross, _React$Component);

  function CelticCross(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CelticCross);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CelticCross).call(this, props));
    _this.state = {
      cards: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CelticCross, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var res = getRandomCards();
      console.log(res);
      this.setState({
        cards: res
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "jsx-2459409963",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, __jsx("ul", {
        className: "jsx-2459409963",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, this.state.cards.map(function (card, index) {
        return __jsx("li", {
          key: card.name,
          className: "jsx-2459409963" + " " + "back",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }, __jsx("span", {
          className: "jsx-2459409963",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        }, card.name), __jsx("span", {
          className: "jsx-2459409963" + " " + "cardNumLabel",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: this
        }, index));
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "2459409963",
        __self: this
      }, "ul.jsx-2459409963{padding:0;}.back.jsx-2459409963{background:maroon;padding:5px;margin:5px;height:150px;width:110px;list-style:none;}.cardNumLabel.jsx-2459409963{display:block;margin:5px;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXNzL0Rlc2t0b3AvcHJvamVjdHMvd2ViL3Rhcm90LWFwcC9wYWdlcy9ib2FyZHMvY2VsdGljLWNyb3NzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdEd0IsQUFJcUIsQUFJUSxBQVVGLFVBYmxCLElBY2UsSUFWRCxPQVdNLEtBVlAsV0FDRSxDQVdmLFlBVmMsWUFDRyxnQkFDakIiLCJmaWxlIjoiL1VzZXJzL2plc3MvRGVza3RvcC9wcm9qZWN0cy93ZWIvdGFyb3QtYXBwL3BhZ2VzL2JvYXJkcy9jZWx0aWMtY3Jvc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7Y2FyZHN9IGZyb20gXCIuLi8uLi9kYXRhL2NhcmRzXCI7XG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jYXJkcy9DYXJkXCI7XG5cblxuY29uc3QgTlVNQ0FSRFMgPSAxMDtcbmNvbnN0IE5VTURFQ0sgPSA3ODtcblxuLyoqIHdpbGwgcmV0dXJuIGEgcmFuZG9tIGludGVnZXIgYmV0d2VlbiAxIGFuZCA3OCAobnVtYmVyIG9mIHRhcm90IGNhcmRzKSAqL1xuZnVuY3Rpb24gZ2V0UmFuZG9tSW50KCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKE5VTURFQ0spKTtcbn1cblxuZnVuY3Rpb24gZ2V0UmFuZG9tQ2FyZHMoKSB7XG4gICAgbGV0IGNhcmRMaXN0ID0gW107XG4gICAgY29uc3QgY2FyZHNBcnIgPSBBcnJheS5mcm9tKGNhcmRzKTtcblxuICAgIHdoaWxlKGNhcmRMaXN0Lmxlbmd0aCA8IE5VTUNBUkRTKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gZ2V0UmFuZG9tSW50KCk7XG4gICAgICAgIGNvbnN0IGNhcmRUb0FkZCA9IGNhcmRzQXJyW2luZGV4XTtcbiAgICAgICAgaWYoISBjYXJkTGlzdC5maW5kKChzb21lQ2FyZCk9PiBzb21lQ2FyZCA9PT0gY2FyZFRvQWRkKSkge1xuICAgICAgICAgICAgY2FyZExpc3QucHVzaChjYXJkVG9BZGQpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbiAgICByZXR1cm4gY2FyZExpc3Q7XG59XG5cblxuLy8gbGV0IGN4ID0gY2xhc3NOYW1lcy5iaW5kKHN0eWxlcyk7XG5cbmNsYXNzIENlbHRpY0Nyb3NzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgdGhpcy5zdGF0ZSA9IHtjYXJkczogW119O1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBjb25zdCByZXMgPSBnZXRSYW5kb21DYXJkcygpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgIFxuICAgICAgICB0aGlzLnNldFN0YXRlKHtjYXJkczogcmVzfSk7XG4gICAgfVxuICBcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIFxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jYXJkcy5tYXAoKGNhcmQsaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJhY2tcIiBrZXk9e2NhcmQubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57Y2FyZC5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcmROdW1MYWJlbFwiPntpbmRleH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAgIHVsIHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJhY2sge1xuICAgICAgICAgIGJhY2tncm91bmQ6IG1hcm9vbjtcbiAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgICB3aWR0aDogMTEwcHg7XG4gICAgICAgICAgbGlzdC1zdHlsZTpub25lO1xuICAgICAgICB9XG5cblxuICAgICAgICAuY2FyZE51bUxhYmVsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDpib2xkO1xuXG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgIDwvZGl2PlxuICAgICAgICAgXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBkZWZhdWx0IENlbHRpY0Nyb3NzOyJdfQ== */\n/*@ sourceURL=/Users/jess/Desktop/projects/web/tarot-app/pages/boards/celtic-cross.js */"));
    }
  }]);

  return CelticCross;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (CelticCross);

/***/ })

})
//# sourceMappingURL=index.js.9933e3ae6475a63454af.hot-update.js.map