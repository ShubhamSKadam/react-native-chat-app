import { StyleSheet, Text, View } from "react-native";
import SearchInput from "../components/SearchInput";
import FavoritesSection from "../components/FavoritesSection";
import React from "react";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* search Input */}
      <SearchInput />

      {/* FavoritesProfile */}
      <FavoritesSection />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
});
