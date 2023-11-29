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
import SvgIndex from '@svgIndex';

const Login = () => {
  const {
    onClickForgotPassword,
    onClickSignUp,
    secureTextEntry,
    setSecureTextEntry,
    email,
    password,
    setEmail,
    setPassword,
  } = useLogin();

  return (
    <View style={style.container}>
      <CustomStatusbar />

      <KeyboardAvoidingView
        style={style.container}
        behavior={Platform.OS == 'ios' ? 'padding' : undefined}>
        <ScrollView
          persistentScrollbar
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={style.contentContainerStyle}>
          <View style={style.logoContainer}>
            <Image source={imageIndex.WhiteLogo} style={style.logo} />
          </View>
          <Text style={style.loginText}>Overlays</Text>
          <View id="loginForm" style={style.formView}>
            <InputContainer
              key={'email'}
              label="Email"
              keyboardType="email-address"
              placeholder="CoduoEmail@gmail.com"
              onChangeText={setEmail}
              value={email}
            />
            <InputContainer
              key={'password'}
              label="Password"
              placeholder="Your password"
              keyboardType="default"
              rightIcon
              secureTextEntry={secureTextEntry}
              onRightIconPress={() => setSecureTextEntry(!secureTextEntry)}
              onChangeText={setPassword}
              value={password}
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
              <Text style={style.signUpButtonLabel}>New Customer? Sign-up</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;
