import {FlatList, StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import Message from '../components/Message';
import chatRoomData from '../assets/dummy-data/Chats';
import MessageInput from '../components/MessageInput';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';

const ChatRoomScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.page}>
      <FlatList
        data={chatRoomData.messages}
        renderItem={({item}) => <Message message={item} />}
        inverted
      />
      <MessageInput />
    </SafeAreaView>
  );
};

export default ChatRoomScreen;

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
});
