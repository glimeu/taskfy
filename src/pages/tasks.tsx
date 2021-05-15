import Head from 'next/head';
import React from 'react';
import DashboardLayout from '../components/DashboardLayout';

import { Container } from '../styles/pages/Dashboard';

const Tasks: React.FC = () => {
  return (
    <>
      <Head>
        <title>Taskfy - Tarefas</title>
      </Head>

      <Container>
        <DashboardLayout current="tasks">
          <h1>Tarefas</h1>
        </DashboardLayout>
      </Container>
    </>
  );
};

export default Tasks;
