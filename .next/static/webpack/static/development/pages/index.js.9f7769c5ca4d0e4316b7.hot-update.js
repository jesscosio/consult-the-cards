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
      console.log(document.getElementsByClassName('card-' + this.state.flipIndex));
      console.log(document.getElementsByClassName('card-' + this.state.flipIndex).style);
      document.getElementsByClassName('card-' + this.state.flipIndex).style.display = "inherit";
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx("div", {
        className: "jsx-335163945",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, __jsx("ul", {
        onClick: function onClick() {
          return _this2.flipCard();
        },
        className: "jsx-335163945",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, this.state.cards.map(function (card, index) {
        return __jsx("li", {
          key: card.name,
          className: "jsx-335163945" + " " + "face card-".concat(index + 1),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        }, __jsx("span", {
          className: "jsx-335163945",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        }, card.name), __jsx("span", {
          className: "jsx-335163945" + " " + "cardNumLabel",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        }, index + 1));
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "335163945",
        __self: this
      }, "ul.jsx-335163945{padding:0;position:relative;height:100vh;}.card-1.jsx-335163945{position:absolute;top:200px;left:150px;}.card-2.jsx-335163945{float:left;position:absolute;-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);top:205px;left:150px;}.card-3.jsx-335163945{position:absolute;top:0;left:150px;}.card-4.jsx-335163945{position:absolute;top:400px;left:150px;}.card-5.jsx-335163945{position:absolute;top:200px;left:300px;}.card-6.jsx-335163945{position:absolute;top:200px;left:0;}.card-7.jsx-335163945{position:absolute;bottom:40px;right:0;}.card-8.jsx-335163945{position:absolute;right:0;bottom:200px;}.card-9.jsx-335163945{position:absolute;top:160px;right:0;}.card-10.jsx-335163945{position:absolute;top:0;right:0;}.flipped.jsx-335163945{display:inherit;}.face.jsx-335163945{background:maroon;display:none;padding:5px;margin:auto;height:130px;width:90px;list-style:none;text-align:center;z-index:1;}.face.jsx-335163945:hover{z-index:2;}.cardNumLabel.jsx-335163945{display:block;margin:5px;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXNzL0Rlc2t0b3AvcHJvamVjdHMvd2ViL3Rhcm90LWFwcC9wYWdlcy9ib2FyZHMvY2VsdGljLWNyb3NzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdFd0IsQUFJcUIsQUFNVSxBQU1QLEFBUU8sQUFNQSxBQU1BLEFBTUEsQUFLQSxBQUtBLEFBS0EsQUFLQSxBQU1GLEFBSUEsQUFZTixBQUlJLFVBbkZFLEFBZ0ZwQixDQXBFc0IsR0F3RVAsRUFwQmYsRUExRGMsQUFjSixBQU1JLEFBTUEsQUFNQSxBQUtFLEFBS0osQUFLRSxBQUtKLEFBVUssTUEvQ0EsQUFzQ0gsQ0EwQlEsQ0FwQ0gsRUFoREYsQUFNQSxBQW9CQSxBQU1BLEFBTUosQUFlQyxDQXpDZ0IsQ0ErQmhCLENBeUJFLENBVGQsR0F0Q0EsQUFrQkEsQ0FlQSxFQVZBLENBckNBLEFBb0JBLEFBTUEsQUFnQkEsRUFoREEsQ0FxRkEsQ0FqQmMsWUFDQyxhQUNGLFdBQ0ksZ0JBQ0csa0JBNUROLEFBNkRILFVBNURJLEFBNkRmLFdBNURBIiwiZmlsZSI6Ii9Vc2Vycy9qZXNzL0Rlc2t0b3AvcHJvamVjdHMvd2ViL3Rhcm90LWFwcC9wYWdlcy9ib2FyZHMvY2VsdGljLWNyb3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQge2NhcmRzfSBmcm9tIFwiLi4vLi4vZGF0YS9jYXJkc1wiO1xuaW1wb3J0IENhcmQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY2FyZHMvQ2FyZFwiO1xuXG5cbmNvbnN0IE5VTUNBUkRTID0gMTA7XG5jb25zdCBOVU1ERUNLID0gNzg7XG5cbi8qKiB3aWxsIHJldHVybiBhIHJhbmRvbSBpbnRlZ2VyIGJldHdlZW4gMSBhbmQgNzggKG51bWJlciBvZiB0YXJvdCBjYXJkcykgKi9cbmZ1bmN0aW9uIGdldFJhbmRvbUludCgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcihOVU1ERUNLKSk7XG59XG5cbmZ1bmN0aW9uIGdldFJhbmRvbUNhcmRzKCkge1xuICAgIGxldCBjYXJkTGlzdCA9IFtdO1xuICAgIGNvbnN0IGNhcmRzQXJyID0gQXJyYXkuZnJvbShjYXJkcyk7XG5cbiAgICB3aGlsZShjYXJkTGlzdC5sZW5ndGggPCBOVU1DQVJEUykge1xuICAgICAgICBjb25zdCBpbmRleCA9IGdldFJhbmRvbUludCgpO1xuICAgICAgICBjb25zdCBjYXJkVG9BZGQgPSBjYXJkc0FycltpbmRleF07XG4gICAgICAgIGlmKCEgY2FyZExpc3QuZmluZCgoc29tZUNhcmQpPT4gc29tZUNhcmQgPT09IGNhcmRUb0FkZCkpIHtcbiAgICAgICAgICAgIGNhcmRMaXN0LnB1c2goY2FyZFRvQWRkKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG4gICAgcmV0dXJuIGNhcmRMaXN0O1xufVxuXG5jbGFzcyBDZWx0aWNDcm9zcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgY2FyZHM6IFtdLFxuICAgICAgICAgIGZsaXBJbmRleDogMFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBjb25zdCByZXMgPSBnZXRSYW5kb21DYXJkcygpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgIFxuICAgICAgICB0aGlzLnNldFN0YXRlKHtjYXJkczogcmVzfSk7ICAgXG4gICAgfVxuXG4gICAgZmxpcENhcmQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2ZsaXBJbmRleDogdGhpcy5mbGlwSW5kZXggKyAxfSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NhcmQtJysgdGhpcy5zdGF0ZS5mbGlwSW5kZXgpKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjYXJkLScrIHRoaXMuc3RhdGUuZmxpcEluZGV4KSkuc3R5bGUpO1xuICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2FyZC0nKyB0aGlzLnN0YXRlLmZsaXBJbmRleCkpLnN0eWxlLmRpc3BsYXkgPSBcImluaGVyaXRcIjtcbiAgICB9XG4gIFxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHVsIG9uQ2xpY2s9eygpPT50aGlzLmZsaXBDYXJkKCl9PlxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNhcmRzLm1hcCgoY2FyZCxpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtgZmFjZSBjYXJkLSR7aW5kZXgrMX1gfSBrZXk9e2NhcmQubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57Y2FyZC5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcmROdW1MYWJlbFwiPntpbmRleCArIDF9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcblxuICAgICAgICB1bCB7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkLTEge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAyMDBweDtcbiAgICAgICAgICAgIGxlZnQ6IDE1MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQtMiB7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAgICAgICAgIHRvcDogMjA1cHg7XG4gICAgICAgICAgICBsZWZ0OiAxNTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkLTMge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbGVmdDogMTUwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZC00IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogNDAwcHg7XG4gICAgICAgICAgICBsZWZ0OiAxNTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkLTV7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDIwMHB4O1xuICAgICAgICAgICAgbGVmdDogMzAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZC02IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMjAwcHg7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB9XG4gICAgICAgIC5jYXJkLTcge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgYm90dG9tOiA0MHB4O1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmQtOCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIGJvdHRvbTogMjAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmQtOSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDE2MHB4O1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmQtMTAge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAuZmxpcHBlZCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmhlcml0O1xuICAgICAgICB9XG5cbiAgICAgICAgLmZhY2Uge1xuICAgICAgICAgIGJhY2tncm91bmQ6IG1hcm9vbjtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgaGVpZ2h0OiAxMzBweDtcbiAgICAgICAgICB3aWR0aDogOTBweDtcbiAgICAgICAgICBsaXN0LXN0eWxlOm5vbmU7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIHotaW5kZXg6MTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mYWNlOmhvdmVyIHtcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZE51bUxhYmVsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDpib2xkO1xuXG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgIDwvZGl2PlxuICAgICAgICAgXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBkZWZhdWx0IENlbHRpY0Nyb3NzOyJdfQ== */\n/*@ sourceURL=/Users/jess/Desktop/projects/web/tarot-app/pages/boards/celtic-cross.js */"));
    }
  }]);

  return CelticCross;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (CelticCross);

/***/ })

})
//# sourceMappingURL=index.js.9f7769c5ca4d0e4316b7.hot-update.js.map