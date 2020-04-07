import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
  margin-bottom: 20px;
`;

export const HourList = styled.FlatList.attrs({
  numColumns: 4,
  showsVerticalScrollIndicator: false,
})`
`;

export const Hour = styled(RectButton)`
  background: #fff;
  border-radius: 4px;
  padding: 10px;
  flex: 1;
  opacity: ${props => (props.enabled ? 1 : 0.6)};
  align-items: center;
  margin: 0 5px 10px;
`;

export const Title = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #333;
`;
