import {createAppContainer} from 'react-navigation';
import {createStackNavigator, TransitionPresets} from 'react-navigation-stack';
import {StartupScreen, CreateAccount, Login} from '../screens';

const MainNavigator = createStackNavigator(
  {
    StartupScreen: {
      screen: StartupScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    CreateAccountScreen: {
      screen: CreateAccount,
      navigationOptions: {
        headerShown: false,
      },
    },
    LoginScreen: {
      screen: Login,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    headerMode: 'none',
    defaultNavigationOptions: {
      ...TransitionPresets.SlideFromRightIOS,
    },
  },
);

const Navigation = createAppContainer(MainNavigator);

export default Navigation;
