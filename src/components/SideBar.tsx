import Link from 'next/link';
import React from 'react';
import {
  FiCheck,
  FiClock,
  FiGrid,
  FiList,
  FiLogOut,
  FiSettings,
  FiUser,
  FiUsers,
} from 'react-icons/fi';

import { Container } from '../styles/components/SideBar';
import BaseLink from './BaseLink';
import Logo from './Logo';

interface SideBarProps {
  current?: 'dashboard' | 'lists' | 'reminders' | 'tasks' | 'teams' | 'settings' | 'profile';
}

const SideBar: React.FC<SideBarProps> = ({ current }) => {
  return (
    <Container>
      <Logo />

      <nav>
        <Link href="/dashboard/" passHref>
          <a className={current === 'dashboard' ? 'active' : undefined}>
            <FiGrid />
            Painel
          </a>
        </Link>
        <Link href="/tasks/" passHref>
          <a className={current === 'tasks' ? 'active' : undefined}>
            <FiCheck />
            Tarefas
          </a>
        </Link>
        <Link href="/lists/" passHref>
          <a className={current === 'lists' ? 'active' : undefined}>
            <FiList />
            Listas
          </a>
        </Link>
        <Link href="/reminders/" passHref>
          <a className={current === 'reminders' ? 'active' : undefined}>
            <FiClock />
            Lembretes
          </a>
        </Link>
        <Link href="/teams/" passHref>
          <a className={current === 'teams' ? 'active' : undefined}>
            <FiUsers />
            Times
          </a>
        </Link>
        <Link href="/settings/" passHref>
          <a className={current === 'settings' ? 'active' : undefined}>
            <FiSettings />
            Configurações
          </a>
        </Link>
        <Link href="/profile/" passHref>
          <a className={current === 'profile' ? 'active' : undefined}>
            <FiUser />
            Perfil
          </a>
        </Link>
      </nav>

      <Link href="#" passHref>
        <BaseLink>
          <FiLogOut />
          Desconectar
        </BaseLink>
      </Link>
    </Container>
  );
};

export default SideBar;
