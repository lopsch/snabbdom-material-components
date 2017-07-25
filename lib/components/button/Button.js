'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styles = require('./styles');

var _ButtonComponent2 = require('./ButtonComponent');

var _ButtonComponent3 = _interopRequireDefault(_ButtonComponent2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_ButtonComponent) {
  _inherits(Button, _ButtonComponent);

  function Button(_props, _children) {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, _props, _children, _styles.STYLE_SWITCHES));
  }

  return Button;
}(_ButtonComponent3.default);

exports.default = Button;
//# sourceMappingURL=Button.js.map