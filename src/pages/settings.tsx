import Head from 'next/head';
import React from 'react';
import DashboardLayout from '../components/DashboardLayout';

import { Container } from '../styles/pages/Settings';

const Settings: React.FC = () => {
  return (
    <>
      <Head>
        <title>Taskfy - Configurações</title>
      </Head>

      <Container>
        <DashboardLayout current="settings">
          <h1>Settings</h1>
        </DashboardLayout>
      </Container>
    </>
  );
};

export default Settings;
