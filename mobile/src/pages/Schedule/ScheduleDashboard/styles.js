import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const ButtonModal = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  display: flex;
  align-self: flex-end;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  z-index: 5;
  background: #797793;
`;

export const ViewButton = styled.View`
  background: #fff;
  border-radius: 4px;
`;

export const Content = styled.View`
`;

export const ContentModal = styled.View`
  background: #fff;
  border-radius: 4px;
  margin: 0 15px;
  margin-top: -15px;
`;

export const ScheduleOptions = styled.View`

margin-top: 60px;
`;

export const Header = styled.View`
  margin: 10px;
  border-radius: 4px;
`;

export const ServiceList = styled(RectButton)`
  background: rgba(255,255,255,0.5);
  border-radius: 4px;
  width: 100%;
  padding: 0 15px;
  margin-top: 35px;
`;

export const ProvidersButton = styled(RectButton)`
  background: rgba(255,255,255,0.5);
  border-radius: 4px;
  width: 100%;
  padding: 0 15px;
  margin-top: 10px;
  font-size: 14px;
`;

export const TextHeader = styled.Text`
  color: #fff;
  font-weight: bold;
  padding: 15px 0;
  font-size: 14px;
`;

export const ContentSchedule = styled.View`
  padding: 30px;
  margin: 15px 10px;
  display: flex;
  align-items: center;
  flex-direction: row;
  border-radius: 4px;
  background: rgba(255,255,255,1);
  margin-bottom: 25px;
`;

export const ContentPriceDuration = styled.View`
  margin: 0 30px;
`;

export const Logo = styled.Image`
  width: 80px;
  height: 80px;
`;

export const Price = styled.Text`
  color: #333;
  font-weight: bold;
  font-size: 16px;
`;

export const Duration = styled.Text`
  color: #333;
  margin-top: 5px;
  font-weight: bold;
  font-size: 16px;
`;

export const SubmitButton = styled(RectButton)`
  height: 46px;
  background: #e67e22;
  border-radius: 4px;
  margin: 0 10px;
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



export const Separator = styled.View`
  height: 1px;
  background: rgba(0, 0, 0, 0.6);
`;



export const ProvidersList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin: 10px 0 20px;
  padding: 0 20px;
`;

export const Provider = styled.TouchableOpacity`
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

export const HeaderP = styled.View`
  background: #e67e22;
  border-radius: 4px;
  padding: 15px 10px;
`;

export const Title = styled.Text`
  font-size: 14px;
  color: #fff;
  font-weight: bold;
`;
