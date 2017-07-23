'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _snabbdomJsxPragma = require('snabbdom-jsx-pragma');

var _snabbdomJsxPragma2 = _interopRequireDefault(_snabbdomJsxPragma);

var _styles = require('./styles');

var _base = require('../base');

var _LinearProgressAdapter = require('./LinearProgressAdapter');

var _LinearProgressAdapter2 = _interopRequireDefault(_LinearProgressAdapter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable no-unused-vars */

/* eslint-enable no-unused-vars */


var LinearProgress = function (_MaterialComponent) {
  _inherits(LinearProgress, _MaterialComponent);

  function LinearProgress(_props, _children) {
    _classCallCheck(this, LinearProgress);

    var _this = _possibleConstructorReturn(this, (LinearProgress.__proto__ || Object.getPrototypeOf(LinearProgress)).call(this, _props, _children, _styles.STYLE_SWITCHES));

    _this.hooks = _this.utils.makeHooks(_LinearProgressAdapter2.default);
    return _this;
  }

  _createClass(LinearProgress, [{
    key: 'render',
    value: function render() {
      return (0, _snabbdomJsxPragma2.default)(
        'div',
        _extends({}, this.selector, {
          attrs: { role: 'progressbar' },
          classNames: _styles.LP_CLASS,
          'class': this.classes,
          hook: this.hooks
        }, this.props),
        (0, _snabbdomJsxPragma2.default)('div', { classNames: _styles.BUF_DOTS_CLASS }),
        (0, _snabbdomJsxPragma2.default)('div', { classNames: _styles.BUF_CLASS }),
        (0, _snabbdomJsxPragma2.default)(
          'div',
          { classNames: [_styles.BAR_CLASS, _styles.PRIMARY_CLASS] },
          (0, _snabbdomJsxPragma2.default)('span', { classNames: _styles.INNER_CLASS })
        ),
        (0, _snabbdomJsxPragma2.default)(
          'div',
          { classNames: [_styles.BAR_CLASS, _styles.SECONDARY_CLASS] },
          (0, _snabbdomJsxPragma2.default)('span', { classNames: _styles.INNER_CLASS })
        )
      );
    }
  }]);

  return LinearProgress;
}(_base.MaterialComponent);

exports.default = LinearProgress;
//# sourceMappingURL=LinearProgress.js.map