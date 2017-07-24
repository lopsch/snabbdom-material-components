'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mdc = require('@material/dialog/dist/mdc.dialog');

var _base = require('../base');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DialogAdapter = function (_MaterialAdapter) {
  _inherits(DialogAdapter, _MaterialAdapter);

  function DialogAdapter(_ref) {
    var sel = _ref.sel,
        elm = _ref.elm,
        data = _ref.data;

    _classCallCheck(this, DialogAdapter);

    var _this = _possibleConstructorReturn(this, (DialogAdapter.__proto__ || Object.getPrototypeOf(DialogAdapter)).call(this, sel, new _mdc.MDCDialog(elm)));

    _this.dialog = _this.component;

    _this._update = function (oldVnode, vnode) {
      _this._updateProps(vnode.data.props);
    };

    _this._updateShow = function (props) {
      _this._callUpdate(props, 'show');
    };

    _this._updateHide = function (props) {
      _this._callUpdate(props, 'close');
    };

    _this._updateProps = function (props) {
      _this._updateShow(props);
      _this._updateHide(props);
    };

    _this._callUpdate = function (props, prop) {
      if (props && props[prop] && typeof props[prop] === 'boolean' && typeof _this.dialog[prop] === 'function') {
        _this.dialog[prop]();
      }
    };

    _this._updateProps(data.props);
    return _this;
  }

  return DialogAdapter;
}(_base.MaterialAdapter);

exports.default = DialogAdapter;
//# sourceMappingURL=DialogAdapter.js.map