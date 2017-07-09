'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mdc = require('@material/checkbox/dist/mdc.checkbox');

var _formField = require('../form-field');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CheckboxAdapter = function (_FormFieldDecorator) {
  _inherits(CheckboxAdapter, _FormFieldDecorator);

  function CheckboxAdapter(_ref) {
    var sel = _ref.sel,
        elm = _ref.elm;

    _classCallCheck(this, CheckboxAdapter);

    var _this = _possibleConstructorReturn(this, (CheckboxAdapter.__proto__ || Object.getPrototypeOf(CheckboxAdapter)).call(this, sel, elm, _mdc.MDCCheckbox));

    _this.checkbox = _this.component;
    return _this;
  }

  return CheckboxAdapter;
}(_formField.FormFieldDecorator);

exports.default = CheckboxAdapter;
//# sourceMappingURL=CheckboxAdapter.js.map