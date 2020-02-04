import React from 'react';
import {Container, HeaderTitle} from './style';
import {PageHeader} from '../../components';

export default function Messages(props) {
  return (
    <Container>
      <PageHeader {...props} shouldBorder={true}>
        <HeaderTitle>Messages</HeaderTitle>
      </PageHeader>
    </Container>
  );
}
