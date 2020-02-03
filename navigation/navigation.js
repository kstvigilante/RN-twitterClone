import React from 'react';
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
  SearchTwitter,
  Notifcations,
  Messages,
} from '../screens';
import DrawerNavigation from './drawer-navigation';
import colors from '../theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Icon3 from 'react-native-vector-icons/Octicons';

const HomeScreenTabNav = createBottomTabNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon3 name="home" color={tintColor} size={24} />
        ),
      },
    },
    SearchTwitter: {
      screen: SearchTwitter,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon2 name="search" color={tintColor} size={24} />
        ),
      },
    },
    Notifcations: {
      screen: Notifcations,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="notifications" color={tintColor} size={24} />
        ),
      },
    },
    Messages: {
      screen: Messages,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="email" color={tintColor} size={24} />
        ),
      },
    },
  },
  {
    initialRouteName: 'HomeScreen',
    tabBarOptions: {
      showLabel: false,
      activeTintColor: colors.blue,
      inactiveTintColor: colors.grey,
      style: {
        backgroundColor: colors.white,
        borderTopWidth: 0,
        shadowOffset: {width: 5, height: 3},
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 5,
      },
    },
  },
);

const TwitterSocial = createDrawerNavigator(
  {
    HomeScreenTabNav: {
      screen: HomeScreenTabNav,
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
    initialRouteName: 'HomeScreenTabNav',
    contentComponent: DrawerNavigation,
    drawerWidth: '90%',
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
