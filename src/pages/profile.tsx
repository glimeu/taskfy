import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import DashboardLayout from '../components/DashboardLayout';

import { Container } from '../styles/pages/Dashboard';

const Profile: React.FC = () => {
  return (
    <>
      <Head>
        <title>Taskfy - Perfil</title>
      </Head>

      <Container>
        <DashboardLayout current="profile">
          <h1>Profile</h1>
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

export default Profile;
