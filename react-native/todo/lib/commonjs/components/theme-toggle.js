"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ThemeToggle;

var _react = _interopRequireDefault(require("react"));

var _nativeBase = require("native-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ThemeToggle() {
  const {
    colorMode,
    toggleColorMode
  } = (0, _nativeBase.useColorMode)();
  return /*#__PURE__*/_react.default.createElement(_nativeBase.HStack, {
    space: 2,
    alignItems: "center"
  }, /*#__PURE__*/_react.default.createElement(_nativeBase.Text, null, "Dark"), /*#__PURE__*/_react.default.createElement(_nativeBase.Switch, {
    offTrackColor: "white.100",
    onTrackColor: "white.700",
    offThumbColor: "grey.700",
    onThumbColor: "white.200",
    isChecked: colorMode === 'light',
    onToggle: toggleColorMode
  }), /*#__PURE__*/_react.default.createElement(_nativeBase.Text, null, "Light"));
}
//# sourceMappingURL=theme-toggle.js.map