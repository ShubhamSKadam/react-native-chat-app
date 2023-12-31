import { StyleSheet, View } from "react-native";
import { useState } from "react";
import SearchInput from "../components/SearchInput";
import FavoritesSection from "../components/FavoritesSection";
import ChatSection from "../components/ChatSection";
import { useSelector } from "react-redux";

const HomeScreen = () => {
  // retrieving the dummyData from the store
  const dummyData = useSelector((state) => state.Chats.dummyData);

  const [searchText, setSearchText] = useState("");
  const [filterChatData, setFilterChatData] = useState(dummyData);

  const handleSearch = (text) => {
    setSearchText(text);

    const filteredData = dummyData.filter((item) =>
      item.username.toLowerCase().includes(text.toLowerCase())
    );

    setFilterChatData(filteredData);
  };

  return (
    <View style={styles.container}>
      {/* search Input */}
      <SearchInput handleSearch={handleSearch} />

      {/* FavoritesProfile */}
      <FavoritesSection dummyData={filterChatData} />

      {/* Chat section */}
      <ChatSection dummyData={filterChatData} />
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
