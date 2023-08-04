import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userChatSlice } from "../store/userChatSlice";

function renderingChats(item, itemUserImage, itemProfileImage) {
  return (
    // One Bidirectional Message
    <View>
      {/* Sender */}
      <View style={[styles.senderContainer, styles.messageContainer]}>
        {/*Chat Box  */}
        <View style={[styles.chatBox, styles.senderText]}>
          <Text style={styles.chatText}>{item.sent}</Text>
        </View>

        {/* Profile Image */}
        <View>
          <Image source={itemUserImage} style={styles.profileImage} />
        </View>
      </View>

      {/* Receiver */}
      {item.reply != null ? (
        <View style={[styles.receiverContainer, styles.messageContainer]}>
          {/* Profile Image */}
          <View>
            <Image source={itemProfileImage} style={styles.profileImage} />
          </View>

          {/*Chat Box  */}
          <View style={[styles.chatBox, styles.receiverText]}>
            <Text style={styles.chatText}>{item.reply}</Text>
          </View>
        </View>
      ) : null}
    </View>
  );
}

const ChatScreen = ({ route }) => {
  const user = useSelector((state) => state.Chats.selectedUser);

  const dispatch = useDispatch();

  const { item } = route.params;
  const itemUserImage = user.userImage;
  const itemProfileImage = user.profileImage;

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: user.username,
    });
  }, []);

  const [inputMsg, setInputMsg] = useState("");
  const [chatMsgs, setChatMsgs] = useState(user.chatHistory);

  function textInputHandler(text) {
    setInputMsg(text);
  }

  function sendTextHandler() {
    const tempMsgs = [...chatMsgs];
    setChatMsgs([...tempMsgs, { sent: inputMsg }]);
    dispatch(userChatSlice.actions.addChat({ sent: inputMsg }));
    setInputMsg("");
  }

  console.log(chatMsgs);
  return (
    <View style={styles.container}>
      <FlatList
        data={chatMsgs}
        renderItem={({ item }) =>
          renderingChats(item, itemUserImage, itemProfileImage)
        }
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => `${index}`}
      />
      <View style={styles.InputContainer}>
        <Ionicons name="camera" size={35} color="black" />
        <TextInput
          placeholder="Type Your Message Here..."
          style={styles.textInput}
          onChangeText={textInputHandler}
          value={inputMsg}
        />
        <Pressable onPress={sendTextHandler}>
          <Ionicons name="send" size={35} color="black" />
        </Pressable>
      </View>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  InputContainer: {
    marginTop: 10,
    flexDirection: "row",
    marginBottom: 18,
    height: 50,
    alignItems: "center",
    justifyContent: "space-around",
  },
  textInput: {
    minWidth: 250,
    backgroundColor: "#f1f1f1",
    padding: 14,
    borderRadius: 20,
    fontSize: 18,
  },
  profileImage: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  senderContainer: {
    justifyContent: "flex-end",
  },
  receiverContainer: {
    justifyContent: "flex-start",
  },
  chatBox: {
    backgroundColor: "#f1f1f1",
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 18,
  },
  messageContainer: {
    marginVertical: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  senderText: {
    marginRight: 8,
    maxWidth: 300,
  },
  receiverText: {
    marginLeft: 8,
    maxWidth: 300,
  },
  chatText: {
    fontSize: 18,
  },
});
