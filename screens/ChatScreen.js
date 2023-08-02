import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { dummyData } from "../dummyData";

function renderingChats({ item }) {
  return (
    // One Bidirectional Message
    <View>
      {/* Sender */}
      <View style={[styles.senderContainer, styles.messageContainer]}>
        {/*Chat Box  */}
        <View style={[styles.chatBox, styles.senderText]}>
          <Text>{item.sent}</Text>
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
          <Text>{item.reply}</Text>
        </View>
      </View>
    </View>
  );
}

const ChatScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList data={dummyData[0].chatHistory} renderItem={renderingChats} />
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
    padding: 18,
    borderRadius: 18,
  },
  messageContainer: {
    marginVertical: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  senderText: {
    marginRight: 8,
  },
  receiverText: {
    marginLeft: 8,
  },
});
