import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  langHeader: {
    alignItems: 'flex-end',
    position: 'absolute',
    right: wp(7),
    top: hp(2.5),
  },
  langBtn: {
    color: '#917BD4',
  },
});
export default styles;
