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

var _base = require('../base');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable no-unused-vars */

/* eslint-enable no-unused-vars */


var Radio = function (_MaterialComponent) {
  _inherits(Radio, _MaterialComponent);

  function Radio(_props, _children) {
    _classCallCheck(this, Radio);

    var _this = _possibleConstructorReturn(this, (Radio.__proto__ || Object.getPrototypeOf(Radio)).call(this, _props, _children, _styles.STYLE_SWITCHES));

    var _this$props = _this.props,
        name = _this$props.name,
        value = _this$props.value,
        onChange = _this$props.onChange,
        onClick = _this$props.onClick,
        otherProps = _objectWithoutProperties(_this$props, ['name', 'value', 'onChange', 'onClick']);

    _this.name = _this.utils.makeKeyValue('name', name);
    _this.value = _this.utils.makeKeyValue('value', value);
    _this.hooks = _this.utils.makeHooks(_RadioAdapter2.default);
    _this.ons = {};
    if (typeof onChange === 'function') _this.ons['change'] = onChange;
    if (typeof onClick === 'function') _this.ons['click'] = onClick;
    _this.props = otherProps;
    return _this;
  }

  _createClass(Radio, [{
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
}(_base.MaterialComponent);

exports.default = Radio;
//# sourceMappingURL=Radio.js.map