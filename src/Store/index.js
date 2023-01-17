import {configureStore} from "@reduxjs/toolkit";
import eventSlice from './event-slice';
import loginSlice from './login-slice';


const store = configureStore({
    reducer: {login: loginSlice.reducer , event: eventSlice.reducer},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;