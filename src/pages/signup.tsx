import React, { useRef } from 'react';
import { FiLogIn } from 'react-icons/fi';
import Head from 'next/head';
import Link from 'next/link';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { ValidationError } from 'yup';

import { SignUpSchema } from '../utils/Validators';
import Logo from '../components/Logo';
import Input from '../components/Input';
import BaseLink from '../components/BaseLink';
import Button from '../components/Button';

import { Container, InputGroup } from '../styles/pages/SignUp';

interface FormData {
  name: string;
  surname: string;
  email: string;
  password: string;
}

const SingUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  async function handleSubmit(data: FormData): Promise<void> {
    try {
      await SignUpSchema.validate(data, {
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

          <InputGroup>
            <Input name="name" label="Nome" description="Seu nome" maxLength={20} />
            <Input name="surname" label="Sobrenome" description="Seu sobrenome" maxLength={20} />
          </InputGroup>

          <Input name="email" type="email" label="Email" description="Seu endereço de email" />
          <Input
            name="password"
            type="password"
            label="Senha"
            description="Sua senha"
            maxLength={20}
          />

          <div className="actions">
            <Link href="/" passHref>
              <BaseLink text>Voltar</BaseLink>
            </Link>
            <Button primary type="submit">
              <FiLogIn />
              Entrar
            </Button>
          </div>

          <Link href="/signin/" passHref>
            <a>Já tem uma conta? Clique aqui!</a>
          </Link>
        </Form>
      </Container>
    </>
  );
};

export default SingUp;
