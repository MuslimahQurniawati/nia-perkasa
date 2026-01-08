import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';

// import screen
import FirstScreen from '../(user)/FirstScreen';
import HomeScreen from '../src/screen/HomeScreen';
import DetailBukuPage from '../components/DetailBukuPage';

enableScreens();

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        
        <Stack.Screen 
          name="Splash" 
          component={FirstScreen} 
        />

        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
        />

        <Stack.Screen
          name="DetailBuku"
          component={DetailBukuPage}
          options={{ animation: 'slide_from_right' }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
