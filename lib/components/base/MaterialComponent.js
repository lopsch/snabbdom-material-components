'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _snabbdomJsxPragma = require('snabbdom-jsx-pragma');

var _utils = require('../../utils');

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MaterialComponent = function (_SnabbdomComponent) {
  _inherits(MaterialComponent, _SnabbdomComponent);

  function MaterialComponent(_props, _children, _switches) {
    _classCallCheck(this, MaterialComponent);

    var _this = _possibleConstructorReturn(this, (MaterialComponent.__proto__ || Object.getPrototypeOf(MaterialComponent)).call(this, _props, _children));

    _this.switches = _switches || [];
    _this.utils = utils;

    var _this$props = _this.props,
        id = _this$props.id,
        otherProps = _objectWithoutProperties(_this$props, ['id']);

    var _normalized = new _this.utils.PropsNormalizer(otherProps, _this.switches).normalized,
        classes = _normalized.classes,
        props = _normalized.props;


    _this.props = props;
    _this.classes = classes;
    _this.selector = _this.utils.makeSelector(id);
    return _this;
  }

  return MaterialComponent;
}(_snabbdomJsxPragma.SnabbdomComponent);

exports.default = MaterialComponent;
//# sourceMappingURL=MaterialComponent.js.map