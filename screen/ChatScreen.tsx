import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import ChatBubble from '../component/ChatBubble';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const API_URL = 'https://qa.corider.in/assignment/chat';

  const fetchChatData = async (pageNum) => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const response = await fetch(`${API_URL}?page=${pageNum}`);
      const data = await response.json();

      if (data?.chats?.length > 0) {
        setMessages((prevMessages) => [...data.chats.reverse(), ...prevMessages]);
        setPage(pageNum);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Error fetching chat data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchChatData(0);
  }, []);

  const renderMessage = ({ item }) => (
    <ChatBubble message={item.message} isSender={item.sender === 'self'} />
  );

  const handleLoadMore = () => {
    if (hasMore && !loading) {
      fetchChatData(page + 1);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderMessage}
        inverted
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          loading && <ActivityIndicator size="small" color="#007bff" />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
});

export default ChatScreen;
