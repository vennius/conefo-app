// In App.js in a new project

import * as React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./screens/Home";
import StudentsScreen from "./screens/Students";
import TeachersScreen from "./screens/Teachers";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerTransparent: true,
        title: '',
        headerLeft: () => undefined
      }} gestureEnabled={true}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Students" component={StudentsScreen} />
        <Stack.Screen name="Teachers" component={TeachersScreen} />
      </Stack.Navigator>
      <StatusBar style="light"/>
    </NavigationContainer>
  );
}

export default App;