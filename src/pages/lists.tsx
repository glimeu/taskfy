import Head from 'next/head';
import React from 'react';
import DashboardLayout from '../components/DashboardLayout';

import { Container } from '../styles/pages/Dashboard';

const Lists: React.FC = () => {
  return (
    <>
      <Head>
        <title>Taskfy - Listas</title>
      </Head>

      <Container>
        <DashboardLayout current="lists">
          <h1>Listas</h1>
        </DashboardLayout>
      </Container>
    </>
  );
};

export default Lists;
