import React from 'react';
import {
  Image,
  Text,
  View,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  Platform,
  SafeAreaView,
} from 'react-native';
import style from './login.style';
import useLogin from './useLogin';

const Login = () => {
  const {
    onClickForgotPassword,
    onClickSignUp,
    secureTextEntry,
    setSecureTextEntry,
  } = useLogin();

  return (
    <SafeAreaView style={style.container}>
      <Text>dds</Text>
    </SafeAreaView>
  );
};

export default Login;
