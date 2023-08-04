import { StyleSheet, Text, View, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const ProfilePicScreen = () => {
  const navigation = useNavigation();

  const user = useSelector((state) => state.Chats.selectedUser);
  useLayoutEffect(() => {
    navigation.setOptions({
      title: user.username,
    });
  });

  const userImage = user.profileImage;
  console.log(userImage);
  return (
    <View style={styles.imageContainer}>
      <Image source={userImage} style={styles.image} />
    </View>
  );
};

export default ProfilePicScreen;

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 300,
    width: 300,
    borderRadius: 150,
  },
});
