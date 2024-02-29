import React, {useRef, useState} from 'react';
import {View, Text, Image, TextInput} from 'react-native';
import Logo from './../../assets/logo.png';
import styles from './OtpVerification.js';

function OtpVerification({navigation}) {
  const [otpValues, setOtpValues] = useState(['', '', '', '']);
  const refs = useRef([]);

  const handleInputValue = (index, value) => {
    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);

    if (value !== '' && index === otpValues.length - 1) {
      // yahan pe phele backend se verify krna hoga
      navigation.navigate('Home');
    } else if (value !== '' && index < otpValues.length - 1) {
      refs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (event, index) => {
    if (event.key === 'Backspace' && otpValues[index] === '' && index > 0) {
      refs.current[index - 1].focus();
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={Logo} />

      <Text style={styles.heading}>
        Enter the OTP sent to your registered mobile number
      </Text>

      <View style={styles.otpContainer}>
        {Array.from(otpValues).map((value, index) => (
          <TextInput
            keyboardType="numeric"
            style={[styles.otpBox]}
            key={index}
            placeholder="X"
            maxLength={1}
            value={value}
            ref={el => (refs.current[index] = el)}
            onChange={e => handleInputValue(index, e.target.value)}
            onKeyDown={e => handleKeyDown(e, index)}
          />
        ))}
      </View>
    </View>
  );
}

export default OtpVerification;
