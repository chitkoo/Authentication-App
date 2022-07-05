import React, {useState, useEffect, useContext} from 'react';

//lang
import {useLocal} from '../../../hook/useLocal';

//context
import {AuthContext} from '@context/context';

//comp
import LoginHeader from '@components/login/loginHeader';
import {View, Text, TouchableOpacity} from 'react-native';
import ModalHeader from '@components/modal/modalHeader';

import styles from './Style';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [action, setAction] = useState('Login');
  const [showModal, setShowModal] = useState(false);

  const {changeNextAction, changeLang, lang} = useContext(AuthContext);

  const local = useLocal();

  // chnage ui text
  const btnHandler = () => {
    if (action === 'Login') {
      setAction('Register');
    } else if (action === 'Register') {
      setAction('Login');
    }
  };

  //next btn co bl state ka click ll po tr
  const nextActionHandler = () => {
    if (action === 'Login') {
      changeNextAction('Login');
    } else if (action === 'Register') {
      changeNextAction('Register');
    }
    navigation.navigate('Register', {email: email});
  };

  const btnOption = email === '';

  const modalHandler = value => {
    setShowModal(value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.langHeader}>
        <TouchableOpacity
          
          onPress={() => modalHandler(true)}>
          <Text style={styles.langBtn}>{lang === 'en' ? local.eng : local.mm}</Text>
        </TouchableOpacity>
      </View>

      {/* login screen */}
      <LoginHeader
        emailVal={email}
        onChangeEmail={value => setEmail(value)}
        btnAction={btnHandler}
        nextBtnAction={nextActionHandler}
        btnOption={btnOption}
        // langAction={langHandler}
        action={action}
      />

      {/* alert modal */}
      {showModal && <ModalHeader modalAction={modalHandler} />}
    </View>
  );
};

export default Login;
