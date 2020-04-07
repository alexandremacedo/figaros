import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.View`
  flex: 1;
  margin-bottom: 20px;
`;

export const DateButton = styled(RectButton)`
  background: #e67e22;
  border-radius: 4px;
  flex-direction: row;
  padding: 0 15px;
  height: 46px;
  align-items: center;
`;

export const DateText = styled.Text`
  color: #fff;
  margin-left: 15px;
  font-size: 14px;
`;

export const Picker = styled.View`
  background: '#fff';
  padding: 15px 30px;
  margin-top: 30px;
`;
