import {Image, StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
const ChatRoomItem = ({chatRoom}) => {
  const user = chatRoom.users[1];

  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('ChatRoom', {id: chatRoom.id});
  };

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: user.imageUri,
        }}
      />

      {chatRoom.newMessages && (
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>{chatRoom.newMessages}</Text>
        </View>
      )}

      <View style={styles.rightContainer}>
        <View style={styles.row}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.text}>{chatRoom.lastMessage.createdAt}</Text>
        </View>
        <Text numberOfLines={1} style={styles.text}>
          {chatRoom.lastMessage.content}
        </Text>
      </View>
    </Pressable>
  );
};

export default ChatRoomItem;
