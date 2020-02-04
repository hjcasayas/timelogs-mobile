import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { LoginScreen } from '../screens/login';

const routeConfigs = {
  Login: {
    screen: LoginScreen,
  },
};

const stackNavigatorConfigs = {
  initialRouteName: 'Login',
  headerMode: 'none',
};

const AuthStackNavigator = createStackNavigator(
  routeConfigs,
  stackNavigatorConfigs,
);

export default AuthStackNavigator;
