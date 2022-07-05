import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  card: {
    backgroundColor: '#917BD4',
    width: wp(60),
    alignItems: 'center',
    padding: wp(4),
    borderRadius: wp(5),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  profile: {
    width: wp(30),
    height: wp(30),
    resizeMode: 'cover',
  },
  username: {
    fontSize: wp(6),
    marginTop: hp(1),
    fontWeight: 'bold',
    color: '#fff'
  },
  logoutBtn: {
    position: 'absolute',
    top: hp(4),
    right: wp(8),
  },
  userEmail: {
    color: '#fff',
  },
  
});
export default styles;
