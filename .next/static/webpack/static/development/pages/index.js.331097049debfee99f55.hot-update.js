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
        className: "jsx-3786313856",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, __jsx("button", {
        onClick: function onClick() {
          return _this2.flipCard();
        },
        className: "jsx-3786313856",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "draw next"), __jsx("span", {
        id: "significator-desc",
        className: "jsx-3786313856" + " " + "step",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, "Select the Significator of the person or thing about whom or which the inquiry is made. It is the card which, in the reader's judgment or experience, is the most representative, and is not, therefore, of necessity the Magician or High Priestess mentioned in the official divinatory meanings."), __jsx("select", {
        id: "significator-card-list",
        className: "jsx-3786313856",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, this.state.allCards.map(function (card, index) {
        return __jsx("option", {
          value: card.name,
          key: card.name,
          className: "jsx-3786313856",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          },
          __self: this
        }, card.name);
      })), __jsx("ul", {
        className: "jsx-3786313856",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, this.state.cards.map(function (card, index) {
        return __jsx("li", {
          key: card.name,
          className: "jsx-3786313856" + " " + "face card-".concat(index + 1),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        }, __jsx("span", {
          className: "jsx-3786313856",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        }, card.name), __jsx("span", {
          className: "jsx-3786313856" + " " + "cardNumLabel",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        }, index + 1));
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "3786313856",
        __self: this
      }, "button.jsx-3786313856{display:block;}#significator-desc.jsx-3786313856{display:block;margin:10px;}ul.jsx-3786313856{padding:0;position:relative;height:100vh;}.card-1.jsx-3786313856{position:absolute;top:200px;left:150px;}.card-2.jsx-3786313856{float:left;position:absolute;-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);top:205px;left:150px;}.card-3.jsx-3786313856{position:absolute;top:0;left:150px;}.card-4.jsx-3786313856{position:absolute;top:400px;left:150px;}.card-5.jsx-3786313856{position:absolute;top:200px;left:300px;}.card-6.jsx-3786313856{position:absolute;top:200px;left:0;}.card-7.jsx-3786313856{position:absolute;bottom:40px;right:0;}.card-8.jsx-3786313856{position:absolute;right:0;bottom:200px;}.card-9.jsx-3786313856{position:absolute;top:160px;right:0;}.card-10.jsx-3786313856{position:absolute;top:0;right:0;}.flipped.jsx-3786313856{display:inherit;}.face.jsx-3786313856{background:maroon;display:none;padding:5px;margin:auto;height:130px;width:90px;list-style:none;text-align:center;z-index:1;}.face.jsx-3786313856:hover{z-index:2;}.cardNumLabel.jsx-3786313856{display:block;margin:5px;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXNzL0Rlc2t0b3AvcHJvamVjdHMvd2ViL3Rhcm90LWFwcC9wYWdlcy9ib2FyZHMvY2VsdGljLWNyb3NzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThFd0IsQUFLMkIsQUFHQSxBQVFOLEFBTVUsQUFNUCxBQVFPLEFBTUEsQUFNQSxBQU1BLEFBS0EsQUFLQSxBQUtBLEFBS0EsQUFNRixBQUlBLEFBWU4sQUFJSSxVQW5GRSxBQWdGcEIsQ0FwRXNCLEdBdkJ0QixBQUdnQixBQTRGRCxFQXBCZixFQTFEYyxBQWNKLEFBTUksQUFNQSxBQU1BLEFBS0UsQUFLSixBQUtFLEFBS0osQUFVSyxNQS9DQSxBQXNDSCxDQTBCUSxDQTVGcEIsQUF3RGlCLEVBaERGLEFBTUEsQUFvQkEsQUFNQSxBQU1KLEFBZUMsQ0F6Q2dCLENBK0JoQixDQXlCRSxDQVRkLEdBdENBLEFBa0JBLENBZUEsRUFWQSxDQXJDQSxBQW9CQSxBQU1BLEFBZ0JBLEVBaERBLENBcUZBLENBakJjLFlBQ0MsYUFDRixXQUNJLGdCQUNHLGtCQTVETixBQTZESCxVQTVESSxBQTZEZixXQTVEQSIsImZpbGUiOiIvVXNlcnMvamVzcy9EZXNrdG9wL3Byb2plY3RzL3dlYi90YXJvdC1hcHAvcGFnZXMvYm9hcmRzL2NlbHRpYy1jcm9zcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHtjYXJkc30gZnJvbSBcIi4uLy4uL2RhdGEvY2FyZHNcIjtcbmltcG9ydCBDYXJkIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2NhcmRzL0NhcmRcIjtcblxuXG5jb25zdCBOVU1DQVJEUyA9IDEwO1xuY29uc3QgTlVNREVDSyA9IDc4O1xuXG4vKiogd2lsbCByZXR1cm4gYSByYW5kb20gaW50ZWdlciBiZXR3ZWVuIDEgYW5kIDc4IChudW1iZXIgb2YgdGFyb3QgY2FyZHMpICovXG5mdW5jdGlvbiBnZXRSYW5kb21JbnQoKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IoTlVNREVDSykpO1xufVxuXG5mdW5jdGlvbiBnZXRSYW5kb21DYXJkcygpIHtcbiAgICBsZXQgY2FyZExpc3QgPSBbXTtcbiAgICBjb25zdCBjYXJkc0FyciA9IEFycmF5LmZyb20oY2FyZHMpO1xuXG4gICAgd2hpbGUoY2FyZExpc3QubGVuZ3RoIDwgTlVNQ0FSRFMpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBnZXRSYW5kb21JbnQoKTtcbiAgICAgICAgY29uc3QgY2FyZFRvQWRkID0gY2FyZHNBcnJbaW5kZXhdO1xuICAgICAgICBpZighIGNhcmRMaXN0LmZpbmQoKHNvbWVDYXJkKT0+IHNvbWVDYXJkID09PSBjYXJkVG9BZGQpKSB7XG4gICAgICAgICAgICBjYXJkTGlzdC5wdXNoKGNhcmRUb0FkZCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuICAgIHJldHVybiBjYXJkTGlzdDtcbn1cbmZ1bmN0aW9uIGFzc2lnbkFsbENhcmRzKCkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKGNhcmRzKTtcbn1cblxuY2xhc3MgQ2VsdGljQ3Jvc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcyk7XG4gICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgIGNhcmRzOiBbXSxcbiAgICAgICAgICBhbGxDYXJkczpbXSxcbiAgICAgICAgICBmbGlwSW5kZXg6IDEsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGNvbnN0IGRyYXduQ2FyZHMgPSBnZXRSYW5kb21DYXJkcygpO1xuICAgICAgICBjb25zdCBhbGxDYXJkcyA9IGFzc2lnbkFsbENhcmRzKCk7XG4gICAgICAgIFxuICAgIFxuICAgICAgICB0aGlzLnNldFN0YXRlKHtjYXJkczogZHJhd25DYXJkc30pOyAgIFxuICAgICAgICB0aGlzLnNldFN0YXRlKHthbGxDYXJkczogYWxsQ2FyZHN9KTtcbiAgICB9XG5cbiAgICBmbGlwQ2FyZCgpIHtcbiAgICAgICAgLy8gZHJhd3MgdGhlIG5leHQgY2FyZFxuICAgICAgICB0aGlzLnNldFN0YXRlKHtmbGlwSW5kZXg6IHRoaXMuc3RhdGUuZmxpcEluZGV4ICsgMX0pO1xuICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2FyZC0nKyB0aGlzLnN0YXRlLmZsaXBJbmRleCkpWzBdLnN0eWxlLmRpc3BsYXkgPSBcImluaGVyaXRcIjtcbiAgICB9XG4gIFxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+dGhpcy5mbGlwQ2FyZCgpfT5kcmF3IG5leHQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDxzcGFuIGlkPVwic2lnbmlmaWNhdG9yLWRlc2NcIiBjbGFzc05hbWU9XCJzdGVwXCI+U2VsZWN0IHRoZSBTaWduaWZpY2F0b3Igb2YgdGhlIHBlcnNvbiBvciB0aGluZyBhYm91dCB3aG9tIG9yIHdoaWNoIHRoZSBpbnF1aXJ5IGlzIG1hZGUuICBcbiAgICAgICAgICAgIEl0IGlzIHRoZSBjYXJkIHdoaWNoLCBpbiB0aGUgcmVhZGVyJ3MganVkZ21lbnQgb3IgZXhwZXJpZW5jZSwgXG4gICAgICAgICAgICBpcyB0aGUgbW9zdCByZXByZXNlbnRhdGl2ZSwgYW5kIGlzIG5vdCwgdGhlcmVmb3JlLCBcbiAgICAgICAgICAgIG9mIG5lY2Vzc2l0eSB0aGUgTWFnaWNpYW4gb3IgSGlnaCBQcmllc3Rlc3MgbWVudGlvbmVkIGluIHRoZSBvZmZpY2lhbCBkaXZpbmF0b3J5IG1lYW5pbmdzLjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwic2lnbmlmaWNhdG9yLWNhcmQtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5hbGxDYXJkcy5tYXAoKGNhcmQsaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2NhcmQubmFtZX0ga2V5PXtjYXJkLm5hbWV9PntjYXJkLm5hbWV9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNhcmRzLm1hcCgoY2FyZCxpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtgZmFjZSBjYXJkLSR7aW5kZXgrMX1gfSBrZXk9e2NhcmQubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57Y2FyZC5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcmROdW1MYWJlbFwiPntpbmRleCArIDF9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcblxuXG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfSAgICAgICAgICAgICBcbiAgICAgICAgI3NpZ25pZmljYXRvci1kZXNjIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgICNzaWduaWZpY2F0b3ItY2FyZC1saXN0IHtcbiAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICB1bCB7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkLTEge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAyMDBweDtcbiAgICAgICAgICAgIGxlZnQ6IDE1MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQtMiB7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAgICAgICAgIHRvcDogMjA1cHg7XG4gICAgICAgICAgICBsZWZ0OiAxNTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkLTMge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbGVmdDogMTUwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZC00IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogNDAwcHg7XG4gICAgICAgICAgICBsZWZ0OiAxNTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkLTV7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDIwMHB4O1xuICAgICAgICAgICAgbGVmdDogMzAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZC02IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMjAwcHg7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB9XG4gICAgICAgIC5jYXJkLTcge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgYm90dG9tOiA0MHB4O1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmQtOCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIGJvdHRvbTogMjAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmQtOSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDE2MHB4O1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmQtMTAge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAuZmxpcHBlZCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmhlcml0O1xuICAgICAgICB9XG5cbiAgICAgICAgLmZhY2Uge1xuICAgICAgICAgIGJhY2tncm91bmQ6IG1hcm9vbjtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgaGVpZ2h0OiAxMzBweDtcbiAgICAgICAgICB3aWR0aDogOTBweDtcbiAgICAgICAgICBsaXN0LXN0eWxlOm5vbmU7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIHotaW5kZXg6MTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mYWNlOmhvdmVyIHtcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZE51bUxhYmVsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDpib2xkO1xuXG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgIDwvZGl2PlxuICAgICAgICAgXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBkZWZhdWx0IENlbHRpY0Nyb3NzOyJdfQ== */\n/*@ sourceURL=/Users/jess/Desktop/projects/web/tarot-app/pages/boards/celtic-cross.js */"));
    }
  }]);

  return CelticCross;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (CelticCross);

/***/ })

})
//# sourceMappingURL=index.js.331097049debfee99f55.hot-update.js.map