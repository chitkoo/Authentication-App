import React, {useContext, useState} from 'react';

import CheckBox from '@react-native-community/checkbox';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

//lang
import {useLocal} from '../../hook';

//context
import {AuthContext} from '@context/context';

import styles from './style';

const registerHeader = props => {
  //next btn co bl state ka click tr ll kyi tr
  const {nextAction} = useContext(AuthContext);

  //checkbox
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const local = useLocal();

  const savePass = () => {
    setToggleCheckBox(!toggleCheckBox);
  };

  return (
    <View style={styles.container}>
      {/* title section */}
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{local.security}</Text>
      </View>

      {/* input section */}
      <View style={styles.inputContainer}>
        <TextInput
          secureTextEntry={true}
          value={props.passVal}
          onChangeText={props.onChangePass}
          style={styles.passInput}
          placeholder={local.passPlaceholder}
          placeholderTextColor={'#917BD4'}
        />
        {nextAction === 'Register' ? (
          <TextInput
            secureTextEntry={true}
            value={props.confirmPassVal}
            onChangeText={props.onChangeConfirmPass}
            style={styles.passInput}
            placeholder={local.confirmPassPlaceholder}
            placeholderTextColor={'#917BD4'}
          />
        ) : null}
      </View>

      {/* checkbox */}
      {nextAction === 'Login' ? (
        <TouchableOpacity style={styles.checkBoxContainer} onPress={savePass}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={savePass}
            tintColors={{true: '#917BD4', false: '#917BD4'}}
          />
          <Text style={styles.savePassTxt}>{local.rememberPass}</Text>
        </TouchableOpacity>
      ) : null}

      {/* reg button */}
      <View style={styles.btnContainer}>
        {nextAction === 'Login' ? (
          <TouchableOpacity
            disabled={props.loginBtnOption}
            style={
              props.loginBtnOption
                ? [styles.btn, {backgroundColor: 'rgba(0,0,0,0.5)'}]
                : styles.btn
            }
            onPress={props.logInAction}>
            <Text style={styles.btnTxt}>{local.loginBtnTxt}</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            disabled={props.regBtnOption}
            style={
              props.regBtnOption
                ? [styles.btn, {backgroundColor: 'rgba(0,0,0,0.5)'}]
                : styles.btn
            }
            onPress={props.signUpAction}>
            <Text style={styles.btnTxt}>{local.regBtnTxt}</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* go back */}
      <TouchableOpacity style={styles.goBackBtn} onPress={props.goBackAction}>
        <Text style={{color: '#917BD4'}}>{local.back}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default registerHeader;
