import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ChatHeader from './component/ChatHeader';
import ChatScreen from './screen/ChatScreen';
import ChatFooter from './component/ChatFooter';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ChatHeader />
      <ChatScreen />
      <ChatFooter />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
});

export default App;
