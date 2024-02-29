import {StyleSheet} from 'react-native';

import {Dimensions} from 'react-native';

const screenHeigt = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    // height: '100%',
    backgroundColor: 'white',
    height: screenHeigt,
    alignItems: 'center',
  },
  logo: {
    objectFit: 'contain',
    height: '50%',
    width: '70%',
  },
  inputWrapper: {
    // backgroundColor: 'black',
    width: '80%',
    height: '35%',
    justifyContent: 'space-around',
  },
  inputContainer: {
    width: '100%',
    borderRadius: 10,
    fontSize: 18,
    color: 'black',
    // borderColor: 'purple',
    borderWidth: 1,
  },
  loginButton: {
    height: '20%',
    width: '50%',
    alignSelf: 'center',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9978FD',
    backgroundColor: 'black',
  },
  forgotPassword: {
    alignItems: 'center',
    width: '65%',
    alignSelf: 'center',
  },
});

export default styles;
