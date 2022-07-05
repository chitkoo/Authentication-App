import React, {useState, useEffect, useContext} from 'react';

import RegisterHeader from '@components/register/registerHeader';

import {ToastAndroid} from 'react-native';

//secure-key-store
import RNSecureKeyStore, {ACCESSIBLE} from 'react-native-secure-key-store';

//context
import {AuthContext} from '@context/context';

const Register = ({navigation, route}) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const {email} = route.params;

  const {auth, changeAuth} = useContext(AuthContext);

  const loginBtnOption = password === '';
  const regBtnOption = password === '' || confirmPassword === '';

  const signUpHandler = () => {
    const token = 123;

    const userData = {
      email: email,
      password: password,
    };

    //store token
    RNSecureKeyStore.set('@user.token', JSON.stringify(token), {
      accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY,
    }).then(
      res => {
        // console.log(res);
      },
      err => {
        // console.log(err);
      },
    );

    RNSecureKeyStore.set('@user.data', JSON.stringify(userData), {
      accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY,
    }).then(
      res => {
        // console.log(res);
      },
      err => {
        // console.log(err);
      },
    );

    changeAuth(true);
  };

  const logInHandler = () => {
    const token = 123;

    RNSecureKeyStore.get('@user.data').then(
      res => {
        const storedEmail = JSON.parse(res).email;
        const storedPassword = JSON.parse(res).password;
        if (storedEmail === email && storedPassword === password) {
          changeAuth(true);
          RNSecureKeyStore.set('@user.token', JSON.stringify(token), {
            accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY,
          }).then(
            res => {
              // console.log(res);
            },
            err => {
              // console.log(err);
            },
          );
        } else {
          ToastAndroid.show('Something Wrong!', ToastAndroid.SHORT);
        }
      },
      err => {
        console.log(err);
      },
    );
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <RegisterHeader
      passVal={password}
      onChangePass={value => setPassword(value)}
      confirmPassVal={confirmPassword}
      onChangeConfirmPass={value => setConfirmPassword(value)}
      goBackAction={goBack}
      signUpAction={signUpHandler}
      logInAction={logInHandler}
      loginBtnOption={loginBtnOption}
      regBtnOption={regBtnOption}
    />
  );
};

export default Register;
