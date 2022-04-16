import React from 'react';
import { Text, HStack, Switch, useColorMode } from 'native-base';
export default function ThemeToggle() {
  const {
    colorMode,
    toggleColorMode
  } = useColorMode();
  return /*#__PURE__*/React.createElement(HStack, {
    space: 2,
    alignItems: "center"
  }, /*#__PURE__*/React.createElement(Text, null, "Dark"), /*#__PURE__*/React.createElement(Switch, {
    offTrackColor: "white.100",
    onTrackColor: "white.700",
    offThumbColor: "grey.700",
    onThumbColor: "white.200",
    isChecked: colorMode === 'light',
    onToggle: toggleColorMode
  }), /*#__PURE__*/React.createElement(Text, null, "Light"));
}
//# sourceMappingURL=theme-toggle.js.map