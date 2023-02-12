import React from 'react';

import { MdGroup, MdLocationCity, MdWork, MdLink } from 'react-icons/md';

import { Container, Header, Avatar, Login, Name, Inner, Data } from './styles';

const Profile = () => (
  <Container>
    <Header>
      <Avatar src="https://avatars.githubusercontent.com/u/11899797?v=4" />
      <Login>Nadilson-IFPE</Login>
      <Name>Nadilson</Name>
    </Header>
    <Inner>
      <Data>
        <MdGroup size={20} />
        48&nbsp;<i>seguidores</i>&nbsp;&middot;&nbsp;70&nbsp;<i>seguindo</i>
      </Data>
      <Data>
        <MdWork size={20} /> [DESEMPREGADO]
      </Data>
      <Data>
        <MdLocationCity size={20} /> Recife
      </Data>
      <Data>
        <MdLink size={20} />
        <a href="https://nadportfolio.vercel.app/">Site pessoal de Nadilson</a>
      </Data>
    </Inner>
  </Container>
);

export default Profile;
