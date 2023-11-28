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
import {Button, CustomStatusbar, InputContainer} from '@components';
import imageIndex from '@imageIndex';

const Login = () => {
  const {
    onClickForgotPassword,
    onClickSignUp,
    secureTextEntry,
    setSecureTextEntry,
  } = useLogin();

  return (
    <View style={style.container}>
      <CustomStatusbar />
      <ScrollView
        persistentScrollbar
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.contentContainerStyle}>
        <KeyboardAvoidingView
          style={style.container}
          behavior={Platform.OS == 'ios' ? 'padding' : undefined}>
          <Image source={imageIndex.Logo} style={style.logo} />
          <Text style={style.loginText}>
            Welcome back you've{'\n'}been missed
          </Text>
          <View id="loginForm" style={style.formView}>
            <InputContainer
              key={'email'}
              label="Email"
              keyboardType="email-address"
              placeholder="CoduoEmail@gmail.com"
            />
            <InputContainer
              key={'password'}
              label="Password"
              placeholder="Your password"
              keyboardType="default"
              rightIcon
              secureTextEntry={secureTextEntry}
              onRightIconPress={() => setSecureTextEntry(!secureTextEntry)}
            />
            <TouchableOpacity
              style={style.forgotPwd}
              onPress={() => onClickForgotPassword()}>
              <Text style={style.forgotPwdLabel}>Forgot Password?</Text>
            </TouchableOpacity>
            <Button
              key={'loginButton'}
              label="Login"
              containerStyle={style.button}
            />
          </View>

          <View style={style.signUpContainer}>
            <TouchableOpacity
              onPress={() => onClickSignUp()}
              style={style.signUpButton}>
              <Text style={style.signUpButtonLabel}>
                Don't have an account? signUp
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

export default Login;
