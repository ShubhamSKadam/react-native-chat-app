import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import React from "react";

function renderChatData({ item }) {
  return (
    //container
    <View style={styles.container}>
      {/* Profile Image */}
      <View>
        <Image source={item.profileImage} style={styles.imageProfile} />
      </View>

      {/* Name and recent chat */}
      <View>
        <View>
          <Text style={styles.usernameText}>{item.username}</Text>
        </View>

        <View style={styles.chatHistoryContainer}>
          <Text style={styles.grayText}>{item.chatHistory[0].sent}</Text>
          <Text style={styles.grayText}>{item.timeStamp}</Text>
        </View>
      </View>
    </View>
  );
}

const ChatSection = ({ dummyData }) => {
  return (
    <View style={styles.listContainer}>
      <FlatList data={dummyData} renderItem={renderChatData} />
    </View>
  );
};

export default ChatSection;

const styles = StyleSheet.create({
  listContainer: {},
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
  },
  imageProfile: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },
  usernameText: {
    fontSize: 18,
  },
  chatHistoryContainer: {
    flexDirection: "row",
  },
  grayText: {
    color: "gray",
  },
});
