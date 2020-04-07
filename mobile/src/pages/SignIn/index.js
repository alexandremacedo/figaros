import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Background from '~/components/Background';
import logo from '~/assets/moustache.png';
import { signInRequest } from '~/store/modules/auth/actions';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
  ButtonText,
  Logo
} from './styles';

export default function SignIn({ navigation: { navigate, isFocused } }) {
  const dispatch = useDispatch();
  const passwordRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loading = useSelector(state => state.auth.loading);

  const signed = useSelector(state => state.auth.signed);
  if (signed) {
    navigate('Dashboard')
  }
  function handleSubmit() {
    dispatch(signInRequest(email, password));
  }

  return (
    <Background>
      <Container>
        <Logo source={logo} />

        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu email"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite sua senha"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={password}
            onChangeText={setPassword}
          />
          <SubmitButton loading={loading} onPress={handleSubmit}>
            <ButtonText onPress={handleSubmit}>Acessar</ButtonText>
          </SubmitButton>
        </Form>

        <SignLink onPress={() => { }}>
          <SignLinkText onPress={() => navigate('SignUp')}>
            Criar conta gratuita
          </SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
