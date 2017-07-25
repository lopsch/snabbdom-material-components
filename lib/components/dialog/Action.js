'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _styles = require('../button/styles');

var _styles2 = require('./styles');

var _ButtonComponent2 = require('../button/ButtonComponent');

var _ButtonComponent3 = _interopRequireDefault(_ButtonComponent2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Action = function (_ButtonComponent) {
  _inherits(Action, _ButtonComponent);

  function Action(_props, _children) {
    _classCallCheck(this, Action);

    return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).call(this, _props, _children, _styles2.STYLE_SWITCHES_FOOTER_BTN));
  }

  _createClass(Action, [{
    key: '_makeHooks',
    value: function _makeHooks() {
      return {};
    }
  }, {
    key: '_makeClassNames',
    value: function _makeClassNames() {
      return [_styles.BTN_CLASS, _styles2.FOOTER_BTN_CLASS];
    }
  }]);

  return Action;
}(_ButtonComponent3.default);

exports.default = Action;
//# sourceMappingURL=Action.js.map