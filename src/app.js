import React from 'react';
import { View, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { createAppContainer } from 'react-navigation';

import RootSwitchNavigator from './navigators/root-switch.navigator';

import { theme } from './shared/theme';

EStyleSheet.build(theme);

const App = createAppContainer(RootSwitchNavigator);

export default () => <App />;
