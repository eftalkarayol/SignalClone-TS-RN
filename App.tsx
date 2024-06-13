import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabOneScreen from './src/screens/TabOneScreen';
import TabTwoScreen from './src/screens/TabTwoScreen';

const App = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="TabOneScreen" component={TabOneScreen} />
        <Tab.Screen name="TabTwoScreen" component={TabTwoScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
