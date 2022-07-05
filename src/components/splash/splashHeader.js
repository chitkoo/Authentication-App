import React from 'react';
import {View, Text, Image} from 'react-native';

//styles
import styles from './style';

const splashHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Image
          style={styles.developerImage}
          source={require('@assets/images/user5.png')}
        />
        <Text style={styles.developerName}>Our App</Text>
      </View>
    </View>
  );
};

export default splashHeader;
