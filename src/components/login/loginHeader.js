import React from 'react';

//lang
import {useLocal} from '../../hook';

import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './style';

const loginHeader = props => {
  const local = useLocal();

  return (
    <View style={styles.container}>
      {/* lang btn */}
      {/* <TouchableOpacity
        style={styles.langBtn}
        onPress={() => props.langAction('en')}>
        <Text>English</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.langBtn, {top: 50}]}
        onPress={() => props.langAction('mm')}>
        <Text>Myanmar</Text>
      </TouchableOpacity> */}

      {/* title section */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          {props.action === 'Login' ? local.login : local.register}
        </Text>
      </View>

      {/* input section */}
      <View style={styles.inputContainer}>
        <TextInput
          value={props.emailVal}
          onChangeText={props.onChangeEmail}
          placeholder={local.emailPlaceholder}
          style={styles.input}
          placeholderTextColor={'#917BD4'}
        />
      </View>

      {/* button */}
      <TouchableOpacity
        disabled={props.btnOption}
        style={
          props.btnOption
            ? [styles.nextBtn, {backgroundColor: 'rgba(0,0,0,0.5)'}]
            : styles.nextBtn
        }
        onPress={props.nextBtnAction}>
        <Text style={styles.btnTxt}>{local.next}</Text>
      </TouchableOpacity>

      {/* reg text */}
      <View style={styles.regTextContainer}>
        <Text style={styles.haveAccTxt}>
          {props.action === 'Login'
            ? local.regTxt
            : local.loginTxt}
        </Text>
        <TouchableOpacity onPress={props.btnAction}>
          <Text style={styles.regTxt}>
            {props.action === 'Login' ? local.regBtnTxt : local.loginBtnTxt}
          </Text>
        </TouchableOpacity>
      </View>

      {/* footer text */}
      <View style={styles.footerContainer}>
        <Text style={{color: '#917BD4'}}>Developed by </Text>
        <Text style={styles.developer}>Chit Ko</Text>
      </View>
    </View>
  );
};

export default loginHeader;
