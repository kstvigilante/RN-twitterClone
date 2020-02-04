import React from 'react';
import {Container, HeaderTitle} from './style';
import {PageHeader} from '../../components';

export default function HomeScreen(props) {
  return (
    <Container>
      <PageHeader {...props} shouldBorder={true}>
        <HeaderTitle>Home</HeaderTitle>
      </PageHeader>
    </Container>
  );
}
