'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a};
var classCallCheck=function(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")};function tryFlatten(a){return Array.isArray(a)?flatten(a,[]):a}function flatten(a,b){for(var c,d=0;d<a.length;d++)c=a[d],Array.isArray(c)?flatten(c,b):b.push(c);return b}function isPrimitive(a){return"string"==typeof a||"number"==typeof a||"boolean"==typeof a||"symbol"===("undefined"==typeof a?"undefined":_typeof(a))||null===a||a===void 0}function isClass(a){return isFunc(a)&&!!a.prototype.snabbdomComponent&&"function"==typeof a.prototype.render}function isFunc(a){return"function"==typeof a}function isObj(a){return"object"===("undefined"==typeof a?"undefined":_typeof(a))}function isSvg(a){return a&&"string"==typeof a&&"s"===a[0]&&"v"===a[1]&&"g"===a[2]&&(3===a.length||"."===a[3]||"#"===a[3])}var DEF_NS="props"; var DEF_MODS=["hook","on","style","class","props","attrs","dataset"]; var SVG_NS="http://www.w3.org/2000/svg";function normalizeAttrs(a){function b(a,b,d){var e=c[a]||{};e[b]=d,c[a]=e;}var c={};for(var d in a)if(DEF_MODS.includes(d))c[d]=a[d];else if("key"!=d&&"classNames"!=d&&"selector"!=d){var e=d.indexOf("-");if(-1!==e){var f=d.substring(0,e),g=d.substring(e+1);b(f,g,a[d]);}else c[d]||b(DEF_NS,d,a[d]);}return c}function buildFromStringTag(a,b,c){if(b.selector&&""!==b.selector&&(a+=b.selector),b.classNames&&(Array.isArray(b.classNames)&&0!==b.classNames.length||""!==b.classNames)){var d=b.classNames;a=a+"."+(Array.isArray(d)?d.join("."):d.replace(/\s+/g,"."));}return{sel:a,data:normalizeAttrs(b),children:c.map(function(a){return isPrimitive(a)?{text:a}:a}),key:b.key}}function buildFromComponent(a,b,c){var d,e=isClass(a),f=isFunc(a),g=isObj(a)&&"function"==typeof a.render;if(e){d=new a(b,c).render();}else if(g)d=a.render(b,c);else if(f)d=a(b,c);else throw console.error("JSX tag error: tag =",a,", attrs =",b,", children =",c),new Error("JSX tag must be either a 'string', a 'function' or\n      an 'object'/a 'class' with either a 'view' or a 'render' method.");return d&&(d.key=b.key),d}function mapPropsToAttrs(a){var b=a.attrs||(a.attrs={}),c=a.props||(a.props={});for(var d in c)void 0===b[d]&&(b[d]=c[d],delete c[d]);return a.attrs=b,0<Object.keys(c).length?a.props=c:delete a.props,a}function addNSAndAttrs(a){var b=a.data||{};if(b.ns=SVG_NS,a.data=mapPropsToAttrs(b),"foreignObject"!==a.sel)for(var c=0;c<a.children.length;c++)addNSAndAttrs(a.children[c]);}function buildVnode(a,b,c){if(c=tryFlatten(c),"string"==typeof a){var d=buildFromStringTag(a,b,c),e=d.sel;return isSvg(e)&&addNSAndAttrs(d),d}return buildFromComponent(a,b,c)}function html$1(a,b,c){if(b=b||{},c=c||[],"object"!==("undefined"==typeof b?"undefined":_typeof(b)))throw console.error("JSX attrs error: tag =",a,", attrs =",b,", children =",c),new Error("JSX attrs must be of type 'object'.");return(3<arguments.length||!Array.isArray(c))&&(c=Array.prototype.slice.call(arguments,2)),buildVnode(a,b,c)}var SnabbdomComponent=function a(){var b=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},c=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[];classCallCheck(this,a),this.props=b,this.children=c;};SnabbdomComponent.prototype.snabbdomComponent=!0,SnabbdomComponent.prototype.render=function(){throw new Error("Subclasses must override 'render' to return a properly configured 'class SnabbdomComponent'.")};
//# sourceMappingURL=index.js.map

// export const STYLE_SWITCHES = { accent: 'mdc-checkbox--accent' }

var CB_CLASS = 'mdc-checkbox';

var CB_NC_CLASS = 'mdc-checkbox__native-control';

var CB_BG_CLASS = 'mdc-checkbox__background';

var CB_CM_CLASS = 'mdc-checkbox__checkmark';

var CB_CMP_CLASS = 'mdc-checkbox__checkmark__path';

var CB_MM = 'mdc-checkbox__mixedmark';

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @typedef {{
 *   noPrefix: string,
 *   webkitPrefix: string
 * }}
 */
const eventTypeMap = {
  'animationstart': {
    noPrefix: 'animationstart',
    webkitPrefix: 'webkitAnimationStart',
    styleProperty: 'animation',
  },
  'animationend': {
    noPrefix: 'animationend',
    webkitPrefix: 'webkitAnimationEnd',
    styleProperty: 'animation',
  },
  'animationiteration': {
    noPrefix: 'animationiteration',
    webkitPrefix: 'webkitAnimationIteration',
    styleProperty: 'animation',
  },
  'transitionend': {
    noPrefix: 'transitionend',
    webkitPrefix: 'webkitTransitionEnd',
    styleProperty: 'transition',
  },
};

/** @const {Object<string, !VendorPropertyMapType>} */
const cssPropertyMap = {
  'animation': {
    noPrefix: 'animation',
    webkitPrefix: '-webkit-animation',
  },
  'transform': {
    noPrefix: 'transform',
    webkitPrefix: '-webkit-transform',
  },
  'transition': {
    noPrefix: 'transition',
    webkitPrefix: '-webkit-transition',
  },
};

/**
 * @param {!Object} windowObj
 * @return {boolean}
 */
function hasProperShape(windowObj) {
  return (windowObj['document'] !== undefined && typeof windowObj['document']['createElement'] === 'function');
}

/**
 * @param {string} eventType
 * @return {boolean}
 */
function eventFoundInMaps(eventType) {
  return (eventType in eventTypeMap || eventType in cssPropertyMap);
}

/**
 * @param {string} eventType
 * @param {!Object<string, !VendorPropertyMapType>} map
 * @param {!Element} el
 * @return {string}
 */
function getJavaScriptEventName(eventType, map, el) {
  return map[eventType].styleProperty in el.style ? map[eventType].noPrefix : map[eventType].webkitPrefix;
}

/**
 * Helper function to determine browser prefix for CSS3 animation events
 * and property names.
 * @param {!Object} windowObj
 * @param {string} eventType
 * @return {string}
 */
function getAnimationName(windowObj, eventType) {
  if (!hasProperShape(windowObj) || !eventFoundInMaps(eventType)) {
    return eventType;
  }

  const map = /** @type {!Object<string, !VendorPropertyMapType>} */ (
    eventType in eventTypeMap ? eventTypeMap : cssPropertyMap
  );
  const el = windowObj['document']['createElement']('div');
  let eventName = '';

  if (map === eventTypeMap) {
    eventName = getJavaScriptEventName(eventType, map, el);
  } else {
    eventName = map[eventType].noPrefix in el.style ? map[eventType].noPrefix : map[eventType].webkitPrefix;
  }

  return eventName;
}

// Public functions to access getAnimationName() for JavaScript events or CSS
// property names.

const transformStyleProperties = ['transform', 'WebkitTransform', 'MozTransform', 'OTransform', 'MSTransform'];

/**
 * @param {!Object} windowObj
 * @param {string} eventType
 * @return {string}
 */
function getCorrectEventName(windowObj, eventType) {
  return getAnimationName(windowObj, eventType);
}

/**
 * @param {!Object} windowObj
 * @param {string} eventType
 * @return {string}
 */
function getCorrectPropertyName(windowObj, eventType) {
  return getAnimationName(windowObj, eventType);
}

/**
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @template A
 */
class MDCFoundation {
  /** @return enum{cssClasses} */
  static get cssClasses() {
    // Classes extending MDCFoundation should implement this method to return an object which exports every
    // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
    return {};
  }

  /** @return enum{strings} */
  static get strings() {
    // Classes extending MDCFoundation should implement this method to return an object which exports all
    // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
    return {};
  }

  /** @return enum{numbers} */
  static get numbers() {
    // Classes extending MDCFoundation should implement this method to return an object which exports all
    // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
    return {};
  }

  /** @return {!Object} */
  static get defaultAdapter() {
    // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
    // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
    // validation.
    return {};
  }

  /**
   * @param {A=} adapter
   */
  constructor(adapter = {}) {
    /** @protected {!A} */
    this.adapter_ = adapter;
  }

  init() {
    // Subclasses should override this method to perform initialization routines (registering events, etc.)
  }

  destroy() {
    // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
  }
}

/**
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

class MDCComponent {
  /**
   * @param {!Element} root
   * @return {!MDCComponent}
   */
  static attachTo(root) {
    // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
    // returns an instantiated component with its root set to that element. Also note that in the cases of
    // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
    // from getDefaultFoundation().
    return new MDCComponent(root, new MDCFoundation());
  }

  /**
   * @param {!Element} root
   * @param {F=} foundation
   * @param {...?} args
   */
  constructor(root, foundation = undefined, ...args) {
    /** @protected {!Element} */
    this.root_ = root;
    this.initialize(...args);
    // Note that we initialize foundation here and not within the constructor's default param so that
    // this.root_ is defined and can be used within the foundation class.
    /** @protected {!F} */
    this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
    this.foundation_.init();
    this.initialSyncWithDOM();
  }

  initialize(/* ...args */) {
    // Subclasses can override this to do any additional setup work that would be considered part of a
    // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
    // initialized. Any additional arguments besides root and foundation will be passed in here.
  }

  /**
   * @return {!F} foundation
   */
  getDefaultFoundation() {
    // Subclasses must override this method to return a properly configured foundation class for the
    // component.
    throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' +
      'foundation class');
  }

  initialSyncWithDOM() {
    // Subclasses should override this method if they need to perform work to synchronize with a host DOM
    // object. An example of this would be a form control wrapper that needs to synchronize its internal state
    // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
    // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
  }

  destroy() {
    // Subclasses may implement this method to release any resources / deregister any listeners they have
    // attached. An example of this might be deregistering a resize event from the window object.
    this.foundation_.destroy();
  }

  /**
   * Wrapper method to add an event listener to the component's root element. This is most useful when
   * listening for custom events.
   * @param {string} evtType
   * @param {!Function} handler
   */
  listen(evtType, handler) {
    this.root_.addEventListener(evtType, handler);
  }

  /**
   * Wrapper method to remove an event listener to the component's root element. This is most useful when
   * unlistening for custom events.
   * @param {string} evtType
   * @param {!Function} handler
   */
  unlisten(evtType, handler) {
    this.root_.removeEventListener(evtType, handler);
  }

  /**
   * Fires a cross-browser-compatible custom event from the component root of the given type,
   * with the given data.
   * @param {string} evtType
   * @param {!Object} evtData
   * @param {boolean=} shouldBubble
   */
  emit(evtType, evtData, shouldBubble = false) {
    let evt;
    if (typeof CustomEvent === 'function') {
      evt = new CustomEvent(evtType, {
        detail: evtData,
        bubbles: shouldBubble,
      });
    } else {
      evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(evtType, shouldBubble, false, evtData);
    }

    this.root_.dispatchEvent(evt);
  }
}

/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @typedef {!{
 *   checked: boolean,
 *   indeterminate: boolean,
 *   disabled: boolean,
 *   value: ?string
 * }}
 */

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint-disable no-unused-vars */

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @const {string} */
const ROOT = 'mdc-checkbox';

/** @enum {string} */
const cssClasses = {
  UPGRADED: 'mdc-checkbox--upgraded',
  CHECKED: 'mdc-checkbox--checked',
  INDETERMINATE: 'mdc-checkbox--indeterminate',
  DISABLED: 'mdc-checkbox--disabled',
  ANIM_UNCHECKED_CHECKED: 'mdc-checkbox--anim-unchecked-checked',
  ANIM_UNCHECKED_INDETERMINATE: 'mdc-checkbox--anim-unchecked-indeterminate',
  ANIM_CHECKED_UNCHECKED: 'mdc-checkbox--anim-checked-unchecked',
  ANIM_CHECKED_INDETERMINATE: 'mdc-checkbox--anim-checked-indeterminate',
  ANIM_INDETERMINATE_CHECKED: 'mdc-checkbox--anim-indeterminate-checked',
  ANIM_INDETERMINATE_UNCHECKED: 'mdc-checkbox--anim-indeterminate-unchecked',
};

/** @enum {string} */
const strings = {
  NATIVE_CONTROL_SELECTOR: `.${ROOT}__native-control`,
  TRANSITION_STATE_INIT: 'init',
  TRANSITION_STATE_CHECKED: 'checked',
  TRANSITION_STATE_UNCHECKED: 'unchecked',
  TRANSITION_STATE_INDETERMINATE: 'indeterminate',
};

/** @enum {number} */
const numbers = {
  ANIM_END_LATCH_MS: 100,
};

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const CB_PROTO_PROPS = ['checked', 'indeterminate'];

/**
 * @extends {MDCFoundation<!MDCCheckboxAdapter>}
 */
class MDCCheckboxFoundation extends MDCFoundation {
  /** @return enum {cssClasses} */
  static get cssClasses() {
    return cssClasses;
  }

  /** @return enum {strings} */
  static get strings() {
    return strings;
  }

  /** @return enum {numbers} */
  static get numbers() {
    return numbers;
  }

  /** @return {!MDCCheckboxAdapter} */
  static get defaultAdapter() {
    return /** @type {!MDCCheckboxAdapter} */ ({
      addClass: (/* className: string */) => {},
      removeClass: (/* className: string */) => {},
      registerAnimationEndHandler: (/* handler: EventListener */) => {},
      deregisterAnimationEndHandler: (/* handler: EventListener */) => {},
      registerChangeHandler: (/* handler: EventListener */) => {},
      deregisterChangeHandler: (/* handler: EventListener */) => {},
      getNativeControl: () => /* !SelectionControlState */ {},
      forceLayout: () => {},
      isAttachedToDOM: () => /* boolean */ {},
    });
  }

  constructor(adapter) {
    super(Object.assign(MDCCheckboxFoundation.defaultAdapter, adapter));

    /** @private {string} */
    this.currentCheckState_ = strings.TRANSITION_STATE_INIT;

    /** @private {string} */
    this.currentAnimationClass_ = '';

    /** @private {number} */
    this.animEndLatchTimer_ = 0;

    this.animEndHandler_ = /** @private {!EventListener} */ (() => {
      clearTimeout(this.animEndLatchTimer_);
      this.animEndLatchTimer_ = setTimeout(() => {
        this.adapter_.removeClass(this.currentAnimationClass_);
        this.adapter_.deregisterAnimationEndHandler(this.animEndHandler_);
      }, numbers.ANIM_END_LATCH_MS);
    });

    this.changeHandler_ = /** @private {!EventListener} */ (
      () => this.transitionCheckState_());
  }

  init() {
    this.adapter_.addClass(cssClasses.UPGRADED);
    this.adapter_.registerChangeHandler(this.changeHandler_);
    this.installPropertyChangeHooks_();
  }

  destroy() {
    this.adapter_.deregisterChangeHandler(this.changeHandler_);
    this.uninstallPropertyChangeHooks_();
  }

  /** @return {boolean} */
  isChecked() {
    return this.getNativeControl_().checked;
  }

  /** @param {boolean} checked */
  setChecked(checked) {
    this.getNativeControl_().checked = checked;
  }

  /** @return {boolean} */
  isIndeterminate() {
    return this.getNativeControl_().indeterminate;
  }

  /** @param {boolean} indeterminate */
  setIndeterminate(indeterminate) {
    this.getNativeControl_().indeterminate = indeterminate;
  }

  /** @return {boolean} */
  isDisabled() {
    return this.getNativeControl_().disabled;
  }

  /** @param {boolean} disabled */
  setDisabled(disabled) {
    this.getNativeControl_().disabled = disabled;
    if (disabled) {
      this.adapter_.addClass(cssClasses.DISABLED);
    } else {
      this.adapter_.removeClass(cssClasses.DISABLED);
    }
  }

  /** @return {?string} */
  getValue() {
    return this.getNativeControl_().value;
  }

  /** @param {?string} value */
  setValue(value) {
    this.getNativeControl_().value = value;
  }

  /** @private */
  installPropertyChangeHooks_() {
    const nativeCb = this.getNativeControl_();
    const cbProto = Object.getPrototypeOf(nativeCb);

    CB_PROTO_PROPS.forEach((controlState) => {
      const desc = Object.getOwnPropertyDescriptor(cbProto, controlState);
      // We have to check for this descriptor, since some browsers (Safari) don't support its return.
      // See: https://bugs.webkit.org/show_bug.cgi?id=49739
      if (validDescriptor(desc)) {
        const nativeCbDesc = /** @type {!ObjectPropertyDescriptor} */ ({
          get: desc.get,
          set: (state) => {
            desc.set.call(nativeCb, state);
            this.transitionCheckState_();
          },
          configurable: desc.configurable,
          enumerable: desc.enumerable,
        });
        Object.defineProperty(nativeCb, controlState, nativeCbDesc);
      }
    });
  }

  /** @private */
  uninstallPropertyChangeHooks_() {
    const nativeCb = this.getNativeControl_();
    const cbProto = Object.getPrototypeOf(nativeCb);

    CB_PROTO_PROPS.forEach((controlState) => {
      const desc = /** @type {!ObjectPropertyDescriptor} */ (
        Object.getOwnPropertyDescriptor(cbProto, controlState));
      if (validDescriptor(desc)) {
        Object.defineProperty(nativeCb, controlState, desc);
      }
    });
  }

  /** @private */
  transitionCheckState_() {
    const nativeCb = this.adapter_.getNativeControl();
    if (!nativeCb) {
      return;
    }
    const oldState = this.currentCheckState_;
    const newState = this.determineCheckState_(nativeCb);
    if (oldState === newState) {
      return;
    }

    // Check to ensure that there isn't a previously existing animation class, in case for example
    // the user interacted with the checkbox before the animation was finished.
    if (this.currentAnimationClass_.length > 0) {
      clearTimeout(this.animEndLatchTimer_);
      this.adapter_.forceLayout();
      this.adapter_.removeClass(this.currentAnimationClass_);
    }

    this.currentAnimationClass_ = this.getTransitionAnimationClass_(oldState, newState);
    this.currentCheckState_ = newState;

    // Check for parentNode so that animations are only run when the element is attached
    // to the DOM.
    if (this.adapter_.isAttachedToDOM() && this.currentAnimationClass_.length > 0) {
      this.adapter_.addClass(this.currentAnimationClass_);
      this.adapter_.registerAnimationEndHandler(this.animEndHandler_);
    }
  }

  /**
   * @param {!SelectionControlState} nativeCb
   * @return {string}
   * @private
   */
  determineCheckState_(nativeCb) {
    const {
      TRANSITION_STATE_INDETERMINATE,
      TRANSITION_STATE_CHECKED,
      TRANSITION_STATE_UNCHECKED,
    } = strings;

    if (nativeCb.indeterminate) {
      return TRANSITION_STATE_INDETERMINATE;
    }
    return nativeCb.checked ? TRANSITION_STATE_CHECKED : TRANSITION_STATE_UNCHECKED;
  }

  /**
   * @param {string} oldState
   * @param {string} newState
   * @return {string}
   */
  getTransitionAnimationClass_(oldState, newState) {
    const {
      TRANSITION_STATE_INIT,
      TRANSITION_STATE_CHECKED,
      TRANSITION_STATE_UNCHECKED,
    } = strings;

    const {
      ANIM_UNCHECKED_CHECKED,
      ANIM_UNCHECKED_INDETERMINATE,
      ANIM_CHECKED_UNCHECKED,
      ANIM_CHECKED_INDETERMINATE,
      ANIM_INDETERMINATE_CHECKED,
      ANIM_INDETERMINATE_UNCHECKED,
    } = MDCCheckboxFoundation.cssClasses;

    switch (oldState) {
    case TRANSITION_STATE_INIT:
      if (newState === TRANSITION_STATE_UNCHECKED) {
        return '';
      }
    // fallthrough
    case TRANSITION_STATE_UNCHECKED:
      return newState === TRANSITION_STATE_CHECKED ? ANIM_UNCHECKED_CHECKED : ANIM_UNCHECKED_INDETERMINATE;
    case TRANSITION_STATE_CHECKED:
      return newState === TRANSITION_STATE_UNCHECKED ? ANIM_CHECKED_UNCHECKED : ANIM_CHECKED_INDETERMINATE;
    // TRANSITION_STATE_INDETERMINATE
    default:
      return newState === TRANSITION_STATE_CHECKED ?
        ANIM_INDETERMINATE_CHECKED : ANIM_INDETERMINATE_UNCHECKED;
    }
  }

  /**
   * @return {!SelectionControlState}
   * @private
   */
  getNativeControl_() {
    return this.adapter_.getNativeControl() || {
      checked: false,
      indeterminate: false,
      disabled: false,
      value: null,
    };
  }
}

/**
 * @param {ObjectPropertyDescriptor|undefined} inputPropDesc
 * @return {boolean}
 */
function validDescriptor(inputPropDesc) {
  return !!inputPropDesc && typeof inputPropDesc.set === 'function';
}

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Ripple. Provides an interface for managing
 * - classes
 * - dom
 * - CSS variables
 * - position
 * - dimensions
 * - scroll position
 * - event handlers
 * - unbounded, active and disabled states
 *
 * Additionally, provides type information for the adapter to the Closure
 * compiler.
 *
 * Implement this adapter for your framework of choice to delegate updates to
 * the component in your framework of choice. See architecture documentation
 * for more details.
 * https://github.com/material-components/material-components-web/blob/master/docs/architecture.md
 *
 * @record
 */

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const cssClasses$1 = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  ROOT: 'mdc-ripple-upgraded',
  UNBOUNDED: 'mdc-ripple-upgraded--unbounded',
  BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
  BG_ACTIVE_FILL: 'mdc-ripple-upgraded--background-active-fill',
  FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
  FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation',
};

const strings$1 = {
  VAR_SURFACE_WIDTH: '--mdc-ripple-surface-width',
  VAR_SURFACE_HEIGHT: '--mdc-ripple-surface-height',
  VAR_FG_SIZE: '--mdc-ripple-fg-size',
  VAR_LEFT: '--mdc-ripple-left',
  VAR_TOP: '--mdc-ripple-top',
  VAR_FG_SCALE: '--mdc-ripple-fg-scale',
  VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
  VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end',
};

const numbers$1 = {
  PADDING: 10,
  INITIAL_ORIGIN_SCALE: 0.6,
  DEACTIVATION_TIMEOUT_MS: 300,
  FG_DEACTIVATION_MS: 83,
};

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Stores result from supportsCssVariables to avoid redundant processing to detect CSS custom variable support.
 * @private {boolean|undefined}
 */
let supportsCssVariables_;

/**
 * Stores result from applyPassive to avoid redundant processing to detect passive event listener support.
 * @private {boolean|undefined}
 */
let supportsPassive_;

/**
 * @param {!Window} windowObj
 * @return {boolean}
 */
