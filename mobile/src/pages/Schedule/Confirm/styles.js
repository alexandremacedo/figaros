import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import Input from '~/components/Input';

export const Container = styled.View`
  flex: 1;
  padding: 0 30px;

  justify-content: center;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 60px;
`;

export const Name = styled.Text`
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;

export const Time = styled.Text`
  margin-top: 4px;
  font-size: 18px;
  color: rgba(255, 255, 255, 0.6);
`;

export const SubmitButton = styled(RectButton)`
  height: 46px;
  background: #3b9eff;
  border-radius: 4px;
  margin-top: 20px;
  align-items: center;
  align-self: stretch;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  width: 100%;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
`;
