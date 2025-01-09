import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
const Dashboard = () => {
  return (
    <LinearGradient
      colors={['#29ABE2', '#0077B7']} // Gradient background
      style={styles.container}>
      <SafeAreaView style={styles.container}>

      </SafeAreaView>
    </LinearGradient>
  );
};

export default React.memo(Dashboard);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
