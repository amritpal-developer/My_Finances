import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {StackNavigation} from './src/navigation/StackNavigation';
import {PaperProvider} from 'react-native-paper';
const App = () => {
  return (
    <PaperProvider>
      <StackNavigation />
    </PaperProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