function detectEdgePseudoVarBug(windowObj) {
  // Detect versions of Edge with buggy var() support
  // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/11495448/
  const document = windowObj.document;
  const className = 'test-edge-css-var';
  const styleNode = document.createElement('style');
  document.head.appendChild(styleNode);
  const sheet = styleNode.sheet;
  // Internet Explorer 11 requires indices to always be specified to insertRule
  sheet.insertRule(`:root { --${className}: 1px solid #000; }`, 0);
  sheet.insertRule(`.${className} { visibility: hidden; }`, 1);
  sheet.insertRule(`.${className}::before { border: var(--${className}); }`, 2);
  const node = document.createElement('div');
  node.className = className;
  document.body.appendChild(node);
  // Bug exists if ::before style ends up propagating to the parent element
  const hasPseudoVarBug = windowObj.getComputedStyle(node).borderTopStyle === 'solid';
  node.remove();
  styleNode.remove();
  return hasPseudoVarBug;
}

/**
 * @param {!Window} windowObj
 * @param {boolean=} forceRefresh
 * @return {boolean|undefined}
 */
function supportsCssVariables(windowObj, forceRefresh = false) {
  if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
    return supportsCssVariables_;
  }

  const supportsFunctionPresent = windowObj.CSS && typeof windowObj.CSS.supports === 'function';
  if (!supportsFunctionPresent) {
    return;
  }

  const explicitlySupportsCssVars = windowObj.CSS.supports('--css-vars', 'yes');
  // See: https://bugs.webkit.org/show_bug.cgi?id=154669
  // See: README section on Safari
  const weAreFeatureDetectingSafari10plus = (
    windowObj.CSS.supports('(--css-vars: yes)') &&
    windowObj.CSS.supports('color', '#00000000')
  );

  if (explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus) {
    supportsCssVariables_ = !detectEdgePseudoVarBug(windowObj);
  } else {
    supportsCssVariables_ = false;
  }
  return supportsCssVariables_;
}

//
/**
 * Determine whether the current browser supports passive event listeners, and if so, use them.
 * @param {!Window=} globalObj
 * @param {boolean=} forceRefresh
 * @return {boolean|{passive: boolean}}
 */
function applyPassive(globalObj = window, forceRefresh = false) {
  if (supportsPassive_ === undefined || forceRefresh) {
    let isSupported = false;
    try {
      globalObj.document.addEventListener('test', null, {get passive() {
        isSupported = true;
      }});
    } catch (e) { }

    supportsPassive_ = isSupported;
  }

  return supportsPassive_ ? {passive: true} : false;
}

/**
 * @param {!Object} HTMLElementPrototype
 * @return {!Array<string>}
 */
function getMatchesProperty(HTMLElementPrototype) {
  return [
    'webkitMatchesSelector', 'msMatchesSelector', 'matches',
  ].filter((p) => p in HTMLElementPrototype).pop();
}

/**
 * @param {!Event} ev
 * @param {!{x: number, y: number}} pageOffset
 * @param {!ClientRect} clientRect
 * @return {!{x: number, y: number}}
 */
function getNormalizedEventCoords(ev, pageOffset, clientRect) {
  const {x, y} = pageOffset;
  const documentX = x + clientRect.left;
  const documentY = y + clientRect.top;

  let normalizedX;
  let normalizedY;
  // Determine touch point relative to the ripple container.
  if (ev.type === 'touchstart') {
    normalizedX = ev.changedTouches[0].pageX - documentX;
    normalizedY = ev.changedTouches[0].pageY - documentY;
  } else {
    normalizedX = ev.pageX - documentX;
    normalizedY = ev.pageY - documentY;
  }

  return {x: normalizedX, y: normalizedY};
}

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const DEACTIVATION_ACTIVATION_PAIRS = {
  mouseup: 'mousedown',
  pointerup: 'pointerdown',
  touchend: 'touchstart',
  keyup: 'keydown',
  blur: 'focus',
};

/**
 * @extends {MDCFoundation<!MDCRippleAdapter>}
 */
class MDCRippleFoundation extends MDCFoundation {
  static get cssClasses() {
    return cssClasses$1;
  }

  static get strings() {
    return strings$1;
  }

  static get numbers() {
    return numbers$1;
  }

  static get defaultAdapter() {
    return {
      browserSupportsCssVars: () => /* boolean - cached */ {},
      isUnbounded: () => /* boolean */ {},
      isSurfaceActive: () => /* boolean */ {},
      isSurfaceDisabled: () => /* boolean */ {},
      addClass: (/* className: string */) => {},
      removeClass: (/* className: string */) => {},
      registerInteractionHandler: (/* evtType: string, handler: EventListener */) => {},
      deregisterInteractionHandler: (/* evtType: string, handler: EventListener */) => {},
      registerResizeHandler: (/* handler: EventListener */) => {},
      deregisterResizeHandler: (/* handler: EventListener */) => {},
      updateCssVariable: (/* varName: string, value: string */) => {},
      computeBoundingRect: () => /* ClientRect */ {},
      getWindowPageOffset: () => /* {x: number, y: number} */ {},
    };
  }

  /**
   * We compute this property so that we are not querying information about the client
   * until the point in time where the foundation requests it. This prevents scenarios where
   * client-side feature-detection may happen too early, such as when components are rendered on the server
   * and then initialized at mount time on the client.
   * @return {boolean}
   */
  get isSupported_() {
    return this.adapter_.browserSupportsCssVars();
  }

  constructor(adapter) {
    super(Object.assign(MDCRippleFoundation.defaultAdapter, adapter));

    /** @private {number} */
    this.layoutFrame_ = 0;

    /** @private {!ClientRect} */
    this.frame_ = /** @type {!ClientRect} */ ({width: 0, height: 0});

    /** @private {!ActivationStateType} */
    this.activationState_ = this.defaultActivationState_();

    /** @private {number} */
    this.xfDuration_ = 0;

    /** @private {number} */
    this.initialSize_ = 0;

    /** @private {number} */
    this.maxRadius_ = 0;

    /** @private {!Array<{ListenerInfoType}>} */
    this.listenerInfos_ = [
      {activate: 'touchstart', deactivate: 'touchend'},
      {activate: 'pointerdown', deactivate: 'pointerup'},
      {activate: 'mousedown', deactivate: 'mouseup'},
      {activate: 'keydown', deactivate: 'keyup'},
      {focus: 'focus', blur: 'blur'},
    ];

    /** @private {!ListenersType} */
    this.listeners_ = {
      activate: (e) => this.activate_(e),
      deactivate: (e) => this.deactivate_(e),
      focus: () => requestAnimationFrame(
        () => this.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED)
      ),
      blur: () => requestAnimationFrame(
        () => this.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED)
      ),
    };

    /** @private {!Function} */
    this.resizeHandler_ = () => this.layout();

    /** @private {!{left: number, top:number}} */
    this.unboundedCoords_ = {
      left: 0,
      top: 0,
    };

    /** @private {number} */
    this.fgScale_ = 0;

    /** @private {number} */
    this.activationTimer_ = 0;

    /** @private {number} */
    this.fgDeactivationRemovalTimer_ = 0;

    /** @private {boolean} */
    this.activationAnimationHasEnded_ = false;

    /** @private {!Function} */
    this.activationTimerCallback_ = () => {
      this.activationAnimationHasEnded_ = true;
      this.runDeactivationUXLogicIfReady_();
    };
  }

  /**
   * @return {!ActivationStateType}
   */
  defaultActivationState_() {
    return {
      isActivated: false,
      hasDeactivationUXRun: false,
      wasActivatedByPointer: false,
      wasElementMadeActive: false,
      activationStartTime: 0,
      activationEvent: null,
      isProgrammatic: false,
    };
  }

  init() {
    if (!this.isSupported_) {
      return;
    }
    this.addEventListeners_();

    const {ROOT, UNBOUNDED} = MDCRippleFoundation.cssClasses;
    requestAnimationFrame(() => {
      this.adapter_.addClass(ROOT);
      if (this.adapter_.isUnbounded()) {
        this.adapter_.addClass(UNBOUNDED);
      }
      this.layoutInternal_();
    });
  }

  /** @private */
  addEventListeners_() {
    this.listenerInfos_.forEach((info) => {
      Object.keys(info).forEach((k) => {
        this.adapter_.registerInteractionHandler(info[k], this.listeners_[k]);
      });
    });
    this.adapter_.registerResizeHandler(this.resizeHandler_);
  }

  /**
   * @param {Event} e
   * @private
   */
  activate_(e) {
    if (this.adapter_.isSurfaceDisabled()) {
      return;
    }

    const {activationState_: activationState} = this;
    if (activationState.isActivated) {
      return;
    }

    activationState.isActivated = true;
    activationState.isProgrammatic = e === null;
    activationState.activationEvent = e;
    activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : (
      e.type === 'mousedown' || e.type === 'touchstart' || e.type === 'pointerdown'
    );
    activationState.activationStartTime = Date.now();

    requestAnimationFrame(() => {
      // This needs to be wrapped in an rAF call b/c web browsers
      // report active states inconsistently when they're called within
      // event handling code:
      // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
      // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
      activationState.wasElementMadeActive = (e && e.type === 'keydown') ? this.adapter_.isSurfaceActive() : true;
      if (activationState.wasElementMadeActive) {
        this.animateActivation_();
      } else {
        // Reset activation state immediately if element was not made active.
        this.activationState_ = this.defaultActivationState_();
      }
    });
  }

  activate() {
    this.activate_(null);
  }

  /** @private */
  animateActivation_() {
    const {VAR_FG_TRANSLATE_START, VAR_FG_TRANSLATE_END} = MDCRippleFoundation.strings;
    const {
      BG_ACTIVE_FILL,
      FG_DEACTIVATION,
      FG_ACTIVATION,
    } = MDCRippleFoundation.cssClasses;
    const {DEACTIVATION_TIMEOUT_MS} = MDCRippleFoundation.numbers;

    let translateStart = '';
    let translateEnd = '';

    if (!this.adapter_.isUnbounded()) {
      const {startPoint, endPoint} = this.getFgTranslationCoordinates_();
      translateStart = `${startPoint.x}px, ${startPoint.y}px`;
      translateEnd = `${endPoint.x}px, ${endPoint.y}px`;
    }

    this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
    this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
    // Cancel any ongoing activation/deactivation animations
    clearTimeout(this.activationTimer_);
    clearTimeout(this.fgDeactivationRemovalTimer_);
    this.rmBoundedActivationClasses_();
    this.adapter_.removeClass(FG_DEACTIVATION);

    // Force layout in order to re-trigger the animation.
    this.adapter_.computeBoundingRect();
    this.adapter_.addClass(BG_ACTIVE_FILL);
    this.adapter_.addClass(FG_ACTIVATION);
    this.activationTimer_ = setTimeout(() => this.activationTimerCallback_(), DEACTIVATION_TIMEOUT_MS);
  }

  /**
   * @private
   * @return {{startPoint: PointType, endPoint: PointType}}
   */
  getFgTranslationCoordinates_() {
    const {activationState_: activationState} = this;
    const {activationEvent, wasActivatedByPointer} = activationState;

    let startPoint;
    if (wasActivatedByPointer) {
      startPoint = getNormalizedEventCoords(
        /** @type {!Event} */ (activationEvent),
        this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect()
      );
    } else {
      startPoint = {
        x: this.frame_.width / 2,
        y: this.frame_.height / 2,
      };
    }
    // Center the element around the start point.
    startPoint = {
      x: startPoint.x - (this.initialSize_ / 2),
      y: startPoint.y - (this.initialSize_ / 2),
    };

    const endPoint = {
      x: (this.frame_.width / 2) - (this.initialSize_ / 2),
      y: (this.frame_.height / 2) - (this.initialSize_ / 2),
    };

    return {startPoint, endPoint};
  }

  /** @private */
  runDeactivationUXLogicIfReady_() {
    const {FG_DEACTIVATION} = MDCRippleFoundation.cssClasses;
    const {hasDeactivationUXRun, isActivated} = this.activationState_;
    const activationHasEnded = hasDeactivationUXRun || !isActivated;
    if (activationHasEnded && this.activationAnimationHasEnded_) {
      this.rmBoundedActivationClasses_();
      this.adapter_.addClass(FG_DEACTIVATION);
      this.fgDeactivationRemovalTimer_ = setTimeout(() => {
        this.adapter_.removeClass(FG_DEACTIVATION);
      }, numbers$1.FG_DEACTIVATION_MS);
    }
  }

  /** @private */
  rmBoundedActivationClasses_() {
    const {BG_ACTIVE_FILL, FG_ACTIVATION} = MDCRippleFoundation.cssClasses;
    this.adapter_.removeClass(BG_ACTIVE_FILL);
    this.adapter_.removeClass(FG_ACTIVATION);
    this.activationAnimationHasEnded_ = false;
    this.adapter_.computeBoundingRect();
  }

  /**
   * @param {Event} e
   * @private
   */
  deactivate_(e) {
    const {activationState_: activationState} = this;
    // This can happen in scenarios such as when you have a keyup event that blurs the element.
    if (!activationState.isActivated) {
      return;
    }
    // Programmatic deactivation.
    if (activationState.isProgrammatic) {
      const evtObject = null;
      const state = /** @type {!ActivationStateType} */ (Object.assign({}, activationState));
      requestAnimationFrame(() => this.animateDeactivation_(evtObject, state));
      this.activationState_ = this.defaultActivationState_();
      return;
    }

    const actualActivationType = DEACTIVATION_ACTIVATION_PAIRS[e.type];
    const expectedActivationType = activationState.activationEvent.type;
    // NOTE: Pointer events are tricky - https://patrickhlauke.github.io/touch/tests/results/
    // Essentially, what we need to do here is decouple the deactivation UX from the actual
    // deactivation state itself. This way, touch/pointer events in sequence do not trample one
    // another.
    const needsDeactivationUX = actualActivationType === expectedActivationType;
    let needsActualDeactivation = needsDeactivationUX;
    if (activationState.wasActivatedByPointer) {
      needsActualDeactivation = e.type === 'mouseup';
    }

    const state = /** @type {!ActivationStateType} */ (Object.assign({}, activationState));
    requestAnimationFrame(() => {
      if (needsDeactivationUX) {
        this.activationState_.hasDeactivationUXRun = true;
        this.animateDeactivation_(e, state);
      }

      if (needsActualDeactivation) {
        this.activationState_ = this.defaultActivationState_();
      }
    });
  }

  deactivate() {
    this.deactivate_(null);
  }

  /**
   * @param {Event} e
   * @param {!ActivationStateType} options
   * @private
   */
  animateDeactivation_(e, {wasActivatedByPointer, wasElementMadeActive}) {
    const {BG_FOCUSED} = MDCRippleFoundation.cssClasses;
    if (wasActivatedByPointer || wasElementMadeActive) {
      // Remove class left over by element being focused
      this.adapter_.removeClass(BG_FOCUSED);
      this.runDeactivationUXLogicIfReady_();
    }
  }

  destroy() {
    if (!this.isSupported_) {
      return;
    }
    this.removeEventListeners_();

    const {ROOT, UNBOUNDED} = MDCRippleFoundation.cssClasses;
    requestAnimationFrame(() => {
      this.adapter_.removeClass(ROOT);
      this.adapter_.removeClass(UNBOUNDED);
      this.removeCssVars_();
    });
  }

  /** @private */
  removeEventListeners_() {
    this.listenerInfos_.forEach((info) => {
      Object.keys(info).forEach((k) => {
        this.adapter_.deregisterInteractionHandler(info[k], this.listeners_[k]);
      });
    });
    this.adapter_.deregisterResizeHandler(this.resizeHandler_);
  }

  /** @private */
  removeCssVars_() {
    const {strings} = MDCRippleFoundation;
    Object.keys(strings).forEach((k) => {
      if (k.indexOf('VAR_') === 0) {
        this.adapter_.updateCssVariable(strings[k], null);
      }
    });
  }

  layout() {
    if (this.layoutFrame_) {
      cancelAnimationFrame(this.layoutFrame_);
    }
    this.layoutFrame_ = requestAnimationFrame(() => {
      this.layoutInternal_();
      this.layoutFrame_ = 0;
    });
  }

  /** @private */
  layoutInternal_() {
    this.frame_ = this.adapter_.computeBoundingRect();

    const maxDim = Math.max(this.frame_.height, this.frame_.width);
    const surfaceDiameter = Math.sqrt(Math.pow(this.frame_.width, 2) + Math.pow(this.frame_.height, 2));

    // 60% of the largest dimension of the surface
    this.initialSize_ = maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE;

    // Diameter of the surface + 10px
    this.maxRadius_ = surfaceDiameter + MDCRippleFoundation.numbers.PADDING;
    this.fgScale_ = this.maxRadius_ / this.initialSize_;
    this.xfDuration_ = 1000 * Math.sqrt(this.maxRadius_ / 1024);
    this.updateLayoutCssVars_();
  }

  /** @private */
  updateLayoutCssVars_() {
    const {
      VAR_SURFACE_WIDTH, VAR_SURFACE_HEIGHT, VAR_FG_SIZE,
      VAR_LEFT, VAR_TOP, VAR_FG_SCALE,
    } = MDCRippleFoundation.strings;

    this.adapter_.updateCssVariable(VAR_SURFACE_WIDTH, `${this.frame_.width}px`);
    this.adapter_.updateCssVariable(VAR_SURFACE_HEIGHT, `${this.frame_.height}px`);
    this.adapter_.updateCssVariable(VAR_FG_SIZE, `${this.initialSize_}px`);
    this.adapter_.updateCssVariable(VAR_FG_SCALE, this.fgScale_);

    if (this.adapter_.isUnbounded()) {
      this.unboundedCoords_ = {
        left: Math.round((this.frame_.width / 2) - (this.initialSize_ / 2)),
        top: Math.round((this.frame_.height / 2) - (this.initialSize_ / 2)),
      };

      this.adapter_.updateCssVariable(VAR_LEFT, `${this.unboundedCoords_.left}px`);
      this.adapter_.updateCssVariable(VAR_TOP, `${this.unboundedCoords_.top}px`);
    }
  }
}

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

class MDCRipple extends MDCComponent {
  /** @param {...?} args */
  constructor(...args) {
    super(...args);

    /** @type {boolean} */
    this.disabled = false;

    /** @private {boolean} */
    this.unbounded_;
  }

  /**
   * @param {!Element} root
   * @param {{isUnbounded: (boolean|undefined)}=} options
   * @return {!MDCRipple}
   */
  static attachTo(root, {isUnbounded = undefined} = {}) {
    const ripple = new MDCRipple(root);
    // Only override unbounded behavior if option is explicitly specified
    if (isUnbounded !== undefined) {
      ripple.unbounded = /** @type {boolean} */ (isUnbounded);
    }
    return ripple;
  }

  /**
   * @param {!RippleCapableSurface} instance
   * @return {!MDCRippleAdapter}
   */
  static createAdapter(instance) {
    const MATCHES = getMatchesProperty(HTMLElement.prototype);

    return {
      browserSupportsCssVars: () => supportsCssVariables(window),
      isUnbounded: () => instance.unbounded,
      isSurfaceActive: () => instance.root_[MATCHES](':active'),
      isSurfaceDisabled: () => instance.disabled,
      addClass: (className) => instance.root_.classList.add(className),
      removeClass: (className) => instance.root_.classList.remove(className),
      registerInteractionHandler: (evtType, handler) =>
        instance.root_.addEventListener(evtType, handler, applyPassive()),
      deregisterInteractionHandler: (evtType, handler) =>
        instance.root_.removeEventListener(evtType, handler, applyPassive()),
      registerResizeHandler: (handler) => window.addEventListener('resize', handler),
      deregisterResizeHandler: (handler) => window.removeEventListener('resize', handler),
      updateCssVariable: (varName, value) => instance.root_.style.setProperty(varName, value),
      computeBoundingRect: () => instance.root_.getBoundingClientRect(),
      getWindowPageOffset: () => ({x: window.pageXOffset, y: window.pageYOffset}),
    };
  }

  /** @return {boolean} */
  get unbounded() {
    return this.unbounded_;
  }

  /** @param {boolean} unbounded */
  set unbounded(unbounded) {
    const {UNBOUNDED} = MDCRippleFoundation.cssClasses;
    this.unbounded_ = Boolean(unbounded);
    if (this.unbounded_) {
      this.root_.classList.add(UNBOUNDED);
    } else {
      this.root_.classList.remove(UNBOUNDED);
    }
  }

  activate() {
    this.foundation_.activate();
  }

  deactivate() {
    this.foundation_.deactivate();
  }

  layout() {
    this.foundation_.layout();
  }

  /** @return {!MDCRippleFoundation} */
  getDefaultFoundation() {
    return new MDCRippleFoundation(MDCRipple.createAdapter(this));
  }

  initialSyncWithDOM() {
    this.unbounded = 'mdcRippleIsUnbounded' in this.root_.dataset;
  }
}

/**
 * See Material Design spec for more details on when to use ripples.
 * https://material.io/guidelines/motion/choreography.html#choreography-creation
 * @record
 */

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

class MDCCheckbox extends MDCComponent {
  static attachTo(root) {
    return new MDCCheckbox(root);
  }

  /**
   * Returns the state of the native control element, or null if the native control element is not present.
   * @return {?SelectionControlState}
   * @private
   */
  get nativeCb_() {
    const {NATIVE_CONTROL_SELECTOR} = MDCCheckboxFoundation.strings;
    const cbEl = /** @type {?SelectionControlState} */ (
      this.root_.querySelector(NATIVE_CONTROL_SELECTOR));
    return cbEl;
  }

  constructor(...args) {
    super(...args);

    /** @private {!MDCRipple} */
    this.ripple_ = this.initRipple_();
  }

  /**
   * @return {!MDCRipple}
   * @private
   */
  initRipple_() {
    const MATCHES = getMatchesProperty(HTMLElement.prototype);
    const adapter = Object.assign(MDCRipple.createAdapter(this), {
      isUnbounded: () => true,
      isSurfaceActive: () => this.nativeCb_[MATCHES](':active'),
      registerInteractionHandler: (type, handler) => this.nativeCb_.addEventListener(type, handler),
      deregisterInteractionHandler: (type, handler) => this.nativeCb_.removeEventListener(type, handler),
      computeBoundingRect: () => {
        const {left, top} = this.root_.getBoundingClientRect();
        const DIM = 40;
        return {
          top,
          left,
          right: left + DIM,
          bottom: top + DIM,
          width: DIM,
          height: DIM,
        };
      },
    });
    const foundation = new MDCRippleFoundation(adapter);
    return new MDCRipple(this.root_, foundation);
  }

  /** @return {!MDCCheckboxFoundation} */
  getDefaultFoundation() {
    return new MDCCheckboxFoundation({
      addClass: (className) => this.root_.classList.add(className),
      removeClass: (className) => this.root_.classList.remove(className),
      registerAnimationEndHandler:
        (handler) => this.root_.addEventListener(getCorrectEventName(window, 'animationend'), handler),
      deregisterAnimationEndHandler:
        (handler) => this.root_.removeEventListener(getCorrectEventName(window, 'animationend'), handler),
      registerChangeHandler: (handler) => this.nativeCb_.addEventListener('change', handler),
      deregisterChangeHandler: (handler) => this.nativeCb_.removeEventListener('change', handler),
      getNativeControl: () => this.nativeCb_,
      forceLayout: () => this.root_.offsetWidth,
      isAttachedToDOM: () => Boolean(this.root_.parentNode),
    });
  }

