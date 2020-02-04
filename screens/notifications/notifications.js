import React from 'react';
import {Text, View} from 'react-native';
import {Container, HeaderTitle} from './style';
import {PageHeader} from '../../components';

export default function Notifcations(props) {
  return (
    <Container>
      <PageHeader {...props}>
        <HeaderTitle>Notifcations</HeaderTitle>
      </PageHeader>
    </Container>
  );
}
