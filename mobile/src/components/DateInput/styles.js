import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 60px 0 30px;
`;

export const DateButton = styled.TouchableOpacity`
  background: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  flex-direction: row;
  padding: 0 15px;
  height: 46px;

  margin: 0 30px;
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