  /** @return {!MDCRipple} */
  get ripple() {
    return this.ripple_;
  }

  /** @return {boolean} */
  get checked() {
    return this.foundation_.isChecked();
  }

  /** @param {boolean} checked */
  set checked(checked) {
    this.foundation_.setChecked(checked);
  }

  /** @return {boolean} */
  get indeterminate() {
    return this.foundation_.isIndeterminate();
  }

  /** @param {boolean} indeterminate */
  set indeterminate(indeterminate) {
    this.foundation_.setIndeterminate(indeterminate);
  }

  /** @return {boolean} */
  get disabled() {
    return this.foundation_.isDisabled();
  }

  /** @param {boolean} disabled */
  set disabled(disabled) {
    this.foundation_.setDisabled(disabled);
  }

  /** @return {?string} */
  get value() {
    return this.foundation_.getValue();
  }

  /** @param {?string} value */
  set value(value) {
    this.foundation_.setValue(value);
  }

  destroy() {
    this.ripple_.destroy();
    super.destroy();
  }
}

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var freeStyle = createCommonjsModule(function (module, exports) {
"use strict";
var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The unique id is used to get a unique hash on styles (no merging).
 */
var uniqueId = 0;
/**
 * Tag styles with this string to get unique hash outputs.
 */
exports.IS_UNIQUE = '__DO_NOT_DEDUPE_STYLE__';
/**
 * CSS properties that are valid unit-less numbers.
 */
var CSS_NUMBER = {
    'animation-iteration-count': true,
    'box-flex': true,
    'box-flex-group': true,
    'column-count': true,
    'counter-increment': true,
    'counter-reset': true,
    'flex': true,
    'flex-grow': true,
    'flex-positive': true,
    'flex-shrink': true,
    'flex-negative': true,
    'font-weight': true,
    'line-clamp': true,
    'line-height': true,
    'opacity': true,
    'order': true,
    'orphans': true,
    'tab-size': true,
    'widows': true,
    'z-index': true,
    'zoom': true,
    // SVG properties.
    'fill-opacity': true,
    'stroke-dashoffset': true,
    'stroke-opacity': true,
    'stroke-width': true
};
// Add vendor prefixes to all unit-less properties.
for (var _i = 0, _a = ['-webkit-', '-ms-', '-moz-', '-o-']; _i < _a.length; _i++) {
    var prefix = _a[_i];
    for (var _b = 0, _c = Object.keys(CSS_NUMBER); _b < _c.length; _b++) {
        var property = _c[_b];
        CSS_NUMBER[prefix + property] = true;
    }
}
/**
 * Transform a JavaScript property into a CSS property.
 */
function hyphenate(propertyName) {
    return propertyName
        .replace(/([A-Z])/g, '-$1')
        .replace(/^ms-/, '-ms-') // Internet Explorer vendor prefix.
        .toLowerCase();
}
/**
 * Check if a property name should pop to the top level of CSS.
 */
function isAtRule(propertyName) {
    return propertyName.charAt(0) === '@';
}
/**
 * Check if a value is a nested style definition.
 */
function isNestedStyle(value) {
    return value != null && typeof value === 'object' && !Array.isArray(value);
}
/**
 * Generate a hash value from a string.
 */
function stringHash(str) {
    var value = 5381;
    var i = str.length;
    while (i) {
        value = (value * 33) ^ str.charCodeAt(--i);
    }
    return (value >>> 0).toString(36);
}
exports.stringHash = stringHash;
/**
 * Transform a style string to a CSS string.
 */
function styleToString(key, value) {
    if (typeof value === 'number' && value !== 0 && !CSS_NUMBER[key]) {
        value = value + "px";
    }
    return key + ":" + String(value);
}
/**
 * Sort an array of tuples by first value.
 */
function sortTuples(value) {
    return value.sort(function (a, b) { return a[0] > b[0] ? 1 : -1; });
}
/**
 * Categorize user styles.
 */
function parseStyles(styles, hasNestedStyles) {
    var properties = [];
    var nestedStyles = [];
    var isUnique = false;
    // Sort keys before adding to styles.
    for (var _i = 0, _a = Object.keys(styles); _i < _a.length; _i++) {
        var key = _a[_i];
        var value = styles[key];
        if (key === exports.IS_UNIQUE) {
            isUnique = !!value;
        }
        else if (isNestedStyle(value)) {
            nestedStyles.push([key.trim(), value]);
        }
        else {
            properties.push([hyphenate(key.trim()), value]);
        }
    }
    return {
        properties: sortTuples(properties),
        nestedStyles: hasNestedStyles ? nestedStyles : sortTuples(nestedStyles),
        isUnique: isUnique
    };
}
/**
 * Stringify an array of property tuples.
 */
function stringifyProperties(properties) {
    var result = [];
    var _loop_1 = function (name, value) {
        if (value != null) {
            if (Array.isArray(value)) {
                value.forEach(function (value) {
                    value && result.push(styleToString(name, value));
                });
            }
            else {
                result.push(styleToString(name, value));
            }
        }
    };
    for (var _i = 0, properties_1 = properties; _i < properties_1.length; _i++) {
        var _a = properties_1[_i], name = _a[0], value = _a[1];
        _loop_1(name, value);
    }
    return result.join(';');
}
/**
 * Interpolate CSS selectors.
 */
function interpolate(selector, parent) {
    if (selector.indexOf('&') > -1) {
        return selector.replace(/&/g, parent);
    }
    return parent + " " + selector;
}
/**
 * Recursive loop building styles with deferred selectors.
 */
function stylize(cache, selector, styles, list, parent) {
    var _a = parseStyles(styles, !!selector), properties = _a.properties, nestedStyles = _a.nestedStyles, isUnique = _a.isUnique;
    var styleString = stringifyProperties(properties);
    var pid = styleString;
    if (isAtRule(selector)) {
        var rule = cache.add(new Rule(selector, parent ? undefined : styleString, cache.hash));
        // Nested styles support (e.g. `.foo > @media > .bar`).
        if (styleString && parent) {
            var style = rule.add(new Style(styleString, rule.hash, isUnique ? "u" + (++uniqueId).toString(36) : undefined));
            list.push([parent, style]);
        }
        for (var _i = 0, nestedStyles_1 = nestedStyles; _i < nestedStyles_1.length; _i++) {
            var _b = nestedStyles_1[_i], name = _b[0], value = _b[1];
            pid += name + stylize(rule, name, value, list, parent);
        }
    }
    else {
        var key = parent ? interpolate(selector, parent) : selector;
        if (styleString) {
            var style = cache.add(new Style(styleString, cache.hash, isUnique ? "u" + (++uniqueId).toString(36) : undefined));
            list.push([key, style]);
        }
        for (var _c = 0, nestedStyles_2 = nestedStyles; _c < nestedStyles_2.length; _c++) {
            var _d = nestedStyles_2[_c], name = _d[0], value = _d[1];
            pid += name + stylize(cache, name, value, list, key);
        }
    }
    return pid;
}
/**
 * Register all styles, but collect for selector interpolation using the hash.
 */
function composeStyles(container, selector, styles, isStyle, displayName) {
    var cache = new Cache(container.hash);
    var list = [];
    var pid = stylize(cache, selector, styles, list);
    var hash = "f" + cache.hash(pid);
    var id = displayName ? displayName + "_" + hash : hash;
    for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
        var _a = list_1[_i], selector_1 = _a[0], style = _a[1];
        var key = isStyle ? interpolate(selector_1, "." + id) : selector_1;
        style.add(new Selector(key, style.hash, undefined, pid));
    }
    return { cache: cache, pid: pid, id: id };
}
/**
 * Get the styles string for a container class.
 */
function getStyles(container) {
    return container.values().map(function (style) { return style.getStyles(); }).join('');
}
/**
 * Implement a cache/event emitter.
 */
var Cache = (function () {
    function Cache(hash) {
        this.hash = hash;
        this.changeId = 0;
        this._children = {};
        this._keys = [];
        this._counters = {};
    }
    Cache.prototype.values = function () {
        var _this = this;
        return this._keys.map(function (x) { return _this._children[x]; });
    };
    Cache.prototype.add = function (style) {
        var count = this._counters[style.id] || 0;
        var item = this._children[style.id] || style.clone();
        this._counters[style.id] = count + 1;
        if (count === 0) {
            this._keys.push(item.id);
            this._children[item.id] = item;
            this.changeId++;
        }
        else {
            // Check if contents are different.
            if (item.getIdentifier() !== style.getIdentifier()) {
                throw new TypeError("Hash collision: " + style.getStyles() + " === " + item.getStyles());
            }
            this._keys.splice(this._keys.indexOf(style.id), 1);
            this._keys.push(style.id);
            if (item instanceof Cache && style instanceof Cache) {
                var prevChangeId = item.changeId;
                item.merge(style);
                if (item.changeId !== prevChangeId) {
                    this.changeId++;
                }
            }
        }
        return item;
    };
    Cache.prototype.remove = function (style) {
        var count = this._counters[style.id];
        if (count > 0) {
            this._counters[style.id] = count - 1;
            var item = this._children[style.id];
            if (count === 1) {
                delete this._counters[style.id];
                delete this._children[style.id];
                this._keys.splice(this._keys.indexOf(style.id), 1);
                this.changeId++;
            }
            else if (item instanceof Cache && style instanceof Cache) {
                var prevChangeId = item.changeId;
                item.unmerge(style);
                if (item.changeId !== prevChangeId) {
                    this.changeId++;
                }
            }
        }
    };
    Cache.prototype.merge = function (cache) {
        for (var _i = 0, _a = cache.values(); _i < _a.length; _i++) {
            var value = _a[_i];
            this.add(value);
        }
        return this;
    };
    Cache.prototype.unmerge = function (cache) {
        for (var _i = 0, _a = cache.values(); _i < _a.length; _i++) {
            var value = _a[_i];
            this.remove(value);
        }
        return this;
    };
    Cache.prototype.clone = function () {
        return new Cache(this.hash).merge(this);
    };
    return Cache;
}());
exports.Cache = Cache;
/**
 * Selector is a dumb class made to represent nested CSS selectors.
 */
var Selector = (function () {
    function Selector(selector, hash, id, pid) {
        if (id === void 0) { id = "s" + hash(selector); }
        if (pid === void 0) { pid = ''; }
        this.selector = selector;
        this.hash = hash;
        this.id = id;
        this.pid = pid;
    }
    Selector.prototype.getStyles = function () {
        return this.selector;
    };
    Selector.prototype.getIdentifier = function () {
        return this.pid + "." + this.selector;
    };
    Selector.prototype.clone = function () {
        return new Selector(this.selector, this.hash, this.id, this.pid);
    };
    return Selector;
}());
exports.Selector = Selector;
/**
 * The style container registers a style string with selectors.
 */
var Style = (function (_super) {
    __extends(Style, _super);
    function Style(style, hash, id) {
        if (id === void 0) { id = "c" + hash(style); }
        var _this = _super.call(this, hash) || this;
        _this.style = style;
        _this.hash = hash;
        _this.id = id;
        return _this;
    }
    Style.prototype.getStyles = function () {
        return this.values().map(function (x) { return x.getStyles(); }).join(',') + "{" + this.style + "}";
    };
    Style.prototype.getIdentifier = function () {
        return this.style;
    };
    Style.prototype.clone = function () {
        return new Style(this.style, this.hash, this.id).merge(this);
    };
    return Style;
}(Cache));
exports.Style = Style;
/**
 * Implement rule logic for style output.
 */
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule(rule, style, hash, id, pid) {
        if (style === void 0) { style = ''; }
        if (id === void 0) { id = "a" + hash(rule + "." + style); }
        if (pid === void 0) { pid = ''; }
        var _this = _super.call(this, hash) || this;
        _this.rule = rule;
        _this.style = style;
        _this.hash = hash;
        _this.id = id;
        _this.pid = pid;
        return _this;
    }
    Rule.prototype.getStyles = function () {
        return this.rule + "{" + this.style + getStyles(this) + "}";
    };
    Rule.prototype.getIdentifier = function () {
        return this.pid + "." + this.rule + "." + this.style;
    };
    Rule.prototype.clone = function () {
        return new Rule(this.rule, this.style, this.hash, this.id, this.pid).merge(this);
    };
    return Rule;
}(Cache));
exports.Rule = Rule;
/**
 * The FreeStyle class implements the API for everything else.
 */
var FreeStyle = (function (_super) {
    __extends(FreeStyle, _super);
    function FreeStyle(hash, debug, id) {
        if (id === void 0) { id = "f" + (++uniqueId).toString(36); }
        var _this = _super.call(this, hash) || this;
        _this.hash = hash;
        _this.debug = debug;
        _this.id = id;
        return _this;
    }
    FreeStyle.prototype.registerStyle = function (styles, displayName) {
        var _a = composeStyles(this, '&', styles, true, this.debug ? displayName : undefined), cache = _a.cache, id = _a.id;
        this.merge(cache);
        return id;
    };
    FreeStyle.prototype.registerKeyframes = function (keyframes, displayName) {
        return this.registerHashRule('@keyframes', keyframes, displayName);
    };
    FreeStyle.prototype.registerHashRule = function (prefix, styles, displayName) {
        var _a = composeStyles(this, '', styles, false, this.debug ? displayName : undefined), cache = _a.cache, pid = _a.pid, id = _a.id;
        var rule = new Rule(prefix + " " + id, undefined, this.hash, undefined, pid);
        this.add(rule.merge(cache));
        return id;
    };
    FreeStyle.prototype.registerRule = function (rule, styles) {
        this.merge(composeStyles(this, rule, styles, false).cache);
    };
    FreeStyle.prototype.registerCss = function (styles) {
        this.merge(composeStyles(this, '', styles, false).cache);
    };
    FreeStyle.prototype.getStyles = function () {
        return getStyles(this);
    };
    FreeStyle.prototype.getIdentifier = function () {
        return this.id;
    };
    FreeStyle.prototype.clone = function () {
        return new FreeStyle(this.hash, this.debug, this.id).merge(this);
    };
    return FreeStyle;
}(Cache));
exports.FreeStyle = FreeStyle;
/**
 * Exports a simple function to create a new instance.
 */
function create(hash, debug) {
    if (hash === void 0) { hash = stringHash; }
    if (debug === void 0) { debug = typeof process !== 'undefined' && process.env['NODE_ENV'] !== 'production'; }
    return new FreeStyle(hash, debug);
}
exports.create = create;
//# sourceMappingURL=free-style.js.map
});

var freeStyle_1 = freeStyle.IS_UNIQUE;
var freeStyle_8 = freeStyle.create;

function ensureStringObj(object) {
    /** The final result we will return */
    var result = {};
    var debugName = '';
    for (var key in object) {
        /** Grab the value upfront */
        var val = object[key];
        /** TypeStyle configuration options */
        if (key === '$unique') {
            result[freeStyle_1] = val;
        }
        else if (key === '$nest') {
            var nested = val;
            for (var selector in nested) {
                var subproperties = nested[selector];
                result[selector] = ensureStringObj(subproperties).result;
            }
        }
        else if (key === '$debugName') {
            debugName = val;
        }
        else {
            result[key] = val;
        }
    }
    return { result: result, debugName: debugName };
}
// todo: better name here
function explodeKeyframes(frames) {
    var result = { $debugName: undefined, keyframes: {} };
    for (var offset in frames) {
        var val = frames[offset];
        if (offset === '$debugName') {
            result.$debugName = val;
        }
        else {
            result.keyframes[offset] = val;
        }
    }
    return result;
}

/** Raf for node + browser */
var raf = typeof requestAnimationFrame === 'undefined' ? setTimeout : requestAnimationFrame.bind(window);
/**
 * Utility to join classes conditionally
 */

/**
 * Merges various styles into a single style object.
 * Note: if two objects have the same property the last one wins
 */
function extend() {
    var objects = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        objects[_i] = arguments[_i];
    }
    /** The final result we will return */
    var result = {};
    for (var _a = 0, objects_1 = objects; _a < objects_1.length; _a++) {
        var object = objects_1[_a];
        if (object == null || object === false) {
            continue;
        }
        for (var key in object) {
            /** Falsy values except a explicit 0 is ignored */
            var val = object[key];
            if (!val && val !== 0) {
                continue;
            }
            /** if nested media or pseudo selector */
            if (key === '$nest' && val) {
                result[key] = result['$nest'] ? extend(result['$nest'], val) : val;
            }
            else if ((key.indexOf('&') !== -1 || key.indexOf('@media') === 0)) {
                result[key] = result[key] ? extend(result[key], val) : val;
            }
            else {
                result[key] = val;
            }
        }
    }
    return result;
}
/**
 * Utility to help customize styles with media queries. e.g.
 * ```
 * style(
 *  media({maxWidth:500}, {color:'red'})
 * )
 * ```
 */

var createFreeStyle = function () { return freeStyle_8(
/** Use the default hash function */
undefined, 
/** Preserve $debugName values */
true); };
/**
 * Maintains a single stylesheet and keeps it in sync with requested styles
 */
var TypeStyle = (function () {
    function TypeStyle(_a) {
        var autoGenerateTag = _a.autoGenerateTag;
        var _this = this;
        /**
         * Insert `raw` CSS as a string. This is useful for e.g.
         * - third party CSS that you are customizing with template strings
         * - generating raw CSS in JavaScript
         * - reset libraries like normalize.css that you can use without loaders
         */
        this.cssRaw = function (mustBeValidCSS) {
            if (!mustBeValidCSS) {
                return;
            }
            _this._raw += mustBeValidCSS || '';
            _this._pendingRawChange = true;
            _this._styleUpdated();
        };
        /**
         * Takes CSSProperties and registers it to a global selector (body, html, etc.)
         */
        this.cssRule = function (selector) {
            var objects = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                objects[_i - 1] = arguments[_i];
            }
            var object = ensureStringObj(extend.apply(void 0, objects)).result;
            _this._freeStyle.registerRule(selector, object);
            _this._styleUpdated();
            return;
        };
        /**
         * Renders styles to the singleton tag imediately
         * NOTE: You should only call it on initial render to prevent any non CSS flash.
         * After that it is kept sync using `requestAnimationFrame` and we haven't noticed any bad flashes.
         **/
        this.forceRenderStyles = function () {
            var target = _this._getTag();
            if (!target) {
                return;
            }
            target.textContent = _this.getStyles();
        };
        /**
         * Utility function to register an @font-face
         */
        this.fontFace = function () {
            var fontFace = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                fontFace[_i] = arguments[_i];
            }
            var freeStyle$$1 = _this._freeStyle;
            for (var _a = 0, _b = fontFace; _a < _b.length; _a++) {
                var face = _b[_a];
                freeStyle$$1.registerRule('@font-face', face);
            }
            _this._styleUpdated();
            return;
        };
        /**
         * Allows use to use the stylesheet in a node.js environment
         */
        this.getStyles = function () {
            return (_this._raw || '') + _this._freeStyle.getStyles();
        };
        /**
         * Takes keyframes and returns a generated animationName
         */
        this.keyframes = function (frames) {
            var _a = explodeKeyframes(frames), keyframes = _a.keyframes, $debugName = _a.$debugName;
            // TODO: replace $debugName with display name
            var animationName = _this._freeStyle.registerKeyframes(keyframes, $debugName);
            _this._styleUpdated();
            return animationName;
        };
        /**
         * Helps with testing. Reinitializes FreeStyle + raw
         */
        this.reinit = function () {
            /** reinit freestyle */
            var freeStyle$$1 = createFreeStyle();
            _this._freeStyle = freeStyle$$1;
            _this._lastFreeStyleChangeId = freeStyle$$1.changeId;
            /** reinit raw */
            _this._raw = '';
            _this._pendingRawChange = false;
            /** Clear any styles that were flushed */
            var target = _this._getTag();
            if (target) {
                target.textContent = '';
            }
        };
        /** Sets the target tag where we write the css on style updates */
        this.setStylesTarget = function (tag) {
            /** Clear any data in any previous tag */
            if (_this._tag) {
                _this._tag.textContent = '';
            }
            _this._tag = tag;
            /** This special time buffer immediately */
            _this.forceRenderStyles();
        };
        /**
         * Takes CSSProperties and return a generated className you can use on your component
         */
        this.style = function () {
            var objects = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                objects[_i] = arguments[_i];
            }
            var freeStyle$$1 = _this._freeStyle;
            var _a = ensureStringObj(extend.apply(void 0, objects)), result = _a.result, debugName = _a.debugName;
            var className = debugName ? freeStyle$$1.registerStyle(result, debugName) : freeStyle$$1.registerStyle(result);
            _this._styleUpdated();
            return className;
        };
        var freeStyle$$1 = createFreeStyle();
        this._autoGenerateTag = autoGenerateTag;
        this._freeStyle = freeStyle$$1;
        this._lastFreeStyleChangeId = freeStyle$$1.changeId;
        this._pending = 0;
        this._pendingRawChange = false;
        this._raw = '';
        this._tag = undefined;
    }
    /**
     * Only calls cb all sync operations settle
     */
    TypeStyle.prototype._afterAllSync = function (cb) {
        var _this = this;
        this._pending++;
        var pending = this._pending;
        raf(function () {
            if (pending !== _this._pending) {
                return;
            }
            cb();
        });
    };
    TypeStyle.prototype._getTag = function () {
        if (this._tag) {
            return this._tag;
        }
        if (this._autoGenerateTag) {
            var tag = typeof window === 'undefined'
                ? { textContent: '' }
                : document.createElement('style');
            if (typeof document !== 'undefined') {
                document.head.appendChild(tag);
            }
            this._tag = tag;
            return tag;
        }
        return undefined;
    };
    /** Checks if the style tag needs updating and if so queues up the change */
    TypeStyle.prototype._styleUpdated = function () {
        var _this = this;
        var changeId = this._freeStyle.changeId;
        var lastChangeId = this._lastFreeStyleChangeId;
        if (!this._pendingRawChange && changeId === lastChangeId) {
            return;
        }
        this._lastFreeStyleChangeId = changeId;
        this._pendingRawChange = false;
        this._afterAllSync(function () { return _this.forceRenderStyles(); });
    };
    return TypeStyle;
}());

var ts = new TypeStyle({ autoGenerateTag: true });
/** Sets the target tag where we write the css on style updates */

/**
 * Insert `raw` CSS as a string. This is useful for e.g.
 * - third party CSS that you are customizing with template strings
 * - generating raw CSS in JavaScript
 * - reset libraries like normalize.css that you can use without loaders
 */

/**
 * Takes CSSProperties and registers it to a global selector (body, html, etc.)
 */

/**
 * Renders styles to the singleton tag imediately
 * NOTE: You should only call it on initial render to prevent any non CSS flash.
 * After that it is kept sync using `requestAnimationFrame` and we haven't noticed any bad flashes.
 **/

/**
 * Utility function to register an @font-face
 */

/**
 * Allows use to use the stylesheet in a node.js environment
 */

/**
 * Takes keyframes and returns a generated animationName
 */

/**
 * Helps with testing. Reinitializes FreeStyle + raw
 */

/**
 * Takes CSSProperties and return a generated className you can use on your component
 */
var style = ts.style;
/**
 * Creates a new instance of TypeStyle separate from the default instance.
 *
 * - Use this for creating a different typestyle instance for a shadow dom component.
 * - Use this if you don't want an auto tag generated and you just want to collect the CSS.
 *
 * NOTE: styles aren't shared between different instances.
 */

var _typeof$1 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck$1 = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};









var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};



















var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

