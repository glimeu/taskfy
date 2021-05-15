import React from 'react';

import SideBar from '../components/SideBar';
import DashboardHeader from './DashboardHeader';

import { Container } from '../styles/components/DashboardLayout';

interface DashboardLayoutProps {
  current?: 'dashboard' | 'lists' | 'reminders' | 'tasks' | 'teams' | 'settings' | 'profile';
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, current }) => {
  return (
    <Container>
      <SideBar current={current} />

      <DashboardHeader />

      <main>{children}</main>
    </Container>
  );
};

export default DashboardLayout;
