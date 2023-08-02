import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import React from "react";

function renderFavProfiles({ item }) {
  return (
    <View style={styles.container}>
      <Image source={item.profileImage} style={styles.profileImg} />
      <Text style={styles.profileText}>{item.username}</Text>
    </View>
  );
}

const FavoritesSection = ({ dummyData }) => {
  return (
    <View>
      <FlatList
        data={dummyData}
        renderItem={renderFavProfiles}
        horizontal={true}
        keyExtractor={(item) => item.id}
      />
    </View>
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
