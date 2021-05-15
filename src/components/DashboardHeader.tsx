import React from 'react';
import { FiBell } from 'react-icons/fi';

import { useUser } from '../hooks/User';

import { Container } from '../styles/components/DashboardHeader';

const DashboardHeader: React.FC = () => {
  const user = useUser();

  return (
    <Container>
      <button>
        <FiBell />
      </button>
      <strong>{user.name}</strong>
      <img src={user.avatar_url} alt="User avatar" />
    </Container>
  );
};

export default DashboardHeader;
