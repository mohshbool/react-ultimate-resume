"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.theme = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _App = _interopRequireDefault(require("./App"));

var _theme = require("@welovedevs/ui/styles/theme");

var _styles = require("@material-ui/core/styles");

var _jss = require("jss");

var _reactJss = require("react-jss");

var _jssPresetDefault = _interopRequireDefault(require("jss-preset-default"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var muiInstance = (0, _jss.create)((0, _jssPresetDefault.default)());
muiInstance.setup({
  insertionPoint: 'mui-insertion-point'
});
var jssinstance = (0, _jss.create)((0, _jssPresetDefault.default)());
jssinstance.setup({
  insertionPoint: 'jss-insertion-point'
});
var theme = (0, _styles.createMuiTheme)(_objectSpread(_objectSpread({}, _theme.DEFAULT_THEME), {}, {
  spacing: 8,
  palette: Object.entries(_theme.DEFAULT_THEME.palette).reduce(function (acc, _ref) {
    var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
        name = _ref2[0],
        values = _ref2[1];

    var accCopy = acc;
    accCopy[name].main = values[500];
    return accCopy;
  }, _theme.DEFAULT_THEME.palette)
}));
exports.theme = theme;

_reactDom.default.render( /*#__PURE__*/_react.default.createElement(_styles.StylesProvider, {
  jss: muiInstance
}, /*#__PURE__*/_react.default.createElement(_reactJss.JssProvider, {
  jss: jssinstance
}, /*#__PURE__*/_react.default.createElement(_styles.ThemeProvider, {
  theme: theme
}, /*#__PURE__*/_react.default.createElement(_App.default, null)))), document.getElementById('root'));