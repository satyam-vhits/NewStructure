import React, {useCallback, useState} from 'react';
import {errorMessage, formDataType} from './signUpProps';
import validationMessage from '@utility/validation/validationMessage';
import {checkEmail, checkPassword} from '@utility/validation/stringValidation';
import {Alert} from 'react-native';
import {axiosInstance} from '@api/api';
import constant from '@config/constant';
import Snackbar from 'react-native-snackbar';
import color from '@theme/color';
import {useAppDispatch} from '@hooks/useRedux';
import {loginSuccess} from '@redux/userReducer/reducer';

const useSignUp = () => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [fullName, setFullName] = useState<string>('');
  const [mobileNumber, setMobileNumber] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [errorMessage, setErrorMessage] = useState<errorMessage>({
    email: null,
    password: null,
    fullName: null,
    mobileNumber: null,
  });
  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);
  const onClickForgotPassword = () => {};
  const onClickSignUp = () => {};

  const validateAndSubmitForm = useCallback(() => {
    let isValid: boolean = true;
    if (!email) {
      isValid = false;
      errorMessage.email = validationMessage.emptyEmail;
    } else if (!checkEmail(email)) {
      isValid = false;
      errorMessage.email = validationMessage.invalidEmail;
    } else {
      errorMessage.email = null;
    }

    if (!password) {
      isValid = false;
      errorMessage.password = validationMessage.emptyPassword;
    } else if (!checkPassword(password)) {
      isValid = false;
      errorMessage.password = validationMessage.strongPassword;
    } else {
      errorMessage.password = null;
    }

    if (!fullName) {
      isValid = false;
      errorMessage.fullName = validationMessage.emptyFullName;
    } else {
      errorMessage.fullName = null;
    }

    if (!mobileNumber) {
      isValid = false;
      errorMessage.mobileNumber = validationMessage.emptyMobileNumber;
    } else if (mobileNumber.length != 10) {
      isValid = false;
      errorMessage.mobileNumber = validationMessage.invalidMobileNumber;
    } else {
      errorMessage.mobileNumber = null;
    }

    if (isValid) {
      SignUpApiCall();
    }

    setErrorMessage({...errorMessage});
  }, [email, password, fullName, mobileNumber]);

  const SignUpApiCall = useCallback(() => {
    setIsLoading(true);
    let formData: formDataType = {
      full_name: fullName,
      mobile_number: mobileNumber,
      email: email,
      password: password,
    };

    axiosInstance
      .post(constant.users, formData)
      .then(response => {
        Snackbar.show({
          text: 'Account Created Successfully',
          backgroundColor: color.charCoal,
        });
        dispatch(loginSuccess(response.data));
      })
      .catch(e => {
        console.log('error', e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [email, password, fullName, mobileNumber, isLoading]);

  return {
    onClickForgotPassword,
    onClickSignUp,
    secureTextEntry,
    setSecureTextEntry,
    email,
    setEmail,
    password,
    setPassword,
    validateAndSubmitForm,
    errorMessage,
    fullName,
    setFullName,
    mobileNumber,
    setMobileNumber,
    isLoading,
  };
};

export default useSignUp;
