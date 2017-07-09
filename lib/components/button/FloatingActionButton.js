'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _snabbdomJsxPragma = require('snabbdom-jsx-pragma');

var _snabbdomJsxPragma2 = _interopRequireDefault(_snabbdomJsxPragma);

var _styles = require('./styles');

var _AbstractButton2 = require('./AbstractButton');

var _AbstractButton3 = _interopRequireDefault(_AbstractButton2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable no-unused-vars */

/* eslint-enable no-unused-vars */


var FloatingActionButton = function (_AbstractButton) {
  _inherits(FloatingActionButton, _AbstractButton);

  function FloatingActionButton(_props, _children) {
    _classCallCheck(this, FloatingActionButton);

    var _this = _possibleConstructorReturn(this, (FloatingActionButton.__proto__ || Object.getPrototypeOf(FloatingActionButton)).call(this, _props, _children, _styles.STYLE_SWITCHES_FAB));

    var _this$props = _this.props,
        ariaLabel = _this$props.ariaLabel,
        otherProps = _objectWithoutProperties(_this$props, ['ariaLabel']);

    _this.ariaLabel = _this.utils.makeKeyValue('aria-label', ariaLabel);
    _this.props = otherProps;
    return _this;
  }

  _createClass(FloatingActionButton, [{
    key: 'render',
    value: function render() {
      return (0, _snabbdomJsxPragma2.default)(
        'button',
        _extends({}, this.selector, {
          classNames: _styles.FAB_CLASS,
          'class': this.classes,
          hook: this.hooks
        }, this.name, {
          attrs: _extends({}, this.ariaLabel)
        }, this.props),
        this.children
      );
    }
  }]);

  return FloatingActionButton;
}(_AbstractButton3.default);

exports.default = FloatingActionButton;
//# sourceMappingURL=FloatingActionButton.js.map