import { configureStore } from "@reduxjs/toolkit";
import { ChatSlice } from "./ChatSlice";

export const store = configureStore({
  reducer: {
    Chats: ChatSlice.reducer,
  },
});
