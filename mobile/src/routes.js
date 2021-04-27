import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { StatusBar } from  'react-native';

import React from 'react';

const AppStack = createStackNavigator();

import Incidents from './pages/Incidents';
import Detail from './pages/Detail';

export default function Routes(){
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#f5f1f0" barStyle="dark-content" />
      <AppStack.Navigator initialRouteName="Incidents" screenOptions={{ headerShown: false }}>
        <AppStack.Screen component={Incidents} name="Incidents" />
        <AppStack.Screen component={Detail} name="Detail" />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}