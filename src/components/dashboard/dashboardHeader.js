import React, {useContext} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

//custome hook
import {useLocal} from '../../hook/useLocal';

import styles from './style';

const dashboardHeader = props => {
  const local = useLocal();

  const username = props.email.substring(0, props.email.lastIndexOf('@'));

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.logoutBtn} onPress={props.logoutAction}>
        <Text style={{color: '#917BD4'}}>{local.logout}</Text>
      </TouchableOpacity>
      <View style={styles.card}>
        <Image
          source={require('@assets/images/user1.png')}
          style={styles.profile}
        />
        <Text style={styles.username}>{username}</Text>
        <Text style={styles.userEmail}>
          {local.email} : {props.email}
        </Text>
      </View>
    </View>
  );
};

export default dashboardHeader;
