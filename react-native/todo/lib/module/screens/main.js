import React, { useState } from 'react';
import { Text, Box, Center, Button, VStack, useColorModeValue } from 'native-base';
import ThemeToggle from '../components/theme-toggle';
import AnimatedCheckbox from 'react-native-checkbox-reanimated';
export default function MainScreen() {
  const [checked, setChecked] = useState(false);

  const handleCheckboxPress = () => {
    setChecked(prev => {
      return !prev;
    });
  };

  return /*#__PURE__*/React.createElement(Center, {
    _dark: {
      bg: 'blueGray.900'
    },
    _light: {
      bg: 'blueGray.50'
    },
    px: 4,
    flex: 1
  }, /*#__PURE__*/React.createElement(VStack, {
    space: 5,
    alignItems: "center"
  }, /*#__PURE__*/React.createElement(Button, {
    onPress: handleCheckboxPress
  }, /*#__PURE__*/React.createElement(Box, {
    w: "100px",
    h: "100px"
  }, /*#__PURE__*/React.createElement(AnimatedCheckbox, {
    checked: checked,
    highlightColor: "#4444ff",
    checkmarkColor: "#ffffff",
    boxOutlineColor: "#4444ff"
  }))), /*#__PURE__*/React.createElement(Box, {
    p: 10,
    bg: useColorModeValue('red.500', 'yellow.500')
  }, /*#__PURE__*/React.createElement(Text, null, "Hello")), /*#__PURE__*/React.createElement(ThemeToggle, null)));
}
//# sourceMappingURL=main.js.map