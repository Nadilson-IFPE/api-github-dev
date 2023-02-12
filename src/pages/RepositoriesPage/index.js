import React from 'react';

import { Container, Sidebar, Main } from './styles';
import Profile from './Profile';
import Filter from './Filter';
import Repositories from './Repositories';

import { getLangsFrom } from '../../services/api';

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

  const repositories = [
    {
      name: 'Repo 1',
      description: 'Descrição',
      html_url: 'https://www.w3schools.com/js/',
      language: 'JavaScript',
    },
    {
      name: 'Repo 2',
      description: 'Descrição',
      html_url: 'https://www.w3schools.com/js/',
      language: 'JavaScript',
    },
    {
      name: 'Repo 3',
      description: 'Descrição',
      html_url: 'https://www.docker.com/',
      language: 'Docker',
    },
    {
      name: 'Repo 4',
      description: 'Descrição',
      html_url: 'https://nadportfolio.vercel.app/',
      language: null,
    },
    {
      name: 'Repo 5',
      description: 'Descrição',
      html_url: 'https://www.typescriptlang.org/',
      language: 'TypeScript',
    },
    {
      name: 'Repo 6',
      description: 'Descrição',
      html_url: 'https://www.ruby-lang.org/en/',
      language: 'Ruby',
    },
    {
      name: 'Repo 7',
      description: 'Descrição',
      html_url:
        'https://docs.oracle.com/javase/8/docs/technotes/guides/language/index.html',
      language: 'Java',
    },
    {
      name: 'Repo 8',
      description: 'Descrição',
      html_url: 'https://kotlinlang.org/',
      language: 'Kotlin',
    },
    {
      name: 'Repo 9',
      description: 'Descrição',
      html_url: 'https://dart.dev/',
      language: 'Dart',
    },
  ];

  const languages = getLangsFrom(repositories);

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter languages={languages} />
      </Sidebar>
      <Main>
        <Repositories />
      </Main>
    </Container>
  );
};

export default RepositoriesPage;
