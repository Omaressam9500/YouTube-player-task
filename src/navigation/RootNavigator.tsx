import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import VideoScreen from '../screens/VideoScreen';
import GifScreen from '../screens/GifScreen';
import { ROUTES } from './Routes';
import { RootStackParamList } from './types';
import { navigationRef } from './NavigationService';


const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation: React.FC = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen name={ROUTES.HOME} component={HomeScreen} />
        <Stack.Screen name={ROUTES.VIDEO} component={VideoScreen} />
        <Stack.Screen name={ROUTES.GIF} component={GifScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;