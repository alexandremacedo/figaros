import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import SignUp from '~/pages/SignUp';
import SignIn from '~/pages/SignIn';
import DashboardRoutes from './dashboard.routes';

const Stack = createStackNavigator();

function Routes() {
  const signed = useSelector(state => state.auth.signed);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={signed ? 'Dashboard' : 'SignIn'}>
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Dashboard"
          component={DashboardRoutes}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
