'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mdc = require('@material/ripple/dist/mdc.ripple');

var _utils = require('../../utils');

var _base = require('../base');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ButtonAdapter = function (_MaterialAdapter) {
  _inherits(ButtonAdapter, _MaterialAdapter);

  function ButtonAdapter(_ref) {
    var sel = _ref.sel,
        elm = _ref.elm;

    _classCallCheck(this, ButtonAdapter);

    var _this = _possibleConstructorReturn(this, (ButtonAdapter.__proto__ || Object.getPrototypeOf(ButtonAdapter)).call(this, sel));

    (0, _utils.delayInit)(elm, function attach() {
      _mdc.MDCRipple.attachTo(elm);
    });
    return _this;
  }

  return ButtonAdapter;
}(_base.MaterialAdapter);

exports.default = ButtonAdapter;
//# sourceMappingURL=ButtonAdapter.js.map