import { configureStore } from "@reduxjs/toolkit";
import { userChatSlice } from "./userChatSlice";

export const store = configureStore({
  reducer: {
    Chats: userChatSlice.reducer,
  },
});
