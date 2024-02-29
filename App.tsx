// Necessary imports
import React, { useEffect } from 'react'
import { View,Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Components imports

import WelcomeScreen from "./Components/WelcomeScreen/WelcomeScreen.jsx";
import SignUpScreen from "./Components/SignUpScreen/SignUpScreen.jsx";
import HomeScreen from "./Components/HomeScreen/HomeScreen.jsx";
import OtpVerification from "./Components/OtpVerification/OtpVerification.jsx";
import ChatScreen from "./Components/ChatScreen/ChatScreen.jsx";

const Stack=createNativeStackNavigator();

function App() {

  useEffect(()=>{
    console.log("App started")
  })
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' options={{headerShown:false}} component={WelcomeScreen} />
        <Stack.Screen name='SignUp' options={{headerShown:false}} component={SignUpScreen} />
        <Stack.Screen name='OtpVerification' options={{headerShown:false}} component={OtpVerification} />
        <Stack.Screen name='Home' options={{headerShown:false}} component={HomeScreen} />
        <Stack.Screen name='ChatScreen' options={{headerShown:false}} component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
