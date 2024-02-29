import React from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
// import profilePhoto from './../../assets/profile.png';
import dots from './../../assets/dots.png';
import styles from './HomeScreen';

const data = [
  {
    groupId: 1,
    groupName: 'Nikhil',
    // profilePhoto: profilePhoto,
    messsage: 'This is message',
  },
  {
    groupId: 2,
    groupName: 'Nikhil',
    // profilePhoto: profilePhoto,
    messsage: 'This is message',
  },
  {
    groupId: 3,
    groupName: 'Nikhil',
    // profilePhoto: profilePhoto,
    messsage: 'This is message',
  },
  {
    groupId: 4,
    groupName: 'Nikhil',
    // profilePhoto: profilePhoto,
    messsage: 'This is message',
  },
  {
    groupId: 5,
    groupName: 'Nikhil',
    // profilePhoto: profilePhoto,
    messsage: 'This is message',
  },
  {
    groupId: 6,
    groupName: 'Nikhil',
    // profilePhoto: profilePhoto,
    messsage: 'This is message',
  },
  {
    groupId: 7,
    groupName: 'Nikhil',
    // profilePhoto: profilePhoto,
    messsage: 'This is message',
  },
  {
    groupId: 8,
    groupName: 'Nikhil',
    // profilePhoto: profilePhoto,
    messsage: 'This is message',
  },
  {
    groupId: 9,
    groupName: 'Nikhil',
    // profilePhoto: profilePhoto,
  },
  {
    groupId: 10,
    groupName: 'Nikhil',
    // profilePhoto: profilePhoto,
  },
  {
    groupId: 11,
    groupName: 'Nikhil',
    // profilePhoto: profilePhoto,
  },
  {
    groupId: 12,
    groupName: 'Nikhil',
    // profilePhoto: profilePhoto,
  },
  {
    groupId: 13,
    groupName: 'Nikhil',
    // profilePhoto: profilePhoto,
  },
];

function HomeScreen({navigation}) {
  const handleChat = () => {
    navigation.navigate('ChatScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.userName}>
          Heelo <Text style={styles.userNameHeading}>Nikhil</Text>
        </Text>

        <TouchableOpacity style={styles.settingsButton}>
          <Image style={styles.settingsImage} source={dots} />
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}>
        {data.map(item => (
          <TouchableOpacity
            key={item.groupId}
            onPress={handleChat}
            style={styles.chatBox}>
            <View style={styles.profilePhotoContainer}>
              {/* <Image style={styles.profilePhoto} source={item.profilePhoto} /> */}
            </View>

            <View style={styles.messageContainer}>
              <Text>{item.groupName}</Text>
              <Text>{item.messsage}</Text>
            </View>

            <View style={styles.timeContainer}>
              <Text style={styles.timeText}>09:59</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

export default HomeScreen;
