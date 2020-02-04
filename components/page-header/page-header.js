import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import {Header, HeaderContent, Menu, MenuLine} from './style';

export default function PageHeader(props) {
  return (
    <Header shouldBorder={props.shouldBorder}>
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
