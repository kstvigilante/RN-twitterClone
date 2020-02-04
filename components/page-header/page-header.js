import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import {Header, HeaderContent, Menu, MenuLine} from './style';

export default function PageHeader(props) {
  return (
    <Header>
      <TouchableWithoutFeedback onPress={() => props.navigation.openDrawer()}>
        <Menu>
          <MenuLine />
          <MenuLine />
          <MenuLine />
        </Menu>
      </TouchableWithoutFeedback>

      <HeaderContent>{props.children}</HeaderContent>
    </Header>
  );
}
