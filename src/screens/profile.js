import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Home from '../assets/svg/Home.svg';
const profile = () => {
  return (
    <View>
      <Home width={200} height={200} />
    </View>
  );
};

export default React.memo(profile);

const styles = StyleSheet.create({});
