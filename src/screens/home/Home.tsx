import {Text, View} from 'react-native';
import React from 'react';
import useHome from './useHome';
import styles from './home.style';
import {CustomStatusbar} from '@components';

const Home = () => {
  const {userData} = useHome();
  return (
    <View style={styles.container}>
      <CustomStatusbar />
      <Text>Welcome to India</Text>
      <Text>{userData?.full_name}</Text>
    </View>
  );
};

export default Home;
