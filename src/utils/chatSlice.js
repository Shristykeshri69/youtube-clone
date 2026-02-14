import { createSlice } from "@reduxjs/toolkit";
import {live_chat_count} from "./constants";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    message: [], // 👈 plural
  },
  reducers: {
    addMessage: (state, action) => {
    
      state.message.splice(live_chat_count,1);
      // state.message.unshift(action.payload); 
       state.message.push(action.payload);
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
