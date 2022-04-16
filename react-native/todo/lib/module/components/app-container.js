import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import theme from '../theme';
export default function AppContainer(props) {
  return /*#__PURE__*/React.createElement(NavigationContainer, null, /*#__PURE__*/React.createElement(NativeBaseProvider, {
    theme: theme
  }, props.children));
}
//# sourceMappingURL=app-container.js.map