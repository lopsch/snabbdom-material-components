'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _snabbdomJsxPragma = require('snabbdom-jsx-pragma');

var _snabbdomJsxPragma2 = _interopRequireDefault(_snabbdomJsxPragma);

var _ripple = require('../ripple');

var _ripple2 = _interopRequireDefault(_ripple);

var _base = require('../base');

var _styles = require('./styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable no-unused-vars */

/* eslint-enable no-unused-vars */


var ButtonComponent = function (_MaterialComponent) {
  _inherits(ButtonComponent, _MaterialComponent);

  function ButtonComponent(_props, _children, _switches) {
    _classCallCheck(this, ButtonComponent);

    var _this = _possibleConstructorReturn(this, (ButtonComponent.__proto__ || Object.getPrototypeOf(ButtonComponent)).call(this, _props, _children, _switches));

    var _this$props = _this.props,
        name = _this$props.name,
        onClick = _this$props.onClick,
        otherProps = _objectWithoutProperties(_this$props, ['name', 'onClick']);

    _this.name = _this.utils.makeKeyValue('name', name);
    _this.hooks = _this._makeHooks();
    _this.ons = {};
    if (typeof onClick === 'function') _this.ons['click'] = onClick;
    _this.classNames = _this._makeClassNames();

    var _this$_makeAttrs = _this._makeAttrs(otherProps),
        attrs = _this$_makeAttrs.attrs,
        remainingProps = _this$_makeAttrs.remainingProps;

    _this.attrs = attrs;
    _this.props = remainingProps;
    return _this;
  }

  _createClass(ButtonComponent, [{
    key: '_makeHooks',
    value: function _makeHooks() {
      return this.utils.makeHooks(_ripple2.default);
    }
  }, {
    key: '_makeClassNames',
    value: function _makeClassNames() {
      return _styles.BTN_CLASS;
    }
  }, {
    key: '_makeAttrs',
    value: function _makeAttrs(props) {
      return { attrs: {}, remainingProps: props };
    }
  }, {
    key: 'render',
    value: function render() {
      return (0, _snabbdomJsxPragma2.default)(
        'button',
        _extends({}, this.selector, {
          classNames: this.classNames,
          'class': this.classes,
          hook: this.hooks,
          on: this.ons
        }, this.name, {
          attrs: this.attrs
        }, this.props),
        this.children
      );
    }
  }]);

  return ButtonComponent;
}(_base.MaterialComponent);

exports.default = ButtonComponent;
//# sourceMappingURL=ButtonComponent.js.map