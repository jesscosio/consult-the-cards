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
}

var CelticCross =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(CelticCross, _React$Component);

  function CelticCross(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CelticCross);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CelticCross).call(this, props));
    _this.state = {
      cards: [],
      flipIndex: 0
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
    key: "flipCard",
    value: function flipCard() {
      this.setState({
        flipIndex: this.flipIndex + 1
      });
      document.getElementsByClassName('card-' + this.flipIndex[0]).style.display = "inherit";
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx("div", {
        className: "jsx-335163945",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, __jsx("ul", {
        onClick: function onClick() {
          return _this2.flipCard();
        },
        className: "jsx-335163945",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, this.state.cards.map(function (card, index) {
        return __jsx("li", {
          key: card.name,
          className: "jsx-335163945" + " " + "face card-".concat(index + 1),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        }, __jsx("span", {
          className: "jsx-335163945",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        }, card.name), __jsx("span", {
          className: "jsx-335163945" + " " + "cardNumLabel",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        }, index + 1));
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "335163945",
        __self: this
      }, "ul.jsx-335163945{padding:0;position:relative;height:100vh;}.card-1.jsx-335163945{position:absolute;top:200px;left:150px;}.card-2.jsx-335163945{float:left;position:absolute;-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);top:205px;left:150px;}.card-3.jsx-335163945{position:absolute;top:0;left:150px;}.card-4.jsx-335163945{position:absolute;top:400px;left:150px;}.card-5.jsx-335163945{position:absolute;top:200px;left:300px;}.card-6.jsx-335163945{position:absolute;top:200px;left:0;}.card-7.jsx-335163945{position:absolute;bottom:40px;right:0;}.card-8.jsx-335163945{position:absolute;right:0;bottom:200px;}.card-9.jsx-335163945{position:absolute;top:160px;right:0;}.card-10.jsx-335163945{position:absolute;top:0;right:0;}.flipped.jsx-335163945{display:inherit;}.face.jsx-335163945{background:maroon;display:none;padding:5px;margin:auto;height:130px;width:90px;list-style:none;text-align:center;z-index:1;}.face.jsx-335163945:hover{z-index:2;}.cardNumLabel.jsx-335163945{display:block;margin:5px;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXNzL0Rlc2t0b3AvcHJvamVjdHMvd2ViL3Rhcm90LWFwcC9wYWdlcy9ib2FyZHMvY2VsdGljLWNyb3NzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZEd0IsQUFJcUIsQUFNVSxBQU1QLEFBUU8sQUFNQSxBQU1BLEFBTUEsQUFLQSxBQUtBLEFBS0EsQUFLQSxBQU1GLEFBSUEsQUFZTixBQUlJLFVBbkZFLEFBZ0ZwQixDQXBFc0IsR0F3RVAsRUFwQmYsRUExRGMsQUFjSixBQU1JLEFBTUEsQUFNQSxBQUtFLEFBS0osQUFLRSxBQUtKLEFBVUssTUEvQ0EsQUFzQ0gsQ0EwQlEsQ0FwQ0gsRUFoREYsQUFNQSxBQW9CQSxBQU1BLEFBTUosQUFlQyxDQXpDZ0IsQ0ErQmhCLENBeUJFLENBVGQsR0F0Q0EsQUFrQkEsQ0FlQSxFQVZBLENBckNBLEFBb0JBLEFBTUEsQUFnQkEsRUFoREEsQ0FxRkEsQ0FqQmMsWUFDQyxhQUNGLFdBQ0ksZ0JBQ0csa0JBNUROLEFBNkRILFVBNURJLEFBNkRmLFdBNURBIiwiZmlsZSI6Ii9Vc2Vycy9qZXNzL0Rlc2t0b3AvcHJvamVjdHMvd2ViL3Rhcm90LWFwcC9wYWdlcy9ib2FyZHMvY2VsdGljLWNyb3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQge2NhcmRzfSBmcm9tIFwiLi4vLi4vZGF0YS9jYXJkc1wiO1xuaW1wb3J0IENhcmQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY2FyZHMvQ2FyZFwiO1xuXG5cbmNvbnN0IE5VTUNBUkRTID0gMTA7XG5jb25zdCBOVU1ERUNLID0gNzg7XG5cbi8qKiB3aWxsIHJldHVybiBhIHJhbmRvbSBpbnRlZ2VyIGJldHdlZW4gMSBhbmQgNzggKG51bWJlciBvZiB0YXJvdCBjYXJkcykgKi9cbmZ1bmN0aW9uIGdldFJhbmRvbUludCgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcihOVU1ERUNLKSk7XG59XG5cbmZ1bmN0aW9uIGdldFJhbmRvbUNhcmRzKCkge1xuICAgIGxldCBjYXJkTGlzdCA9IFtdO1xuICAgIGNvbnN0IGNhcmRzQXJyID0gQXJyYXkuZnJvbShjYXJkcyk7XG5cbiAgICB3aGlsZShjYXJkTGlzdC5sZW5ndGggPCBOVU1DQVJEUykge1xuICAgICAgICBjb25zdCBpbmRleCA9IGdldFJhbmRvbUludCgpO1xuICAgICAgICBjb25zdCBjYXJkVG9BZGQgPSBjYXJkc0FycltpbmRleF07XG4gICAgICAgIGlmKCEgY2FyZExpc3QuZmluZCgoc29tZUNhcmQpPT4gc29tZUNhcmQgPT09IGNhcmRUb0FkZCkpIHtcbiAgICAgICAgICAgIGNhcmRMaXN0LnB1c2goY2FyZFRvQWRkKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG4gICAgcmV0dXJuIGNhcmRMaXN0O1xufVxuXG5jbGFzcyBDZWx0aWNDcm9zcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgY2FyZHM6IFtdLFxuICAgICAgICAgIGZsaXBJbmRleDogMFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBjb25zdCByZXMgPSBnZXRSYW5kb21DYXJkcygpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgIFxuICAgICAgICB0aGlzLnNldFN0YXRlKHtjYXJkczogcmVzfSk7ICAgXG4gICAgfVxuXG4gICAgZmxpcENhcmQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2ZsaXBJbmRleDogdGhpcy5mbGlwSW5kZXggKyAxfSk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoKCdjYXJkLScrdGhpcy5mbGlwSW5kZXhbMF0pKS5zdHlsZS5kaXNwbGF5ID0gXCJpbmhlcml0XCI7XG4gICAgfVxuICBcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIFxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDx1bCBvbkNsaWNrPXsoKT0+dGhpcy5mbGlwQ2FyZCgpfT5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jYXJkcy5tYXAoKGNhcmQsaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17YGZhY2UgY2FyZC0ke2luZGV4KzF9YH0ga2V5PXtjYXJkLm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2NhcmQubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXJkTnVtTGFiZWxcIj57aW5kZXggKyAxfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG5cbiAgICAgICAgdWwge1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZC0xIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMjAwcHg7XG4gICAgICAgICAgICBsZWZ0OiAxNTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkLTIge1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgICAgICAgICB0b3A6IDIwNXB4O1xuICAgICAgICAgICAgbGVmdDogMTUwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZC0zIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDE1MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQtNCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDQwMHB4O1xuICAgICAgICAgICAgbGVmdDogMTUwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZC01e1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAyMDBweDtcbiAgICAgICAgICAgIGxlZnQ6IDMwMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQtNiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDIwMHB4O1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgfVxuICAgICAgICAuY2FyZC03IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGJvdHRvbTogNDBweDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB9XG4gICAgICAgIC5jYXJkLTgge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBib3R0b206IDIwMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5jYXJkLTkge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAxNjBweDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB9XG4gICAgICAgIC5jYXJkLTEwIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZsaXBwZWQge1xuICAgICAgICAgICAgZGlzcGxheTogaW5oZXJpdDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mYWNlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBtYXJvb247XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgIGhlaWdodDogMTMwcHg7XG4gICAgICAgICAgd2lkdGg6IDkwcHg7XG4gICAgICAgICAgbGlzdC1zdHlsZTpub25lO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB6LWluZGV4OjE7XG4gICAgICAgIH1cblxuICAgICAgICAuZmFjZTpob3ZlciB7XG4gICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmROdW1MYWJlbCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcblxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICAgICA8L2Rpdj5cbiAgICAgICAgIFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBleHBvcnQgZGVmYXVsdCBDZWx0aWNDcm9zczsiXX0= */\n/*@ sourceURL=/Users/jess/Desktop/projects/web/tarot-app/pages/boards/celtic-cross.js */"));
    }
  }]);

  return CelticCross;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (CelticCross);

/***/ })

})
//# sourceMappingURL=index.js.63f3f4b2079fca41d858.hot-update.js.map