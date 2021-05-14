import React from 'react';
import { FiGithub, FiInstagram, FiTwitter } from 'react-icons/fi';

import { Container, Bottom, Top, Wrapper } from '../styles/components/Footer';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Top>
          <div>
            <Logo />
            <span>
              Junte-se a milhares de pessoas que organizam seu trabalho e vida com Taskfy App.
            </span>
          </div>

          <div>
            <a href="#" target="__blank" rel="noopener noreferrer">
              <img src="/img/ios-download.png" alt="Download on IOS" />
            </a>
            <a href="#" target="__blank" rel="noopener noreferrer">
              <img src="/img/android-download.png" alt="Download on Android" />
            </a>
          </div>
        </Top>

        <Bottom>
          <strong>&copy; Taskfy 2021.</strong>
          <nav>
            <a href="https://twitter.com/guel5g/" target="__blank" rel="noopener noreferrer">
              <FiTwitter size="1.87rem" />
            </a>
            <a href="https://github.com/miguel5g/" target="__blank" rel="noopener noreferrer">
              <FiGithub size="1.87rem" />
            </a>
            <a
              href="https://www.instagram.com/guel_109/"
              target="__blank"
              rel="noopener noreferrer"
            >
              <FiInstagram size="1.87rem" />
            </a>
          </nav>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Footer;
