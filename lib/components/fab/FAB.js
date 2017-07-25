'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _styles = require('./styles');

var _ButtonComponent2 = require('../button/ButtonComponent');

var _ButtonComponent3 = _interopRequireDefault(_ButtonComponent2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FAB = function (_ButtonComponent) {
  _inherits(FAB, _ButtonComponent);

  function FAB(_props, _children) {
    _classCallCheck(this, FAB);

    return _possibleConstructorReturn(this, (FAB.__proto__ || Object.getPrototypeOf(FAB)).call(this, _props, _children, _styles.STYLE_SWITCHES));
  }

  _createClass(FAB, [{
    key: '_makeClassNames',
    value: function _makeClassNames() {
      return _styles.FAB_CLASS;
    }
  }, {
    key: '_makeAttrs',
    value: function _makeAttrs(props) {
      var ariaLabel = props.ariaLabel,
          remainingProps = _objectWithoutProperties(props, ['ariaLabel']);

      return {
        attrs: this.utils.makeKeyValue('aria-label', ariaLabel),
        remainingProps: remainingProps
      };
    }
  }]);

  return FAB;
}(_ButtonComponent3.default);

exports.default = FAB;
//# sourceMappingURL=FAB.js.map