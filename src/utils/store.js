
import {configureStore} from '@reduxjs/toolkit'
import searchSlice from "./searchSlice";
import appslice from './appslice';
import chatSlice from './chatSlice';

const store = configureStore({
    reducer: {
        app: appslice,
        search:searchSlice,
        chat:chatSlice,
        
    },
})

export default store