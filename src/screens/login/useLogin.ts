import React, {useState} from 'react';

const useLogin = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);
  const onClickForgotPassword = () => {};
  const onClickSignUp = () => {};

  return {
    onClickForgotPassword,
    onClickSignUp,
    secureTextEntry,
    setSecureTextEntry,
    email,
    setEmail,
    password,
    setPassword,
  };
};

export default useLogin;
