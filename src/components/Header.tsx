import React from 'react';
import Link from 'next/link';

import BaseLink from './BaseLink';
import Logo from './Logo';

import { AuthContainer, Container, NavItem, Wrapper } from '../styles/components/Header';
import { FiLock } from 'react-icons/fi';

const Header: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Logo />

        {/* Navegação dentro do site */}
        <nav>
          <Link href="#" passHref>
            <NavItem active>Início</NavItem>
          </Link>
          <Link href="#pricing" passHref>
            <NavItem>Planos</NavItem>
          </Link>
          <Link href="#about" passHref>
            <NavItem>Sobre Nós</NavItem>
          </Link>
          <Link href="#about" passHref>
            <NavItem>Contato</NavItem>
          </Link>
        </nav>

        {/* Botoões de sign in e sign up */}
        <AuthContainer>
          <Link href="/signin/" passHref>
            <BaseLink text>
              <FiLock />
              Entrar
            </BaseLink>
          </Link>
          <Link href="/signup/" passHref>
            <BaseLink primary>Registar</BaseLink>
          </Link>
        </AuthContainer>
      </Wrapper>
    </Container>
  );
};

export default Header;
