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

// Components imports
import Logo from './../../assets/logo.png';
import styles from './WelcomeScreen.js';

function WelcomeScreen({navigation}) {
  const [keyboardOpen, setKeyboardOpen] = useState(false);
  const [isIDFocused, setIsIDFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const handleKeyBoardShow = () => {
    setKeyboardOpen(true);
  };

  const handleKeyBoardHide = () => {
    setKeyboardOpen(false);
  };

  const handleLogin = () => {
    navigation.navigate('Home');
  };

  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  const handleSignUp = () => {
    navigation.navigate('SignUp');
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
              style={[
                styles.inputContainer,
                {borderColor: isIDFocused ? 'purple' : 'black'},
              ]}
              placeholder="Enter your UID"
              placeholderTextColor={'black'}
              onFocus={() => setIsIDFocused(true)}
              onBlur={() => setIsIDFocused(false)}
            />
            <TextInput
              style={[
                styles.inputContainer,
                {borderColor: isPasswordFocused ? 'purple' : 'black'},
              ]}
              placeholderTextColor={'black'}
              onFocus={() => setIsPasswordFocused(true)}
              onBlur={() => setIsPasswordFocused(false)}
              placeholder="Password"
              secureTextEntry={true}
            />
            <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
              <Text style={{color: 'white', fontSize: 20}}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.forgotPassword}>
              <Text style={{color: 'black'}}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleSignUp}
              style={styles.forgotPassword}>
              <Text style={{color: 'black'}}>
                Do not have an account?Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default WelcomeScreen;
