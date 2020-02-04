import React from 'react';
import {Text, View} from 'react-native';
import {Container, HeaderTitle} from './style';
import {PageHeader} from '../../components';

export default function Messages(props) {
  return (
    <Container>
      <PageHeader {...props}>
        <HeaderTitle>Messages</HeaderTitle>
      </PageHeader>
    </Container>
  );
}
