'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
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

  return _extends.apply(this, arguments);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

// Equality comparison for objects
function isEqual(left, right) {
  var OBJECT_STRING = '[object Object]';

  if (_typeof(left) !== 'object' || _typeof(right) !== 'object') {
    return left === right;
  }

  if (left === null || right === null) return left === right;
  var leftArray = Array.isArray(left);
  var rightArray = Array.isArray(right);
  if (leftArray !== rightArray) return false;
  var leftPlainObject = Object.prototype.toString.call(left) === OBJECT_STRING;
  var rightPlainObject = Object.prototype.toString.call(right) === OBJECT_STRING;
  if (leftPlainObject !== rightPlainObject) return false;
  if (!leftPlainObject && !leftArray) return false;
  var leftKeys = Object.keys(left);
  var rightKeys = Object.keys(right);
  if (leftKeys.length !== rightKeys.length) return false;
  var keySet = {};

  for (var i = 0; i < leftKeys.length; i += 1) {
    keySet[leftKeys[i]] = true;
  }

  for (var _i = 0; _i < rightKeys.length; _i += 1) {
    keySet[rightKeys[_i]] = true;
  }

  var allKeys = Object.keys(keySet);

  if (allKeys.length !== leftKeys.length) {
    return false;
  }

  var l = left;
  var r = right;

  var pred = function pred(key) {
    return isEqual(l[key], r[key]);
  };

  return allKeys.every(pred);
}

var Element =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Element, _React$Component);

  function Element(props) {
    var _this;

    _classCallCheck(this, Element);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Element).call(this, props));
    _this.field = null;
    _this.id = "card-".concat(props.id);
    _this.ElementRef = React.createRef();
    return _this;
  }

  _createClass(Element, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          cbComponent = _this$props.cbComponent,
          id = _this$props.id,
          listeners = _this$props.listeners;
      var options = this.getPropOptions(this.props);
      this.field = cbComponent.createField(id, options).at("#".concat(this.id)); // Attaching listeners if any

      if (listeners) {
        if (listeners.onBlur) this.field.on('blur', listeners.onBlur);
        if (listeners.onFocus) this.field.on('focus', listeners.onFocus);
        if (listeners.onReady) this.field.on('ready', listeners.onReady);
        if (listeners.onChange) this.field.on('change', listeners.onChange);
      }
    }
  }, {
    key: "getPropOptions",
    value: function getPropOptions(props) {
      var icon = props.icon,
          style = props.styles,
          placeholder = props.placeholder;
      return {
        icon: icon,
        style: style,
        placeholder: placeholder
      };
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var prevOptions = this.getPropOptions(prevProps);
      var currentOptions = this.getPropOptions(this.props);

      if (!isEqual(prevOptions, currentOptions) && this.field) {
        this.field.update(currentOptions);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.field.destroy();
    }
  }, {
    key: "focus",
    value: function focus() {
      this.field.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.field.blur();
    }
  }, {
    key: "clear",
    value: function clear() {
      this.field.clear();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          id = _this$props2.id,
          className = _this$props2.className;
      return React.createElement("div", {
        id: "card-".concat(id),
        ref: this.ElementRef,
        className: className
      }, this.props.children);
    }
  }]);

  return Element;
}(React.Component);

var ComponentDefaultContext = {
  cbComponent: null
};
var ComponentContext = React.createContext(ComponentDefaultContext);

