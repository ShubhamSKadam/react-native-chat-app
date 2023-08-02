import { StyleSheet, Text, View } from "react-native";
import SearchInput from "../components/SearchInput";
import FavoritesSection from "../components/FavoritesSection";
import React from "react";
import ChatSection from "../components/ChatSection";

const dummyData = [
  {
    id: 1,
    username: "Amlan",
    profileImage: require("../assets/Images/profilePics/batman.jpg"),
    chatHistory: [
      { sent: "Hi Amlan, How are you ?", reply: "I'm Fine Bro, wbu ?" },
    ],
    timeStamp: "22:10",
  },
  {
    id: 2,
    username: "Aditya",
    profileImage: require("../assets/Images/profilePics/ironMan.jpeg"),
    chatHistory: [
      { sent: "Hi Amlan, How are you ?", reply: "I'm Fine Bro, wbu ?" },
    ],
    timeStamp: "22:10",
  },
  {
    id: 3,
    username: "Amlan",
    profileImage: require("../assets/Images/profilePics/batman.jpg"),
    chatHistory: [
      { sent: "Hi Amlan, How are you ?", reply: "I'm Fine Bro, wbu ?" },
    ],
    timeStamp: "22:10",
  },
  {
    id: 4,
    username: "Aditya",
    profileImage: require("../assets/Images/profilePics/ironMan.jpeg"),
    chatHistory: [
      { sent: "Hi Amlan, How are you ?", reply: "I'm Fine Bro, wbu ?" },
    ],
    timeStamp: "22:10",
  },
  {
    id: 5,
    username: "Amlan",
    profileImage: require("../assets/Images/profilePics/batman.jpg"),
    chatHistory: [
      { sent: "Hi Amlan, How are you ?", reply: "I'm Fine Bro, wbu ?" },
    ],
    timeStamp: "22:10",
  },
  {
    id: 6,
    username: "Aditya",
    profileImage: require("../assets/Images/profilePics/ironMan.jpeg"),
    chatHistory: [
      { sent: "Hi Amlan, How are you ?", reply: "I'm Fine Bro, wbu ?" },
    ],
    timeStamp: "22:10",
  },
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* search Input */}
      <SearchInput />

      {/* FavoritesProfile */}
      <FavoritesSection dummyData={dummyData} />

      {/* Chat section */}
      <ChatSection dummyData={dummyData} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex:1,
  },
});
