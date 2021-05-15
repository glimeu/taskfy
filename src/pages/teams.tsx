import Head from 'next/head';
import React from 'react';
import DashboardLayout from '../components/DashboardLayout';

import { Container } from '../styles/pages/Dashboard';

const Teams: React.FC = () => {
  return (
    <>
      <Head>
        <title>Taskfy - Times</title>
      </Head>

      <Container>
        <DashboardLayout current="teams">
          <h1>Teams</h1>
        </DashboardLayout>
      </Container>
    </>
  );
};

export default Teams;
