import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  titleContainer: {
    marginTop: hp(15),
    width: wp(85),
    alignItems: 'flex-start',
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: hp(4),
    color: '#917BD4',
  },
  inputContainer: {
    width: wp(80),
    marginTop: hp(10),
  },
  passInput: {
    borderWidth: wp(0.4),
    paddingHorizontal: wp(5),
    fontSize: wp(5),
    marginBottom: hp(4),
    borderColor: '#917BD4',
    borderRadius: wp(3),
    color: '#917BD4',
  },
  savePassTxt: {
    color: '#917BD4',
  },
  btnContainer: {
    marginTop: hp(8),
    width: wp(40),
    alignItems: 'center',
  },
  btn: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: hp(6.5),
    borderRadius: wp(3),
    paddingVertical: hp(0.6),
    backgroundColor: '#917BD4',
  },
  btnTxt: {
    fontSize: wp(5),
    color: '#fff'
  },
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp(75),
  },
  goBackBtn: {
    marginTop: hp(4.5),
    width: wp(15),
    alignItems: 'center',
  },
});
export default styles;
