import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ChatHeader = () => {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.headerTextContainer}>
          <Text style={styles.title}>Trip 1</Text>
        </View>
        <TouchableOpacity>
          <Icon name="more-vert" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.locationContainer}>
        <Image source={require('../component/image.png')} style={styles.image} />
        <View style={styles.locationText}>
          <View style={styles.locationRow}>
            <Text style={styles.subtitle}>From</Text>
            <Text style={styles.placeName}>IGI Airport, T3</Text>
          </View>
          <View style={styles.locationRow}>
            <Text style={styles.subtitle}>To</Text>
            <Text style={styles.placeName}>Sector 28</Text>
          </View>
        </View>
      </View>

      <View style={styles.dateContainer}>
        <View style={styles.dateLine} />
        <Text style={styles.dateText}>November 17, 2024</Text>
        <View style={styles.dateLine} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerTextContainer: {
    flex: 1,
    marginLeft: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  locationText: {
    marginLeft: 16,
  },
  locationRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  subtitle: {
    fontSize: 14,
    color: 'gray',
  },
  placeName: {
    fontSize: 16,
    color: 'black',
    marginLeft: 4,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 16,
  },
  dateText: {
    fontSize: 14,
    color: 'black',
    paddingHorizontal: 8,
    backgroundColor: 'white',
  },
  dateLine: {
    height: 1,
    backgroundColor: 'gray',
    flex: 1,
  },
});

export default ChatHeader;
