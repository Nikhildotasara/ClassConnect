// Necessary imports
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import Snackbar from 'react-native-snackbar';

// Components imports
import Logo from './../../assets/logo.png';
import styles from './SignUpScreen.js';

function SignUpScreen({navigation}) {
  const [keyboardOpen, setKeyboardOpen] = useState(false);
  const [isIDFocused, setIsIDFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [userId, setUserId] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const [isConfirmPasswordFocused, setIsConfirmPasswordFocused] =
    useState(false);
  const handleKeyBoardShow = () => {
    setKeyboardOpen(true);
  };

  const handleKeyBoardHide = () => {
    setKeyboardOpen(false);
  };

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const handleSignUp = () => {
    if (password === confirmPassword && password !== undefined) {
      if (password.trim().length != 0) {
        navigation.navigate('OtpVerification');
      }
    } else {
      Snackbar.show({
        text: 'Passwords did not match😔',
        duration: Snackbar.LENGTH_SHORT,
      });
    }
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      handleKeyBoardShow,
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      handleKeyBoardHide,
    );

    // Clean up listeners
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 20}>
      <ScrollView
        contentInset={{bottom: keyboardOpen ? 2 : 0}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>
          <Image style={styles.logo} source={Logo} />
          <View style={styles.inputWrapper}>
            <TextInput
              placeholderTextColor={'black'}
              style={[
                styles.inputContainer,
                {borderColor: isIDFocused ? 'purple' : 'black'},
              ]}
              placeholder="Enter your UID"
              onFocus={() => setIsIDFocused(true)}
              onBlur={() => setIsIDFocused(false)}
              onChangeText={text => {
                setUserId(text);
              }}
            />
            <TextInput
              placeholderTextColor={'black'}
              style={[
                styles.inputContainer,
                {borderColor: isPasswordFocused ? 'purple' : 'black'},
              ]}
              onFocus={() => setIsPasswordFocused(true)}
              onBlur={() => setIsPasswordFocused(false)}
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={text => {
                setPassword(text);
              }}
            />
            <TextInput
              placeholderTextColor={'black'}
              onChangeText={text => {
                setConfirmPassword(text);
              }}
              style={[
                styles.inputContainer,
                {borderColor: isConfirmPasswordFocused ? 'purple' : 'black'},
              ]}
              onFocus={() => setIsConfirmPasswordFocused(true)}
              onBlur={() => setIsConfirmPasswordFocused(false)}
              placeholder="Confirm Password"
              secureTextEntry={true}
            />
            <TouchableOpacity onPress={handleSignUp} style={styles.loginButton}>
              <Text style={{color: 'white', fontSize: 20}}>Create Account</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleLogin}
              style={styles.forgotPassword}>
              <Text style={{color: 'black'}}>
                Already have an account? Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default SignUpScreen;
