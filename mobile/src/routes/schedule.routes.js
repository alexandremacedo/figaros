import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createStackNavigator } from '@react-navigation/stack';
import SelectHour from '~/pages/Schedule/SelectHour';

import ScheduleDashboard from '~/pages/Schedule/ScheduleDashboard';
import Confirm from '~/pages/Schedule/Confirm';

const Stack = createStackNavigator();

function ScheduleRoutes({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ScheduleDashboard"
        component={ScheduleDashboard}
        options={{
          headerTitle: 'Agendar',
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
        name="SelectHour"
        component={SelectHour}
        options={{
          headerTitle: 'Agendar',
          headerTitleAlign: 'center',
          headerTransparent: true,
          headerTintColor: '#fff',
          headerLeftContainerStyle: {
            marginLeft: 20,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ScheduleDashboard');
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
                navigation.navigate('SelectHour');
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
