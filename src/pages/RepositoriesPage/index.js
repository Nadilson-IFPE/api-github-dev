import React from 'react';

import { Container, Sidebar, Main } from './styles';
import Profile from './Profile';
import Filter from './Filter';
import Repositories from './Repositories';

const RepositoriesPage = () => {
  const user = {
    login: 'Nadilson-IFPE',
    name: 'Nadilson',
    avatar_url: 'https://avatars.githubusercontent.com/u/11899797?v=4',
    followers: 48,
    following: 70,
    company: '[DESEMPREGADO]',
    blog: 'https://nadportfolio.vercel.app/',
    location: 'Recife - Pernambuco',
  };

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter />
      </Sidebar>
      <Main>
        <Repositories />
      </Main>
    </Container>
  );
};

export default RepositoriesPage;
