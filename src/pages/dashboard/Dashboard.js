import React, {useEffect, useState, useContext} from 'react';

//key-store
import RNSecureKeyStore, {ACCESSIBLE} from 'react-native-secure-key-store';

//context
import {AuthContext} from '@context/context';

import DashboardHeader from '@components/dashboard/dashboardHeader';

const Dashboard = () => {
  const [email, setEmail] = useState('');
  const {userInfo, changeAuth} = useContext(AuthContext);

  //context ma use pl dashboard yout mha data yu tae pone san

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    RNSecureKeyStore.get('@user.data').then(
      res => {
        // console.log(res);
        setEmail(JSON.parse(res).email);
      },
      err => {
        console.log(err);
      },
    );
  };

  const logOutHandler = () => {
    RNSecureKeyStore.remove('@user.token').then(
      res => {
        // console.log(res);
      },
      err => {
        // console.log(err);
      },
    );
    changeAuth(false);
  };

  return (
    <DashboardHeader
      email={email}
      logoutAction={logOutHandler}
      data={userInfo}
    />
  );
};

export default Dashboard;
