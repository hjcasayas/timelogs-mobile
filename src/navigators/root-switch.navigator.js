import { createSwitchNavigator } from 'react-navigation';
import AuthStackNavigator from './auth-stack.navigator';
const routeConfigs = {
  Auth: {
    screen: AuthStackNavigator,
  },
};

const switchNavigatorConfig = {
  initialRouteName: 'Auth',
};

const RootSwitchNavigator = createSwitchNavigator(
  routeConfigs,
  switchNavigatorConfig,
);

export default RootSwitchNavigator;
