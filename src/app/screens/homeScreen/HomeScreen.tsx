import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import FeatherIcon from 'react-native-vector-icons/Feather';

const HomeScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home Screen</Text>
      <FeatherIcon name="search" size={50} />
    </View>
  );
};

export default HomeScreen;
