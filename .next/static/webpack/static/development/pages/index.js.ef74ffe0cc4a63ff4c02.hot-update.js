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

function assignAllCards() {
  return _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_5___default()(_data_cards__WEBPACK_IMPORTED_MODULE_8__["cards"]);
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
      allCards: [],
      flipIndex: 1
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CelticCross, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var drawnCards = getRandomCards();
      var allCards = assignAllCards();
      this.setState({
        cards: drawnCards
      });
      this.setState({
        allCards: allCards
      });
    }
  }, {
    key: "flipCard",
    value: function flipCard() {
      // draws the next card
      this.setState({
        flipIndex: this.state.flipIndex + 1
      });
      document.getElementsByClassName('card-' + this.state.flipIndex)[0].style.display = "inherit";
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx("div", {
        className: "jsx-2426363662",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, __jsx("button", {
        onClick: function onClick() {
          return _this2.flipCard();
        },
        className: "jsx-2426363662",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "draw next"), __jsx("span", {
        id: "significator-desc",
        className: "jsx-2426363662" + " " + "step",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, "Select the Significator of the person or thing about whom or which the inquiry is made. It is the card which, in the reader's judgment or experience, is the most representative, and is not, therefore, of necessity the Magician or High Priestess mentioned in the official divinatory meanings."), __jsx("select", {
        id: "significator-card-list",
        className: "jsx-2426363662",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, this.state.allCards.map(function (card, index) {
        return __jsx("option", {
          value: card.name,
          key: card.name,
          className: "jsx-2426363662",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          },
          __self: this
        }, card.name);
      })), __jsx("ul", {
        className: "jsx-2426363662",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, this.state.cards.map(function (card, index) {
        return __jsx("li", {
          key: card.name,
          className: "jsx-2426363662" + " " + "face card-".concat(index + 1),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        }, __jsx("span", {
          className: "jsx-2426363662",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        }, card.name), __jsx("span", {
          className: "jsx-2426363662" + " " + "cardNumLabel",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        }, index + 1));
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "2426363662",
        __self: this
      }, "button.jsx-2426363662{display:block;margin:10px 0;}ul.jsx-2426363662{padding:0;position:relative;height:100vh;}.card-1.jsx-2426363662{position:absolute;top:200px;left:150px;}.card-2.jsx-2426363662{float:left;position:absolute;-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);top:205px;left:150px;}.card-3.jsx-2426363662{position:absolute;top:0;left:150px;}.card-4.jsx-2426363662{position:absolute;top:400px;left:150px;}.card-5.jsx-2426363662{position:absolute;top:200px;left:300px;}.card-6.jsx-2426363662{position:absolute;top:200px;left:0;}.card-7.jsx-2426363662{position:absolute;bottom:40px;right:0;}.card-8.jsx-2426363662{position:absolute;right:0;bottom:200px;}.card-9.jsx-2426363662{position:absolute;top:160px;right:0;}.card-10.jsx-2426363662{position:absolute;top:0;right:0;}.flipped.jsx-2426363662{display:inherit;}.face.jsx-2426363662{background:maroon;display:none;padding:5px;margin:auto;height:130px;width:90px;list-style:none;text-align:center;z-index:1;}.face.jsx-2426363662:hover{z-index:2;}.cardNumLabel.jsx-2426363662{display:block;margin:5px;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXNzL0Rlc2t0b3AvcHJvamVjdHMvd2ViL3Rhcm90LWFwcC9wYWdlcy9ib2FyZHMvY2VsdGljLWNyb3NzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThFd0IsQUFLMkIsQUFVTixBQU1VLEFBTVAsQUFRTyxBQU1BLEFBTUEsQUFNQSxBQUtBLEFBS0EsQUFLQSxBQUtBLEFBTUYsQUFJQSxBQVlOLEFBSUksVUFuRkUsQUFnRnBCLENBcEVzQixHQXRCSixBQThGSCxFQXBCZixFQTFEYyxBQWNKLEFBTUksQUFNQSxBQU1BLEFBS0UsQUFLSixBQUtFLEFBS0osQUFVSyxNQS9DQSxBQXNDSCxDQTBCUSxDQXBDSCxFQTFEakIsQUFVZSxBQU1BLEFBb0JBLEFBTUEsQUFNSixBQWVDLENBekNnQixDQStCaEIsQ0F5QkUsQ0FUZCxHQXRDQSxBQWtCQSxDQWVBLEVBVkEsQ0FyQ0EsQUFvQkEsQUFNQSxBQWdCQSxFQWhEQSxDQXFGQSxDQWpCYyxZQUNDLGFBQ0YsV0FDSSxnQkFDRyxrQkE1RE4sQUE2REgsVUE1REksQUE2RGYsV0E1REEiLCJmaWxlIjoiL1VzZXJzL2plc3MvRGVza3RvcC9wcm9qZWN0cy93ZWIvdGFyb3QtYXBwL3BhZ2VzL2JvYXJkcy9jZWx0aWMtY3Jvc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7Y2FyZHN9IGZyb20gXCIuLi8uLi9kYXRhL2NhcmRzXCI7XG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jYXJkcy9DYXJkXCI7XG5cblxuY29uc3QgTlVNQ0FSRFMgPSAxMDtcbmNvbnN0IE5VTURFQ0sgPSA3ODtcblxuLyoqIHdpbGwgcmV0dXJuIGEgcmFuZG9tIGludGVnZXIgYmV0d2VlbiAxIGFuZCA3OCAobnVtYmVyIG9mIHRhcm90IGNhcmRzKSAqL1xuZnVuY3Rpb24gZ2V0UmFuZG9tSW50KCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKE5VTURFQ0spKTtcbn1cblxuZnVuY3Rpb24gZ2V0UmFuZG9tQ2FyZHMoKSB7XG4gICAgbGV0IGNhcmRMaXN0ID0gW107XG4gICAgY29uc3QgY2FyZHNBcnIgPSBBcnJheS5mcm9tKGNhcmRzKTtcblxuICAgIHdoaWxlKGNhcmRMaXN0Lmxlbmd0aCA8IE5VTUNBUkRTKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gZ2V0UmFuZG9tSW50KCk7XG4gICAgICAgIGNvbnN0IGNhcmRUb0FkZCA9IGNhcmRzQXJyW2luZGV4XTtcbiAgICAgICAgaWYoISBjYXJkTGlzdC5maW5kKChzb21lQ2FyZCk9PiBzb21lQ2FyZCA9PT0gY2FyZFRvQWRkKSkge1xuICAgICAgICAgICAgY2FyZExpc3QucHVzaChjYXJkVG9BZGQpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbiAgICByZXR1cm4gY2FyZExpc3Q7XG59XG5mdW5jdGlvbiBhc3NpZ25BbGxDYXJkcygpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShjYXJkcyk7XG59XG5cbmNsYXNzIENlbHRpY0Nyb3NzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICBjYXJkczogW10sXG4gICAgICAgICAgYWxsQ2FyZHM6W10sXG4gICAgICAgICAgZmxpcEluZGV4OiAxLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBjb25zdCBkcmF3bkNhcmRzID0gZ2V0UmFuZG9tQ2FyZHMoKTtcbiAgICAgICAgY29uc3QgYWxsQ2FyZHMgPSBhc3NpZ25BbGxDYXJkcygpO1xuICAgICAgICBcbiAgICBcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y2FyZHM6IGRyYXduQ2FyZHN9KTsgICBcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YWxsQ2FyZHM6IGFsbENhcmRzfSk7XG4gICAgfVxuXG4gICAgZmxpcENhcmQoKSB7XG4gICAgICAgIC8vIGRyYXdzIHRoZSBuZXh0IGNhcmRcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZmxpcEluZGV4OiB0aGlzLnN0YXRlLmZsaXBJbmRleCArIDF9KTtcbiAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NhcmQtJysgdGhpcy5zdGF0ZS5mbGlwSW5kZXgpKVswXS5zdHlsZS5kaXNwbGF5ID0gXCJpbmhlcml0XCI7XG4gICAgfVxuICBcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIFxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PnRoaXMuZmxpcENhcmQoKX0+ZHJhdyBuZXh0PC9idXR0b24+XG4gICAgICAgICAgICA8c3BhbiBpZD1cInNpZ25pZmljYXRvci1kZXNjXCIgY2xhc3NOYW1lPVwic3RlcFwiPlNlbGVjdCB0aGUgU2lnbmlmaWNhdG9yIG9mIHRoZSBwZXJzb24gb3IgdGhpbmcgYWJvdXQgd2hvbSBvciB3aGljaCB0aGUgaW5xdWlyeSBpcyBtYWRlLiAgXG4gICAgICAgICAgICBJdCBpcyB0aGUgY2FyZCB3aGljaCwgaW4gdGhlIHJlYWRlcidzIGp1ZGdtZW50IG9yIGV4cGVyaWVuY2UsIFxuICAgICAgICAgICAgaXMgdGhlIG1vc3QgcmVwcmVzZW50YXRpdmUsIGFuZCBpcyBub3QsIHRoZXJlZm9yZSwgXG4gICAgICAgICAgICBvZiBuZWNlc3NpdHkgdGhlIE1hZ2ljaWFuIG9yIEhpZ2ggUHJpZXN0ZXNzIG1lbnRpb25lZCBpbiB0aGUgb2ZmaWNpYWwgZGl2aW5hdG9yeSBtZWFuaW5ncy48L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cInNpZ25pZmljYXRvci1jYXJkLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuYWxsQ2FyZHMubWFwKChjYXJkLGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtjYXJkLm5hbWV9IGtleT17Y2FyZC5uYW1lfT57Y2FyZC5uYW1lfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jYXJkcy5tYXAoKGNhcmQsaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17YGZhY2UgY2FyZC0ke2luZGV4KzF9YH0ga2V5PXtjYXJkLm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2NhcmQubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXJkTnVtTGFiZWxcIj57aW5kZXggKyAxfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG5cblxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgICAgfSAgICAgICAgICAgICBcbiAgICAgICAgI3NpZ25pZmljYXRvci1kZXNjIHtcbiAgICAgICAgfVxuICAgICAgICAjc2lnbmlmaWNhdG9yLWNhcmQtbGlzdCB7XG4gICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgdWwge1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZC0xIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMjAwcHg7XG4gICAgICAgICAgICBsZWZ0OiAxNTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkLTIge1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgICAgICAgICB0b3A6IDIwNXB4O1xuICAgICAgICAgICAgbGVmdDogMTUwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZC0zIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDE1MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQtNCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDQwMHB4O1xuICAgICAgICAgICAgbGVmdDogMTUwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZC01e1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAyMDBweDtcbiAgICAgICAgICAgIGxlZnQ6IDMwMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQtNiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDIwMHB4O1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgfVxuICAgICAgICAuY2FyZC03IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGJvdHRvbTogNDBweDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB9XG4gICAgICAgIC5jYXJkLTgge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBib3R0b206IDIwMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5jYXJkLTkge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAxNjBweDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB9XG4gICAgICAgIC5jYXJkLTEwIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZsaXBwZWQge1xuICAgICAgICAgICAgZGlzcGxheTogaW5oZXJpdDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mYWNlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBtYXJvb247XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgIGhlaWdodDogMTMwcHg7XG4gICAgICAgICAgd2lkdGg6IDkwcHg7XG4gICAgICAgICAgbGlzdC1zdHlsZTpub25lO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB6LWluZGV4OjE7XG4gICAgICAgIH1cblxuICAgICAgICAuZmFjZTpob3ZlciB7XG4gICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmROdW1MYWJlbCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcblxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICAgICA8L2Rpdj5cbiAgICAgICAgIFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBleHBvcnQgZGVmYXVsdCBDZWx0aWNDcm9zczsiXX0= */\n/*@ sourceURL=/Users/jess/Desktop/projects/web/tarot-app/pages/boards/celtic-cross.js */"));
    }
  }]);

  return CelticCross;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (CelticCross);

/***/ })

})
//# sourceMappingURL=index.js.ef74ffe0cc4a63ff4c02.hot-update.js.map