
import { createSlice } from '@reduxjs/toolkit';

const appslice = createSlice({
    name:'app',
    initialState:{
        isMenuOpen:true,
        videos:[],
    },
    reducers:{
        toggleMenu:(state)=>{
            state.isMenuOpen = !state.isMenuOpen
        },
        setVideos:(state,action)=>{
            state.videos = action.payload
        },
        closeMenu:(state)=>{
            state.isMenuOpen=false;
        }
    }

})

export const {setVideos, toggleMenu,closeMenu} = appslice.actions
export default appslice.reducer;