import {PixelRatio, StyleSheet} from 'react-native';
import color from '@theme/color';
import font from '@theme/font';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
  logo: {
    height: 80,
    width: 80,
    tintColor: color.coral,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  contentContainerStyle: {
    marginHorizontal: 20,
    flexGrow: 1,
  },
  loginText: {
    fontSize: 26,
    color: color.charCoal,
    textAlign: 'center',
    lineHeight: 30,
    fontWeight: 'bold',
    marginTop: 20,
  },
  button: {
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 10,
  },
  formView: {
    flex: 1,
    marginTop: 50,
  },
  forgotPwd: {
    alignSelf: 'flex-end',
    paddingVertical: 10,
  },
  forgotPwdLabel: {
    fontSize: 14,
    color: color.charCoal,
    lineHeight: 21,
    fontFamily: font.poppinsSemiBold,
  },

  signUpContainer: {
    marginVertical: 30,
  },
  signUpButtonLabel: {
    fontSize: 14,
    color: color.charCoal,
    lineHeight: 21,
    fontFamily: font.poppinsSemiBold,
  },
  signUpButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default style;
