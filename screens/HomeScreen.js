import { StyleSheet, Text, View } from "react-native";
import SearchInput from "../components/SearchInput";
import FavoritesSection from "../components/FavoritesSection";
import React from "react";
import ChatSection from "../components/ChatSection";
import { dummyData } from "../dummyData";

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
    flex: 1,
    paddingHorizontal: 4,
  },
});
