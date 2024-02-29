import {StyleSheet, Dimensions} from 'react-native';

const screenHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: screenHeight,
    alignItems: 'center',
  },
  logo: {
    objectFit: 'contain',
    height: '40%',
    width: '80%',
  },
  heading: {
    fontSize: 17,
    textAlign: 'center',
    fontWeight: '900',
  },
  otpContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '70%',
  },
  otpBox: {
    borderWidth: 1,
    width: '20%',
    textAlign: 'center',
  },
});

export default styles;
