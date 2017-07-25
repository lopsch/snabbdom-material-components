'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ripple = require('../ripple');

var _ripple2 = _interopRequireDefault(_ripple);

var _base = require('../base');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractButton = function (_MaterialComponent) {
  _inherits(AbstractButton, _MaterialComponent);

  function AbstractButton(_props, _children, _switches) {
    _classCallCheck(this, AbstractButton);

    var _this = _possibleConstructorReturn(this, (AbstractButton.__proto__ || Object.getPrototypeOf(AbstractButton)).call(this, _props, _children, _switches));

    var _this$props = _this.props,
        name = _this$props.name,
        onClick = _this$props.onClick,
        otherProps = _objectWithoutProperties(_this$props, ['name', 'onClick']);

    _this.name = _this.utils.makeKeyValue('name', name);
    _this.hooks = _this.utils.makeHooks(_ripple2.default);
    _this.ons = {};
    if (typeof onClick === 'function') _this.ons['click'] = onClick;
    _this.props = otherProps;
    return _this;
  }

  return AbstractButton;
}(_base.MaterialComponent);

exports.default = AbstractButton;
//# sourceMappingURL=AbstractButton.js.map