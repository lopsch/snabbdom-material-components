'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mdc = require('@material/linear-progress/dist/mdc.linearProgress');

var _base = require('../base');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LinearProgressAdapter = function (_MaterialAdapter) {
  _inherits(LinearProgressAdapter, _MaterialAdapter);

  function LinearProgressAdapter(_ref) {
    var sel = _ref.sel,
        elm = _ref.elm,
        data = _ref.data;

    _classCallCheck(this, LinearProgressAdapter);

    var _this = _possibleConstructorReturn(this, (LinearProgressAdapter.__proto__ || Object.getPrototypeOf(LinearProgressAdapter)).call(this, sel, new _mdc.MDCLinearProgress(elm)));

    _this.linearProgress = _this.component;

    _this._update = function (oldVnode, vnode) {
      _this._updateProps(vnode.data.props);
    };

    _this._updateBuffer = function (props) {
      _this._callUpdate(props, 'buffer');
    };

    _this._updateProgress = function (props) {
      _this._callUpdate(props, 'progress');
    };

    _this._updateProps = function (props) {
      _this._updateBuffer(props);
      _this._updateProgress(props);
    };

    _this._callUpdate = function (props, prop) {
      if (props && typeof props[prop] === 'number') {
        _this[prop] = props[prop];
        _this.linearProgress[prop] = _this[prop];
      }
    };

    _this._updateProps(data.props);
    return _this;
  }

  return LinearProgressAdapter;
}(_base.MaterialAdapter);

exports.default = LinearProgressAdapter;
//# sourceMappingURL=LinearProgressAdapter.js.map