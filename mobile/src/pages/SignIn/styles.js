import { Platform } from 'react-native';

import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';
import Input from '~/components/Input';

export const Container = styled.KeyboardAvoidingView.attrs({
  enable: Platform.OS === 'ios',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const SubmitButton = styled(RectButton)`
  height: 46px;
  background: #3b9eff;
  border-radius: 4px;

  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  width: 100%;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
`;

export const SignLink = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const SignLinkText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
