'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mdcRadio = require('@material/radio/dist/mdc.radio.min');

var _formField = require('../form-field');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RadioAdapter = function (_FormFieldDecorator) {
  _inherits(RadioAdapter, _FormFieldDecorator);

  function RadioAdapter(_ref) {
    var sel = _ref.sel,
        elm = _ref.elm;

    _classCallCheck(this, RadioAdapter);

    var _this = _possibleConstructorReturn(this, (RadioAdapter.__proto__ || Object.getPrototypeOf(RadioAdapter)).call(this, sel, elm, _mdcRadio.MDCRadio));

    _this.radio = _this.component;
    return _this;
  }

  return RadioAdapter;
}(_formField.FormFieldDecorator);

exports.default = RadioAdapter;
//# sourceMappingURL=RadioAdapter.js.map