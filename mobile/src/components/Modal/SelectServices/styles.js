import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Separator = styled.View`
  height: 1px;
  background: rgba(0, 0, 0, 0.6);
`;

export const ServicesList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin: 10px 0 20px;
  padding: 0 20px;
`;

export const Service = styled(RectButton)`
  background: #fff;
  border-radius: 4px;
  flex: 1;
  padding: 10px 10px;
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  height: 40px;
  width: 40px;
  border-radius: 20px;
`;

export const Name = styled.Text`
  color: #333;
  margin: 0 15px;
  text-align: center;
  font-weight: bold;
  font-size: 14px;
`;

export const Header = styled.View`
  background: #e67e22;
  border-radius: 4px;
  padding: 15px 10px;
`;

export const Title = styled.Text`
  font-size: 14px;
  color: #fff;
  font-weight: bold;
`;

