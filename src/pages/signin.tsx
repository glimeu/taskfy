import React, { useRef } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { ValidationError } from 'yup';
import Head from 'next/head';
import Link from 'next/link';

import { SignInSchema } from '../utils/Validators';
import { useAlert } from '../hooks/Alert';
import Logo from '../components/Logo';
import BaseLink from '../components/BaseLink';
import Button from '../components/Button';
import Input from '../components/Input';

import { Container } from '../styles/pages/SignIn';

interface FormData {
  email: string;
  password: string;
}

const SingIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { sendInfoAlert } = useAlert();

  async function handleSubmit(data: FormData): Promise<void> {
    try {
      await SignInSchema.validate(data, {
        abortEarly: false,
      });

      sendInfoAlert('Lamentamos...', 'Infelizmente isto ainda não está funcionando.');
    } catch (err) {
      if (err instanceof ValidationError) {
        err.inner.forEach((fieldErr) => {
          formRef.current.setFieldError(fieldErr.path, fieldErr.errors[0]);
        });
      }
    }
  }

  return (
    <>
      <Head>
        <title>Acessar conta</title>
      </Head>

      <Container>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Logo />

          <Input name="email" type="email" label="Email" description="Seu endereço de email" />
          <Input name="password" type="password" label="Senha" description="Sua senha" />

          <div className="actions">
            <Link href="/" passHref>
              <BaseLink text>Voltar</BaseLink>
            </Link>
            <Button primary type="submit">
              <FiLogIn />
              Entrar
            </Button>
          </div>

          <Link href="/signup/" passHref>
            <a>Não tem uma conta? Clique aqui!</a>
          </Link>
        </Form>
      </Container>
    </>
  );
};

export default SingIn;
