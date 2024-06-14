import {Image, StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import ChatRoomItem from '../components/ChatRoomItem';
import ChatRoomsData from '../assets/dummy-data/ChatRooms';

const HomeScreen = () => {
  return (
    <View style={styles.page}>
      <FlatList
        data={ChatRoomsData}
        renderItem={({item}) => <ChatRoomItem chatRoom={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
});