function delayInit(elm, callback, position) {
  var delay = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 100;

  var pos = window.getComputedStyle(elm).position;

  if (pos === position) {
    callback();
  } else {
    var pollId = 0;

    pollId = window.setInterval(function poll() {
      pos = window.getComputedStyle(elm).position;

      if (pos === position) {
        window.clearInterval(pollId);
        callback();
      }
    }, delay);
  }
}

function uuid() {
  return uuid_();
}

/* eslint-disable operator-linebreak */
function uuid_(a // placeholder
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
  uuid_ // random hex digits
  );
}

function makeHooks(Adapter) {
  var hooks = {};

  hooks.insert = function insert(vnode) {
    var material = new Adapter(vnode);
    vnode.data.material = material;
  };

  hooks.update = function update(oldVnode, vnode) {
    vnode.data.material = oldVnode.data.material;
    callHook.apply(undefined, [vnode.data.material.update].concat(Array.prototype.slice.call(arguments)));
  };

  hooks.destroy = function destroy(vnode) {
    callHook.apply(undefined, [vnode.data.material.destroy].concat(Array.prototype.slice.call(arguments)));
  };

  return hooks;

  function callHook(hook) {
    if (typeof hook === 'function') {
      hook.apply(undefined, toConsumableArray(Array.prototype.slice.call(arguments, 1)));
    }
  }
}

function makeSelector(id) {
  return id ? { selector: '#' + id } : {};
}

function makeKeyValue(key, value) {
  return value ? defineProperty({}, key, value) : {};
}

var PropsNormalizer = function () {
  function PropsNormalizer() {
    var props_ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var switches_ = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    classCallCheck$1(this, PropsNormalizer);

    var props = props_;
    var switches = switches_;

    var fromClassNames = props['classNames'] ? this.classes_(this.fromClassNames_([props['classNames']])) : {};
    var fromStyle = props['style'] ? this.classes_(this.fromClassNames_([style(props['style'])])) : {};
    var fromProps = props['class'] ? props['class'] : {};
    var fromSwitches = this.fromSwitches_(switches, props);

    var allClasses_ = [fromClassNames, fromStyle, fromProps, fromSwitches];
    this.extractedClasses = {};

    for (var i = 0; i < allClasses_.length; i++) {
      var classes_ = allClasses_[i];

      for (var class_ in classes_) {
        this.extractedClasses[class_] = classes_[class_];
      }
    }

    this.normalizedProps = props;
    delete this.normalizedProps['classNames'];
    delete this.normalizedProps['style'];
    delete this.normalizedProps['class'];
  }

  createClass(PropsNormalizer, [{
    key: 'fromSwitches_',
    value: function fromSwitches_(switches, props) {
      var map = {};

      for (var switch_ in switches) {
        map[switches[switch_]] = !!props[switch_];
      }

      return map;
    }
  }, {
    key: 'classes_',
    value: function classes_(classes) {
      var map = {};

      for (var i = 0; i < classes.length; i++) {
        map[classes[i]] = true;
      }

      return map;
    }
  }, {
    key: 'fromClassNames_',
    value: function fromClassNames_(classNames) {
      return tryFlatten(tryFlatten(classNames).map(function (className) {
        return className.replace(/\s+/g, '_§§§_').split('_§§§_');
      }));
    }
  }, {
    key: 'normalized',
    get: function get$$1() {
      return { classes: this.extractedClasses, props: this.normalizedProps };
    }
  }]);
  return PropsNormalizer;
}();



var utils = Object.freeze({
	delayInit: delayInit,
	uuid: uuid,
	makeHooks: makeHooks,
	makeSelector: makeSelector,
	makeKeyValue: makeKeyValue,
	PropsNormalizer: PropsNormalizer
});

var SMCComponent = function (_SnabbdomComponent) {
  inherits(SMCComponent, _SnabbdomComponent);

  function SMCComponent() {
    var props_ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var children_ = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var switches_ = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck$1(this, SMCComponent);

    var _this = possibleConstructorReturn(this, (SMCComponent.__proto__ || Object.getPrototypeOf(SMCComponent)).call(this, props_, children_));

    _this.switches = switches_;
    _this.utils = utils;
    var _this$props = _this.props,
        id = _this$props.id,
        otherProps = objectWithoutProperties(_this$props, ['id']);
    var _normalized = new _this.utils.PropsNormalizer(otherProps, _this.switches).normalized,
        classes = _normalized.classes,
        props = _normalized.props;


    _this.id = id;
    _this.props = _extends({}, props, { id_: id });
    _this.classes = classes;
    _this.selector = _this.utils.makeSelector(id);
    return _this;
  }

  return SMCComponent;
}(SnabbdomComponent);

var SMCAdapter = function SMCAdapter(sel_, component_) {
  var _this = this;

  classCallCheck$1(this, SMCAdapter);

  this.sel = sel_;
  this.component = component_;

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

    _this.destroy_();
  };

  this.update = function (oldVnode, vnode) {
    if (process.env.NODE_ENV !== 'production') {
      console.info(_this.sel, '-> update()');
    }

    _this.update_(oldVnode, vnode);
  };

  this.destroy_ = function () {};
  this.update_ = function (oldVnode, vnode) {};
};

var CheckboxAdapter = function (_SMCAdapter) {
  inherits(CheckboxAdapter, _SMCAdapter);

  function CheckboxAdapter(_ref) {
    var sel = _ref.sel,
        elm = _ref.elm,
        data = _ref.data;
    classCallCheck$1(this, CheckboxAdapter);

    var _this = possibleConstructorReturn(this, (CheckboxAdapter.__proto__ || Object.getPrototypeOf(CheckboxAdapter)).call(this, sel, new MDCCheckbox(elm)));

    _this.checkbox = _this.component;

    _this.update_ = function (oldVnode, vnode) {
      _this.updateProps_(vnode.data.props);
    };

    _this.updateDisabled_ = function (props) {
      _this.updateBoolean_(props, 'disabled');
    };

    _this.updateIndeterminate_ = function (props) {
      _this.updateBoolean_(props, 'indeterminate');
    };

    _this.updateChecked_ = function (props) {
      _this.updateBoolean_(props, 'checked');
    };

    _this.updateValue_ = function (props) {
      var wanted = props && props.value;
      var active = _this.checkbox.value;

      if (wanted && wanted !== active) {
        _this.checkbox.value = wanted;
      }
    };

    _this.updateBoolean_ = function (props, prop) {
      var wanted = props && props[prop];
      var active = _this.checkbox[prop];
      if (typeof wanted === 'boolean' && wanted !== active) {
        _this.checkbox[prop] = wanted;
      }
    };

    _this.updateProps_ = function (props) {
      _this.updateDisabled_(props);
      _this.updateIndeterminate_(props);
      _this.updateChecked_(props);
      _this.updateValue_(props);
    };

    _this.updateProps_(data.props);
    return _this;
  }

  return CheckboxAdapter;
}(SMCAdapter);

/* eslint-disable no-unused-vars */
var Input = function (_SMCComponent) {
  inherits(Input, _SMCComponent);

  function Input() {
    var props_ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var children_ = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var switches_ = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck$1(this, Input);

    var _this = possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props_, children_, switches_));

    var _this$props = _this.props,
        name = _this$props.name,
        onChange = _this$props.onChange,
        onClick = _this$props.onClick,
        otherProps = objectWithoutProperties(_this$props, ['name', 'onChange', 'onClick']);

    _this.name = _this.utils.makeKeyValue('name', name);
    _this.classNames = _this.classNames_();
    _this.type = _this.type_();
    _this.ons = {};
    if (typeof onChange === 'function') _this.ons.change = onChange;
    if (typeof onClick === 'function') _this.ons.click = onClick;
    _this.props = otherProps;
    return _this;
  }

  createClass(Input, [{
    key: 'classNames_',
    value: function classNames_() {
      throw new Error("Subclasses must override 'classNames_' to return a properly configured 'class Input'.");
    }
  }, {
    key: 'type_',
    value: function type_() {
      throw new Error("Subclasses must override 'type_' to return a properly configured 'class Input'.");
    }
  }, {
    key: 'input',
    get: function get$$1() {
      return html$1('input', _extends({}, this.selector, {
        classNames: this.classNames,
        on: this.ons,
        type: this.type
      }, this.name));
    }
  }]);
  return Input;
}(SMCComponent);

/* eslint-disable no-unused-vars */
var Checkbox = function (_Input) {
  inherits(Checkbox, _Input);

  function Checkbox() {
    var props_ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var children_ = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    classCallCheck$1(this, Checkbox);

    var _this = possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call(this, props_, children_ /*, STYLE_SWITCHES */));

    _this.hooks = _this.utils.makeHooks(CheckboxAdapter);
    return _this;
  }

  createClass(Checkbox, [{
    key: 'classNames_',
    value: function classNames_() {
      return CB_NC_CLASS;
    }
  }, {
    key: 'type_',
    value: function type_() {
      return 'checkbox';
    }
  }, {
    key: 'render',
    value: function render() {
      return html$1(
        'div',
        _extends({
          classNames: CB_CLASS,
          'class': this.classes,
          hook: this.hooks
        }, this.props),
        this.input,
        html$1(
          'div',
          { classNames: CB_BG_CLASS },
          html$1(
            'svg',
            { classNames: CB_CM_CLASS, viewBox: '0 0 24 24' },
            html$1('path', {
              classNames: CB_CMP_CLASS,
              fill: 'none',
              stroke: 'white',
              d: 'M1.73,12.91 8.1,19.28 22.79,4.59' })
          ),
          html$1('div', { classNames: CB_MM })
        )
      );
    }
  }]);
  return Checkbox;
}(Input);

var STYLE_SWITCHES = {
  raised: 'mdc-button--raised',
  dense: 'mdc-button--dense',
  compact: 'mdc-button--compact',
  primary: 'mdc-button--primary',
  accent: 'mdc-button--accent'
};

var BTN_CLASS = 'mdc-button';

var RippleDecorator = function RippleDecorator(elm_, position_) {
  classCallCheck$1(this, RippleDecorator);

  var decorator = this;
  delayInit(elm_, function attach() {
    var ripple = new MDCRipple(elm_);
    decorator.ripple = ripple;
  }, position_);
};

var ButtonAdapter = function (_SMCAdapter) {
  inherits(ButtonAdapter, _SMCAdapter);

  function ButtonAdapter(_ref) {
    var sel = _ref.sel,
        elm = _ref.elm,
        data = _ref.data;
    classCallCheck$1(this, ButtonAdapter);

    var _this = possibleConstructorReturn(this, (ButtonAdapter.__proto__ || Object.getPrototypeOf(ButtonAdapter)).call(this, sel));

    if (data.props && typeof data.props.ripple === 'boolean' && data.props.ripple) {
      var fixed = data.props && data.props.fixed && typeof data.props.fixed === 'boolean';
      _this.ripple = new RippleDecorator(elm, fixed && 'fixed' || 'relative');
    }

    _this.destroy_ = function () {
      if (_this.ripple && _this.ripple.ripple && typeof _this.ripple.ripple.destroy === 'function') {
        if (process.env.NODE_ENV !== 'production') {
          console.info(_this.sel, '-> ripple.destroy()');
        }
        _this.ripple.ripple.destroy();
      }
    };
    return _this;
  }

  return ButtonAdapter;
}(SMCAdapter);

/* eslint-disable no-unused-vars */
/* eslint-enable no-unused-vars */
var Button = function (_SMCComponent) {
  inherits(Button, _SMCComponent);

  function Button() {
    var props_ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var children_ = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var switches_ = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : STYLE_SWITCHES;
    classCallCheck$1(this, Button);

    var _this = possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props_, children_, switches_));

    var _this$props = _this.props,
        name = _this$props.name,
        href = _this$props.href,
        onClick = _this$props.onClick,
        otherProps = objectWithoutProperties(_this$props, ['name', 'href', 'onClick']);

    _this.name = _this.utils.makeKeyValue('name', name);
    _this.hooks = _this.hooks_();
    _this.classNames = _this.classNames_();

    _this.ons = {};
    if (typeof onClick === 'function') _this.ons.click = onClick;

    if (href) {
      _this.link = true;
      _this.href = _this.utils.makeKeyValue('href', href);
    }

    _this.props = otherProps;
    _this.attrs = _this.attrs_();
    return _this;
  }

  createClass(Button, [{
    key: 'hooks_',
    value: function hooks_() {
      return this.utils.makeHooks(ButtonAdapter);
    }
  }, {
    key: 'attrs_',
    value: function attrs_() {
      return {};
    }
  }, {
    key: 'classNames_',
    value: function classNames_() {
      return BTN_CLASS;
    }
  }, {
    key: 'render',
    value: function render() {
      return this.link ? html$1(
        'a',
        _extends({}, this.selector, {
          classNames: this.classNames,
          'class': this.classes,
          hook: this.hooks,
          on: this.ons
        }, this.name, this.href, this.props),
        this.children
      ) : html$1(
        'button',
        _extends({}, this.selector, {
          classNames: this.classNames,
          'class': this.classes,
          hook: this.hooks,
          on: this.ons
        }, this.name, {
          attrs: this.attrs
        }, this.props),
        this.children
      );
    }
  }]);
  return Button;
}(SMCComponent);

var STYLE_SWITCHES$1 = {
  mini: 'mdc-fab--mini',
  plain: 'mdc-fab--plain'
};

var FAB_CLASS = 'mdc-fab';

var ICON_CLASS = 'mdc-fab__icon';

var MAT_ICON_CLASS = [ICON_CLASS, 'material-icons'];

var FA_CLASS = 'fa';

/* eslint-disable no-unused-vars */
var FontAwesome$1 = function (_SMCComponent) {
  inherits(FontAwesome, _SMCComponent);

  function FontAwesome() {
    var props_ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var children_ = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    classCallCheck$1(this, FontAwesome);

    var _this = possibleConstructorReturn(this, (FontAwesome.__proto__ || Object.getPrototypeOf(FontAwesome)).call(this, props_, children_));

    _this.faIcon = Array.isArray(children_) && children_.length > 0 && typeof children_[0] === 'string' ? children_[0] : '';
    return _this;
  }

  createClass(FontAwesome, [{
    key: 'render',
    value: function render() {
      return html$1('i', { classNames: [FA_CLASS, this.faIcon], attrs: { 'aria-hidden': true } });
    }
  }]);
  return FontAwesome;
}(SMCComponent);

/* eslint-disable no-unused-vars */
var Fab = function (_Button) {
  inherits(Fab, _Button);

  function Fab() {
    var props_ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var children_ = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    classCallCheck$1(this, Fab);
    return possibleConstructorReturn(this, (Fab.__proto__ || Object.getPrototypeOf(Fab)).call(this, props_, children_, STYLE_SWITCHES$1));
  }

  createClass(Fab, [{
    key: 'classNames_',
    value: function classNames_() {
      return FAB_CLASS;
    }
  }, {
    key: 'attrs_',
    value: function attrs_() {
      if (!this.label) {
        var _props = this.props,
            label = _props.label,
            otherProps = objectWithoutProperties(_props, ['label']);

        this.label = label;
        this.props = otherProps;
      }

      return this.utils.makeKeyValue('aria-label', this.label);
    }
  }]);
  return Fab;
}(Button);

var FontAwesome = function (_SMCComponent) {
  inherits(FontAwesome, _SMCComponent);

  function FontAwesome() {
    classCallCheck$1(this, FontAwesome);
    return possibleConstructorReturn(this, (FontAwesome.__proto__ || Object.getPrototypeOf(FontAwesome)).apply(this, arguments));
  }

  createClass(FontAwesome, [{
    key: 'render',
    value: function render() {
      return html$1(
        'span',
        _extends({}, this.selector, {
          classNames: ICON_CLASS,
          'class': this.classes
        }, this.props),
        html$1(
          FontAwesome$1,
          null,
          this.children
        )
      );
    }
  }]);
  return FontAwesome;
}(SMCComponent);

var Material = function (_SMCComponent2) {
  inherits(Material, _SMCComponent2);

  function Material() {
    classCallCheck$1(this, Material);
    return possibleConstructorReturn(this, (Material.__proto__ || Object.getPrototypeOf(Material)).apply(this, arguments));
  }

  createClass(Material, [{
    key: 'render',
    value: function render() {
      return html$1(
        'span',
        _extends({}, this.selector, {
          classNames: MAT_ICON_CLASS,
          'class': this.classes
        }, this.props),
        this.children
      );
    }
  }]);
  return Material;
}(SMCComponent);

Fab.Material = Material;
Fab.FontAwesome = FontAwesome;

var FF_CLASS = 'mdc-form-field';

/**
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const cssClasses$2 = {
  ROOT: 'mdc-form-field',
};

const strings$2 = {
  LABEL_SELECTOR: '.mdc-form-field > label',
};

/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

class MDCFormFieldFoundation extends MDCFoundation {
  static get cssClasses() {
    return cssClasses$2;
  }

  static get strings() {
    return strings$2;
  }

  static get defaultAdapter() {
    return {
      registerInteractionHandler: (/* type: string, handler: EventListener */) => {},
      deregisterInteractionHandler: (/* type: string, handler: EventListener */) => {},
      activateInputRipple: () => {},
      deactivateInputRipple: () => {},
    };
  }

  constructor(adapter) {
    super(Object.assign(MDCFormFieldFoundation.defaultAdapter, adapter));
    this.clickHandler_ = (evt) => this.handleClick_(evt);
  }

  init() {
    this.adapter_.registerInteractionHandler('click', this.clickHandler_);
  }

  destroy() {
    this.adapter_.deregisterInteractionHandler('click', this.clickHandler_);
  }

  handleClick_() {
    this.adapter_.activateInputRipple();
    requestAnimationFrame(() => this.adapter_.deactivateInputRipple());
  }
}

/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

class MDCFormField extends MDCComponent {
  static attachTo(root) {
    return new MDCFormField(root);
  }

  set input(input) {
    this.input_ = input;
  }

  get input() {
    return this.input_;
  }

  get label_() {
    return this.root_.querySelector(MDCFormFieldFoundation.strings.LABEL_SELECTOR);
  }

  getDefaultFoundation() {
    return new MDCFormFieldFoundation({
      registerInteractionHandler: (type, handler) => this.label_.addEventListener(type, handler),
      deregisterInteractionHandler: (type, handler) => this.label_.removeEventListener(type, handler),
      activateInputRipple: () => {
        if (this.input_ && this.input_.ripple) {
          this.input_.ripple.activate();
        }
      },
      deactivateInputRipple: () => {
        if (this.input_ && this.input_.ripple) {
          this.input_.ripple.deactivate();
        }
      },
    });
  }
}

var FormFieldAdapter = function (_SMCAdapter) {
  inherits(FormFieldAdapter, _SMCAdapter);

  function FormFieldAdapter(_ref) {
    var sel = _ref.sel,
        elm = _ref.elm,
        children = _ref.children;
    classCallCheck$1(this, FormFieldAdapter);

    var _this = possibleConstructorReturn(this, (FormFieldAdapter.__proto__ || Object.getPrototypeOf(FormFieldAdapter)).call(this, sel, new MDCFormField(elm)));

    _this.formField = _this.component;
    var input_ = Array.isArray(children) && children.length > 0 && _typeof$1(children[0]) === 'object' && children[0].data.material && children[0].data.material.component ? children[0].data.material.component : undefined;

    if (input_) {
      _this.formField.input = input_;
    }

    _this.destroy_ = function () {
      if (_this.formField.input && typeof _this.formField.input.destroy === 'function') {
        if (process.env.NODE_ENV !== 'production') {
          console.info(_this.sel, '-> input.destroy()');
        }
        _this.formField.input.destroy();
      }
    };
    return _this;
  }

  return FormFieldAdapter;
}(SMCAdapter);

/* eslint-disable no-unused-vars */
var FormField = function (_SMCComponent) {
  inherits(FormField, _SMCComponent);

  function FormField() {
    var props_ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var children_ = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    classCallCheck$1(this, FormField);

    var _this = possibleConstructorReturn(this, (FormField.__proto__ || Object.getPrototypeOf(FormField)).call(this, props_, children_));

    var _this$props = _this.props,
        label = _this$props.label,
        otherProps = objectWithoutProperties(_this$props, ['label']);

    _this.label = label ? ' ' + label : '';
    var for_ = Array.isArray(children_) && children_.length > 0 && _typeof$1(children_[0]) === 'object' && children_[0].data.props ? children_[0].data.props.id_ : '';
    _this.attrs = _this.utils.makeKeyValue('for', for_);
    _this.hooks = _this.utils.makeHooks(FormFieldAdapter);
    _this.props = otherProps;
    return _this;
  }

  createClass(FormField, [{
    key: 'render',
    value: function render() {
      return html$1(
        'div',
        _extends({}, this.selector, {
          classNames: FF_CLASS,
          'class': this.classes,
          hook: this.hooks
        }, this.props),
        this.children,
        html$1(
          'label',
          { attrs: this.attrs },
          this.label
        )
      );
    }
  }]);
  return FormField;
}(SMCComponent);

var STYLE_SWITCHES_TITLE = { large: 'mdc-card__title--large' };

var STYLE_SWITCHES_MEDIA_ITEM = {
  small: 'mdc-card__media-item--1dot5x',
  medium: 'mdc-card__media-item--2x',
  large: 'mdc-card__media-item--3x'
};

var STLYE_SWITCHES_ACTIONS = {
  vertical: 'mdc-card__actions--vertical'
};

var CARD_CLASS = 'mdc-card';

var HB_CLASS = 'mdc-card__horizontal-block';

var MEDIA_CLASS = 'mdc-card__media';

var MEDIA_ITEM_CLASS = 'mdc-card__media-item';

var PRIMARY_CLASS = 'mdc-card__primary';

var SUBTITLE_CLASS = 'mdc-card__subtitle';

var ST_CLASS = 'mdc-card__supporting-text';

var TITLE_CLASS = 'mdc-card__title';

var ACTIONS_CLASS = 'mdc-card__actions';

var ACTION_CLASS = 'mdc-card__action';

/* eslint-disable no-unused-vars */
var Card = function (_SMCComponent) {
  inherits(Card, _SMCComponent);

  function Card() {
    classCallCheck$1(this, Card);
    return possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));
  }

  createClass(Card, [{
    key: 'render',
    value: function render() {
      return html$1(
        'div',
        _extends({}, this.selector, {
          classNames: CARD_CLASS,
          'class': this.classes
        }, this.props),
        this.children
      );
    }
  }]);
  return Card;
}(SMCComponent);

var Action = function (_Button) {
  inherits(Action, _Button);

  function Action() {
    var props_ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var children_ = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    classCallCheck$1(this, Action);
    return possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).call(this, _extends({}, props_, { compact: true }), children_));
  }

  createClass(Action, [{
    key: 'classNames_',
    value: function classNames_() {
      return [BTN_CLASS, ACTION_CLASS];
    }
  }]);
  return Action;
}(Button);

var Actions = function (_SMCComponent2) {
  inherits(Actions, _SMCComponent2);

  function Actions() {
    var props_ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var children_ = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    classCallCheck$1(this, Actions);
    return possibleConstructorReturn(this, (Actions.__proto__ || Object.getPrototypeOf(Actions)).call(this, props_, children_, STLYE_SWITCHES_ACTIONS));
  }

  createClass(Actions, [{
    key: 'render',
    value: function render() {
      return html$1(
        'section',
        _extends({}, this.selector, {
          classNames: ACTIONS_CLASS,
          'class': this.classes
        }, this.props),
        this.children
      );
    }
  }]);
  return Actions;
}(SMCComponent);

