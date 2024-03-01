import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import {request, PERMISSIONS} from 'react-native-permissions';

import DocumentPicker, {
  pick,
  pickDirectory,
} from 'react-native-document-picker';

import styles from './ChatScreen.js';

import backButton from './../../assets/backButton.png';
import videoButton from './../../assets/video.png';
import addButton from './../../assets/addButton.png';
import send from './../../assets/send.png';
function ChatScreen({navigation}) {
  const messages = ['Hii', 'Hello Nikhil'];

  const handleBack = () => {
    navigation.navigate('Home');
  };

  const handleSend = () => {
    // yahan kuch to krna hai
  };

  const handleMediaButton = () => {
    console.log('Media button pressed');

    request(PERMISSIONS.ANDROID.ACCESS_MEDIA_LOCATION).then(result => {
      console.log(result);

      const picked = pick({allowMultiSelection: true}).then(result => {
        console.log(result);
      });
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.leftTopContainer}>
          <TouchableOpacity onPress={handleBack} style={styles.backButton}>
            <Image style={styles.backButtonImage} source={backButton} />
          </TouchableOpacity>
          <Text style={styles.groupName}>Nikhil</Text>
        </View>
        <View style={styles.rightTopContainer}>
          <TouchableOpacity style={styles.videoButton}>
            <Image style={styles.videoImage} source={videoButton} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.chatContainer}>
        <Text style={styles.recievedMessage}>Hello Nikhil this is Neha!! </Text>
        <Text style={styles.sentMessage}>Hello Neha!!How are you?</Text>

        <Text style={styles.recievedMessage}>I am fine Nikhil.Thanks!!</Text>

        <Text style={styles.sentMessage}>Awesome!!I am fine too😊</Text>
      </ScrollView>

      <View style={styles.chatBoxContainer}>
        <TouchableOpacity onPress={handleMediaButton} style={styles.addButton}>
          <Image style={styles.addButtonImage} source={addButton} />
        </TouchableOpacity>
        <TextInput
          style={styles.inputContainer}
          placeholderTextColor={'black'}
          placeholder="Your message here..."
        />

        <TouchableOpacity onPress={handleSend}>
          <Image source={send} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ChatScreen;
