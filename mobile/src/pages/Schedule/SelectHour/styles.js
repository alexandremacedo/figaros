import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const ProvidersList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 60px;
  padding: 0 20px;
`;

export const Content = styled.View``;

export const Separator = styled.View`
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  margin: 0 5px;
`;

export const Provider = styled(RectButton)`
  background: #fff;
  border-radius: 4px;
  flex: 1;
  padding: 20px;

  margin: 30px 5px 20px;
  align-items: center;
`;

export const Avatar = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 25px;
`;

export const Name = styled.Text`
  color: #333;
  margin-top: 15px;
  text-align: center;
  font-weight: bold;
  font-size: 14px;
`;