var HorizontalBlock = function (_SMCComponent3) {
  inherits(HorizontalBlock, _SMCComponent3);

  function HorizontalBlock() {
    classCallCheck$1(this, HorizontalBlock);
    return possibleConstructorReturn(this, (HorizontalBlock.__proto__ || Object.getPrototypeOf(HorizontalBlock)).apply(this, arguments));
  }

  createClass(HorizontalBlock, [{
    key: 'render',
    value: function render() {
      return html$1(
        'div',
        _extends({}, this.selector, {
          classNames: HB_CLASS,
          'class': this.classes
        }, this.props),
        this.children
      );
    }
  }]);
  return HorizontalBlock;
}(SMCComponent);

var Media = function (_SMCComponent4) {
  inherits(Media, _SMCComponent4);

  function Media() {
    classCallCheck$1(this, Media);
    return possibleConstructorReturn(this, (Media.__proto__ || Object.getPrototypeOf(Media)).apply(this, arguments));
  }

  createClass(Media, [{
    key: 'render',
    value: function render() {
      return html$1(
        'section',
        _extends({}, this.selector, {
          classNames: MEDIA_CLASS,
          'class': this.classes
        }, this.props),
        this.children
      );
    }
  }]);
  return Media;
}(SMCComponent);

var MediaItem = function (_SMCComponent5) {
  inherits(MediaItem, _SMCComponent5);

  function MediaItem() {
    var props_ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var children_ = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    classCallCheck$1(this, MediaItem);

    var _this6 = possibleConstructorReturn(this, (MediaItem.__proto__ || Object.getPrototypeOf(MediaItem)).call(this, props_, children_, STYLE_SWITCHES_MEDIA_ITEM));

    var _this6$props = _this6.props,
        src = _this6$props.src,
        otherProps = objectWithoutProperties(_this6$props, ['src']);

    _this6.src = _this6.utils.makeKeyValue('src', src);
    _this6.props = otherProps;
    return _this6;
  }

  createClass(MediaItem, [{
    key: 'render',
    value: function render() {
      return html$1(
        'img',
        _extends({}, this.selector, {
          classNames: MEDIA_ITEM_CLASS,
          'class': this.classes
        }, this.src, this.props),
        this.children
      );
    }
  }]);
  return MediaItem;
}(SMCComponent);

var Primary = function (_SMCComponent6) {
  inherits(Primary, _SMCComponent6);

  function Primary() {
    classCallCheck$1(this, Primary);
    return possibleConstructorReturn(this, (Primary.__proto__ || Object.getPrototypeOf(Primary)).apply(this, arguments));
  }

  createClass(Primary, [{
    key: 'render',
    value: function render() {
      return html$1(
        'section',
        _extends({}, this.selector, {
          classNames: PRIMARY_CLASS,
          'class': this.classes
        }, this.props),
        this.children
      );
    }
  }]);
  return Primary;
}(SMCComponent);

var Subtitle = function (_SMCComponent7) {
  inherits(Subtitle, _SMCComponent7);

  function Subtitle() {
    classCallCheck$1(this, Subtitle);
    return possibleConstructorReturn(this, (Subtitle.__proto__ || Object.getPrototypeOf(Subtitle)).apply(this, arguments));
  }

  createClass(Subtitle, [{
    key: 'render',
    value: function render() {
      return html$1(
        'h2',
        _extends({}, this.selector, {
          classNames: SUBTITLE_CLASS,
          'class': this.classes
        }, this.props),
        this.children
      );
    }
  }]);
  return Subtitle;
}(SMCComponent);

var SupportingText = function (_SMCComponent8) {
  inherits(SupportingText, _SMCComponent8);

  function SupportingText() {
    classCallCheck$1(this, SupportingText);
    return possibleConstructorReturn(this, (SupportingText.__proto__ || Object.getPrototypeOf(SupportingText)).apply(this, arguments));
  }

  createClass(SupportingText, [{
    key: 'render',
    value: function render() {
      return html$1(
        'section',
        _extends({}, this.selector, {
          classNames: ST_CLASS,
          'class': this.classes
        }, this.props),
        this.children
      );
    }
  }]);
  return SupportingText;
}(SMCComponent);

var Title = function (_SMCComponent9) {
  inherits(Title, _SMCComponent9);

  function Title() {
    var props_ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var children_ = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    classCallCheck$1(this, Title);
    return possibleConstructorReturn(this, (Title.__proto__ || Object.getPrototypeOf(Title)).call(this, props_, children_, STYLE_SWITCHES_TITLE));
  }

  createClass(Title, [{
    key: 'render',
    value: function render() {
      return html$1(
        'h1',
        _extends({}, this.selector, {
          classNames: TITLE_CLASS,
          'class': this.classes
        }, this.props),
        this.children
      );
    }
  }]);
  return Title;
}(SMCComponent);

Card.SupportingText = SupportingText;
Card.Primary = Primary;
Card.Subtitle = Subtitle;
Card.Title = Title;
Card.Actions = Actions;
Card.Action = Action;
Card.HorizontalBlock = HorizontalBlock;
Card.Media = Media;
Card.MediaItem = MediaItem;

var STYLE_SWITCHES$2 = { accent: 'mdc-linear-progress--accent' };

var LP_CLASS = 'mdc-linear-progress';

var BUF_DOTS_CLASS = 'mdc-linear-progress__buffering-dots';

var BUF_CLASS = 'mdc-linear-progress__buffer';

var BAR_CLASS = 'mdc-linear-progress__bar';

var PRIMARY_CLASS$1 = 'mdc-linear-progress__primary-bar';

var SECONDARY_CLASS = 'mdc-linear-progress__secondary-bar';

var INNER_CLASS = 'mdc-linear-progress__bar-inner';

/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const cssClasses$3 = {
  CLOSED_CLASS: 'mdc-linear-progress--closed',
  INDETERMINATE_CLASS: 'mdc-linear-progress--indeterminate',
  REVERSED_CLASS: 'mdc-linear-progress--reversed',
};

const strings$3 = {
  PRIMARY_BAR_SELECTOR: '.mdc-linear-progress__primary-bar',
  BUFFER_SELECTOR: '.mdc-linear-progress__buffer',
};

/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

class MDCLinearProgressFoundation extends MDCFoundation {
  static get cssClasses() {
    return cssClasses$3;
  }

  static get strings() {
    return strings$3;
  }

  static get defaultAdapter() {
    return {
      addClass: (/* className: string */) => {},
      getPrimaryBar: () => /* el: Element */ {},
      getBuffer: () => /* el: Element */ {},
      hasClass: (/* className: string */) => false,
      removeClass: (/* className: string */) => {},
      setStyle: (/* el: Element, styleProperty: string, value: number */) => {},
    };
  }

  constructor(adapter) {
    super(Object.assign(MDCLinearProgressFoundation.defaultAdapter, adapter));
  }

  init() {
    this.determinate_ = !this.adapter_.hasClass(cssClasses$3.INDETERMINATE_CLASS);
    this.reverse_ = this.adapter_.hasClass(cssClasses$3.REVERSED_CLASS);
  }

  setDeterminate(isDeterminate) {
    this.determinate_ = isDeterminate;
    if (this.determinate_) {
      this.adapter_.removeClass(cssClasses$3.INDETERMINATE_CLASS);
    } else {
      this.adapter_.addClass(cssClasses$3.INDETERMINATE_CLASS);
      this.setScale_(this.adapter_.getPrimaryBar(), 1);
      this.setScale_(this.adapter_.getBuffer(), 1);
    }
  }

  setProgress(value) {
    if (this.determinate_) {
      this.setScale_(this.adapter_.getPrimaryBar(), value);
    }
  }

  setBuffer(value) {
    if (this.determinate_) {
      this.setScale_(this.adapter_.getBuffer(), value);
    }
  }

  setReverse(isReversed) {
    this.reverse_ = isReversed;
    if (this.reverse_) {
      this.adapter_.addClass(cssClasses$3.REVERSED_CLASS);
    } else {
      this.adapter_.removeClass(cssClasses$3.REVERSED_CLASS);
    }
  }

  open() {
    this.adapter_.removeClass(cssClasses$3.CLOSED_CLASS);
  }

  close() {
    this.adapter_.addClass(cssClasses$3.CLOSED_CLASS);
  }

  setScale_(el, scaleValue) {
    const value = 'scaleX(' + scaleValue + ')';
    transformStyleProperties.forEach((transformStyleProperty) => {
      this.adapter_.setStyle(el, transformStyleProperty, value);
    });
  }
}

/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

class MDCLinearProgress extends MDCComponent {
  static attachTo(root) {
    return new MDCLinearProgress(root);
  }

  set determinate(value) {
    this.foundation_.setDeterminate(value);
  }

  set progress(value) {
    this.foundation_.setProgress(value);
  }

  set buffer(value) {
    this.foundation_.setBuffer(value);
  }

  set reverse(value) {
    this.foundation_.setReverse(value);
  }

  open() {
    this.foundation_.open();
  }

  close() {
    this.foundation_.close();
  }

  getDefaultFoundation() {
    return new MDCLinearProgressFoundation({
      addClass: (className) => this.root_.classList.add(className),
      getPrimaryBar: () => this.root_.querySelector(MDCLinearProgressFoundation.strings.PRIMARY_BAR_SELECTOR),
      getBuffer: () => this.root_.querySelector(MDCLinearProgressFoundation.strings.BUFFER_SELECTOR),
      hasClass: (className) => this.root_.classList.contains(className),
      removeClass: (className) => this.root_.classList.remove(className),
      setStyle: (el, styleProperty, value) => el.style[styleProperty] = value,
    });
  }
}

var LinearProgressAdapter = function (_SMCAdapter) {
  inherits(LinearProgressAdapter, _SMCAdapter);

  function LinearProgressAdapter(_ref) {
    var sel = _ref.sel,
        elm = _ref.elm,
        data = _ref.data;
    classCallCheck$1(this, LinearProgressAdapter);

    var _this = possibleConstructorReturn(this, (LinearProgressAdapter.__proto__ || Object.getPrototypeOf(LinearProgressAdapter)).call(this, sel, new MDCLinearProgress(elm)));

    _this.linearProgress = _this.component;

    _this.update_ = function (oldVnode, vnode) {
      _this.updateProps_(vnode.data.props);
    };

    _this.updateBuffer_ = function (props) {
      _this.updateNumber_(props, 'buffer');
    };

    _this.updateProgress_ = function (props) {
      _this.updateNumber_(props, 'progress');
    };

    _this.updateReverse_ = function (props) {
      _this.updateBoolean_(props, 'reverse');
    };

    _this.updateDeterminate_ = function (props) {
      var wanted = props && props.determinate;
      if (wanted === undefined || typeof wanted === 'boolean' && !wanted) {
        _this.linearProgress.determinate = false;
      } else {
        _this.updateBoolean_(props, 'determinate');
      }
    };

    _this.updateBoolean_ = function (props, prop) {
      var wanted = props && props[prop];
      var active = _this.linearProgress.foundation_[prop + '_'];
      if (typeof wanted === 'boolean' && wanted !== active) {
        _this.linearProgress[prop] = wanted;
      }
    };

    _this.updateNumber_ = function (props, prop) {
      if (props && typeof props[prop] === 'number' && props[prop] !== _this.linearProgress[prop]) {
        _this.linearProgress[prop] = props[prop];
      }
    };

    _this.updateProps_ = function (props) {
      _this.updateBuffer_(props);
      _this.updateProgress_(props);
      _this.updateReverse_(props);
      _this.updateDeterminate_(props);
    };

    _this.updateProps_(data.props);
    return _this;
  }

  return LinearProgressAdapter;
}(SMCAdapter);

/* eslint-disable no-unused-vars */
var LinearProgress = function (_SMCComponent) {
  inherits(LinearProgress, _SMCComponent);

  function LinearProgress() {
    var props_ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var children_ = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    classCallCheck$1(this, LinearProgress);

    var _this = possibleConstructorReturn(this, (LinearProgress.__proto__ || Object.getPrototypeOf(LinearProgress)).call(this, props_, children_, STYLE_SWITCHES$2));

    _this.hooks = _this.utils.makeHooks(LinearProgressAdapter);
    _this.attrs = { role: 'progressbar' };
    return _this;
  }

  createClass(LinearProgress, [{
    key: 'render',
    value: function render() {
      return html$1(
        'div',
        _extends({}, this.selector, {
          attrs: this.attrs,
          classNames: LP_CLASS,
          'class': this.classes,
          hook: this.hooks
        }, this.props),
        html$1('div', { classNames: BUF_DOTS_CLASS }),
        html$1('div', { classNames: BUF_CLASS }),
        html$1(
          'div',
          { classNames: [BAR_CLASS, PRIMARY_CLASS$1] },
          html$1('span', { classNames: INNER_CLASS })
        ),
        html$1(
          'div',
          { classNames: [BAR_CLASS, SECONDARY_CLASS] },
          html$1('span', { classNames: INNER_CLASS })
        )
      );
    }
  }]);
  return LinearProgress;
}(SMCComponent);

// export const STYLE_SWITCHES = { accent: 'mdc-radio--accent' }

var RADIO_CLASS = 'mdc-radio';

var RADIO_NC_CLASS = 'mdc-radio__native-control';

var RADIO_BG_CLASS = 'mdc-radio__background';

var RADIO_OUTER = 'mdc-radio__outer-circle';

var RADIO_INNER = 'mdc-radio__inner-circle';

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint-disable no-unused-vars */

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @enum {string} */
const strings$4 = {
  NATIVE_CONTROL_SELECTOR: '.mdc-radio__native-control',
};

/** @enum {string} */
const cssClasses$4 = {
  ROOT: 'mdc-radio',
  DISABLED: 'mdc-radio--disabled',
};

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

class MDCRadioFoundation extends MDCFoundation {
  /** @return enum {cssClasses} */
  static get cssClasses() {
    return cssClasses$4;
  }

  /** @return enum {strings} */
  static get strings() {
    return strings$4;
  }

  /** @return {!MDCRadioAdapter} */
  static get defaultAdapter() {
    return /** @type {!MDCRadioAdapter} */ ({
      addClass: (/* className: string */) => {},
      removeClass: (/* className: string */) => {},
      getNativeControl: () => /* !SelectionControlState */ {},
    });
  }

  /** @return {boolean} */
  isChecked() {
    return this.getNativeControl_().checked;
  }

  /** @param {boolean} checked */
  setChecked(checked) {
    this.getNativeControl_().checked = checked;
  }

  /** @return {boolean} */
  isDisabled() {
    return this.getNativeControl_().disabled;
  }

  /** @param {boolean} disabled */
  setDisabled(disabled) {
    const {DISABLED} = MDCRadioFoundation.cssClasses;
    this.getNativeControl_().disabled = disabled;
    if (disabled) {
      this.adapter_.addClass(DISABLED);
    } else {
      this.adapter_.removeClass(DISABLED);
    }
  }

  /** @return {?string} */
  getValue() {
    return this.getNativeControl_().value;
  }

  /** @param {?string} value */
  setValue(value) {
    this.getNativeControl_().value = value;
  }

  /**
   * @return {!SelectionControlState}
   * @private
   */
  getNativeControl_() {
    return this.adapter_.getNativeControl() || {
      checked: false,
      disabled: false,
      value: null,
    };
  }
}

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

class MDCRadio extends MDCComponent {
  static attachTo(root) {
    return new MDCRadio(root);
  }

  /** @return {boolean} */
  get checked() {
    return this.foundation_.isChecked();
  }

  /** @param {boolean} checked */
  set checked(checked) {
    this.foundation_.setChecked(checked);
  }

  /** @return {boolean} */
  get disabled() {
    return this.foundation_.isDisabled();
  }

  /** @param {boolean} disabled */
  set disabled(disabled) {
    this.foundation_.setDisabled(disabled);
  }

  /** @return {?string} */
  get value() {
    return this.foundation_.getValue();
  }

  /** @param {?string} value */
  set value(value) {
    this.foundation_.setValue(value);
  }

  /** @return {!MDCRipple} */
  get ripple() {
    return this.ripple_;
  }

  constructor(...args) {
    super(...args);

    /** @private {!MDCRipple} */
    this.ripple_ = this.initRipple_();
  }

  /**
   * @return {!MDCRipple}
   * @private
   */
  initRipple_() {
    const adapter = Object.assign(MDCRipple.createAdapter(this), {
      isUnbounded: () => true,
      // Radio buttons technically go "active" whenever there is *any* keyboard interaction. This is not the
      // UI we desire.
      isSurfaceActive: () => false,
      registerInteractionHandler: (type, handler) => this.nativeControl_.addEventListener(type, handler),
      deregisterInteractionHandler: (type, handler) => this.nativeControl_.removeEventListener(type, handler),
      computeBoundingRect: () => {
        const {left, top} = this.root_.getBoundingClientRect();
        const DIM = 40;
        return {
          top,
          left,
          right: left + DIM,
          bottom: top + DIM,
          width: DIM,
          height: DIM,
        };
      },
    });
    const foundation = new MDCRippleFoundation(adapter);
    return new MDCRipple(this.root_, foundation);
  }

  /**
   * Returns the state of the native control element, or null if the native control element is not present.
   * @return {?SelectionControlState}
   * @private
   */
  get nativeControl_() {
    const {NATIVE_CONTROL_SELECTOR} = MDCRadioFoundation.strings;
    const el = /** @type {?SelectionControlState} */ (
      this.root_.querySelector(NATIVE_CONTROL_SELECTOR));
    return el;
  }

  destroy() {
    this.ripple_.destroy();
    super.destroy();
  }

  /** @return {!MDCRadioFoundation} */
  getDefaultFoundation() {
    return new MDCRadioFoundation({
      addClass: (className) => this.root_.classList.add(className),
      removeClass: (className) => this.root_.classList.remove(className),
      getNativeControl: () => this.root_.querySelector(MDCRadioFoundation.strings.NATIVE_CONTROL_SELECTOR),
    });
  }
}

var RadioAdapter = function (_SMCAdapter) {
  inherits(RadioAdapter, _SMCAdapter);

  function RadioAdapter(_ref) {
    var sel = _ref.sel,
        elm = _ref.elm,
        data = _ref.data;
    classCallCheck$1(this, RadioAdapter);

    var _this = possibleConstructorReturn(this, (RadioAdapter.__proto__ || Object.getPrototypeOf(RadioAdapter)).call(this, sel, new MDCRadio(elm)));

    _this.radio = _this.component;

    _this.update_ = function (oldVnode, vnode) {
      _this.updateProps_(vnode.data.props);
    };

    _this.updateDisabled_ = function (props) {
      _this.updateBoolean_(props, 'disabled');
    };

    _this.updateChecked_ = function (props) {
      _this.updateBoolean_(props, 'checked');
    };

    _this.updateValue_ = function (props) {
      var wanted = props && props.value;
      var active = _this.radio.value;

      if (wanted && wanted !== active) {
        _this.radio.value = wanted;
      }
    };

    _this.updateBoolean_ = function (props, prop) {
      var wanted = props && props[prop];
      var active = _this.radio[prop];
      if (typeof wanted === 'boolean' && wanted !== active) {
        _this.radio[prop] = wanted;
      }
    };

    _this.updateProps_ = function (props) {
      _this.updateDisabled_(props);
      _this.updateChecked_(props);
      _this.updateValue_(props);
    };

    _this.updateProps_(data.props);
    return _this;
  }

  return RadioAdapter;
}(SMCAdapter);

/* eslint-disable no-unused-vars */
var Radio = function (_Input) {
  inherits(Radio, _Input);

  function Radio() {
    var props_ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var children_ = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    classCallCheck$1(this, Radio);

    var _this = possibleConstructorReturn(this, (Radio.__proto__ || Object.getPrototypeOf(Radio)).call(this, props_, children_ /*, STYLE_SWITCHES */));

    _this.hooks = _this.utils.makeHooks(RadioAdapter);
    return _this;
  }

  createClass(Radio, [{
    key: 'classNames_',
    value: function classNames_() {
      return RADIO_NC_CLASS;
    }
  }, {
    key: 'type_',
    value: function type_() {
      return 'radio';
    }
  }, {
    key: 'render',
    value: function render() {
      return html$1(
        'div',
        _extends({
          classNames: RADIO_CLASS,
          'class': this.classes,
          hook: this.hooks
        }, this.props),
        this.input,
        html$1(
          'div',
          { classNames: RADIO_BG_CLASS },
          html$1('div', { classNames: RADIO_OUTER }),
          html$1('div', { classNames: RADIO_INNER })
        )
      );
    }
  }]);
  return Radio;
}(Input);

var STYLE_SWITCHES_BODY = {
  scrollable: 'mdc-dialog__body--scrollable'
};

var STYLE_SWITCHES_FOOTER_BTN = _extends({
  cancel: 'mdc-dialog__footer__button--cancel',
  accept: 'mdc-dialog__footer__button--accept'
}, STYLE_SWITCHES);

var DIALOG_CLASS = 'mdc-dialog';

var SURFACE_CLASS = 'mdc-dialog__surface';

var BACKDROP_CLASS = 'mdc-dialog__backdrop';

var HEADER_CLASS = 'mdc-dialog__header';

var TITLE_CLASS$1 = 'mdc-dialog__header__title';

var FOOTER_CLASS = 'mdc-dialog__footer';

var FOOTER_BTN_CLASS = 'mdc-dialog__footer__button';

var BODY_CLASS = 'mdc-dialog__body';

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const cssClasses$5 = {
  ROOT: 'mdc-dialog',
  OPEN: 'mdc-dialog--open',
  ANIMATING: 'mdc-dialog--animating',
  BACKDROP: 'mdc-dialog__backdrop',
  SCROLL_LOCK: 'mdc-dialog-scroll-lock',
  ACCEPT_BTN: 'mdc-dialog__footer__button--accept',
  CANCEL_BTN: 'mdc-dialog__footer__button--cancel',
};

const strings$5 = {
  OPEN_DIALOG_SELECTOR: '.mdc-dialog--open',
  DIALOG_SURFACE_SELECTOR: '.mdc-dialog__surface',
  ACCEPT_SELECTOR: '.mdc-dialog__footer__button--accept',
  ACCEPT_EVENT: 'MDCDialog:accept',
  CANCEL_EVENT: 'MDCDialog:cancel',
};

/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

class MDCDialogFoundation extends MDCFoundation {
  static get cssClasses() {
    return cssClasses$5;
  }

  static get strings() {
    return strings$5;
  }

  static get defaultAdapter() {
    return {
      addClass: (/* className: string */) => {},
      removeClass: (/* className: string */) => {},
      addBodyClass: (/* className: string */) => {},
      removeBodyClass: (/* className: string */) => {},
      eventTargetHasClass: (/* target: EventTarget, className: string */) => /* boolean */ false,
      registerInteractionHandler: (/* evt: string, handler: EventListener */) => {},
      deregisterInteractionHandler: (/* evt: string, handler: EventListener */) => {},
      registerSurfaceInteractionHandler: (/* evt: string, handler: EventListener */) => {},
      deregisterSurfaceInteractionHandler: (/* evt: string, handler: EventListener */) => {},
      registerDocumentKeydownHandler: (/* handler: EventListener */) => {},
      deregisterDocumentKeydownHandler: (/* handler: EventListener */) => {},
      registerTransitionEndHandler: (/* handler: EventListener */) => {},
      deregisterTransitionEndHandler: (/* handler: EventListener */) => {},
      notifyAccept: () => {},
      notifyCancel: () => {},
      trapFocusOnSurface: () => {},
      untrapFocusOnSurface: () => {},
      isDialog: (/* el: Element */) => /* boolean */ false,
    };
  }

