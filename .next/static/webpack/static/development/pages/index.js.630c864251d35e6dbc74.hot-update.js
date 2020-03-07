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


var NUMCARDS = 9;
var NUMDECK = 78;
/** will return a random integer between 1 and 78 (number of tarot cards) */

function getRandomInt() {
  return Math.floor(Math.random() * Math.floor(NUMDECK));
}

function getRandomCards(that) {
  var cardList = [];

  var cardsArr = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_5___default()(_data_cards__WEBPACK_IMPORTED_MODULE_8__["cards"]);

  var significatorCard = cardsArr.find(function (elem) {
    console.log(elem.name);
    elem.name === that.refs.significatorCard.value;
  });
  cardList.push(significatorCard);

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
      var allCards = assignAllCards(); // this.setState({cards: drawnCards});   

      this.setState({
        allCards: allCards
      });
    }
  }, {
    key: "flipCard",
    value: function flipCard() {
      if (this.state.flipIndex == 1) {
        var drawnCards = getRandomCards(this);
        this.setState({
          cards: drawnCards
        });
      } // draws the next card


      this.setState({
        flipIndex: this.state.flipIndex + 1
      });
      document.getElementsByClassName('card-' + this.state.flipIndex)[0].style.display = "inherit";
    }
  }, {
    key: "setFirstCard",
    value: function setFirstCard(event) {
      event.preventDefault();
      console.log(event);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx("div", {
        className: "jsx-3575124906",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, __jsx("span", {
        id: "significator-desc",
        className: "jsx-3575124906" + " " + "step",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, "Select the Significator of the person or thing about whom or which the inquiry is made. It is the card which, in the reader's judgment or experience, is the most representative, and is not, therefore, of necessity the Magician or High Priestess mentioned in the official divinatory meanings."), __jsx("select", {
        ref: "significatorCard",
        id: "card-list",
        className: "jsx-3575124906",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, this.state.allCards.map(function (card, index) {
        return __jsx("option", {
          value: card.name,
          key: card.name,
          className: "jsx-3575124906",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          },
          __self: this
        }, card.name);
      })), __jsx("button", {
        onClick: function onClick() {
          return _this2.flipCard();
        },
        className: "jsx-3575124906",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, "draw next"), __jsx("ul", {
        className: "jsx-3575124906",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, this.state.cards.map(function (card, index) {
        return __jsx("li", {
          key: card.name,
          className: "jsx-3575124906" + " " + "face card-".concat(index + 1),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: this
        }, __jsx("span", {
          className: "jsx-3575124906",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          },
          __self: this
        }, card.name), __jsx("span", {
          className: "jsx-3575124906" + " " + "cardNumLabel",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }, index + 1));
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "3575124906",
        __self: this
      }, "button.jsx-3575124906{display:block;margin:10px 0;}#card-list.jsx-3575124906{margin:0 10px;}ul.jsx-3575124906{padding:0;position:relative;height:100vh;}.card-1.jsx-3575124906{position:absolute;top:200px;left:150px;}.card-2.jsx-3575124906{float:left;position:absolute;-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);top:205px;left:150px;}.card-3.jsx-3575124906{position:absolute;top:0;left:150px;}.card-4.jsx-3575124906{position:absolute;top:400px;left:150px;}.card-5.jsx-3575124906{position:absolute;top:200px;left:300px;}.card-6.jsx-3575124906{position:absolute;top:200px;left:0;}.card-7.jsx-3575124906{position:absolute;bottom:40px;right:0;}.card-8.jsx-3575124906{position:absolute;right:0;bottom:200px;}.card-9.jsx-3575124906{position:absolute;top:160px;right:0;}.card-10.jsx-3575124906{position:absolute;top:0;right:0;}.flipped.jsx-3575124906{display:inherit;}.face.jsx-3575124906{background:maroon;display:none;padding:5px;margin:auto;height:130px;width:90px;list-style:none;text-align:center;z-index:1;}.face.jsx-3575124906:hover{z-index:2;}.cardNumLabel.jsx-3575124906{display:block;margin:5px;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXNzL0Rlc2t0b3AvcHJvamVjdHMvd2ViL3Rhcm90LWFwcC9wYWdlcy9ib2FyZHMvY2VsdGljLWNyb3NzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdHd0IsQUFLMkIsQUFNRCxBQUlMLEFBTVUsQUFNUCxBQVFPLEFBTUEsQUFNQSxBQU1BLEFBS0EsQUFLQSxBQUtBLEFBS0EsQUFNRixBQUlBLEFBWU4sQUFJSSxVQW5GRSxBQWdGcEIsQ0FwRXNCLEdBdEJKLEFBTWxCLEFBd0ZlLEVBcEJmLEVBMURjLEFBY0osQUFNSSxBQU1BLEFBTUEsQUFLRSxBQUtKLEFBS0UsQUFLSixBQVVLLE1BL0NBLEFBc0NILENBMEJRLENBcENILEVBMURqQixBQVVlLEFBTUEsQUFvQkEsQUFNQSxBQU1KLEFBZUMsQ0F6Q2dCLENBK0JoQixDQXlCRSxDQVRkLEdBdENBLEFBa0JBLENBZUEsRUFWQSxDQXJDQSxBQW9CQSxBQU1BLEFBZ0JBLEVBaERBLENBcUZBLENBakJjLFlBQ0MsYUFDRixXQUNJLGdCQUNHLGtCQTVETixBQTZESCxVQTVESSxBQTZEZixXQTVEQSIsImZpbGUiOiIvVXNlcnMvamVzcy9EZXNrdG9wL3Byb2plY3RzL3dlYi90YXJvdC1hcHAvcGFnZXMvYm9hcmRzL2NlbHRpYy1jcm9zcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHtjYXJkc30gZnJvbSBcIi4uLy4uL2RhdGEvY2FyZHNcIjtcbmltcG9ydCBDYXJkIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2NhcmRzL0NhcmRcIjtcblxuXG5jb25zdCBOVU1DQVJEUyA9IDk7XG5jb25zdCBOVU1ERUNLID0gNzg7XG5cbi8qKiB3aWxsIHJldHVybiBhIHJhbmRvbSBpbnRlZ2VyIGJldHdlZW4gMSBhbmQgNzggKG51bWJlciBvZiB0YXJvdCBjYXJkcykgKi9cbmZ1bmN0aW9uIGdldFJhbmRvbUludCgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcihOVU1ERUNLKSk7XG59XG5cbmZ1bmN0aW9uIGdldFJhbmRvbUNhcmRzKHRoYXQpIHtcbiAgICBsZXQgY2FyZExpc3QgPSBbXTtcbiAgICBjb25zdCBjYXJkc0FyciA9IEFycmF5LmZyb20oY2FyZHMpO1xuXG4gICAgY29uc3Qgc2lnbmlmaWNhdG9yQ2FyZCA9IGNhcmRzQXJyLmZpbmQoKGVsZW0pID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZWxlbS5uYW1lKTtcbiAgICAgICAgZWxlbS5uYW1lID09PSB0aGF0LnJlZnMuc2lnbmlmaWNhdG9yQ2FyZC52YWx1ZVxuICAgIH0pXG4gICAgY2FyZExpc3QucHVzaChzaWduaWZpY2F0b3JDYXJkKTtcblxuICAgIHdoaWxlKGNhcmRMaXN0Lmxlbmd0aCA8IE5VTUNBUkRTKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gZ2V0UmFuZG9tSW50KCk7XG4gICAgICAgIGNvbnN0IGNhcmRUb0FkZCA9IGNhcmRzQXJyW2luZGV4XTtcbiAgICAgICAgaWYoISBjYXJkTGlzdC5maW5kKChzb21lQ2FyZCk9PiBzb21lQ2FyZCA9PT0gY2FyZFRvQWRkKSkge1xuICAgICAgICAgICAgY2FyZExpc3QucHVzaChjYXJkVG9BZGQpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbiAgICByZXR1cm4gY2FyZExpc3Q7XG59XG5mdW5jdGlvbiBhc3NpZ25BbGxDYXJkcygpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShjYXJkcyk7XG59XG5cbmNsYXNzIENlbHRpY0Nyb3NzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICBjYXJkczogW10sXG4gICAgICAgICAgYWxsQ2FyZHM6W10sXG4gICAgICAgICAgZmxpcEluZGV4OiAxLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBjb25zdCBhbGxDYXJkcyA9IGFzc2lnbkFsbENhcmRzKCk7XG4gICAgICAgIFxuICAgIFxuICAgICAgICAvLyB0aGlzLnNldFN0YXRlKHtjYXJkczogZHJhd25DYXJkc30pOyAgIFxuICAgICAgICB0aGlzLnNldFN0YXRlKHthbGxDYXJkczogYWxsQ2FyZHN9KTtcbiAgICB9XG5cbiAgICBmbGlwQ2FyZCgpIHtcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5mbGlwSW5kZXggPT0gMSkge1xuICAgICAgICAgICAgY29uc3QgZHJhd25DYXJkcyA9IGdldFJhbmRvbUNhcmRzKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y2FyZHM6IGRyYXduQ2FyZHN9KTsgICBcbiAgICAgICAgfVxuICAgICAgICAvLyBkcmF3cyB0aGUgbmV4dCBjYXJkXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2ZsaXBJbmRleDogdGhpcy5zdGF0ZS5mbGlwSW5kZXggKyAxfSk7XG4gICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjYXJkLScrIHRoaXMuc3RhdGUuZmxpcEluZGV4KSlbMF0uc3R5bGUuZGlzcGxheSA9IFwiaW5oZXJpdFwiO1xuICAgIH1cbiAgICBzZXRGaXJzdENhcmQoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xuICAgIH1cbiAgXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxzcGFuIGlkPVwic2lnbmlmaWNhdG9yLWRlc2NcIiBjbGFzc05hbWU9XCJzdGVwXCI+U2VsZWN0IHRoZSBTaWduaWZpY2F0b3Igb2YgdGhlIHBlcnNvbiBvciB0aGluZyBhYm91dCB3aG9tIG9yIHdoaWNoIHRoZSBpbnF1aXJ5IGlzIG1hZGUuICBcbiAgICAgICAgICAgIEl0IGlzIHRoZSBjYXJkIHdoaWNoLCBpbiB0aGUgcmVhZGVyJ3MganVkZ21lbnQgb3IgZXhwZXJpZW5jZSwgXG4gICAgICAgICAgICBpcyB0aGUgbW9zdCByZXByZXNlbnRhdGl2ZSwgYW5kIGlzIG5vdCwgdGhlcmVmb3JlLCBcbiAgICAgICAgICAgIG9mIG5lY2Vzc2l0eSB0aGUgTWFnaWNpYW4gb3IgSGlnaCBQcmllc3Rlc3MgbWVudGlvbmVkIGluIHRoZSBvZmZpY2lhbCBkaXZpbmF0b3J5IG1lYW5pbmdzLjwvc3Bhbj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxzZWxlY3QgcmVmPVwic2lnbmlmaWNhdG9yQ2FyZFwiIGlkPVwiY2FyZC1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmFsbENhcmRzLm1hcCgoY2FyZCxpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17Y2FyZC5uYW1lfSBrZXk9e2NhcmQubmFtZX0+e2NhcmQubmFtZX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PnRoaXMuZmxpcENhcmQoKX0+ZHJhdyBuZXh0PC9idXR0b24+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY2FyZHMubWFwKChjYXJkLGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2BmYWNlIGNhcmQtJHtpbmRleCsxfWB9IGtleT17Y2FyZC5uYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntjYXJkLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2FyZE51bUxhYmVsXCI+e2luZGV4ICsgMX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuXG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgIH0gICAgICAgICAgICAgXG4gICAgICAgICNzaWduaWZpY2F0b3ItZGVzYyB7XG4gICAgICAgIH1cbiAgICAgICAgI2NhcmQtbGlzdCB7XG4gICAgICAgICAgIG1hcmdpbjogMCAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgdWwge1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZC0xIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMjAwcHg7XG4gICAgICAgICAgICBsZWZ0OiAxNTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkLTIge1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgICAgICAgICB0b3A6IDIwNXB4O1xuICAgICAgICAgICAgbGVmdDogMTUwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZC0zIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDE1MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQtNCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDQwMHB4O1xuICAgICAgICAgICAgbGVmdDogMTUwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZC01e1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAyMDBweDtcbiAgICAgICAgICAgIGxlZnQ6IDMwMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQtNiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDIwMHB4O1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgfVxuICAgICAgICAuY2FyZC03IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGJvdHRvbTogNDBweDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB9XG4gICAgICAgIC5jYXJkLTgge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBib3R0b206IDIwMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5jYXJkLTkge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAxNjBweDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB9XG4gICAgICAgIC5jYXJkLTEwIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZsaXBwZWQge1xuICAgICAgICAgICAgZGlzcGxheTogaW5oZXJpdDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mYWNlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBtYXJvb247XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgIGhlaWdodDogMTMwcHg7XG4gICAgICAgICAgd2lkdGg6IDkwcHg7XG4gICAgICAgICAgbGlzdC1zdHlsZTpub25lO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB6LWluZGV4OjE7XG4gICAgICAgIH1cblxuICAgICAgICAuZmFjZTpob3ZlciB7XG4gICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmROdW1MYWJlbCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcblxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICAgICA8L2Rpdj5cbiAgICAgICAgIFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBleHBvcnQgZGVmYXVsdCBDZWx0aWNDcm9zczsiXX0= */\n/*@ sourceURL=/Users/jess/Desktop/projects/web/tarot-app/pages/boards/celtic-cross.js */"));
    }
  }]);

  return CelticCross;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (CelticCross);

/***/ })

})
//# sourceMappingURL=index.js.630c864251d35e6dbc74.hot-update.js.map