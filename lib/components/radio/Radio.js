'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _snabbdomJsxPragma = require('snabbdom-jsx-pragma');

var _snabbdomJsxPragma2 = _interopRequireDefault(_snabbdomJsxPragma);

var _styles = require('./styles');

var _RadioAdapter = require('./RadioAdapter');

var _RadioAdapter2 = _interopRequireDefault(_RadioAdapter);

var _InputComponent2 = require('../input/InputComponent');

var _InputComponent3 = _interopRequireDefault(_InputComponent2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable no-unused-vars */

/* eslint-enable no-unused-vars */


var Radio = function (_InputComponent) {
  _inherits(Radio, _InputComponent);

  function Radio(_props, _children) {
    _classCallCheck(this, Radio);

    return _possibleConstructorReturn(this, (Radio.__proto__ || Object.getPrototypeOf(Radio)).call(this, _props, _children, _styles.STYLE_SWITCHES));
  }

  _createClass(Radio, [{
    key: '_makeHooks',
    value: function _makeHooks() {
      return this.utils.makeHooks(_RadioAdapter2.default);
    }
  }, {
    key: 'render',
    value: function render() {
      return (0, _snabbdomJsxPragma2.default)(
        'div',
        _extends({
          classNames: _styles.RADIO_CLASS,
          'class': this.classes,
          hook: this.hooks
        }, this.props),
        (0, _snabbdomJsxPragma2.default)('input', _extends({}, this.selector, {
          classNames: _styles.RADIO_NC_CLASS,
          on: this.ons,
          type: 'radio'
        }, this.value, this.name, {
          disabled: !!this.props.disabled,
          checked: !!this.props.checked })),
        (0, _snabbdomJsxPragma2.default)(
          'div',
          { classNames: _styles.RADIO_BG_CLASS },
          (0, _snabbdomJsxPragma2.default)('div', { classNames: _styles.RADIO_OUTER }),
          (0, _snabbdomJsxPragma2.default)('div', { classNames: _styles.RADIO_INNER })
        )
      );
    }
  }]);

  return Radio;
}(_InputComponent3.default);

exports.default = Radio;
//# sourceMappingURL=Radio.js.map