  constructor(adapter) {
    super(Object.assign(MDCDialogFoundation.defaultAdapter, adapter));
    this.isOpen_ = false;
    this.componentClickHandler_ = (evt) => {
      if (this.adapter_.eventTargetHasClass(evt.target, cssClasses$5.BACKDROP)) {
        this.cancel(true);
      }
    };
    this.dialogClickHandler_ = (evt) => this.handleDialogClick_(evt);
    this.documentKeydownHandler_ = (evt) => {
      if (evt.key && evt.key === 'Escape' || evt.keyCode === 27) {
        this.cancel(true);
      }
    };
    this.transitionEndHandler_ = (evt) => this.handleTransitionEnd_(evt);
  };

  destroy() {
    // Ensure that dialog is cleaned up when destroyed
    if (this.isOpen_) {
      this.adapter_.deregisterSurfaceInteractionHandler('click', this.dialogClickHandler_);
      this.adapter_.deregisterDocumentKeydownHandler(this.documentKeydownHandler_);
      this.adapter_.deregisterInteractionHandler('click', this.componentClickHandler_);
      this.adapter_.untrapFocusOnSurface();
      this.adapter_.deregisterTransitionEndHandler(this.transitionEndHandler_);
      this.adapter_.removeClass(MDCDialogFoundation.cssClasses.ANIMATING);
      this.adapter_.removeClass(MDCDialogFoundation.cssClasses.OPEN);
      this.enableScroll_();
    }
  }

  open() {
    this.isOpen_ = true;
    this.disableScroll_();
    this.adapter_.registerDocumentKeydownHandler(this.documentKeydownHandler_);
    this.adapter_.registerSurfaceInteractionHandler('click', this.dialogClickHandler_);
    this.adapter_.registerInteractionHandler('click', this.componentClickHandler_);
    this.adapter_.registerTransitionEndHandler(this.transitionEndHandler_);
    this.adapter_.addClass(MDCDialogFoundation.cssClasses.ANIMATING);
    this.adapter_.addClass(MDCDialogFoundation.cssClasses.OPEN);
  }

  close() {
    this.isOpen_ = false;
    this.adapter_.deregisterSurfaceInteractionHandler('click', this.dialogClickHandler_);
    this.adapter_.deregisterDocumentKeydownHandler(this.documentKeydownHandler_);
    this.adapter_.deregisterInteractionHandler('click', this.componentClickHandler_);
    this.adapter_.untrapFocusOnSurface();
    this.adapter_.registerTransitionEndHandler(this.transitionEndHandler_);
    this.adapter_.addClass(MDCDialogFoundation.cssClasses.ANIMATING);
    this.adapter_.removeClass(MDCDialogFoundation.cssClasses.OPEN);
  }

  isOpen() {
    return this.isOpen_;
  }

  accept(shouldNotify) {
    if (shouldNotify) {
      this.adapter_.notifyAccept();
    }

    this.close();
  }

  cancel(shouldNotify) {
    if (shouldNotify) {
      this.adapter_.notifyCancel();
    }

    this.close();
  }

  handleDialogClick_(evt) {
    const {target} = evt;
    if (this.adapter_.eventTargetHasClass(target, cssClasses$5.ACCEPT_BTN)) {
      this.accept(true);
    } else if (this.adapter_.eventTargetHasClass(target, cssClasses$5.CANCEL_BTN)) {
      this.cancel(true);
    }
  }

  handleTransitionEnd_(evt) {
    if (this.adapter_.isDialog(evt.target)) {
      this.adapter_.deregisterTransitionEndHandler(this.transitionEndHandler_);
      this.adapter_.removeClass(MDCDialogFoundation.cssClasses.ANIMATING);
      if (this.isOpen_) {
        this.adapter_.trapFocusOnSurface();
      } else {
        this.enableScroll_();
      }
    }
  };

  disableScroll_() {
    this.adapter_.addBodyClass(cssClasses$5.SCROLL_LOCK);
  }

  enableScroll_() {
    this.adapter_.removeBodyClass(cssClasses$5.SCROLL_LOCK);
  }
}

var index$1 = function(el) {
  var basicTabbables = [];
  var orderedTabbables = [];

  // A node is "available" if
  // - it's computed style
  var isUnavailable = createIsUnavailable();

  var candidateSelectors = [
    'input',
    'select',
    'a[href]',
    'textarea',
    'button',
    '[tabindex]',
  ];

  var candidates = el.querySelectorAll(candidateSelectors);

  var candidate, candidateIndex;
  for (var i = 0, l = candidates.length; i < l; i++) {
    candidate = candidates[i];
    candidateIndex = parseInt(candidate.getAttribute('tabindex'), 10) || candidate.tabIndex;

    if (
      candidateIndex < 0
      || (candidate.tagName === 'INPUT' && candidate.type === 'hidden')
      || candidate.disabled
      || isUnavailable(candidate)
    ) {
      continue;
    }

    if (candidateIndex === 0) {
      basicTabbables.push(candidate);
    } else {
      orderedTabbables.push({
        tabIndex: candidateIndex,
        node: candidate,
      });
    }
  }

  var tabbableNodes = orderedTabbables
    .sort(function(a, b) {
      return a.tabIndex - b.tabIndex;
    })
    .map(function(a) {
      return a.node
    });

  Array.prototype.push.apply(tabbableNodes, basicTabbables);

  return tabbableNodes;
};

function createIsUnavailable() {
  // Node cache must be refreshed on every check, in case
  // the content of the element has changed
  var isOffCache = [];

  // "off" means `display: none;`, as opposed to "hidden",
  // which means `visibility: hidden;`. getComputedStyle
  // accurately reflects visiblity in context but not
  // "off" state, so we need to recursively check parents.

  function isOff(node, nodeComputedStyle) {
    if (node === document.documentElement) return false;

    // Find the cached node (Array.prototype.find not available in IE9)
    for (var i = 0, length = isOffCache.length; i < length; i++) {
      if (isOffCache[i][0] === node) return isOffCache[i][1];
    }

    nodeComputedStyle = nodeComputedStyle || window.getComputedStyle(node);

    var result = false;

    if (nodeComputedStyle.display === 'none') {
      result = true;
    } else if (node.parentNode) {
      result = isOff(node.parentNode);
    }

    isOffCache.push([node, result]);

    return result;
  }

  return function isUnavailable(node) {
    if (node === document.documentElement) return false;

    var computedStyle = window.getComputedStyle(node);

    if (isOff(node, computedStyle)) return true;

    return computedStyle.visibility === 'hidden';
  }
}

var listeningFocusTrap = null;

function focusTrap(element, userOptions) {
  var tabbableNodes = [];
  var nodeFocusedBeforeActivation = null;
  var active = false;
  var paused = false;

  var container = (typeof element === 'string')
    ? document.querySelector(element)
    : element;

  var config = userOptions || {};
  config.returnFocusOnDeactivate = (userOptions && userOptions.returnFocusOnDeactivate !== undefined)
    ? userOptions.returnFocusOnDeactivate
    : true;
  config.escapeDeactivates = (userOptions && userOptions.escapeDeactivates !== undefined)
    ? userOptions.escapeDeactivates
    : true;

  var trap = {
    activate: activate,
    deactivate: deactivate,
    pause: pause,
    unpause: unpause,
  };

  return trap;

  function activate(activateOptions) {
    if (active) return;

    var defaultedActivateOptions = {
      onActivate: (activateOptions && activateOptions.onActivate !== undefined)
        ? activateOptions.onActivate
        : config.onActivate,
    };

    active = true;
    paused = false;
    nodeFocusedBeforeActivation = document.activeElement;

    if (defaultedActivateOptions.onActivate) {
      defaultedActivateOptions.onActivate();
    }

    addListeners();
    return trap;
  }

  function deactivate(deactivateOptions) {
    if (!active) return;

    var defaultedDeactivateOptions = {
      returnFocus: (deactivateOptions && deactivateOptions.returnFocus !== undefined)
        ? deactivateOptions.returnFocus
        : config.returnFocusOnDeactivate,
      onDeactivate: (deactivateOptions && deactivateOptions.onDeactivate !== undefined)
        ? deactivateOptions.onDeactivate
        : config.onDeactivate,
    };

    removeListeners();

    if (defaultedDeactivateOptions.onDeactivate) {
      defaultedDeactivateOptions.onDeactivate();
    }

    if (defaultedDeactivateOptions.returnFocus) {
      setTimeout(function () {
        tryFocus(nodeFocusedBeforeActivation);
      }, 0);
    }

    active = false;
    paused = false;
    return this;
  }

  function pause() {
    if (paused || !active) return;
    paused = true;
    removeListeners();
  }

  function unpause() {
    if (!paused || !active) return;
    paused = false;
    addListeners();
  }

  function addListeners() {
    if (!active) return;

    // There can be only one listening focus trap at a time
    if (listeningFocusTrap) {
      listeningFocusTrap.pause();
    }
    listeningFocusTrap = trap;

    updateTabbableNodes();
    tryFocus(firstFocusNode());
    document.addEventListener('focus', checkFocus, true);
    document.addEventListener('click', checkClick, true);
    document.addEventListener('mousedown', checkPointerDown, true);
    document.addEventListener('touchstart', checkPointerDown, true);
    document.addEventListener('keydown', checkKey, true);

    return trap;
  }

  function removeListeners() {
    if (!active || listeningFocusTrap !== trap) return;

    document.removeEventListener('focus', checkFocus, true);
    document.removeEventListener('click', checkClick, true);
    document.removeEventListener('mousedown', checkPointerDown, true);
    document.removeEventListener('touchstart', checkPointerDown, true);
    document.removeEventListener('keydown', checkKey, true);

    listeningFocusTrap = null;

    return trap;
  }

  function getNodeForOption(optionName) {
    var optionValue = config[optionName];
    var node = optionValue;
    if (!optionValue) {
      return null;
    }
    if (typeof optionValue === 'string') {
      node = document.querySelector(optionValue);
      if (!node) {
        throw new Error('`' + optionName + '` refers to no known node');
      }
    }
    if (typeof optionValue === 'function') {
      node = optionValue();
      if (!node) {
        throw new Error('`' + optionName + '` did not return a node');
      }
    }
    return node;
  }

  function firstFocusNode() {
    var node;
    if (getNodeForOption('initialFocus') !== null) {
      node = getNodeForOption('initialFocus');
    } else if (container.contains(document.activeElement)) {
      node = document.activeElement;
    } else {
      node = tabbableNodes[0] || getNodeForOption('fallbackFocus');
    }

    if (!node) {
      throw new Error('You can\'t have a focus-trap without at least one focusable element');
    }

    return node;
  }

  // This needs to be done on mousedown and touchstart instead of click
  // so that it precedes the focus event
  function checkPointerDown(e) {
    if (config.clickOutsideDeactivates && !container.contains(e.target)) {
      deactivate({ returnFocus: false });
    }
  }

  function checkClick(e) {
    if (config.clickOutsideDeactivates) return;
    if (container.contains(e.target)) return;
    e.preventDefault();
    e.stopImmediatePropagation();
  }

  function checkFocus(e) {
    if (container.contains(e.target)) return;
    e.preventDefault();
    e.stopImmediatePropagation();
    // Checking for a blur method here resolves a Firefox issue (#15)
    if (typeof e.target.blur === 'function') e.target.blur();
  }

  function checkKey(e) {
    if (e.key === 'Tab' || e.keyCode === 9) {
      handleTab(e);
    }

    if (config.escapeDeactivates !== false && isEscapeEvent(e)) {
      deactivate();
    }
  }

  function handleTab(e) {
    e.preventDefault();
    updateTabbableNodes();
    var currentFocusIndex = tabbableNodes.indexOf(e.target);
    var lastTabbableNode = tabbableNodes[tabbableNodes.length - 1];
    var firstTabbableNode = tabbableNodes[0];

    if (e.shiftKey) {
      if (e.target === firstTabbableNode || tabbableNodes.indexOf(e.target) === -1) {
        return tryFocus(lastTabbableNode);
      }
      return tryFocus(tabbableNodes[currentFocusIndex - 1]);
    }

    if (e.target === lastTabbableNode) return tryFocus(firstTabbableNode);

    tryFocus(tabbableNodes[currentFocusIndex + 1]);
  }

  function updateTabbableNodes() {
    tabbableNodes = index$1(container);
  }
}

function isEscapeEvent(e) {
  return e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27;
}

function tryFocus(node) {
  if (!node || !node.focus) return;
  node.focus();
  if (node.tagName.toLowerCase() === 'input') {
    node.select();
  }
}

var index = focusTrap;

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function createFocusTrapInstance(surfaceEl, acceptButtonEl, focusTrapFactory = index) {
  return focusTrapFactory(surfaceEl, {
    initialFocus: acceptButtonEl,
    clickOutsideDeactivates: true,
  });
}

/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

class MDCDialog extends MDCComponent {
  static attachTo(root) {
    return new MDCDialog(root);
  }

  get open() {
    return this.foundation_.isOpen();
  }

  get acceptButton_() {
    return this.root_.querySelector(MDCDialogFoundation.strings.ACCEPT_SELECTOR);
  }

  get dialogSurface_() {
    return this.root_.querySelector(MDCDialogFoundation.strings.DIALOG_SURFACE_SELECTOR);
  }

  initialize() {
    this.focusTrap_ = createFocusTrapInstance(this.dialogSurface_, this.acceptButton_);
    this.footerBtnRipples_ = [];

    const footerBtns = this.root_.querySelectorAll('.mdc-dialog__footer__button');
    for (let i = 0, footerBtn; footerBtn = footerBtns[i]; i++) {
      this.footerBtnRipples_.push(new MDCRipple(footerBtn));
    }
  }

  destroy() {
    this.footerBtnRipples_.forEach((ripple) => ripple.destroy());
    super.destroy();
  }

  show() {
    this.foundation_.open();
  }

  close() {
    this.foundation_.close();
  }

  getDefaultFoundation() {
    return new MDCDialogFoundation({
      addClass: (className) => this.root_.classList.add(className),
      removeClass: (className) => this.root_.classList.remove(className),
      addBodyClass: (className) => document.body.classList.add(className),
      removeBodyClass: (className) => document.body.classList.remove(className),
      eventTargetHasClass: (target, className) => target.classList.contains(className),
      registerInteractionHandler: (evt, handler) => this.root_.addEventListener(evt, handler),
      deregisterInteractionHandler: (evt, handler) => this.root_.removeEventListener(evt, handler),
      registerSurfaceInteractionHandler: (evt, handler) => this.dialogSurface_.addEventListener(evt, handler),
      deregisterSurfaceInteractionHandler: (evt, handler) => this.dialogSurface_.removeEventListener(evt, handler),
      registerDocumentKeydownHandler: (handler) => document.addEventListener('keydown', handler),
      deregisterDocumentKeydownHandler: (handler) => document.removeEventListener('keydown', handler),
      registerTransitionEndHandler: (handler) => this.dialogSurface_.addEventListener('transitionend', handler),
      deregisterTransitionEndHandler: (handler) => this.dialogSurface_.removeEventListener('transitionend', handler),
      notifyAccept: () => this.emit(MDCDialogFoundation.strings.ACCEPT_EVENT),
      notifyCancel: () => this.emit(MDCDialogFoundation.strings.CANCEL_EVENT),
      trapFocusOnSurface: () => this.focusTrap_.activate(),
      untrapFocusOnSurface: () => this.focusTrap_.deactivate(),
      isDialog: (el) => el === this.dialogSurface_,
    });
  }
}

var DialogAdapter = function (_SMCAdapter) {
  inherits(DialogAdapter, _SMCAdapter);

  function DialogAdapter(_ref) {
    var sel = _ref.sel,
        elm = _ref.elm,
        data = _ref.data;
    classCallCheck$1(this, DialogAdapter);

    var _this = possibleConstructorReturn(this, (DialogAdapter.__proto__ || Object.getPrototypeOf(DialogAdapter)).call(this, sel, new MDCDialog(elm)));

    _this.dialog = _this.component;

    _this.update_ = function (oldVnode, vnode) {
      _this.updateProps_(vnode.data.props);
    };

    _this.updateProps_ = function (props) {
      var show = props && typeof props.show === 'boolean' && props.show;
      var open = _this.dialog.open;

      if (show && !open) {
        _this.dialog.show();
      } else if (!show && open) {
        _this.dialog.close();
      }
    };

    _this.updateProps_(data.props);
    return _this;
  }

  return DialogAdapter;
}(SMCAdapter);

/* eslint-disable no-unused-vars */
var Dialog = function (_SMCComponent) {
  inherits(Dialog, _SMCComponent);

  function Dialog() {
    var props_ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var children_ = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    classCallCheck$1(this, Dialog);

    var _this = possibleConstructorReturn(this, (Dialog.__proto__ || Object.getPrototypeOf(Dialog)).call(this, props_, children_));

    var _this$props = _this.props,
        labelledBy = _this$props.labelledBy,
        describedBy = _this$props.describedBy,
        onAccept = _this$props.onAccept,
        onCancel = _this$props.onCancel,
        otherProps = objectWithoutProperties(_this$props, ['labelledBy', 'describedBy', 'onAccept', 'onCancel']);

    _this.hooks = _this.utils.makeHooks(DialogAdapter);
    _this.ons = {};
    if (typeof onAccept === 'function') _this.ons['MDCDialog:accept'] = onAccept;
    if (typeof onCancel === 'function') _this.ons['MDCDialog:cancel'] = onCancel;
    _this.attrs = _extends({
      role: 'alertdialog'
    }, _this.utils.makeKeyValue('aria-labelledby', labelledBy), _this.utils.makeKeyValue('aria-describedby', describedBy));
    _this.props = otherProps;
    return _this;
  }

  createClass(Dialog, [{
    key: 'render',
    value: function render() {
      return html$1(
        'aside',
        _extends({}, this.selector, {
          classNames: DIALOG_CLASS,
          'class': this.classes,
          hook: this.hooks,
          on: this.ons,
          attrs: this.attrs
        }, this.props),
        html$1(
          'div',
          { classNames: SURFACE_CLASS },
          this.children
        ),
        html$1('div', { classNames: BACKDROP_CLASS })
      );
    }
  }]);
  return Dialog;
}(SMCComponent);

var Body = function (_SMCComponent2) {
  inherits(Body, _SMCComponent2);

  function Body() {
    var props_ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var children_ = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    classCallCheck$1(this, Body);
    return possibleConstructorReturn(this, (Body.__proto__ || Object.getPrototypeOf(Body)).call(this, props_, children_, STYLE_SWITCHES_BODY));
  }

  createClass(Body, [{
    key: 'render',
    value: function render() {
      return html$1(
        'section',
        _extends({}, this.selector, {
          classNames: BODY_CLASS,
          'class': this.classes
        }, this.props),
        this.children
      );
    }
  }]);
  return Body;
}(SMCComponent);

