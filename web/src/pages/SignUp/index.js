import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import logo from '~/assets/images/logo.svg';
import { signUpRequest, signInRequest } from '../../store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatorio'),
  email: Yup.string()
    .email('Insira um email valido')
    .required('Email é obrigatório'),
  password: Yup.string()
    .min(6, 'Senha precisa de 6 caracteres')
    .required('A senha é obrigatória'),
});
export default function SignIn() {
  const dispatch = useDispatch();

  async function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
    setTimeout(() => {
      dispatch(signInRequest(email, password));
    }, 500);
  }
  return (
    <>
      <img src={logo} alt="Gobarber" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Seu nome" />
        <Input name="email" type="email" placeholder="Seu e-mail" />

        <Input name="password" type="password" placeholder="Sua senha" />

        <button type="submit">Criar conta</button>
      </Form>
    </>
  );
}
