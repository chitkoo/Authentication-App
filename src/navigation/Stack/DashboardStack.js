import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//comp
import DashboardScreen from '@pages/dashboard/Dashboard.js';

const Stack = createNativeStackNavigator();

const DashboardStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
    </Stack.Navigator>
  );
};

export default DashboardStack;
