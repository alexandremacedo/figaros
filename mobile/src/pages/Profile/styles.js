import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import Input from '~/components/Input';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Separator = styled.View`
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  margin: 20px 0 30px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  align-self: center;
  margin-top: 30px;
`;

export const Form = styled.ScrollView.attrs({
  contentContainerStyle: { padding: 30 },
  showsVerticalScrollIndicator: false,
})`
  align-self: stretch;
  margin-top: 20px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const SubmitButton = styled(RectButton)`
  height: 46px;
  background: #3b9eff;
  border-radius: 4px;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
`;

export const LogOutButton = styled(RectButton)`
  height: 46px;
  background: #f64c75;
  border-radius: 4px;
  margin-top: 10px;
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
