import { createSlice } from "@reduxjs/toolkit";
import { dummyData } from "../dummyData";

const initialState = {
  dummyData: dummyData,
  selectedUser: null,
};

export const userChatSlice = createSlice({
  name: "Chats",
  initialState,
  reducers: {
    setSelectedUser: (state, action) => {
      state.selectedUser = state.dummyData.find(
        (user) => user.id === action.payload
      );
      // console.log(state.selectedUser);
    },
    addChat: (state, action) => {
      if (state.selectedUser) {
        //Find the selected user in the dummy data array
        const selectedUserIndex = state.dummyData.findIndex(
          (user) => user.id === state.selectedUser.id
        );

        if (selectedUserIndex !== -1) {
          // create a new chat object and push it into selected users chatHistory array
          const newChat = {
            sent: action.payload.sent,
          };
          state.dummyData[selectedUserIndex].chatHistory.push(newChat);
        }
      }
    },
  },
});
