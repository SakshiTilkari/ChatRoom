import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ChatBubble = ({ message, isSender }) => {
  return (
    <View style={[styles.messageContainer, isSender ? styles.userMessage : styles.coRiderMessage]}>
      {!isSender && (
        <Image source={require('../component/Profile.png')} style={styles.icon} />
      )}
      <View style={styles.messageBubble}>
        <Text style={styles.messageText}>{message}</Text>
      </View>
      {isSender && (
        <Image source={require('../component/Profile1.png')} style={styles.icon} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    flexDirection: 'row',
    marginVertical: 5,
    alignItems: 'flex-start',
  },
  coRiderMessage: {
    justifyContent: 'flex-start', // Co-rider messages are aligned to the left
  },
  userMessage: {
    justifyContent: 'flex-end', // User messages are aligned to the right
    alignSelf: 'flex-end',
  },
  icon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  userIcon: {
    marginLeft: 10,
  },
  messageBubble: {
    backgroundColor: '#f1f1f1',
    padding: 10,
    borderRadius: 20,
    maxWidth: '70%',
  },
  messageText: {
    fontSize: 16,
    color: 'black',
  },
});

export default ChatBubble;