var Footer = function (_SMCComponent3) {
  inherits(Footer, _SMCComponent3);

  function Footer() {
    classCallCheck$1(this, Footer);
    return possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  createClass(Footer, [{
    key: 'render',
    value: function render() {
      return html$1(
        'footer',
        _extends({}, this.selector, {
          classNames: FOOTER_CLASS,
          'class': this.classes
        }, this.props),
        this.children
      );
    }
  }]);
  return Footer;
}(SMCComponent);

var FooterAction = function (_Button) {
  inherits(FooterAction, _Button);

  function FooterAction() {
    var props_ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var children_ = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    classCallCheck$1(this, FooterAction);
    return possibleConstructorReturn(this, (FooterAction.__proto__ || Object.getPrototypeOf(FooterAction)).call(this, props_, children_, STYLE_SWITCHES_FOOTER_BTN));
  }

  createClass(FooterAction, [{
    key: 'classNames_',
    value: function classNames_() {
      return [BTN_CLASS, FOOTER_BTN_CLASS];
    }
  }, {
    key: 'hooks_',
    value: function hooks_() {
      return {};
    }
  }]);
  return FooterAction;
}(Button);

var FooterAccept = function (_FooterAction) {
  inherits(FooterAccept, _FooterAction);

  function FooterAccept() {
    var props_ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var children_ = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    classCallCheck$1(this, FooterAccept);
    return possibleConstructorReturn(this, (FooterAccept.__proto__ || Object.getPrototypeOf(FooterAccept)).call(this, _extends({}, props_, { accept: true }), children_));
  }

  return FooterAccept;
}(FooterAction);

var FooterCancel = function (_FooterAction2) {
  inherits(FooterCancel, _FooterAction2);

  function FooterCancel() {
    var props_ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var children_ = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    classCallCheck$1(this, FooterCancel);
    return possibleConstructorReturn(this, (FooterCancel.__proto__ || Object.getPrototypeOf(FooterCancel)).call(this, _extends({}, props_, { cancel: true }), children_));
  }

  return FooterCancel;
}(FooterAction);

var Header = function (_SMCComponent4) {
  inherits(Header, _SMCComponent4);

  function Header() {
    classCallCheck$1(this, Header);
    return possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  createClass(Header, [{
    key: 'render',
    value: function render() {
      return html$1(
        'header',
        _extends({}, this.selector, {
          classNames: HEADER_CLASS,
          'class': this.classes
        }, this.props),
        this.children
      );
    }
  }]);
  return Header;
}(SMCComponent);

var Title$1 = function (_SMCComponent5) {
  inherits(Title, _SMCComponent5);

  function Title() {
    classCallCheck$1(this, Title);
    return possibleConstructorReturn(this, (Title.__proto__ || Object.getPrototypeOf(Title)).apply(this, arguments));
  }

  createClass(Title, [{
    key: 'render',
    value: function render() {
      return html$1(
        'h2',
        _extends({}, this.selector, {
          classNames: TITLE_CLASS$1,
          'class': this.classes
        }, this.props),
        this.children
      );
    }
  }]);
  return Title;
}(SMCComponent);

Dialog.FooterAccept = FooterAccept;
Dialog.Body = Body;
Dialog.FooterCancel = FooterCancel;
Dialog.Footer = Footer;
Dialog.Header = Header;
Dialog.Title = Title$1;

// export const STYLE_SWITCHES = { accent: 'mdc-switch--accent' }

var SW_DISABLED = 'mdc-switch--disabled';

var SW_CLASS = 'mdc-switch';

var SW_NC_CLASS = 'mdc-switch__native-control';

var SW_BG_CLASS = 'mdc-switch__background';

var SW_KNOB_CLASS = 'mdc-switch__knob';

var SW_LABEL_CLASS = 'mdc-switch-label';

var SwitchAdapter = function (_SMCAdapter) {
  inherits(SwitchAdapter, _SMCAdapter);

  function SwitchAdapter(_ref) {
    var sel = _ref.sel,
        elm = _ref.elm,
        data = _ref.data;
    classCallCheck$1(this, SwitchAdapter);

    var _this = possibleConstructorReturn(this, (SwitchAdapter.__proto__ || Object.getPrototypeOf(SwitchAdapter)).call(this, sel, new MDCSwitch(elm)));

    _this.switch = _this.component;

    _this.update_ = function (oldVnode, vnode) {
      _this.updateProps_(vnode.data.props);
    };

    _this.updateDisabled_ = function (props) {
      _this.updateBoolean_(props, 'disabled');
    };

    _this.updateChecked_ = function (props) {
      _this.updateBoolean_(props, 'checked');
    };

    _this.updateValue_ = function (props) {
      var wanted = props && props.value;
      var active = _this.switch.value;

      if (wanted && wanted !== active) {
        _this.switch.value = wanted;
      }
    };

    _this.updateBoolean_ = function (props, prop) {
      var wanted = props && props[prop];
      var active = _this.switch[prop];
      if (typeof wanted === 'boolean' && wanted !== active) {
        _this.switch[prop] = wanted;
      }
    };

    _this.updateProps_ = function (props) {
      _this.updateDisabled_(props);
      _this.updateChecked_(props);
      _this.updateValue_(props);
    };

    _this.updateProps_(data.props);
    return _this;
  }

  return SwitchAdapter;
}(SMCAdapter);

var MDCSwitch = function () {
  function MDCSwitch(elm_) {
    classCallCheck$1(this, MDCSwitch);

    this.root = elm_;
  }

  createClass(MDCSwitch, [{
    key: 'checked',
    get: function get$$1() {
      return this.native_.checked;
    },
    set: function set$$1(checked) {
      this.native_.checked = checked;
    }
  }, {
    key: 'indeterminate',
    get: function get$$1() {
      return this.native_.indeterminate;
    },
    set: function set$$1(indeterminate) {
      this.native_.indeterminate = indeterminate;
    }
  }, {
    key: 'disabled',
    get: function get$$1() {
      return this.native_.disabled;
    },
    set: function set$$1(disabled) {
      this.native_.disabled = disabled;

      if (disabled) {
        this.root.classList.add(SW_DISABLED);
      } else {
        this.root.classList.remove(SW_DISABLED);
      }
    }
  }, {
    key: 'value',
    get: function get$$1() {
      return this.native_.value;
    },
    set: function set$$1(value) {
      this.native_.value = value;
    }
  }, {
    key: 'native_',
    get: function get$$1() {
      return this.root.querySelector('.' + SW_NC_CLASS);
    }
  }]);
  return MDCSwitch;
}();

/* eslint-disable no-unused-vars */
var Switch = function (_Input) {
  inherits(Switch, _Input);

  function Switch() {
    var props_ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var children_ = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    classCallCheck$1(this, Switch);

    var _this = possibleConstructorReturn(this, (Switch.__proto__ || Object.getPrototypeOf(Switch)).call(this, props_, children_ /*, STYLE_SWITCHES */));

    _this.hooks = _this.utils.makeHooks(SwitchAdapter);
    var _this$props = _this.props,
        label = _this$props.label,
        otherProps = objectWithoutProperties(_this$props, ['label']);

    _this.label = label ? ' ' + label : '';
    _this.attrs = _this.utils.makeKeyValue('for', _this.id);
    _this.props = otherProps;
    return _this;
  }

  createClass(Switch, [{
    key: 'classNames_',
    value: function classNames_() {
      return SW_NC_CLASS;
    }
  }, {
    key: 'type_',
    value: function type_() {
      return 'checkbox';
    }
  }, {
    key: 'render',
    value: function render() {
      return html$1(
        'div',
        null,
        html$1(
          'div',
          _extends({
            classNames: SW_CLASS,
            'class': this.classes,
            hook: this.hooks
          }, this.props),
          this.input,
          html$1(
            'div',
            { classNames: SW_BG_CLASS },
            html$1('div', { classNames: SW_KNOB_CLASS })
          )
        ),
        html$1(
          'label',
          { classNames: SW_LABEL_CLASS, attrs: this.attrs },
          this.label
        )
      );
    }
  }]);
  return Switch;
}(Input);

var STYLE_SWITCHES$3 = {
  discrete: 'mdc-slider--discrete',
  markers: 'mdc-slider--display-markers'
  // accent: 'mdc-slider--accent'
};

var SLIDER_CLASS = 'mdc-slider';

var TRACK_CNT_CLASS = 'mdc-slider__track-container';

var TRACK_CLASS = 'mdc-slider__track';

var TRACK_MARKER_CLASS = 'mdc-slider__track-marker-container';

var THUMB_CNT_CLASS = 'mdc-slider__thumb-container';

var PIN_CLASS = 'mdc-slider__pin';

var PIN_MARKER_CLASS = 'mdc-slider__pin-value-marker';

var THUMB_CLASS = 'mdc-slider__thumb';

var RING_CLASS = 'mdc-slider__focus-ring';

/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const cssClasses$6 = {
  ACTIVE: 'mdc-slider--active',
  DISABLED: 'mdc-slider--disabled',
  DISCRETE: 'mdc-slider--discrete',
  FOCUS: 'mdc-slider--focus',
  IN_TRANSIT: 'mdc-slider--in-transit',
  OFF: 'mdc-slider--off',
  IS_DISCRETE: 'mdc-slider--discrete',
  HAS_TRACK_MARKER: 'mdc-slider--display-markers',
};

const strings$6 = {
  TRACK_SELECTOR: '.mdc-slider__track',
  TRACK_MARKER_CONTAINER_SELECTOR: '.mdc-slider__track-marker-container',
  LAST_TRACK_MARKER_SELECTOR: '.mdc-slider__track-marker:last-child',
  THUMB_CONTAINER_SELECTOR: '.mdc-slider__thumb-container',
  PIN_VALUE_MARKER_SELECTOR: '.mdc-slider__pin-value-marker',
  ARIA_VALUEMIN: 'aria-valuemin',
  ARIA_VALUEMAX: 'aria-valuemax',
  ARIA_VALUENOW: 'aria-valuenow',
  ARIA_DISABLED: 'aria-disabled',
  STEP_DATA_ATTR: 'data-step',
  CHANGE_EVENT: 'MDCSlider:change',
  INPUT_EVENT: 'MDCSlider:input',
};

const numbers$2 = {
  PAGE_FACTOR: 4,
};

/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 *you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const KEY_IDS = {
  ARROW_LEFT: 'ArrowLeft',
  ARROW_RIGHT: 'ArrowRight',
  ARROW_UP: 'ArrowUp',
  ARROW_DOWN: 'ArrowDown',
  HOME: 'Home',
  END: 'End',
  PAGE_UP: 'PageUp',
  PAGE_DOWN: 'PageDown',
};

class MDCSliderFoundation extends MDCFoundation {
  static get cssClasses() {
    return cssClasses$6;
  }

  static get strings() {
    return strings$6;
  }

  static get numbers() {
    return numbers$2;
  }

  static get defaultAdapter() {
    return {
      hasClass: (/* className: string */) => /* boolean */ false,
      addClass: (/* className: string */) => {},
      removeClass: (/* className: string */) => {},
      getAttribute: (/* name: string */) => /* string|null */ null,
      setAttribute: (/* name: string, value: string */) => {},
      removeAttribute: (/* name: string */) => {},
      computeBoundingRect: () => /* ClientRect */ ({
        top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0,
      }),
      getTabIndex: () => /* number */ 0,
      registerInteractionHandler: (/* type: string, handler: EventListener */) => {},
      deregisterInteractionHandler: (/* type: string, handler: EventListener */) => {},
      registerThumbContainerInteractionHandler: (/* type: string, handler: EventListener */) => {},
      deregisterThumbContainerInteractionHandler: (/* type: string, handler: EventListener */) => {},
      registerBodyInteractionHandler: (/* type: string, handler: EventListener */) => {},
      deregisterBodyInteractionHandler: (/* type: string, handler: EventListener */) => {},
      registerResizeHandler: (/* handler: EventListener */) => {},
      deregisterResizeHandler: (/* handler: EventListener */) => {},
      notifyInput: () => {},
      notifyChange: () => {},
      setThumbContainerStyleProperty: (/* propertyName: string, value: string */) => {},
      setTrackStyleProperty: (/* propertyName: string, value: string */) => {},
      setMarkerValue: (/* value: number */) => {},
      appendTrackMarkers: (/* numMarkers: number */) => {},
      removeTrackMarkers: () => {},
      setLastTrackMarkersStyleProperty: (/* propertyName: string, value: string */) => {},
      isRTL: () => /* boolean */ false,
    };
  }

  constructor(adapter = {}) {
    super(Object.assign(MDCSliderFoundation.defaultAdapter, adapter));
    this.rect_ = null;
    // We set this to NaN since we want it to be a number, but we can't use '0' or '-1'
    // because those could be valid tabindices set by the client code.
    this.savedTabIndex_ = NaN;
    this.off_ = false;
    this.active_ = false;
    this.inTransit_ = false;
    this.isDiscrete_ = false;
    this.hasTrackMarker_ = false;
    this.handlingThumbTargetEvt_ = false;
    this.min_ = 0;
    this.max_ = 100;
    this.step_ = 0;
    this.value_ = 0;
    this.disabled_ = false;
    this.preventFocusState_ = false;
    this.updateUIFrame_ = 0;
    this.thumbContainerPointerHandler_ = () => {
      this.handlingThumbTargetEvt_ = true;
    };
    this.mousedownHandler_ = this.createDownHandler_('mousemove', 'mouseup');
    this.pointerdownHandler_ = this.createDownHandler_('pointermove', 'pointerup');
    this.touchstartHandler_ = this.createDownHandler_(
      'touchmove', 'touchend', ({targetTouches}) => targetTouches[0].pageX);
    this.keydownHandler_ = (evt) => this.handleKeydown_(evt);
    this.focusHandler_ = () => this.handleFocus_();
    this.blurHandler_ = () => this.handleBlur_();
    this.resizeHandler_ = () => this.layout();
  }

  init() {
    this.isDiscrete_ = this.adapter_.hasClass(cssClasses$6.IS_DISCRETE);
    this.hasTrackMarker_ = this.adapter_.hasClass(cssClasses$6.HAS_TRACK_MARKER);
    this.adapter_.registerInteractionHandler('mousedown', this.mousedownHandler_);
    this.adapter_.registerInteractionHandler('pointerdown', this.pointerdownHandler_);
    this.adapter_.registerInteractionHandler('touchstart', this.touchstartHandler_);
    this.adapter_.registerInteractionHandler('keydown', this.keydownHandler_);
    this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
    this.adapter_.registerInteractionHandler('blur', this.blurHandler_);
    ['mousedown', 'pointerdown', 'touchstart'].forEach((evtName) => {
      this.adapter_.registerThumbContainerInteractionHandler(evtName, this.thumbContainerPointerHandler_);
    });
    this.adapter_.registerResizeHandler(this.resizeHandler_);
    this.layout();
    // At last step, provide a reasonable default value to discrete slider
    if (this.isDiscrete_ && this.getStep() == 0) {
      this.setStep(1);
    }
  }

  destroy() {
    this.adapter_.deregisterInteractionHandler('mousedown', this.mousedownHandler_);
    this.adapter_.deregisterInteractionHandler('pointerdown', this.mousedownHandler_);
    this.adapter_.deregisterInteractionHandler('touchstart', this.mousedownHandler_);
    this.adapter_.deregisterInteractionHandler('keydown', this.keydownHandler_);
    this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
    this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);
    ['mousedown', 'pointerdown', 'touchstart'].forEach((evtName) => {
      this.adapter_.deregisterThumbContainerInteractionHandler(evtName, this.thumbContainerPointerHandler_);
    });
    this.adapter_.deregisterResizeHandler(this.resizeHandler_);
  }

  setupTrackMarker() {
    if (this.isDiscrete_ && this.hasTrackMarker_&& this.getStep() != 0) {
      const min = this.getMin();
      const max = this.getMax();
      const step = this.getStep();
      let numMarkers = (max - min) / step;

      // In case distance between max & min is indivisible to step,
      // we place the secondary to last marker proportionally at where thumb
      // could reach and place the last marker at max value
      const indivisible = Math.ceil(numMarkers) !== numMarkers;
      if (indivisible) {
        numMarkers = Math.ceil(numMarkers);
      }

      this.adapter_.removeTrackMarkers();
      this.adapter_.appendTrackMarkers(numMarkers);

      if (indivisible) {
        const lastStepRatio = (max - numMarkers * step) / step + 1;
        const flex = getCorrectPropertyName(window, 'flex');
        this.adapter_.setLastTrackMarkersStyleProperty(flex, lastStepRatio);
      }
    }
  }

  layout() {
    this.rect_ = this.adapter_.computeBoundingRect();
    this.updateUIForCurrentValue_();
  }

  getValue() {
    return this.value_;
  }

  setValue(value) {
    this.setValue_(value, false);
  }

  getMax() {
    return this.max_;
  }

  setMax(max) {
    if (max < this.min_) {
      throw new Error('Cannot set max to be less than the slider\'s minimum value');
    }
    this.max_ = max;
    this.setValue_(this.value_, false, true);
    this.adapter_.setAttribute(strings$6.ARIA_VALUEMAX, String(this.max_));
    this.setupTrackMarker();
  }

  getMin() {
    return this.min_;
  }

  setMin(min) {
    if (min > this.max_) {
      throw new Error('Cannot set min to be greater than the slider\'s maximum value');
    }
    this.min_ = min;
    this.setValue_(this.value_, false, true);
    this.adapter_.setAttribute(strings$6.ARIA_VALUEMIN, String(this.min_));
    this.setupTrackMarker();
  }

  getStep() {
    return this.step_;
  }

  setStep(step) {
    if (step < 0) {
      throw new Error('Step cannot be set to a negative number');
    }
    if (this.isDiscrete_ && (typeof(step) !== 'number' || step < 1)) {
      step = 1;
    }
    this.step_ = step;
    this.setValue_(this.value_, false, true);
    this.setupTrackMarker();
  }

  isDisabled() {
    return this.disabled_;
  }

  setDisabled(disabled) {
    this.disabled_ = disabled;
    this.toggleClass_(cssClasses$6.DISABLED, this.disabled_);
    if (this.disabled_) {
      this.savedTabIndex_ = this.adapter_.getTabIndex();
      this.adapter_.setAttribute(strings$6.ARIA_DISABLED, 'true');
      this.adapter_.removeAttribute('tabindex');
    } else {
      this.adapter_.removeAttribute(strings$6.ARIA_DISABLED);
      if (!isNaN(this.savedTabIndex_)) {
        this.adapter_.setAttribute('tabindex', String(this.savedTabIndex_));
      }
    }
  }

  createDownHandler_(moveEvt, upEvt, getPageX = ({pageX}) => pageX) {
    const moveHandler = (evt) => {
      evt.preventDefault();
      this.setValueFromEvt_(evt, getPageX);
    };

    const upHandler = () => {
      this.setActive_(false);
      this.adapter_.deregisterBodyInteractionHandler(moveEvt, moveHandler);
      this.adapter_.deregisterBodyInteractionHandler(upEvt, upHandler);
      this.adapter_.notifyChange();
    };

    const downHandler = (evt) => {
      if (this.disabled_) {
        return;
      }

      this.preventFocusState_ = true;
      this.setInTransit_(!this.handlingThumbTargetEvt_);
      this.handlingThumbTargetEvt_ = false;

      this.setActive_(true);

      this.adapter_.registerBodyInteractionHandler(moveEvt, moveHandler);
      this.adapter_.registerBodyInteractionHandler(upEvt, upHandler);
      this.setValueFromEvt_(evt, getPageX);
    };

    return downHandler;
  }

  setValueFromEvt_(evt, getPageX) {
    const pageX = getPageX(evt);
    const value = this.computeValueFromPageX_(pageX);
    this.setValue_(value, true);
  }

  computeValueFromPageX_(pageX) {
    const {max_: max, min_: min} = this;
    const xPos = pageX - this.rect_.left;
    let pctComplete = xPos / this.rect_.width;
    if (this.adapter_.isRTL()) {
      pctComplete = 1 - pctComplete;
    }
    // Fit the percentage complete between the range [min,max]
    // by remapping from [0, 1] to [min, min+(max-min)].
    return min + pctComplete * (max - min);
  }

  handleKeydown_(evt) {
    const keyId = this.getKeyId_(evt);
    const value = this.getValueForKeyId_(keyId);
    if (isNaN(value)) {
      return;
    }

    // Prevent page from scrolling due to key presses that would normally scroll the page
    evt.preventDefault();
    this.adapter_.addClass(cssClasses$6.FOCUS);
    this.setValue_(value, true);
    this.adapter_.notifyChange();
  }

  getKeyId_(kbdEvt) {
    switch (kbdEvt.key || kbdEvt.keyCode) {
    case KEY_IDS.ARROW_LEFT:
    case 37:
      return KEY_IDS.ARROW_LEFT;
    case KEY_IDS.ARROW_RIGHT:
    case 39:
      return KEY_IDS.ARROW_RIGHT;
    case KEY_IDS.ARROW_UP:
    case 38:
      return KEY_IDS.ARROW_UP;
    case KEY_IDS.ARROW_DOWN:
    case 40:
      return KEY_IDS.ARROW_DOWN;
    case KEY_IDS.HOME:
    case 36:
      return KEY_IDS.HOME;
    case KEY_IDS.END:
    case 35:
      return KEY_IDS.END;
    case KEY_IDS.PAGE_UP:
    case 33:
      return KEY_IDS.PAGE_UP;
    case KEY_IDS.PAGE_DOWN:
    case 34:
      return KEY_IDS.PAGE_DOWN;
    default:
      // Doesn't matter
      return '';
    }
  }

  getValueForKeyId_(keyId) {
    const {max_: max, min_: min, step_: step} = this;
    let delta = step || (max - min) / 100;
    const valueNeedsToBeFlipped = this.adapter_.isRTL() && (
      keyId === KEY_IDS.ARROW_LEFT || keyId === KEY_IDS.ARROW_RIGHT
    );
    if (valueNeedsToBeFlipped) {
      delta = -delta;
    }

    switch (keyId) {
    case KEY_IDS.ARROW_LEFT:
    case KEY_IDS.ARROW_DOWN:
      return this.value_ - delta;
    case KEY_IDS.ARROW_RIGHT:
    case KEY_IDS.ARROW_UP:
      return this.value_ + delta;
    case KEY_IDS.HOME:
      return this.min_;
    case KEY_IDS.END:
      return this.max_;
    case KEY_IDS.PAGE_UP:
      return this.value_ + delta * numbers$2.PAGE_FACTOR;
    case KEY_IDS.PAGE_DOWN:
      return this.value_ - delta * numbers$2.PAGE_FACTOR;
    default:
      return NaN;
    }
  }

  handleFocus_() {
    if (this.preventFocusState_) {
      return;
    }
    this.adapter_.addClass(cssClasses$6.FOCUS);
  }

  handleBlur_() {
    this.preventFocusState_ = false;
    this.adapter_.removeClass(cssClasses$6.FOCUS);
  }

  setValue_(value, shouldFireInput, force = false) {
    if (value === this.value_ && !force) {
      return;
    }

    const {min_: min, max_: max} = this;
    const valueSetToBoundary = value === min || value === max;
    if (this.step_ && !valueSetToBoundary) {
      value = this.quantize_(value);
    }
    if (value < min) {
      value = min;
    } else if (value > max) {
      value = max;
    }
    this.value_ = value;
    this.adapter_.setAttribute(strings$6.ARIA_VALUENOW, String(this.value_));
    this.updateUIForCurrentValue_();

    if (shouldFireInput) {
      this.adapter_.notifyInput();
      if (this.isDiscrete_) {
        this.adapter_.setMarkerValue(value);
      }
    }
  }

  quantize_(value) {
    const numSteps = Math.round(value / this.step_);
    const quantizedVal = numSteps * this.step_;
    return quantizedVal;
  }

  updateUIForCurrentValue_() {
    const {max_: max, min_: min, value_: value} = this;
    const pctComplete = (value - min) / (max - min);
    let translatePx = pctComplete * this.rect_.width;
    if (this.adapter_.isRTL()) {
      translatePx = this.rect_.width - translatePx;
    }

    const transformProp = getCorrectPropertyName(window, 'transform');
    const transitionendEvtName = getCorrectEventName(window, 'transitionend');

    if (this.inTransit_) {
      const onTransitionEnd = () => {
        this.setInTransit_(false);
        this.adapter_.deregisterThumbContainerInteractionHandler(transitionendEvtName, onTransitionEnd);
      };
      this.adapter_.registerThumbContainerInteractionHandler(transitionendEvtName, onTransitionEnd);
    }

    this.updateUIFrame_ = requestAnimationFrame(() => {
      this.setOff_(pctComplete === 0);
      // NOTE(traviskaufman): It would be nice to use calc() here,
      // but IE cannot handle calcs in transforms correctly.
      // See: https://goo.gl/NC2itk
      // Also note that the -50% offset is used to center the slider thumb.
      this.adapter_.setThumbContainerStyleProperty(transformProp, `translateX(${translatePx}px) translateX(-50%)`);
      this.adapter_.setTrackStyleProperty(transformProp, `scaleX(${pctComplete})`);
    });
  }

  setOff_(off) {
    this.off_ = off;
    this.toggleClass_(cssClasses$6.OFF, this.off_);
  }

  setActive_(active) {
    this.active_ = active;
    this.toggleClass_(cssClasses$6.ACTIVE, this.active_);
  }

  setInTransit_(inTransit) {
    this.inTransit_ = inTransit;
    this.toggleClass_(cssClasses$6.IN_TRANSIT, this.inTransit_);
  }

  toggleClass_(className, shouldBePresent) {
    if (shouldBePresent) {
      this.adapter_.addClass(className);
    } else {
      this.adapter_.removeClass(className);
    }
  }
}

/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

class MDCSlider extends MDCComponent {
  static attachTo(root) {
    return new MDCSlider(root);
  }

  get value() {
    return this.foundation_.getValue();
  }

  set value(value) {
    this.foundation_.setValue(value);
  }

  get min() {
    return this.foundation_.getMin();
  }

  set min(min) {
    this.foundation_.setMin(min);
  }

  get max() {
    return this.foundation_.getMax();
  }

  set max(max) {
    this.foundation_.setMax(max);
  }

  get step() {
    return this.foundation_.getStep();
  }

  set step(step) {
    this.foundation_.setStep(step);
  }

  get disabled() {
    return this.foundation_.isDisabled();
  }

  set disabled(disabled) {
    this.foundation_.setDisabled(disabled);
  }

  initialize() {
    this.thumbContainer_ = this.root_.querySelector(strings$6.THUMB_CONTAINER_SELECTOR);
    this.track_ = this.root_.querySelector(strings$6.TRACK_SELECTOR);
    this.pinValueMarker_ = this.root_.querySelector(strings$6.PIN_VALUE_MARKER_SELECTOR);
    this.trackMarkerContainer_ = this.root_.querySelector(strings$6.TRACK_MARKER_CONTAINER_SELECTOR);
  }

  getDefaultFoundation() {
    return new MDCSliderFoundation({
      hasClass: (className) => this.root_.classList.contains(className),
      addClass: (className) => this.root_.classList.add(className),
      removeClass: (className) => this.root_.classList.remove(className),
      getAttribute: (name) => this.root_.getAttribute(name),
      setAttribute: (name, value) => this.root_.setAttribute(name, value),
      removeAttribute: (name) => this.root_.removeAttribute(name),
      computeBoundingRect: () => this.root_.getBoundingClientRect(),
      getTabIndex: () => this.root_.tabIndex,
      registerInteractionHandler: (type, handler) => {
        this.root_.addEventListener(type, handler);
      },
      deregisterInteractionHandler: (type, handler) => {
        this.root_.removeEventListener(type, handler);
      },
      registerThumbContainerInteractionHandler: (type, handler) => {
        this.thumbContainer_.addEventListener(type, handler);
      },
      deregisterThumbContainerInteractionHandler: (type, handler) => {
        this.thumbContainer_.removeEventListener(type, handler);
      },
      registerBodyInteractionHandler: (type, handler) => {
        document.body.addEventListener(type, handler);
      },
      deregisterBodyInteractionHandler: (type, handler) => {
        document.body.removeEventListener(type, handler);
      },
      registerResizeHandler: (handler) => {
        window.addEventListener('resize', handler);
      },
      deregisterResizeHandler: (handler) => {
        window.removeEventListener('resize', handler);
      },
      notifyInput: () => {
        this.emit(strings$6.INPUT_EVENT, this);
      },
      notifyChange: () => {
        this.emit(strings$6.CHANGE_EVENT, this);
      },
      setThumbContainerStyleProperty: (propertyName, value) => {
        this.thumbContainer_.style.setProperty(propertyName, value);
      },
      setTrackStyleProperty: (propertyName, value) => {
        this.track_.style.setProperty(propertyName, value);
      },
      setMarkerValue: (value) => {
        this.pinValueMarker_.innerText = value;
      },
      appendTrackMarkers: (numMarkers) => {
        const frag = document.createDocumentFragment();
        for (let i = 0; i < numMarkers; i++) {
          const marker = document.createElement('div');
          marker.classList.add('mdc-slider__track-marker');
          frag.appendChild(marker);
        }
        this.trackMarkerContainer_.appendChild(frag);
      },
      removeTrackMarkers: () => {
        while (this.trackMarkerContainer_.firstChild) {
          this.trackMarkerContainer_.removeChild(this.trackMarkerContainer_.firstChild);
        }
      },
      setLastTrackMarkersStyleProperty: (propertyName, value) => {
        // We remove and append new nodes, thus, the last track marker must be dynamically found.
        const lastTrackMarker = this.root_.querySelector(strings$6.LAST_TRACK_MARKER_SELECTOR);
        lastTrackMarker.style.setProperty(propertyName, value);
      },
      isRTL: () => getComputedStyle(this.root_).direction === 'rtl',
    });
  }

  initialSyncWithDOM() {
    const origValueNow = parseFloat(this.root_.getAttribute(strings$6.ARIA_VALUENOW));
    this.min = parseFloat(this.root_.getAttribute(strings$6.ARIA_VALUEMIN)) || this.min;
    this.max = parseFloat(this.root_.getAttribute(strings$6.ARIA_VALUEMAX)) || this.max;
    this.step = parseFloat(this.root_.getAttribute(strings$6.STEP_DATA_ATTR)) || this.step;
    this.value = origValueNow || this.value;
    this.disabled = (
      this.root_.hasAttribute(strings$6.ARIA_DISABLED) &&
      this.root_.getAttribute(strings$6.ARIA_DISABLED) !== 'false'
    );
    this.foundation_.setupTrackMarker();
  }

  layout() {
    this.foundation_.layout();
  }

  stepUp(amount = (this.step || 1)) {
    this.value += amount;
  }

  stepDown(amount = (this.step || 1)) {
    this.value -= amount;
  }
}

var SliderAdapter = function (_SMCAdapter) {
  inherits(SliderAdapter, _SMCAdapter);

  function SliderAdapter(_ref) {
    var sel = _ref.sel,
        elm = _ref.elm,
        data = _ref.data;
    classCallCheck$1(this, SliderAdapter);

    var _this = possibleConstructorReturn(this, (SliderAdapter.__proto__ || Object.getPrototypeOf(SliderAdapter)).call(this, sel, new MDCSlider(elm)));

    _this.slider = _this.component;

    _this.update_ = function (oldVnode, vnode) {
      _this.updateProps_(vnode.data.props);
    };

    _this.updateDisabled_ = function (props) {
      _this.updateBoolean_(props, 'disabled');
    };

    _this.updateMin_ = function (props) {
      _this.updateNumber_(props, 'min');
    };

    _this.updateMax_ = function (props) {
      _this.updateNumber_(props, 'max');
    };

    _this.updateStep_ = function (props) {
      var wanted = props && props.step;
      var active = _this.slider.step;

      if (typeof wanted === 'number' && wanted >= 0 && wanted !== active) {
        _this.slider.step = wanted;
      }
    };

    _this.updateValue_ = function (props) {
      var wanted = props && props.value;
      var active = _this.slider.value;

      if (typeof wanted === 'number' && wanted !== active) {
        _this.slider.value = wanted;
      }
    };

    _this.updateBoolean_ = function (props, prop) {
      var wanted = props && props[prop];
      var active = _this.slider[prop];
      if (typeof wanted === 'boolean' && wanted !== active) {
        _this.slider[prop] = wanted;
      }
    };

    _this.updateNumber_ = function (props, prop) {
      if (props && typeof props[prop] === 'number' && props[prop] !== _this.slider[prop]) {
        _this.slider[prop] = props[prop];
      }
    };

    _this.updateProps_ = function (props) {
      _this.updateDisabled_(props);
      _this.updateMin_(props);
      _this.updateMax_(props);
      _this.updateValue_(props);
      _this.updateStep_(props);
    };

    _this.updateProps_(data.props);
    window.setTimeout(function () {
      _this.slider.layout();
    }, 0);
    return _this;
  }

  return SliderAdapter;
}(SMCAdapter);

/* eslint-disable no-unused-vars */
var Slider = function (_SMCComponent) {
  inherits(Slider, _SMCComponent);

  function Slider() {
    var props_ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var children_ = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    classCallCheck$1(this, Slider);

    var _this = possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, props_, children_, STYLE_SWITCHES$3));

    var _this$props = _this.props,
        labelledBy = _this$props.labelledBy,
        onChange = _this$props.onChange,
        tabIndex = _this$props.tabIndex,
        onInput = _this$props.onInput,
        otherProps = objectWithoutProperties(_this$props, ['labelledBy', 'onChange', 'tabIndex', 'onInput']);

    _this.attrs = _extends({
      role: 'slider'
    }, _this.utils.makeKeyValue('tabindex', tabIndex), _this.utils.makeKeyValue('aria-labelledby', labelledBy));
    _this.hooks = _this.utils.makeHooks(SliderAdapter);
    _this.props = otherProps;
    _this.ons = {};
    if (typeof onChange === 'function') _this.ons['MDCSlider:change'] = onChange;
    if (typeof onInput === 'function') _this.ons['MDCSlider:input'] = onInput;
    return _this;
  }

  createClass(Slider, [{
    key: 'render',
    value: function render() {
      return html$1(
        'div',
        _extends({}, this.selector, {
          classNames: SLIDER_CLASS,
          'class': this.classes,
          hook: this.hooks,
          on: this.ons,
          attrs: this.attrs
        }, this.props),
        html$1(
          'div',
          { classNames: TRACK_CNT_CLASS },
          html$1('div', { classNames: TRACK_CLASS }),
          !!this.props.markers && !!this.props.discrete ? html$1('div', { classNames: TRACK_MARKER_CLASS }) : []
        ),
        html$1(
          'div',
          { classNames: THUMB_CNT_CLASS },
          html$1(
            'div',
            { classNames: PIN_CLASS },
            html$1('span', { classNames: PIN_MARKER_CLASS })
          ),
          html$1(
            'svg',
            { classNames: THUMB_CLASS, width: '21', height: '21' },
            html$1('circle', { cx: '10.5', cy: '10.5', r: '7.875' })
          ),
          html$1('div', { classNames: RING_CLASS })
        )
      );
    }
  }]);
  return Slider;
}(SMCComponent);

