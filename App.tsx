import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import Navigation from './src/navigation';

const App = () => {
  return (
    <View style={styles.container}>
      <Navigation />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
