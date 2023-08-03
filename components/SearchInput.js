import { View, TextInput, StyleSheet, Image } from "react-native";
import React from "react";

const SearchInput = ({ handleSearch }) => {
  return (
    <View style={styles.searchContainer}>
      <Image
        source={require("../assets/Images/searchIcon.png")}
        style={styles.image}
      />
      <TextInput
        placeholder="Search"
        style={styles.textInput}
        onChangeText={(text) => handleSearch(text)}
      />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    backgroundColor: "red",
    marginHorizontal: 8,
    marginVertical: 4,
    paddingVertical: 8,
    paddingHorizontal: 4,
    borderRadius: 8,
    backgroundColor: "#f1f1f1",
    alignItems: "center",
  },
  image: {
    height: 15,
    width: 15,
    marginLeft: 8,
  },
  textInput: {
    marginLeft: 8,
    fontSize: 18,
  },
});
