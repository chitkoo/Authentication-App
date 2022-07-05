import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#rgba(0,0,0,0.3)',
    width: wp(100),
    height: hp(100),
   position: 'absolute'
  },
  modalContainer: {
    backgroundColor: '#fff',
    width: wp(50),
    height: hp(20),
    alignItems: 'center',
    padding: wp(2),
    borderRadius: wp(2),
  },
  title: {
    fontWeight: 'bold',
    fontSize: wp(5),
  },
  langContainer: {
    width: '80%',
    height: '80%',
    alignItems: 'center',
    padding: hp(2),
  },
  langOption: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  langText: {
    fontSize: wp(5),
  },
});
export default styles;
