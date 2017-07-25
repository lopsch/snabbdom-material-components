'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mdcFormField = require('@material/form-field/dist/mdc.formField.min');

var _styles = require('./styles');

var _base = require('../base');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormFieldDecorator = function (_MaterialAdapter) {
  _inherits(FormFieldDecorator, _MaterialAdapter);

  function FormFieldDecorator(sel, elm, Decorate) {
    _classCallCheck(this, FormFieldDecorator);

    var _this = _possibleConstructorReturn(this, (FormFieldDecorator.__proto__ || Object.getPrototypeOf(FormFieldDecorator)).call(this, sel, new Decorate(elm)));

    var parent = elm.parentElement;

    if (parent && parent.classList.contains(_styles.FF_CLASS)) {
      _this.parent = parent;
      _this.formField = new _mdcFormField.MDCFormField(_this.parent);

      _this.formField.input = _this.component;
    }
    return _this;
  }

  return FormFieldDecorator;
}(_base.MaterialAdapter);

exports.default = FormFieldDecorator;
//# sourceMappingURL=FormFieldDecorator.js.map