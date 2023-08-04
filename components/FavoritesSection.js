import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch} from "react-redux";
import { userChatSlice } from "../store/userChatSlice";

function renderFavProfiles(item, navigation, dispatch) {
  function onPressHandler(item, navigation, dispatch) {
    dispatch(userChatSlice.actions.setSelectedUser(item.id));
    navigation.navigate("Chats");
  }

  return (
    <Pressable onPress={() => onPressHandler(item, navigation, dispatch)}>
      <View style={styles.container}>
        <Image source={item.profileImage} style={styles.profileImg} />
        <Text style={styles.profileText}>{item.username}</Text>
      </View>
    </Pressable>
  );
}

const FavoritesSection = ({ dummyData }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <View>
      <FlatList
        data={dummyData}
        renderItem={({ item }) => renderFavProfiles(item, navigation, dispatch)}
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
