'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MaterialAdapter = function MaterialAdapter(sel, component) {
  var _this = this;

  _classCallCheck(this, MaterialAdapter);

  this.sel = sel;
  this.component = component;

  if (process.env.NODE_ENV !== 'production') {
    console.info(this.sel, '-> init()');
  }

  this.destroy = function () {
    if (_this.component && typeof _this.component.destroy === 'function') {
      if (process.env.NODE_ENV !== 'production') {
        console.info(_this.sel, '-> destroy()');
      }

      _this.component.destroy();
    }
  };

  this.update = function (oldVnode, vnode) {
    if (process.env.NODE_ENV !== 'production') {
      console.info(_this.sel, '-> update()');
    }

    _this._update(oldVnode, vnode);
  };

  this._update = function (oldVnode, vnode) {};
};

exports.default = MaterialAdapter;
//# sourceMappingURL=MaterialAdapter.js.map