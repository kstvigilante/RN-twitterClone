import {createAppContainer} from 'react-navigation';
import {createStackNavigator, TransitionPresets} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {
  StartupScreen,
  CreateAccount,
  Login,
  HomeScreen,
  ProfileScreen,
  FollowersScreen,
  FollowingScreen,
  ListsScreen,
  TopicsScreen,
  BookmarksScreen,
  MomentsScreen,
} from '../screens';

const TwitterSocial = createDrawerNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
    },
    ProfileScreen: {
      screen: ProfileScreen,
    },
    FollowingScreen: {
      screen: FollowingScreen,
    },
    FollowersScreen: {
      screen: FollowersScreen,
    },
    ListsScreen: {
      screen: ListsScreen,
    },
    TopicsScreen: {
      screen: TopicsScreen,
    },
    BookmarksScreen: {
      screen: BookmarksScreen,
    },
    MomentsScreen: {
      screen: MomentsScreen,
    },
  },
  {
    initialRouteName: 'HomeScreen',
  },
);

const MainNavigator = createStackNavigator(
  {
    StartupScreen: {
      screen: StartupScreen,
    },
    CreateAccountScreen: {
      screen: CreateAccount,
    },
    LoginScreen: {
      screen: Login,
    },
    TwitterSocial: {
      screen: TwitterSocial,
    },
  },
  {
    initialRouteName: 'StartupScreen',
    headerMode: 'none',
    defaultNavigationOptions: {
      ...TransitionPresets.SlideFromRightIOS,
    },
  },
);

const Navigation = createAppContainer(MainNavigator);

export default Navigation;
