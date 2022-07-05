import React, {useContext, useState, useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';

//secure-key-store
import RNSecureKeyStore, {ACCESSIBLE} from 'react-native-secure-key-store';

//stack
import AuthStack from './Stack/AuthStack';

//comp
import DashboardStack from './Stack/DashboardStack';

//context
import {AuthContext} from '@context/context';

import {View, Text} from 'react-native';

//comp
import SplashHeader from '../components/splash/splashHeader';

const AppNavigator = () => {
  const [auth, setAuth] = useState(false);
  const [nextAction, setNextAction] = useState('');
  const [splash, setSplash] = useState(true);
  const [lang, setLang] = useState('en');

  useEffect(() => {
    getData();
  }, []);

  const context = {
    auth,
    changeAuth: value => {
      setAuth(value);
    },
    nextAction,
    changeNextAction: value => {
      setNextAction(value);
    },
    lang,
    changeLang: value => {
      setLang(value);
    },
  };

  const getData = () => {
    RNSecureKeyStore.get('@user.lang').then(
      res => {
        setLang(res);
      },
      err => {
        console.log(err);
      },
    );

    RNSecureKeyStore.get('@user.data' && '@user.token').then(
      res => {
        setAuth(true);
        setTimeout(() => {
          setSplash(false);
        }, 2000);
      },
      err => {
        setAuth(false);
        setTimeout(() => {
          setSplash(false);
        }, 2000);
      },
    );
  };

  if (splash) {
    return <SplashHeader />;
  } else if (auth) {
    return (
      <AuthContext.Provider value={context}>
        <NavigationContainer>
          <DashboardStack />
        </NavigationContainer>
      </AuthContext.Provider>
    );
  } else {
    return (
      <AuthContext.Provider value={context}>
        <NavigationContainer>
          <AuthStack />
        </NavigationContainer>
      </AuthContext.Provider>
    );
  }
};

export default AppNavigator;
