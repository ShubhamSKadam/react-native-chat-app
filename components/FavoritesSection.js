import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const dummyData = [
  {
    id: 1,
    username: "Amlan",
    profileImage: require("../assets/Images/profilePics/batman.jpg"),
  },
  {
    id: 2,
    username: "Aditya",
    profileImage: require("../assets/Images/profilePics/ironMan.jpeg"),
  },
  {
    id: 3,
    username: "Amlan",
    profileImage: require("../assets/Images/profilePics/batman.jpg"),
  },
  {
    id: 4,
    username: "Aditya",
    profileImage: require("../assets/Images/profilePics/ironMan.jpeg"),
  },
  {
    id: 5,
    username: "Amlan",
    profileImage: require("../assets/Images/profilePics/batman.jpg"),
  },
  {
    id: 6,
    username: "Aditya",
    profileImage: require("../assets/Images/profilePics/ironMan.jpeg"),
  },
];

function renderFavProfiles({ item }) {
  return (
    <View style={styles.container}>
      <Image source={item.profileImage} style={styles.profileImg} />
      <Text style={styles.profileText}>{item.username}</Text>
    </View>
  );
}

const FavoritesSection = () => {
  return (
    <FlatList
      data={dummyData}
      renderItem={renderFavProfiles}
      horizontal={true}
    />
  );
};

export default FavoritesSection;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 20,
    alignItems: "center",
  },
  profileImg: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  profileText: {
    color: "gray",
    marginVertical: 4,
    fontWeight: "400",
  },
});
