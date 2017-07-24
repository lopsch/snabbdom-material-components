'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _snabbdomJsxPragma = require('snabbdom-jsx-pragma');

var _snabbdomJsxPragma2 = _interopRequireDefault(_snabbdomJsxPragma);

var _styles = require('../button/styles');

var _styles2 = require('./styles');

var _AbstractButton2 = require('../button/AbstractButton');

var _AbstractButton3 = _interopRequireDefault(_AbstractButton2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable no-unused-vars */

/* eslint-enable no-unused-vars */


var Action = function (_AbstractButton) {
  _inherits(Action, _AbstractButton);

  function Action(_props, _children) {
    _classCallCheck(this, Action);

    return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).call(this, _extends({}, _props, { compact: true }), _children, _styles.STYLE_SWITCHES));
  }

  _createClass(Action, [{
    key: 'render',
    value: function render() {
      return (0, _snabbdomJsxPragma2.default)(
        'button',
        _extends({}, this.selector, {
          classNames: [_styles.BTN_CLASS, _styles2.ACTION_CLASS],
          'class': this.classes,
          hook: this.hooks,
          on: this.ons
        }, this.name, this.props),
        this.children
      );
    }
  }]);

  return Action;
}(_AbstractButton3.default);

exports.default = Action;
//# sourceMappingURL=Action.js.map