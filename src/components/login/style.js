import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    position: 'relative',
  },
  titleContainer: {
    marginTop: hp(12),
  },
  langBtn: {
    position: 'absolute',
    top: hp(3),
    right: wp(8),
  },
  title: {
    fontWeight: 'bold',
    fontSize: hp(4),
    color: '#917BD4',
  },
  inputContainer: {
    marginTop: hp(12),
    width: wp(80),
  },
  input: {
    borderWidth: wp(0.4),
    paddingHorizontal: wp(5),
    fontSize: wp(5),
    borderColor: '#917BD4',
    borderRadius: wp(3),
    color: '#917BD4',
  },
  nextBtn: {
    marginTop: hp(16),
    width: wp(35),
    alignItems: 'center',
    backgroundColor: '#917BD4',
    paddingVertical: hp(1),
    borderRadius: wp(3),
  },
  btnTxt: {
    fontSize: wp(5),
    color: '#fff',
  },
  regTextContainer: {
    flexDirection: 'row',
    marginTop: hp(3),
  },
  haveAccTxt:{
    color:'#917BD4'
  },
  regTxt: {
    color: '#67A751',
    marginLeft: wp(1),
    fontWeight: 'bold'
  },
  footerContainer: {
    marginTop: hp(15),
    flexDirection: 'row',
  },
  developer: {
    color: '#67A751',
    fontWeight:'bold'
  },
});
export default styles;
