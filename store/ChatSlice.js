import { createSlice } from "@reduxjs/toolkit";
import { dummyData } from "../dummyData";

const initialState = {
  messageData: dummyData,
  selectedUser: null,
};

export const ChatSlice = createSlice({
  name: "Chats",
  initialState,
  reducers: {
    setSelectedUser: (state, action) => {
      state.selectedUser = state.messageData.find(
        (user) => user.id == action.payload
      );
    },
  },
});
