import React from 'react';

import { Container, Sidebar, Main } from './styles';
import Profile from './Profile';
import Filter from './Filter';

const RepositoriesPage = () => (
  <Container>
    <Sidebar>
      <Profile />
      <Filter />
    </Sidebar>
    <Main>Main</Main>
  </Container>
);

export default RepositoriesPage;
