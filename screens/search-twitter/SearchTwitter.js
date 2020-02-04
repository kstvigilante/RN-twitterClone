import React from 'react';
import {Container, SearchInput} from './style';
import {PageHeader} from '../../components';

export default function SearchTwitter(props) {
  return (
    <Container>
      <PageHeader {...props}>
        <SearchInput placeholder="search twitter" />
      </PageHeader>
    </Container>
  );
}
