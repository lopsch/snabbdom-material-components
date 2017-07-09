'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PropsNormalizer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.delayInit = delayInit;
exports.uuid = uuid;
exports.makeHooks = makeHooks;
exports.makeSelector = makeSelector;
exports.makeKeyValue = makeKeyValue;

var _typestyle = require('typestyle');

var _snabbdomJsxPragma = require('snabbdom-jsx-pragma');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function delayInit(elm, callback) {
  var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;

  var pos = window.getComputedStyle(elm).position;

  if (pos === 'relative') {
    callback();
  } else {
    var pollId = 0;

    pollId = window.setInterval(function poll() {
      pos = window.getComputedStyle(elm).position;

      if (pos === 'relative') {
        window.clearInterval(pollId);
        callback();
      }
    }, delay);
  }
}

function uuid() {
  return _uuid();
}

/* eslint-disable operator-linebreak */
function _uuid(a // placeholder
) {
  return a // if the placeholder was passed, return
  ? // a random number from 0 to 15
  (a ^ // unless b is 8,
  Math.random() * // in which case
  16 >> // a random number from
  a / 4). // 8 to 11
  toString(16) // in hexadecimal
  : // or otherwise a concatenated string:
  ([1e7] + // 10000000 +
  -1e3 + // -1000 +
  -4e3 + // -4000 +
  -8e3 + // -80000000 +
  -1e11). // -100000000000,
  replace(
  // replacing
  /[018]/g, // zeroes, ones, and eights with
  _uuid // random hex digits
  );
}

function makeHooks(Adapter) {
  var hooks = {};

  hooks.insert = function insert(vnode) {
    var material = new Adapter(vnode);
    vnode.data.material = material;
  };

  hooks.postpatch = function postpatch(oldVnode, vnode) {
    vnode.data.material = oldVnode.data.material;
    callHook.apply(undefined, [vnode.data.material.update].concat(Array.prototype.slice.call(arguments)));
  };

  hooks.destroy = function destroy(vnode) {
    callHook.apply(undefined, [vnode.data.material.destroy].concat(Array.prototype.slice.call(arguments)));
  };

  return hooks;

  function callHook(hook) {
    if (typeof hook === 'function') {
      hook.apply(undefined, _toConsumableArray(Array.prototype.slice.call(arguments, 1)));
    }
  }
}

function makeSelector(id) {
  return id && id !== '' ? { selector: '#' + id } : {};
}

function makeKeyValue(key, value) {
  return value && value !== '' ? _defineProperty({}, key, value) : {};
}

var PropsNormalizer = exports.PropsNormalizer = function () {
  function PropsNormalizer(props, switches) {
    _classCallCheck(this, PropsNormalizer);

    props = props || {};
    switches = switches || {};

    var fromClassNames = props && props['classNames'] ? this._classes(this._fromClassNames([props['classNames']])) : {};
    var fromStyle = props && props['style'] ? this._classes(this._fromClassNames([(0, _typestyle.style)(props['style'])])) : {};
    var fromProps = props && props['class'] ? props['class'] : {};
    var fromSwitches = switches && props ? this._fromSwitches(switches, props) : {};

    var _allClasses = [fromClassNames, fromStyle, fromProps, fromSwitches];
    this.extractedClasses = {};

    for (var i = 0; i < _allClasses.length; i++) {
      var _classes = _allClasses[i];

      for (var _class in _classes) {
        this.extractedClasses[_class] = _classes[_class];
      }
    }

    this.normalizedProps = props;
    delete this.normalizedProps['classNames'];
    delete this.normalizedProps['style'];
    delete this.normalizedProps['class'];
  }

  _createClass(PropsNormalizer, [{
    key: '_fromSwitches',
    value: function _fromSwitches(switches, props) {
      var map = {};

      for (var _switch in switches) {
        map[switches[_switch]] = !!props[_switch];
      }

      return map;
    }
  }, {
    key: '_classes',
    value: function _classes(classes) {
      var map = {};

      for (var i = 0; i < classes.length; i++) {
        map[classes[i]] = true;
      }

      return map;
    }
  }, {
    key: '_fromClassNames',
    value: function _fromClassNames(classNames) {
      return (0, _snabbdomJsxPragma.tryFlatten)((0, _snabbdomJsxPragma.tryFlatten)(classNames).map(function (className) {
        return className.replace(/\s+/g, '_§§§_').split('_§§§_');
      }));
    }
  }, {
    key: 'normalized',
    get: function get() {
      return { classes: this.extractedClasses, props: this.normalizedProps };
    }
  }]);

  return PropsNormalizer;
}();
//# sourceMappingURL=utils.js.map