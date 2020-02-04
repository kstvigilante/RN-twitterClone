import React from 'react';
import {Text, View} from 'react-native';
import {Container, HeaderTitle} from './style';
import {PageHeader} from '../../components';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import colors from '../../theme';

const AllNotifications = () => {
  return (
    <View>
      <Text>this will be all Notifcations</Text>
    </View>
  );
};

const MentionsNotifications = () => {
  return (
    <View>
      <Text>this will be mentions </Text>
    </View>
  );
};

const Tabs = createMaterialTopTabNavigator(
  {
    All: AllNotifications,
    Mentions: MentionsNotifications,
  },
  {
    initialRouteName: 'All',
    tabBarOptions: {
      activeTintColor: colors.blue,
      inactiveTintColor: colors.grey,
      style: {
        backgroundColor: 'white',
      },
      labelStyle: {
        fontWeight: '600',
        fontSize: 16,
        textTransform: 'capitalize',
      },
      indicatorStyle: {
        backgroundColor: colors.blue,
      },
    },
  },
);

const TabsCont = createAppContainer(Tabs);

export default function Notifcations(props) {
  return (
    <Container>
      <PageHeader {...props}>
        <HeaderTitle>Notifcations</HeaderTitle>
      </PageHeader>
      <TabsCont />
    </Container>
  );
}
