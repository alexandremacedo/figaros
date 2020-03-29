import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createStackNavigator } from '@react-navigation/stack';

import { NavigationRouteContext } from '@react-navigation/native';
import SelectProvider from '~/pages/Schedule/SelectProvider';
import SelectDateTime from '~/pages/Schedule/SelectDateTime';
import Confirm from '~/pages/Schedule/Confirm';

const Stack = createStackNavigator();

function ScheduleRoutes({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SelectProvider"
        component={SelectProvider}
        options={{
          headerTitle: 'Selecione o prestador',
          headerTitleAlign: 'center',
          headerTransparent: true,
          headerTintColor: '#fff',
          headerLeftContainerStyle: {
            marginLeft: 20,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <Icon name="chevron-left" size={25} color="#fff" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="SelectDateTime"
        component={SelectDateTime}
        options={{
          headerTitle: 'Selecione o horário',
          headerTitleAlign: 'center',
          headerTransparent: true,
          headerTintColor: '#fff',
          headerLeftContainerStyle: {
            marginLeft: 20,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SelectProvider');
              }}>
              <Icon name="chevron-left" size={25} color="#fff" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Confirm"
        component={Confirm}
        options={{
          headerTitle: 'Confirmar agendamento',
          headerTitleAlign: 'center',
          headerTransparent: true,
          headerTintColor: '#fff',
          headerLeftContainerStyle: {
            marginLeft: 20,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SelectProvider');
              }}>
              <Icon name="chevron-left" size={25} color="#fff" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default ScheduleRoutes;
