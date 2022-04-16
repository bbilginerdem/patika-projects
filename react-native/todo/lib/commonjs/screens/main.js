"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MainScreen;

var _react = _interopRequireWildcard(require("react"));

var _nativeBase = require("native-base");

var _themeToggle = _interopRequireDefault(require("../components/theme-toggle"));

var _reactNativeCheckboxReanimated = _interopRequireDefault(require("react-native-checkbox-reanimated"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function MainScreen() {
  const [checked, setChecked] = (0, _react.useState)(false);

  const handleCheckboxPress = () => {
    setChecked(prev => {
      return !prev;
    });
  };

  return /*#__PURE__*/_react.default.createElement(_nativeBase.Center, {
    _dark: {
      bg: 'blueGray.900'
    },
    _light: {
      bg: 'blueGray.50'
    },
    px: 4,
    flex: 1
  }, /*#__PURE__*/_react.default.createElement(_nativeBase.VStack, {
    space: 5,
    alignItems: "center"
  }, /*#__PURE__*/_react.default.createElement(_nativeBase.Button, {
    onPress: handleCheckboxPress
  }, /*#__PURE__*/_react.default.createElement(_nativeBase.Box, {
    w: "100px",
    h: "100px"
  }, /*#__PURE__*/_react.default.createElement(_reactNativeCheckboxReanimated.default, {
    checked: checked,
    highlightColor: "#4444ff",
    checkmarkColor: "#ffffff",
    boxOutlineColor: "#4444ff"
  }))), /*#__PURE__*/_react.default.createElement(_nativeBase.Box, {
    p: 10,
    bg: (0, _nativeBase.useColorModeValue)('red.500', 'yellow.500')
  }, /*#__PURE__*/_react.default.createElement(_nativeBase.Text, null, "Hello")), /*#__PURE__*/_react.default.createElement(_themeToggle.default, null)));
}
//# sourceMappingURL=main.js.map