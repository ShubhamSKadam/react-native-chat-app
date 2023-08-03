import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

function renderFavProfiles(item, navigation) {
  console.log("renderFavProfiles", item);
  return (
    <Pressable onPress={() => navigation.navigate("Chats", { item })}>
      <View style={styles.container}>
        <Image source={item.profileImage} style={styles.profileImg} />
        <Text style={styles.profileText}>{item.username}</Text>
      </View>
    </Pressable>
  );
}

const FavoritesSection = ({ dummyData }) => {
  const navigation = useNavigation();
  return (
    <View>
      <FlatList
        data={dummyData}
        renderItem={({ item }) => renderFavProfiles(item, navigation)}
        horizontal={true}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
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
