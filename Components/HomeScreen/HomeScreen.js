import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: 'white',
    marginTop: '2%',
  },
  topContainer: {
    height: '6%',
    width: '96%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  userName: {
    color: 'black',
    width: '24%',
  },
  userNameHeading: {
    fontSize: 23,
    fontWeight: '900',
    color: 'black',
  },

  settingsButton: {
    height: '70%',
    width: '14%',
  },
  settingsImage: {
    objectFit: 'contain',
    width: '100%',
    height: '100%',
  },
  chatBox: {
    width: '97%',
    alignSelf: 'center',
    maxHeight: 150,
    borderRadius: 20,
    borderWidth: 1,
    flexDirection: 'row',
    marginBottom: '3%',
    maxHeight: 80,
    alignItems: 'center',
    minHeight: 70,
    // borderColor: 'white',
  },
  profilePhotoContainer: {
    height: '85%',
    width: '15%',
    borderRadius: 80,
    borderWidth: 1,
    borderColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profilePhoto: {
    objectFit: 'cover',
    height: '100%',
    width: '100%',
    borderRadius: 80,
  },
  messageContainer: {
    width: '60%',
  },
  timeContainer: {
    width: '22%',
    height: '57%',
    justifyContent: 'center',
  },
  timeText: {
    alignSelf: 'flex-end',
  },
});

export default styles;