var STYLE_SWITCHES$4 = {
  primary: 'mdc-icon-toggle--primary',
  accent: 'mdc-icon-toggle--accent'
};

var ICON_CLASS$1 = 'mdc-icon-toggle';

var MAT_ICON_CLASS$1 = [ICON_CLASS$1, 'material-icons'];

/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Icon Toggle. Provides an interface for managing
 * - classes
 * - dom
 * - inner text
 * - event handlers
 * - event dispatch
 *
 * Additionally, provides type information for the adapter to the Closure
 * compiler.
 *
 * Implement this adapter for your framework of choice to delegate updates to
 * the component in your framework of choice. See architecture documentation
 * for more details.
 * https://github.com/material-components/material-components-web/blob/master/docs/architecture.md
 *
 * @record
 */

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @enum {string} */
const cssClasses$7 = {
  ROOT: 'mdc-icon-toggle',
  DISABLED: 'mdc-icon-toggle--disabled',
};

/** @enum {string} */
const strings$7 = {
  DATA_TOGGLE_ON: 'data-toggle-on',
  DATA_TOGGLE_OFF: 'data-toggle-off',
  ARIA_PRESSED: 'aria-pressed',
  ARIA_DISABLED: 'aria-disabled',
  ARIA_LABEL: 'aria-label',
  CHANGE_EVENT: 'MDCIconToggle:change',
};

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

class MDCIconToggleFoundation extends MDCFoundation {
  static get cssClasses() {
    return cssClasses$7;
  }

  static get strings() {
    return strings$7;
  }

  static get defaultAdapter() {
    return {
      addClass: (/* className: string */) => {},
      removeClass: (/* className: string */) => {},
      registerInteractionHandler: (/* type: string, handler: EventListener */) => {},
      deregisterInteractionHandler: (/* type: string, handler: EventListener */) => {},
      setText: (/* text: string */) => {},
      getTabIndex: () => /* number */ 0,
      setTabIndex: (/* tabIndex: number */) => {},
      getAttr: (/* name: string */) => /* string */ '',
      setAttr: (/* name: string, value: string */) => {},
      rmAttr: (/* name: string */) => {},
      notifyChange: (/* evtData: IconToggleEvent */) => {},
    };
  }

  constructor(adapter) {
    super(Object.assign(MDCIconToggleFoundation.defaultAdapter, adapter));

    /** @private {boolean} */
    this.on_ = false;

    /** @private {boolean} */
    this.disabled_ = false;

    /** @private {number} */
    this.savedTabIndex_ = -1;

    /** @private {?IconToggleState} */
    this.toggleOnData_ = null;

    /** @private {?IconToggleState} */
    this.toggleOffData_ = null;

    this.clickHandler_ = /** @private {!EventListener} */ (
      () => this.toggleFromEvt_());

    /** @private {boolean} */
    this.isHandlingKeydown_ = false;

    this.keydownHandler_ = /** @private {!EventListener} */ ((/** @type {!KeyboardKey} */ evt) => {
      if (isSpace(evt)) {
        this.isHandlingKeydown_ = true;
        return evt.preventDefault();
      }
    });

    this.keyupHandler_ = /** @private {!EventListener} */ ((/** @type {!KeyboardKey} */ evt) => {
      if (isSpace(evt)) {
        this.isHandlingKeydown_ = false;
        this.toggleFromEvt_();
      }
    });
  }

  init() {
    this.refreshToggleData();
    this.adapter_.registerInteractionHandler('click', this.clickHandler_);
    this.adapter_.registerInteractionHandler('keydown', this.keydownHandler_);
    this.adapter_.registerInteractionHandler('keyup', this.keyupHandler_);
  }

  refreshToggleData() {
    const {DATA_TOGGLE_ON, DATA_TOGGLE_OFF} = MDCIconToggleFoundation.strings;
    this.toggleOnData_ = this.parseJsonDataAttr_(DATA_TOGGLE_ON);
    this.toggleOffData_ = this.parseJsonDataAttr_(DATA_TOGGLE_OFF);
  }

  destroy() {
    this.adapter_.deregisterInteractionHandler('click', this.clickHandler_);
    this.adapter_.deregisterInteractionHandler('keydown', this.keydownHandler_);
    this.adapter_.deregisterInteractionHandler('keyup', this.keyupHandler_);
  }

  /** @private */
  toggleFromEvt_() {
    this.toggle();
    const {on_: isOn} = this;
    this.adapter_.notifyChange(/** @type {!IconToggleEvent} */ ({isOn}));
  }

  /** @return {boolean} */
  isOn() {
    return this.on_;
  }

  /** @param {boolean=} isOn */
  toggle(isOn = !this.on_) {
    this.on_ = isOn;

    const {ARIA_LABEL, ARIA_PRESSED} = MDCIconToggleFoundation.strings;

    if (this.on_) {
      this.adapter_.setAttr(ARIA_PRESSED, 'true');
    } else {
      this.adapter_.setAttr(ARIA_PRESSED, 'false');
    }

    const {cssClass: classToRemove} =
        this.on_ ? this.toggleOffData_ : this.toggleOnData_;

    if (classToRemove) {
      this.adapter_.removeClass(classToRemove);
    }

    const {content, label, cssClass} = this.on_ ? this.toggleOnData_ : this.toggleOffData_;

    if (cssClass) {
      this.adapter_.addClass(cssClass);
    }
    if (content) {
      this.adapter_.setText(content);
    }
    if (label) {
      this.adapter_.setAttr(ARIA_LABEL, label);
    }
  }

  /**
   * @param {string} dataAttr
   * @return {!IconToggleState}
   */
  parseJsonDataAttr_(dataAttr) {
    const val = this.adapter_.getAttr(dataAttr);
    if (!val) {
      return {};
    }
    return /** @type {!IconToggleState} */ (JSON.parse(val));
  }

  /** @return {boolean} */
  isDisabled() {
    return this.disabled_;
  }

  /** @param {boolean} isDisabled */
  setDisabled(isDisabled) {
    this.disabled_ = isDisabled;

    const {DISABLED} = MDCIconToggleFoundation.cssClasses;
    const {ARIA_DISABLED} = MDCIconToggleFoundation.strings;

    if (this.disabled_) {
      this.savedTabIndex_ = this.adapter_.getTabIndex();
      this.adapter_.setTabIndex(-1);
      this.adapter_.setAttr(ARIA_DISABLED, 'true');
      this.adapter_.addClass(DISABLED);
    } else {
      this.adapter_.setTabIndex(this.savedTabIndex_);
      this.adapter_.rmAttr(ARIA_DISABLED);
      this.adapter_.removeClass(DISABLED);
    }
  }

  /** @return {boolean} */
  isKeyboardActivated() {
    return this.isHandlingKeydown_;
  }
}

/**
 * @typedef {!{
 *   key: string,
 *   keyCode: number
 * }}
 */


/**
 * @param {!KeyboardKey} keyboardKey
 * @return {boolean}
 */
function isSpace(keyboardKey) {
  return keyboardKey.key === 'Space' || keyboardKey.keyCode === 32;
}


/** @record */

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

class MDCIconToggle extends MDCComponent {
  static attachTo(root) {
    return new MDCIconToggle(root);
  }

  constructor(...args) {
    super(...args);

    /** @private {!MDCRipple} */
    this.ripple_ = this.initRipple_();
  }

  /** @return {!Element} */
  get iconEl_() {
    const {'iconInnerSelector': sel} = this.root_.dataset;
    return sel ?
      /** @type {!Element} */ (this.root_.querySelector(sel)) : this.root_;
  }

  /**
   * @return {!MDCRipple}
   * @private
   */
  initRipple_() {
    const adapter = Object.assign(MDCRipple.createAdapter(this), {
      isUnbounded: () => true,
      isSurfaceActive: () => this.foundation_.isKeyboardActivated(),
      computeBoundingRect: () => {
        const dim = 48;
        const {left, top} = this.root_.getBoundingClientRect();
        return {
          left,
          top,
          width: dim,
          height: dim,
          right: left + dim,
          bottom: left + dim,
        };
      },
    });
    const foundation = new MDCRippleFoundation(adapter);
    return new MDCRipple(this.root_, foundation);
  }

  destroy() {
    this.ripple_.destroy();
    super.destroy();
  }

  /** @return {!MDCIconToggleFoundation} */
  getDefaultFoundation() {
    return new MDCIconToggleFoundation({
      addClass: (className) => this.iconEl_.classList.add(className),
      removeClass: (className) => this.iconEl_.classList.remove(className),
      registerInteractionHandler: (type, handler) => this.root_.addEventListener(type, handler),
      deregisterInteractionHandler: (type, handler) => this.root_.removeEventListener(type, handler),
      setText: (text) => this.iconEl_.textContent = text,
      getTabIndex: () => /* number */ this.root_.tabIndex,
      setTabIndex: (tabIndex) => this.root_.tabIndex = tabIndex,
      getAttr: (name, value) => this.root_.getAttribute(name, value),
      setAttr: (name, value) => this.root_.setAttribute(name, value),
      rmAttr: (name) => this.root_.removeAttribute(name),
      notifyChange: (evtData) => this.emit(MDCIconToggleFoundation.strings.CHANGE_EVENT, evtData),
    });
  }

  initialSyncWithDOM() {
    this.on = this.root_.getAttribute(MDCIconToggleFoundation.strings.ARIA_PRESSED) === 'true';
    this.disabled = this.root_.getAttribute(MDCIconToggleFoundation.strings.ARIA_DISABLED) === 'true';
  }

  /** @return {boolean} */
  get on() {
    return this.foundation_.isOn();
  }

  /** @param {boolean} isOn */
  set on(isOn) {
    this.foundation_.toggle(isOn);
  }

  /** @return {boolean} */
  get disabled() {
    return this.foundation_.isDisabled();
  }

  /** @param {boolean} isDisabled */
  set disabled(isDisabled) {
    this.foundation_.setDisabled(isDisabled);
  }

  refreshToggleData() {
    this.foundation_.refreshToggleData();
  }
}

var IconToggleAdapter = function (_SMCAdapter) {
  inherits(IconToggleAdapter, _SMCAdapter);

  function IconToggleAdapter(_ref) {
    var sel = _ref.sel,
        elm = _ref.elm,
        data = _ref.data;
    classCallCheck$1(this, IconToggleAdapter);

    var _this = possibleConstructorReturn(this, (IconToggleAdapter.__proto__ || Object.getPrototypeOf(IconToggleAdapter)).call(this, sel, new MDCIconToggle(elm)));

    _this.iconToggle = _this.component;

    _this.update_ = function (oldVnode, vnode) {
      _this.updateProps_(vnode.data.props);
    };

    _this.updateDisabled_ = function (props) {
      _this.updateBoolean_(props, 'disabled');
    };

    _this.updateOn_ = function (props) {
      _this.updateBoolean_(props, 'toggled');
    };

    _this.updateBoolean_ = function (props, prop) {
      var wanted = props && props[prop];
      var mapped = _this.mapped_(prop);
      var active = _this.iconToggle[mapped];
      if (typeof wanted === 'boolean' && wanted !== active) {
        _this.iconToggle[mapped] = wanted;
      }
    };

    _this.updateProps_ = function (props) {
      _this.updateDisabled_(props);
      _this.updateOn_(props);
      // this.iconToggle.refreshToggleData()
    };

    _this.updateProps_(data.props);
    return _this;
  }

  createClass(IconToggleAdapter, [{
    key: 'mapped_',
    value: function mapped_(prop) {
      return PROPS_MAPPINGS[prop] || prop;
    }
  }]);
  return IconToggleAdapter;
}(SMCAdapter);

var PROPS_MAPPINGS = { toggled: 'on' };

/* eslint-disable no-unused-vars */
var IconToggle = function (_SMCComponent) {
  inherits(IconToggle, _SMCComponent);

  function IconToggle() {
    var props_ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var children_ = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    classCallCheck$1(this, IconToggle);

    var _this = possibleConstructorReturn(this, (IconToggle.__proto__ || Object.getPrototypeOf(IconToggle)).call(this, props_, children_, STYLE_SWITCHES$4));

    var _this$props = _this.props,
        onChange = _this$props.onChange,
        tabIndex = _this$props.tabIndex,
        label = _this$props.label,
        toggleOn = _this$props.toggleOn,
        toggleOff = _this$props.toggleOff,
        otherProps = objectWithoutProperties(_this$props, ['onChange', 'tabIndex', 'label', 'toggleOn', 'toggleOff']);

    _this.hooks = _this.utils.makeHooks(IconToggleAdapter);
    _this.ons = {};
    if (typeof onChange === 'function') {
      _this.ons['MDCIconToggle:change'] = onChange;
    }
    _this.attrs = _extends({
      role: 'button'
    }, _this.utils.makeKeyValue('tabindex', tabIndex), _this.utils.makeKeyValue('aria-label', label));
    _this.dataset = _extends({}, _this.utils.makeKeyValue('toggleOn', _this.parseToggle_(toggleOn)), _this.utils.makeKeyValue('toggleOff', _this.parseToggle_(toggleOff)));
    _this.props = otherProps;
    return _this;
  }

  createClass(IconToggle, [{
    key: 'parseToggle_',
    value: function parseToggle_(toggle) {
      return (typeof toggle === 'undefined' ? 'undefined' : _typeof$1(toggle)) === 'object' ? JSON.stringify(toggle) : JSON.stringify({});
    }
  }]);
  return IconToggle;
}(SMCComponent);

var FontAwesome$2 = function (_IconToggle) {
  inherits(FontAwesome, _IconToggle);

  function FontAwesome() {
    var props_ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var children_ = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    classCallCheck$1(this, FontAwesome);

    var _this2 = possibleConstructorReturn(this, (FontAwesome.__proto__ || Object.getPrototypeOf(FontAwesome)).call(this, props_, children_));

    _this2.dataset = _extends({}, _this2.dataset, _this2.utils.makeKeyValue('iconInnerSelector', '.' + FA_CLASS));
    return _this2;
  }

  createClass(FontAwesome, [{
    key: 'render',
    value: function render() {
      return html$1(
        'span',
        _extends({}, this.selector, {
          classNames: ICON_CLASS$1,
          'class': this.classes,
          hook: this.hooks,
          on: this.ons,
          attrs: this.attrs,
          dataset: this.dataset
        }, this.props),
        html$1(
          FontAwesome$1,
          null,
          this.children
        )
      );
    }
  }]);
  return FontAwesome;
}(IconToggle);

var Material$1 = function (_IconToggle2) {
  inherits(Material, _IconToggle2);

  function Material() {
    classCallCheck$1(this, Material);
    return possibleConstructorReturn(this, (Material.__proto__ || Object.getPrototypeOf(Material)).apply(this, arguments));
  }

  createClass(Material, [{
    key: 'render',
    value: function render() {
      return html$1(
        'i',
        _extends({}, this.selector, {
          classNames: MAT_ICON_CLASS$1,
          'class': this.classes,
          hook: this.hooks,
          on: this.ons,
          attrs: this.attrs,
          dataset: this.dataset
        }, this.props),
        this.children
      );
    }
  }]);
  return Material;
}(IconToggle);

IconToggle.Material = Material$1;
IconToggle.FontAwesome = FontAwesome$2;

exports.Checkbox = Checkbox;
exports.Button = Button;
exports.Fab = Fab;
exports.FormField = FormField;
exports.Card = Card;
exports.LinearProgress = LinearProgress;
exports.Radio = Radio;
exports.Dialog = Dialog;
exports.Switch = Switch;
exports.Slider = Slider;
exports.IconToggle = IconToggle;
exports.delayInit = delayInit;
exports.uuid = uuid;
exports.makeHooks = makeHooks;
exports.makeSelector = makeSelector;
exports.makeKeyValue = makeKeyValue;
exports.PropsNormalizer = PropsNormalizer;
exports.SMCAdapter = SMCAdapter;
exports.SMCComponent = SMCComponent;
