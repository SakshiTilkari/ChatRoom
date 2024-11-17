import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ChatFooter = () => {
  return (
    <View style={styles.footer}>
      <TextInput style={styles.input} placeholder="Type a message" />
      <TouchableOpacity>
        <Icon name="attachment" size={24} color="gray" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="camera-alt" size={24} color="gray" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="send" size={24} color="blue" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginRight: 8,
  },
});

export default ChatFooter;
