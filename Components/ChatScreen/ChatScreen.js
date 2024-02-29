import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
    alignItems: 'center',
  },
  topContainer: {
    // backgroundColor: 'red',
    marginBottom: '2%',
    height: '6%',
    width: '100%',
    marginTop: '2%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  leftTopContainer: {
    flexDirection: 'row',
    width: '30%',
    height: '100%',
    alignItems: 'center',
  },
  backButton: {
    height: '100%',
    width: '40%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  backButtonImage: {
    objectFit: 'contain',
    height: '70%',
    width: '80%',
  },
  groupName: {
    fontSize: 18,
    marginLeft: '2%',
    fontWeight: '800',
    color: 'black',
  },
  rightTopContainer: {
    height: '100%',
    width: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  videoButton: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  videoImage: {
    objectFit: 'contain',
    height: '70%',
    width: '70%',
  },
  chatContainer: {
    width: '100%',
  },

  recievedMessage: {
    backgroundColor: '#E9E8EB',
    width: '58%',
    minHeight: 35,
    textAlign: 'center',
    color: 'black',
    fontSize: 17,
    marginBottom: 10,
    borderTopLeftRadius: 80,
    borderRadius: 20,
  },
  sentMessage: {
    backgroundColor: '#3080ED',
    width: '58%',
    minHeight: 35,
    borderRadius: 20,
    color: 'white',
    fontSize: 17,
    textAlign: 'center',
    position: 'relative',
    left: '40%',
    borderTopRightRadius: 47,
    marginBottom: 10,
  },
  chatBoxContainer: {
    width: '100%',
    height: '7%',
    minHeight: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputContainer: {
    width: '80%',
    color: 'black',
    height: '100%',
  },
  addButton: {
    height: '100%',
    width: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonImage: {
    objectFit: 'contain',
    width: '90%',
    height: '90%',
  },
});

export default styles;
