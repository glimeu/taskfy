import Head from 'next/head';
import React from 'react';
import DashboardLayout from '../components/DashboardLayout';

import { Container } from '../styles/pages/Dashboard';

const Reminders: React.FC = () => {
  return (
    <>
      <Head>
        <title>Taskfy - Lembretes</title>
      </Head>

      <Container>
        <DashboardLayout current="reminders">
          <h1>Reminders</h1>
        </DashboardLayout>
      </Container>
    </>
  );
};

export default Reminders;
