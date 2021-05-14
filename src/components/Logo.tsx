import React from 'react';

import { Container } from '../styles/components/Logo';

const Logo: React.FC = () => {
  return (
    <Container>
      <img src="/icon.svg" alt="Taskfy" />
      <strong>Taskfy</strong>
      <i>.</i>
    </Container>
  );
};

export default Logo;
