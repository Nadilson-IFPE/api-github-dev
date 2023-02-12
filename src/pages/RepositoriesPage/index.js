import React, { useState } from 'react';

import { Container, Sidebar, Main } from './styles';
import Profile from './Profile';
import Filter from './Filter';
import Repositories from './Repositories';

import { getLangsFrom } from '../../services/api';

const RepositoriesPage = () => {
  const [currentLanguage, setCurrentLanguage] = useState();

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
      id: '1',
      name: 'Repo 1',
      description: 'Descrição',
      html_url: 'https://www.w3schools.com/js/',
      language: 'JavaScript',
    },
    {
      id: '2',
      name: 'Repo 2',
      description: 'Descrição',
      html_url: 'https://www.w3schools.com/js/',
      language: 'JavaScript',
    },
    {
      id: '3',
      name: 'Repo 3',
      description: 'Descrição',
      html_url: 'https://www.docker.com/',
      language: 'Docker',
    },
    {
      id: '4',
      name: 'Repo 4',
      description: 'Descrição',
      html_url: 'https://nadportfolio.vercel.app/',
      language: null,
    },
    {
      id: '5',
      name: 'Repo 5',
      description: 'Descrição',
      html_url: 'https://www.typescriptlang.org/',
      language: 'TypeScript',
    },
    {
      id: '6',
      name: 'Repo 6',
      description: 'Descrição',
      html_url: 'https://www.ruby-lang.org/en/',
      language: 'Ruby',
    },
    {
      id: '7',
      name: 'Repo 7',
      description: 'Descrição',
      html_url:
        'https://docs.oracle.com/javase/8/docs/technotes/guides/language/index.html',
      language: 'Java',
    },
    {
      id: '8',
      name: 'Repo 8',
      description: 'Descrição',
      html_url: 'https://kotlinlang.org/',
      language: 'Kotlin',
    },
    {
      id: '9',
      name: 'Repo 9',
      description: 'Descrição',
      html_url: 'https://dart.dev/',
      language: 'Dart',
    },
  ];

  const languages = getLangsFrom(repositories);

  const onFilterClick = (language) => {
    setCurrentLanguage(language);
  };

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter
          languages={languages}
          currentLanguage={currentLanguage}
          onClick={onFilterClick}
        />
      </Sidebar>
      <Main>
        <Repositories
          repositories={repositories}
          currentLanguage={currentLanguage}
        />
      </Main>
    </Container>
  );
};

export default RepositoriesPage;
