import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import { dummyData } from "../dummyData";
import { Ionicons } from "@expo/vector-icons";

function renderingChats({ item }) {
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
          <Image source={dummyData[0].userImage} style={styles.profileImage} />
        </View>
      </View>

      {/* Receiver */}
      <View style={[styles.receiverContainer, styles.messageContainer]}>
        {/* Profile Image */}
        <View>
          <Image
            source={dummyData[0].profileImage}
            style={styles.profileImage}
          />
        </View>

        {/*Chat Box  */}
        <View style={[styles.chatBox, styles.receiverText]}>
          <Text style={styles.chatText}>{item.reply}</Text>
        </View>
      </View>
    </View>
  );
}

const ChatScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={dummyData[0].chatHistory}
        renderItem={renderingChats}
        showsVerticalScrollIndicator={false}
      />
      <View style={styles.InputContainer}>
        <Ionicons name="camera" size={35} color="black" />
        <TextInput
          placeholder="Type Your Message Here..."
          style={styles.textInput}
        />
        <Ionicons name="send" size={35} color="black" />
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
    padding: 18,
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
