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

  cardList.push(that.refs.significatorCard);

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
        className: "jsx-1856309378",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, __jsx("span", {
        id: "significator-desc",
        className: "jsx-1856309378" + " " + "step",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, "Select the Significator of the person or thing about whom or which the inquiry is made. It is the card which, in the reader's judgment or experience, is the most representative, and is not, therefore, of necessity the Magician or High Priestess mentioned in the official divinatory meanings."), __jsx("select", {
        ref: "significatorCard",
        id: "significator-card-list",
        className: "jsx-1856309378",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, this.state.allCards.map(function (card, index) {
        return __jsx("option", {
          value: card.name,
          key: card.name,
          className: "jsx-1856309378",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        }, card.name);
      })), __jsx("button", {
        onClick: function onClick() {
          return _this2.flipCard();
        },
        className: "jsx-1856309378",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, "draw next"), __jsx("ul", {
        className: "jsx-1856309378",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, this.state.cards.map(function (card, index) {
        return __jsx("li", {
          key: card.name,
          className: "jsx-1856309378" + " " + "face card-".concat(index + 1),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          },
          __self: this
        }, __jsx("span", {
          className: "jsx-1856309378",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }, card.name), __jsx("span", {
          className: "jsx-1856309378" + " " + "cardNumLabel",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: this
        }, index + 1));
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "1856309378",
        __self: this
      }, "button.jsx-1856309378{display:block;margin:10px 0;}#significator-card-list.jsx-1856309378{margin:0 10px;}ul.jsx-1856309378{padding:0;position:relative;height:100vh;}.card-1.jsx-1856309378{position:absolute;top:200px;left:150px;}.card-2.jsx-1856309378{float:left;position:absolute;-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);top:205px;left:150px;}.card-3.jsx-1856309378{position:absolute;top:0;left:150px;}.card-4.jsx-1856309378{position:absolute;top:400px;left:150px;}.card-5.jsx-1856309378{position:absolute;top:200px;left:300px;}.card-6.jsx-1856309378{position:absolute;top:200px;left:0;}.card-7.jsx-1856309378{position:absolute;bottom:40px;right:0;}.card-8.jsx-1856309378{position:absolute;right:0;bottom:200px;}.card-9.jsx-1856309378{position:absolute;top:160px;right:0;}.card-10.jsx-1856309378{position:absolute;top:0;right:0;}.flipped.jsx-1856309378{display:inherit;}.face.jsx-1856309378{background:maroon;display:none;padding:5px;margin:auto;height:130px;width:90px;list-style:none;text-align:center;z-index:1;}.face.jsx-1856309378:hover{z-index:2;}.cardNumLabel.jsx-1856309378{display:block;margin:5px;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXNzL0Rlc2t0b3AvcHJvamVjdHMvd2ViL3Rhcm90LWFwcC9wYWdlcy9ib2FyZHMvY2VsdGljLWNyb3NzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZGd0IsQUFLMkIsQUFNRCxBQUlMLEFBTVUsQUFNUCxBQVFPLEFBTUEsQUFNQSxBQU1BLEFBS0EsQUFLQSxBQUtBLEFBS0EsQUFNRixBQUlBLEFBWU4sQUFJSSxVQW5GRSxBQWdGcEIsQ0FwRXNCLEdBdEJKLEFBTWxCLEFBd0ZlLEVBcEJmLEVBMURjLEFBY0osQUFNSSxBQU1BLEFBTUEsQUFLRSxBQUtKLEFBS0UsQUFLSixBQVVLLE1BL0NBLEFBc0NILENBMEJRLENBcENILEVBMURqQixBQVVlLEFBTUEsQUFvQkEsQUFNQSxBQU1KLEFBZUMsQ0F6Q2dCLENBK0JoQixDQXlCRSxDQVRkLEdBdENBLEFBa0JBLENBZUEsRUFWQSxDQXJDQSxBQW9CQSxBQU1BLEFBZ0JBLEVBaERBLENBcUZBLENBakJjLFlBQ0MsYUFDRixXQUNJLGdCQUNHLGtCQTVETixBQTZESCxVQTVESSxBQTZEZixXQTVEQSIsImZpbGUiOiIvVXNlcnMvamVzcy9EZXNrdG9wL3Byb2plY3RzL3dlYi90YXJvdC1hcHAvcGFnZXMvYm9hcmRzL2NlbHRpYy1jcm9zcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHtjYXJkc30gZnJvbSBcIi4uLy4uL2RhdGEvY2FyZHNcIjtcbmltcG9ydCBDYXJkIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2NhcmRzL0NhcmRcIjtcblxuXG5jb25zdCBOVU1DQVJEUyA9IDk7XG5jb25zdCBOVU1ERUNLID0gNzg7XG5cbi8qKiB3aWxsIHJldHVybiBhIHJhbmRvbSBpbnRlZ2VyIGJldHdlZW4gMSBhbmQgNzggKG51bWJlciBvZiB0YXJvdCBjYXJkcykgKi9cbmZ1bmN0aW9uIGdldFJhbmRvbUludCgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcihOVU1ERUNLKSk7XG59XG5cbmZ1bmN0aW9uIGdldFJhbmRvbUNhcmRzKHRoYXQpIHtcbiAgICBsZXQgY2FyZExpc3QgPSBbXTtcbiAgICBjb25zdCBjYXJkc0FyciA9IEFycmF5LmZyb20oY2FyZHMpO1xuXG4gICAgY2FyZExpc3QucHVzaCh0aGF0LnJlZnMuc2lnbmlmaWNhdG9yQ2FyZCk7XG5cbiAgICB3aGlsZShjYXJkTGlzdC5sZW5ndGggPCBOVU1DQVJEUykge1xuICAgICAgICBjb25zdCBpbmRleCA9IGdldFJhbmRvbUludCgpO1xuICAgICAgICBjb25zdCBjYXJkVG9BZGQgPSBjYXJkc0FycltpbmRleF07XG4gICAgICAgIGlmKCEgY2FyZExpc3QuZmluZCgoc29tZUNhcmQpPT4gc29tZUNhcmQgPT09IGNhcmRUb0FkZCkpIHtcbiAgICAgICAgICAgIGNhcmRMaXN0LnB1c2goY2FyZFRvQWRkKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG4gICAgcmV0dXJuIGNhcmRMaXN0O1xufVxuZnVuY3Rpb24gYXNzaWduQWxsQ2FyZHMoKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oY2FyZHMpO1xufVxuXG5jbGFzcyBDZWx0aWNDcm9zcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgY2FyZHM6IFtdLFxuICAgICAgICAgIGFsbENhcmRzOltdLFxuICAgICAgICAgIGZsaXBJbmRleDogMSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGFsbENhcmRzID0gYXNzaWduQWxsQ2FyZHMoKTtcbiAgICAgICAgXG4gICAgXG4gICAgICAgIC8vIHRoaXMuc2V0U3RhdGUoe2NhcmRzOiBkcmF3bkNhcmRzfSk7ICAgXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2FsbENhcmRzOiBhbGxDYXJkc30pO1xuICAgIH1cblxuICAgIGZsaXBDYXJkKCkge1xuICAgICAgICBpZih0aGlzLnN0YXRlLmZsaXBJbmRleCA9PSAxKSB7XG4gICAgICAgICAgICBjb25zdCBkcmF3bkNhcmRzID0gZ2V0UmFuZG9tQ2FyZHModGhpcyk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtjYXJkczogZHJhd25DYXJkc30pOyAgIFxuICAgICAgICB9XG4gICAgICAgIC8vIGRyYXdzIHRoZSBuZXh0IGNhcmRcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZmxpcEluZGV4OiB0aGlzLnN0YXRlLmZsaXBJbmRleCArIDF9KTtcbiAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NhcmQtJysgdGhpcy5zdGF0ZS5mbGlwSW5kZXgpKVswXS5zdHlsZS5kaXNwbGF5ID0gXCJpbmhlcml0XCI7XG4gICAgfVxuICAgIHNldEZpcnN0Q2FyZChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XG4gICAgfVxuICBcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIFxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPHNwYW4gaWQ9XCJzaWduaWZpY2F0b3ItZGVzY1wiIGNsYXNzTmFtZT1cInN0ZXBcIj5TZWxlY3QgdGhlIFNpZ25pZmljYXRvciBvZiB0aGUgcGVyc29uIG9yIHRoaW5nIGFib3V0IHdob20gb3Igd2hpY2ggdGhlIGlucXVpcnkgaXMgbWFkZS4gIFxuICAgICAgICAgICAgSXQgaXMgdGhlIGNhcmQgd2hpY2gsIGluIHRoZSByZWFkZXIncyBqdWRnbWVudCBvciBleHBlcmllbmNlLCBcbiAgICAgICAgICAgIGlzIHRoZSBtb3N0IHJlcHJlc2VudGF0aXZlLCBhbmQgaXMgbm90LCB0aGVyZWZvcmUsIFxuICAgICAgICAgICAgb2YgbmVjZXNzaXR5IHRoZSBNYWdpY2lhbiBvciBIaWdoIFByaWVzdGVzcyBtZW50aW9uZWQgaW4gdGhlIG9mZmljaWFsIGRpdmluYXRvcnkgbWVhbmluZ3MuPC9zcGFuPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPHNlbGVjdCByZWY9XCJzaWduaWZpY2F0b3JDYXJkXCIgaWQ9XCJzaWduaWZpY2F0b3ItY2FyZC1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmFsbENhcmRzLm1hcCgoY2FyZCxpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17Y2FyZC5uYW1lfSBrZXk9e2NhcmQubmFtZX0+e2NhcmQubmFtZX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PnRoaXMuZmxpcENhcmQoKX0+ZHJhdyBuZXh0PC9idXR0b24+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY2FyZHMubWFwKChjYXJkLGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2BmYWNlIGNhcmQtJHtpbmRleCsxfWB9IGtleT17Y2FyZC5uYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntjYXJkLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2FyZE51bUxhYmVsXCI+e2luZGV4ICsgMX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuXG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgIH0gICAgICAgICAgICAgXG4gICAgICAgICNzaWduaWZpY2F0b3ItZGVzYyB7XG4gICAgICAgIH1cbiAgICAgICAgI3NpZ25pZmljYXRvci1jYXJkLWxpc3Qge1xuICAgICAgICAgICBtYXJnaW46IDAgMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHVsIHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQtMSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDIwMHB4O1xuICAgICAgICAgICAgbGVmdDogMTUwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZC0yIHtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgICAgICAgICAgdG9wOiAyMDVweDtcbiAgICAgICAgICAgIGxlZnQ6IDE1MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQtMyB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBsZWZ0OiAxNTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkLTQge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiA0MDBweDtcbiAgICAgICAgICAgIGxlZnQ6IDE1MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQtNXtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMjAwcHg7XG4gICAgICAgICAgICBsZWZ0OiAzMDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkLTYge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAyMDBweDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmQtNyB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBib3R0b206IDQwcHg7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgfVxuICAgICAgICAuY2FyZC04IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgYm90dG9tOiAyMDBweDtcbiAgICAgICAgfVxuICAgICAgICAuY2FyZC05IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMTYwcHg7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgfVxuICAgICAgICAuY2FyZC0xMCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mbGlwcGVkIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGluaGVyaXQ7XG4gICAgICAgIH1cblxuICAgICAgICAuZmFjZSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogbWFyb29uO1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICBoZWlnaHQ6IDEzMHB4O1xuICAgICAgICAgIHdpZHRoOiA5MHB4O1xuICAgICAgICAgIGxpc3Qtc3R5bGU6bm9uZTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgei1pbmRleDoxO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZhY2U6aG92ZXIge1xuICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkTnVtTGFiZWwge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XG5cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgPC9kaXY+XG4gICAgICAgICBcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGRlZmF1bHQgQ2VsdGljQ3Jvc3M7Il19 */\n/*@ sourceURL=/Users/jess/Desktop/projects/web/tarot-app/pages/boards/celtic-cross.js */"));
    }
  }]);

  return CelticCross;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (CelticCross);

/***/ })

})
//# sourceMappingURL=index.js.6022e5390f1f300a06fe.hot-update.js.map