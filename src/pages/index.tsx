import Head from 'next/head';
import Link from 'next/link';
import React, { useRef } from 'react';
import { FiPlay, FiSend } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import Header from '../components/Header';
import BaseLink from '../components/BaseLink';
import Footer from '../components/Footer';
import Input from '../components/Input';
import TextArea from '../components/TextArea';
import Button from '../components/Button';

import {
  AboutAndContactSection,
  BannerSection,
  Container,
  HowItWorksSection,
  PageWrapper,
  PricingSection,
} from '../styles/pages/Home';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const formDataSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, 'Este campo tem que ter pelo menos 4 caracteres.')
    .max(20, 'Este campo pode ter no máximo 20 caracteres.')
    .required('Este campo é obrigatório.'),
  email: Yup.string()
    .email('Este campo tem que ser um email válido.')
    .required('Este campo é obrigatório.'),
  message: Yup.string()
    .min(8, 'Este campo tem que ter pelo menos 8 caracteres.')
    .max(300, 'Este campo pode ter no máximo 300 caracteres.')
    .required(() => 'Este campo é obrigatório.'),
});

const Home: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  async function handleSubmit(data: FormData): Promise<void> {
    try {
      await formDataSchema.validate(data, {
        abortEarly: false,
      });

      console.log(data);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((fieldErr) => {
          formRef.current.setFieldError(fieldErr.path, fieldErr.errors[0]);
        });
      }
    }
  }

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
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum repellendus quibusdam
                  voluptatibus eveniet officiis qui vel, omnis voluptatem ad voluptate distinctio
                  consequuntur cumque reprehenderit magni dicta incidunt repudiandae ullam odio.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum repellendus quibusdam
                  voluptatibus eveniet officiis qui vel, omnis voluptatem ad voluptate distinctio
                  consequuntur cumque reprehenderit magni dicta incidunt repudiandae ullam odio.
                </p>
              </div>

              <Form ref={formRef} onSubmit={handleSubmit}>
                <strong>Envie uma mensagem</strong>

                <Input name="name" label="Nome" description="Seu nome" />
                <Input
                  name="email"
                  type="email"
                  label="Email"
                  description="Seu endereço eletrônico"
                />
                <TextArea name="message" label="Mensagem" description="Sua mensagem" />

                <Button primary type="submit">
                  <FiSend />
                  Enviar
                </Button>
              </Form>
            </div>
          </AboutAndContactSection>
        </PageWrapper>
      </Container>

      <Footer />
    </>
  );
};

export default Home;
