'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = require('../base');

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputComponent = function (_MaterialComponent) {
  _inherits(InputComponent, _MaterialComponent);

  function InputComponent(_props, _children, _switches) {
    _classCallCheck(this, InputComponent);

    var _this = _possibleConstructorReturn(this, (InputComponent.__proto__ || Object.getPrototypeOf(InputComponent)).call(this, _props, _children, _switches));

    var _this$props = _this.props,
        name = _this$props.name,
        value = _this$props.value,
        onChange = _this$props.onChange,
        onClick = _this$props.onClick,
        otherProps = _objectWithoutProperties(_this$props, ['name', 'value', 'onChange', 'onClick']);

    _this.name = _this.utils.makeKeyValue('name', name);
    _this.value = _this.utils.makeKeyValue('value', value);
    _this.hooks = _this._makeHooks();
    _this.ons = {};
    if (typeof onChange === 'function') _this.ons['change'] = onChange;
    if (typeof onClick === 'function') _this.ons['click'] = onClick;
    _this.props = otherProps;
    return _this;
  }

  _createClass(InputComponent, [{
    key: '_makeHooks',
    value: function _makeHooks() {
      return {};
    }
  }]);

  return InputComponent;
}(_base.MaterialComponent);

exports.default = InputComponent;
//# sourceMappingURL=InputComponent.js.map