import React from 'react';
import PropTypes from 'prop-types';

import { Container, Name, Description, Footer, Lang, Link } from './styles';

const Repository = ({ repository }) => (
  <Container color="#f1c40f">
    <Name>{repository.name}</Name>
    <Description>{repository.description}</Description>
    <Footer color="#f1c40f">
      <Lang>{repository.language}</Lang>
      <Link href={repository.html_url} target="_blank">
        Ver
      </Link>
    </Footer>
  </Container>
);

Repository.propTypes = {
  repository: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
    language: PropTypes.string,
  }).isRequired,
};

export default Repository;
