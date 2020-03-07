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
        className: "jsx-2288612649",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, __jsx("ul", {
        className: "jsx-2288612649",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, this.state.cards.map(function (card, index) {
        return __jsx("li", {
          key: card.name,
          className: "jsx-2288612649" + " " + "back card-".concat(index + 1),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }, __jsx("span", {
          className: "jsx-2288612649",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        }, card.name), __jsx("span", {
          className: "jsx-2288612649" + " " + "cardNumLabel",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: this
        }, index + 1));
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "2288612649",
        __self: this
      }, "ul.jsx-2288612649{padding:0;position:relative;height:100vh;}.card-1.jsx-2288612649{position:absolute;top:250px;left:150px;}.card-2.jsx-2288612649{float:left;position:absolute;-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);top:250px;left:150px;}.card-3.jsx-2288612649{position:absolute;top:0;left:150px;}.card-4.jsx-2288612649{position:absolute;top:450px;left:150px;}.card-5.jsx-2288612649{position:absolute;top:250px;left:300px;}.card-6.jsx-2288612649{position:absolute;top:250px;left:0;}.card-7.jsx-2288612649{position:absolute;top:450px;right:0;}.card-8.jsx-2288612649{position:absolute;top:340px;right:0;}.card-9.jsx-2288612649{position:absolute;top:170px;right:0;}.card-10.jsx-2288612649{position:absolute;top:0;right:0;}.back.jsx-2288612649{background:maroon;padding:5px;margin:auto;height:150px;width:110px;list-style:none;text-align:center;}.cardNumLabel.jsx-2288612649{display:block;margin:5px;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXNzL0Rlc2t0b3AvcHJvamVjdHMvd2ViL3Rhcm90LWFwcC9wYWdlcy9ib2FyZHMvY2VsdGljLWNyb3NzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdEd0IsQUFJcUIsQUFNVSxBQU1QLEFBUU8sQUFNQSxBQU1BLEFBTUEsQUFLQSxBQUtBLEFBS0EsQUFLQSxBQU1GLEFBVUYsVUF6RUUsQ0FZRSxHQThEUCxJQXBFRCxBQWNKLEFBTUksQUFNQSxBQU1BLEFBS0EsQUFLQSxBQUtBLEFBS0osQUFNSSxNQTNDQyxBQXNDSCxDQWdCUSxHQTFFTCxBQU1BLEFBb0JBLEFBTUEsQUFNSixBQUtDLEFBS0EsQUFLQSxDQXpDZ0IsQ0FvRGQsRUFMZCxHQXRDQSxBQWtCQSxDQUtBLEFBS0EsQUFLQSxHQS9DQSxBQW9CQSxBQU1BLEVBaENBLENBZ0VlLEFBV2YsYUFWYyxZQUNHLGdCQUNHLGtCQUNwQixZQXhEYyxVQUNDLFdBQ2YiLCJmaWxlIjoiL1VzZXJzL2plc3MvRGVza3RvcC9wcm9qZWN0cy93ZWIvdGFyb3QtYXBwL3BhZ2VzL2JvYXJkcy9jZWx0aWMtY3Jvc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7Y2FyZHN9IGZyb20gXCIuLi8uLi9kYXRhL2NhcmRzXCI7XG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jYXJkcy9DYXJkXCI7XG5cblxuY29uc3QgTlVNQ0FSRFMgPSAxMDtcbmNvbnN0IE5VTURFQ0sgPSA3ODtcblxuLyoqIHdpbGwgcmV0dXJuIGEgcmFuZG9tIGludGVnZXIgYmV0d2VlbiAxIGFuZCA3OCAobnVtYmVyIG9mIHRhcm90IGNhcmRzKSAqL1xuZnVuY3Rpb24gZ2V0UmFuZG9tSW50KCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKE5VTURFQ0spKTtcbn1cblxuZnVuY3Rpb24gZ2V0UmFuZG9tQ2FyZHMoKSB7XG4gICAgbGV0IGNhcmRMaXN0ID0gW107XG4gICAgY29uc3QgY2FyZHNBcnIgPSBBcnJheS5mcm9tKGNhcmRzKTtcblxuICAgIHdoaWxlKGNhcmRMaXN0Lmxlbmd0aCA8IE5VTUNBUkRTKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gZ2V0UmFuZG9tSW50KCk7XG4gICAgICAgIGNvbnN0IGNhcmRUb0FkZCA9IGNhcmRzQXJyW2luZGV4XTtcbiAgICAgICAgaWYoISBjYXJkTGlzdC5maW5kKChzb21lQ2FyZCk9PiBzb21lQ2FyZCA9PT0gY2FyZFRvQWRkKSkge1xuICAgICAgICAgICAgY2FyZExpc3QucHVzaChjYXJkVG9BZGQpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbiAgICByZXR1cm4gY2FyZExpc3Q7XG59XG5cblxuLy8gbGV0IGN4ID0gY2xhc3NOYW1lcy5iaW5kKHN0eWxlcyk7XG5cbmNsYXNzIENlbHRpY0Nyb3NzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgdGhpcy5zdGF0ZSA9IHtjYXJkczogW119O1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBjb25zdCByZXMgPSBnZXRSYW5kb21DYXJkcygpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgIFxuICAgICAgICB0aGlzLnNldFN0YXRlKHtjYXJkczogcmVzfSk7XG4gICAgfVxuICBcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIFxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jYXJkcy5tYXAoKGNhcmQsaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17YGJhY2sgY2FyZC0ke2luZGV4KzF9YH0ga2V5PXtjYXJkLm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2NhcmQubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXJkTnVtTGFiZWxcIj57aW5kZXggKyAxfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG5cbiAgICAgICAgdWwge1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZC0xIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMjUwcHg7XG4gICAgICAgICAgICBsZWZ0OiAxNTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkLTIge1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgICAgICAgICB0b3A6IDI1MHB4O1xuICAgICAgICAgICAgbGVmdDogMTUwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZC0zIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDE1MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQtNCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDQ1MHB4O1xuICAgICAgICAgICAgbGVmdDogMTUwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZC01e1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAyNTBweDtcbiAgICAgICAgICAgIGxlZnQ6IDMwMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQtNiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDI1MHB4O1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgfVxuICAgICAgICAuY2FyZC03IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogNDUwcHg7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgfVxuICAgICAgICAuY2FyZC04IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMzQwcHg7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgfVxuICAgICAgICAuY2FyZC05IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMTcwcHg7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgfVxuICAgICAgICAuY2FyZC0xMCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5iYWNrIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBtYXJvb247XG4gICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgIHdpZHRoOiAxMTBweDtcbiAgICAgICAgICBsaXN0LXN0eWxlOm5vbmU7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmROdW1MYWJlbCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcblxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICAgICA8L2Rpdj5cbiAgICAgICAgIFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBleHBvcnQgZGVmYXVsdCBDZWx0aWNDcm9zczsiXX0= */\n/*@ sourceURL=/Users/jess/Desktop/projects/web/tarot-app/pages/boards/celtic-cross.js */"));
    }
  }]);

  return CelticCross;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (CelticCross);

/***/ })

})
//# sourceMappingURL=index.js.46209562a3412a1ab846.hot-update.js.map