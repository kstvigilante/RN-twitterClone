import React from 'react';
import {
  DrawerContainer,
  ProfileSection,
  NavSection,
  Settings,
  ProfilePhoto,
  FullName,
  UserName,
  StatContainer,
  StatLabel,
  StatValue,
  SecondStat,
  NavItem,
  NavItemText,
  NavItemIcon,
  SettingsOptions,
  BottomContainer,
  BottomContIcon,
  BottomContRightIcon,
} from './style';

import {TouchableWithoutFeedback} from 'react-native';

function DrawerNavigation(props) {
  const goToScreen = screen => {
    props.navigation.navigate(screen);
  };

  return (
    <DrawerContainer>
      <ProfileSection>
        <ProfilePhoto source={require('../../assets/default-profile.jpg')} />
        <FullName>Kunwar siddharth</FullName>
        <UserName>@sid9654</UserName>
        <StatContainer>
          <StatLabel>7</StatLabel>
          <StatValue>Following</StatValue>
          <SecondStat>
            <StatLabel>0</StatLabel>
            <StatValue>Followers</StatValue>
          </SecondStat>
        </StatContainer>
      </ProfileSection>
      <NavSection>
        <TouchableWithoutFeedback onPress={() => goToScreen('ProfileScreen')}>
          <NavItem>
            <NavItemIcon name="user" size={24} />
            <NavItemText>Profile</NavItemText>
          </NavItem>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => goToScreen('ListsScreen')}>
          <NavItem>
            <NavItemIcon name="list" size={24} />
            <NavItemText>Lists</NavItemText>
          </NavItem>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => goToScreen('TopicsScreen')}>
          <NavItem>
            <NavItemIcon name="message" size={24} />
            <NavItemText>Topics</NavItemText>
          </NavItem>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => goToScreen('BookmarksScreen')}>
          <NavItem>
            <NavItemIcon name="bookmark" size={24} />
            <NavItemText>Bookmarks</NavItemText>
          </NavItem>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => goToScreen('MomentsScreen')}>
          <NavItem>
            <NavItemIcon name="flash" size={24} />
            <NavItemText>Moments</NavItemText>
          </NavItem>
        </TouchableWithoutFeedback>
      </NavSection>
      <Settings>
        <SettingsOptions>Settings and privacy</SettingsOptions>
        <SettingsOptions>Help Centre</SettingsOptions>
      </Settings>
      <BottomContainer>
        <BottomContIcon name="lightbulb-on-outline" size={24} />
        <BottomContRightIcon name="qrcode" size={24} />
      </BottomContainer>
    </DrawerContainer>
  );
}

export default DrawerNavigation;