var ChargebeeComponents =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ChargebeeComponents, _React$Component);

  function ChargebeeComponents(props) {
    var _this;

    _classCallCheck(this, ChargebeeComponents);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ChargebeeComponents).call(this, props));
    _this.id = "".concat(props.type, "-field");
    _this.state = {
      moduleLoaded: false,
      cbComponent: null,
      cbInstance: null
    };
    return _this;
  }

  _createClass(ChargebeeComponents, [{
    key: "getPropOptions",
    value: function getPropOptions(props) {
      var fonts = props.fonts,
          classes = props.classes,
          icon = props.icon,
          style = props.styles,
          locale = props.locale,
          placeholder = props.placeholder;
      return {
        fonts: fonts,
        classes: classes,
        locale: locale,
        style: style,
        placeholder: placeholder,
        icon: icon
      };
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      var _this$props = this.props,
          type = _this$props.type,
          onBlur = _this$props.onBlur,
          onChange = _this$props.onChange,
          onFocus = _this$props.onFocus,
          onReady = _this$props.onReady;
      var options = this.getPropOptions(this.props);
      var cbInstance = Chargebee.getInstance();
      cbInstance.load("components").then(function () {
        var cbComponent = cbInstance.createComponent(type, options); // Attach listeners if specified (only applicable for combined field)

        cbComponent.on('ready', onReady);
        cbComponent.on('blur', onBlur);
        cbComponent.on('focus', onFocus);
        cbComponent.on('change', onChange);

        _this2.setState({
          cbComponent: cbComponent,
          cbInstance: cbInstance,
          moduleLoaded: true
        });
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var cbComponent = this.state.cbComponent;

      if (cbComponent && this.state.moduleLoaded && cbComponent.status == 0) {
        cbComponent.mount("#".concat(this.id));
      }

      var prevOptions = this.getPropOptions(prevProps);
      var currentOptions = this.getPropOptions(this.props);

      if (!isEqual(prevOptions, currentOptions) && cbComponent) {
        cbComponent.update(currentOptions);
      }
    }
  }, {
    key: "tokenize",
    value: function tokenize() {
      var _this$state = this.state,
          cbComponent = _this$state.cbComponent,
          cbInstance = _this$state.cbInstance;
      return cbInstance.tokenize(cbComponent);
    }
  }, {
    key: "focus",
    value: function focus() {
      var cbComponent = this.state.cbComponent;
      cbComponent.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      var cbComponent = this.state.cbComponent;
      cbComponent.blur();
    }
  }, {
    key: "clear",
    value: function clear() {
      var cbComponent = this.state.cbComponent;
      cbComponent.clear();
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(ComponentContext.Provider, {
        value: this.state
      }, React.createElement("div", {
        id: this.id,
        className: this.props.className || ''
      }, this.state.moduleLoaded && this.props.children || []));
    }
  }]);

  return ChargebeeComponents;
}(React.Component);

var CardNumber = React.forwardRef(function (props, ref) {
  var onBlur = props.onBlur,
      onChange = props.onChange,
      onFocus = props.onFocus,
      onReady = props.onReady,
      rest = _objectWithoutProperties(props, ["onBlur", "onChange", "onFocus", "onReady"]);

  var listeners = {
    onBlur: onBlur,
    onChange: onChange,
    onFocus: onFocus,
    onReady: onReady
  };
  return React.createElement(ComponentContext.Consumer, null, function (ctx) {
    return React.createElement(Element, _extends({
      id: "number",
      cbComponent: ctx.cbComponent,
      ref: ref,
      listeners: listeners
    }, rest));
  });
});

var CardExpiry = React.forwardRef(function (props, ref) {
  var onBlur = props.onBlur,
      onChange = props.onChange,
      onFocus = props.onFocus,
      onReady = props.onReady,
      rest = _objectWithoutProperties(props, ["onBlur", "onChange", "onFocus", "onReady"]);

  var listeners = {
    onBlur: onBlur,
    onChange: onChange,
    onFocus: onFocus,
    onReady: onReady
  };
  return React.createElement(ComponentContext.Consumer, null, function (ctx) {
    return React.createElement(Element, _extends({
      id: "expiry",
      cbComponent: ctx.cbComponent,
      ref: ref,
      listeners: listeners
    }, rest));
  });
});

var CardCVV = React.forwardRef(function (props, ref) {
  var onBlur = props.onBlur,
      onChange = props.onChange,
      onFocus = props.onFocus,
      onReady = props.onReady,
      rest = _objectWithoutProperties(props, ["onBlur", "onChange", "onFocus", "onReady"]);

  var listeners = {
    onBlur: onBlur,
    onChange: onChange,
    onFocus: onFocus,
    onReady: onReady
  };
  return React.createElement(ComponentContext.Consumer, null, function (ctx) {
    return React.createElement(Element, _extends({
      id: "cvv",
      cbComponent: ctx.cbComponent,
      ref: ref,
      listeners: listeners
    }, rest));
  });
});

var CardComponent = React.forwardRef(function (props, ref) {
  return React.createElement(ChargebeeComponents, _extends({
    type: "card"
  }, props, {
    ref: ref
  }));
});

exports.CardCVV = CardCVV;
exports.CardComponent = CardComponent;
exports.CardExpiry = CardExpiry;
exports.CardNumber = CardNumber;