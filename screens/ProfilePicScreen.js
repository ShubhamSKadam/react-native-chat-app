import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

const ProfilePicScreen = () => {
  const user = useSelector((state) => state.Chats.selectedUser);

  const userImage = user.profileImage;
  console.log(userImage);
  return (
    <View>
      <Image source={userImage} style={styles.image} />
    </View>
  );
};

export default ProfilePicScreen;

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 200,
  },
});
