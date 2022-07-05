import React, {useContext, useState, useEffect} from 'react';

//secure-key-store
import RNSecureKeyStore, {ACCESSIBLE} from 'react-native-secure-key-store';

//lang
import {useLocal} from '../../hook';

import {View, Text, TouchableOpacity} from 'react-native';

//checkbox
import CheckBox from '@react-native-community/checkbox';
import styles from './style';

//context
import {AuthContext} from '@context/context';

const modalHeader = props => {
  //eng checkbox
  const [toggleEnCheckBox, setToggleEnCheckBox] = useState(false);

  //myanmar checkbox
  const [toggleMmCheckBox, setToggleMmCheckBox] = useState(false);

  const {lang, changeLang} = useContext(AuthContext);

  const local = useLocal();

  useEffect(() => {
    getLang();
  }, []);

  const getLang = () => {
    if (lang === 'en') {
      setToggleEnCheckBox(true);
    } else {
      setToggleMmCheckBox(true);
    }
  };

  const enCheckBox = value => {
    if (toggleEnCheckBox === false && toggleMmCheckBox === true) {
      setToggleEnCheckBox(true);
      setToggleMmCheckBox(false);
    }

    //change lang and store
    changeLang('en');
    RNSecureKeyStore.set('@user.lang', 'en', {
      accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY,
    }).then(
      res => {
        // console.log(res);
      },
      err => {
        console.log(err);
      },
    );

    //close modal
    props.modalAction(value);

    // setTimeout(() => {
    //   props.modalAction(value);
    // }, 50);
  };

  const mmCheckBox = value => {
    if (toggleMmCheckBox === false && toggleEnCheckBox === true) {
      setToggleMmCheckBox(true);
      setToggleEnCheckBox(false);
    }

    //change lang and store
    changeLang('mm');
    RNSecureKeyStore.set('@user.lang', 'mm', {
      accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY,
    }).then(
      res => {
        // console.log(res);
      },
      err => {
        console.log(err);
      },
    );

    //close modal
    props.modalAction(value);

    // setTimeout(() => {
    //   props.modalAction(value);
    // }, 50);
  };

  return (
    <View style={styles.container}>
      <View style={styles.modalContainer}>
        <Text style={styles.title}>{local.choose}</Text>
        <View style={styles.langContainer}>
          <TouchableOpacity
            style={styles.langOption}
            onPress={() => enCheckBox(false)}>
            <CheckBox
              disabled={false}
              value={toggleEnCheckBox}
              onValueChange={() => enCheckBox(false)}
              tintColors={{true: '#917BD4'}}
            />
            <Text style={styles.langText}>{local.eng}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.langOption}
            onPress={() => mmCheckBox(false)}>
            <CheckBox
              disabled={false}
              value={toggleMmCheckBox}
              onValueChange={() => mmCheckBox(false)}
              tintColors={{true: '#917BD4'}}
            />
            <Text style={styles.langText}>{local.mm}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default modalHeader;
