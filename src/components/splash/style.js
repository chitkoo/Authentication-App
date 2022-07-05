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
    backgroundColor: '#E5EBFA',
  },
  infoContainer: {
    width: wp(50),
    height: wp(48),
    backgroundColor: '#aaee33',
    alignItems: 'center',
    padding: wp(3),
    borderRadius: wp(2),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  developerImage: {
    width: wp(30),
    height: wp(30),
    marginBottom: hp(2),
  },
  developerName: {
    fontSize: wp(5),
  },
});

export default styles;
