import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import React, { useRef } from 'react';
import { ValidationError } from 'yup';

import { SignInSchema } from '../utils/Validators';
import Logo from '../components/Logo';

import { Container } from '../styles/pages/SignIn';
import Input from '../components/Input';
import Link from 'next/link';
import BaseLink from '../components/BaseLink';
import Button from '../components/Button';
import Head from 'next/head';
import { FiLogIn } from 'react-icons/fi';

interface FormData {
  email: string;
  password: string;
}

const SingIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  async function handleSubmit(data: FormData): Promise<void> {
    try {
      await SignInSchema.validate(data, {
        abortEarly: false,
      });

      console.log(data);
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
