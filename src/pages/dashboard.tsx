import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import DashboardLayout from '../components/DashboardLayout';

import { Container } from '../styles/pages/Dashboard';

const Dashboard: React.FC = () => {
  return (
    <>
      <Head>
        <title>Taskfy - Painel</title>
      </Head>

      <Container>
        <DashboardLayout current="dashboard">
          <h1>Dashboard</h1>
        </DashboardLayout>
      </Container>
    </>
  );
};

// Redirecionar caso ele não esteja logado
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

export default Dashboard;
