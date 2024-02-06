import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ProspectosScreen from '../screens/Prospectos';
import ProspectosInfo from '../screens/views/ProspectosInfo'
import CollapsibleCard from '../components/cardPeriod';
import VisitasScreen from '../screens/VisitasScreen';
import VisitasInfo from '../screens/views/VisitasInfo';

const Stack = createStackNavigator();

export const AppNavigator = () => (
  <Stack.Navigator initialRouteName="Profile"  screenOptions={{
    headerStyle: {
      backgroundColor: '#4D69B4',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }}
>
      <Stack.Screen name="CartaP" component={CollapsibleCard}/>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} screenOptions={{headerShown: false}}/>
      <Stack.Screen name="Prospectos" component={ProspectosScreen} />
      <Stack.Screen name="ProspectosInfo" component={ProspectosInfo} />
      <Stack.Screen name="Visitas" component={VisitasScreen} />
      <Stack.Screen name="VisitasInfo" component={VisitasInfo} />
    </Stack.Navigator>

);