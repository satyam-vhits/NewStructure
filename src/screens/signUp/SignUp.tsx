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
import style from './signUp.style';
import useLogin from './useSignUp';
import {Button, CustomStatusbar, InputContainer} from '@components';
import imageIndex from '@imageIndex';

const SignUp = () => {
  const {
    onClickForgotPassword,
    onClickSignUp,
    secureTextEntry,
    setSecureTextEntry,
    email,
    password,
    setEmail,
    setPassword,
    fullName,
    setFullName,
    mobileNumber,
    setMobileNumber,
    errorMessage,
    validateAndSubmitForm,
    isLoading,
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
              key={'name'}
              label="Full Name"
              placeholder="Shlok Srivastava"
              onChangeText={setFullName}
              value={fullName}
              error={errorMessage.fullName}
            />
            <InputContainer
              key={'mobile'}
              label="Mobile Number"
              placeholder="9999999999"
              keyboardType="phone-pad"
              onChangeText={setMobileNumber}
              value={mobileNumber}
              error={errorMessage.mobileNumber}
              maxLength={10}
            />

            <InputContainer
              key={'email'}
              label="Email"
              keyboardType="email-address"
              placeholder="CoduoEmail@gmail.com"
              onChangeText={setEmail}
              value={email}
              error={errorMessage.email}
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
              error={errorMessage.password}
            />

            <Button
              key={'loginButton'}
              label="Create An Account"
              containerStyle={style.button}
              onPress={() => validateAndSubmitForm()}
              isLoading={isLoading}
            />
          </View>

          <View style={style.signUpContainer}>
            <TouchableOpacity
              onPress={() => onClickSignUp()}
              style={style.signUpButton}>
              <Text style={style.signUpButtonLabel}>
                Overlay existing Customer? login
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default SignUp;
