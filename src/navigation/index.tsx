import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  useNavigation,
} from '@react-navigation/native';

import * as React from 'react';
import Feather from 'react-native-vector-icons/Feather';

import {
  ColorSchemeName,
  View,
  Text,
  Image,
  useWindowDimensions,
  Pressable,
} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChatRoomScreen from '../screens/ChatRoomScreen';
import BottomTabNavigator from './BottomTabNavigator';
import NotFoundScreen from '../screens/NotFoundScreen';

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: ChatRoomHeader,
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="ChatRoom"
        component={ChatRoomScreen}
        options={{
          headerTitle: ChatRoomHeader,
          headerBackTitleVisible: false,
        }}
      />

      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{title: 'Oops!'}}
      />
    </Stack.Navigator>
  );
}

const ChatRoomHeader = props => {
  const {width} = useWindowDimensions();

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width - 25,
        marginLeft: -25,
        padding: 10,
        alignItems: 'center',
      }}>
      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg',
        }}
        style={{height: 30, width: 30, borderRadius: 30}}
      />
      <Text
        style={{
          flex: 1,
          textAlign: 'center',
          marginLeft: 10,
          fontWeight: 'bold',
        }}>
        {props.children}
      </Text>

      <Feather
        name="camera"
        size={24}
        color="black"
        style={{marginHorizontal: 10}}
      />
      <Feather
        name="edit-2"
        size={24}
        color="black"
        style={{marginHorizontal: 10}}
      />
    </View>
  );
};
