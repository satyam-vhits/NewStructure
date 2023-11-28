import React, {useState} from 'react';

const useLogin = () => {
  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);
  const onClickForgotPassword = () => {};

  const onClickSignUp = () => {};
  return {
    onClickForgotPassword,
    onClickSignUp,
    secureTextEntry,
    setSecureTextEntry,
  };
};

export default useLogin;
