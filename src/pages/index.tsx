import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { FiPlay } from 'react-icons/fi';

import Header from '../components/Header';
import BaseLink from '../components/BaseLink';

import {
  AboutAndContactSection,
  BannerSection,
  Container,
  HowItWorksSection,
  PageWrapper,
  PricingSection,
} from '../styles/pages/Home';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Taskfy - A melhor forma para organizar seu trabalho</title>
      </Head>

      <Header />

      <Container>
        <PageWrapper>
          <BannerSection>
            <main>
              <h1>A melhor forma para organizar seu trabalho</h1>
              <span>Organize suas tarefas, listas e lembretes em um app.</span>

              <div>
                <Link href="#" passHref>
                  <BaseLink primary>Começar gratis</BaseLink>
                </Link>
                <Link href="#how-it-works" passHref>
                  <BaseLink>
                    <FiPlay />
                    Ver como funciona
                  </BaseLink>
                </Link>
              </div>
            </main>
            <img src="/svg/online-organizer.svg" alt="Banner illustration" />
          </BannerSection>

          <PricingSection id="pricing">
            <h2>Escolha seu plano</h2>
            <span>Page por mês ou por ano e cancele quando quiser</span>

            <div>
              <div>
                <h4>Free</h4>
                <strong>
                  <i>R$</i>0<i>/mês</i>
                </strong>

                <span>Um plano inicial apenas para quem quer testar o serviço.</span>

                <Link href="#" passHref>
                  <BaseLink primary>Escolher</BaseLink>
                </Link>
              </div>
              <div>
                <h4>Básico</h4>
                <strong>
                  <i>R$</i>7<i>/mês</i>
                </strong>

                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>

                <Link href="#" passHref>
                  <BaseLink primary>Escolher</BaseLink>
                </Link>
              </div>
              <div>
                <h4>Premium</h4>
                <strong>
                  <i>R$</i>16<i>/mês</i>
                </strong>

                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>

                <Link href="#" passHref>
                  <BaseLink primary>Escolher</BaseLink>
                </Link>
              </div>
            </div>
          </PricingSection>

          <HowItWorksSection id="how-it-works">
            <h2>Como funciona?</h2>
            <span>Veja como você pode organizar melhor seu dia</span>

            <iframe
              width="727"
              height="409"
              src="https://www.youtube.com/embed/0Fy7opKu46c"
              title="YouTube video player"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </HowItWorksSection>

          <AboutAndContactSection id="about">
            <h2>Sobre nós</h2>

            <div>
              <div>
                <strong>Taskfy</strong>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum repellendus quibusdam
                  voluptatibus eveniet officiis qui vel, omnis voluptatem ad voluptate distinctio
                  consequuntur cumque reprehenderit magni dicta incidunt repudiandae ullam odio.
                </p>
              </div>

              <form onSubmit={(e) => e.preventDefault()}>
                <strong>Envie uma mensagem</strong>

                <label>
                  <strong>Nome</strong>
                  <input type="text" />
                  <span>Seu nome</span>
                </label>

                <label>
                  <strong>Email</strong>
                  <input type="text" />
                  <span>Seu endereço eletrônico</span>
                </label>

                <label>
                  <strong>Mensagem</strong>
                  <textarea></textarea>
                  <span>Sua mensagem</span>
                </label>
              </form>
            </div>
          </AboutAndContactSection>
        </PageWrapper>
      </Container>

      <Footer />
    </>
  );
};

export default Home;
