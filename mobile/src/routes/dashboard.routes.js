import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';
import ScheduleRoutes from './schedule.routes';

const Tab = createBottomTabNavigator();

export default function DashboardRoutes() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#fff',
        inactiveTintColor: 'rgba(255,255,255,0.6)',
        style: {
          backgroundColor: '#8d41a8',
        },
        keyboardHidesTabBar: true,
      }}>
      <Tab.Screen
        name="Agendamentos"
        component={Dashboard}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Icon name="event" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Agendar"
        component={ScheduleRoutes}
        options={{
          tabBarVisible: false,
          tabBarIcon: ({ color, size }) => {
            return <Icon name="add-circle-outline" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Icon name="person" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
