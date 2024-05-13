import { configureStore } from "@reduxjs/toolkit";
import usedreducers from "./userSlice"

const appStore=configureStore({
    reducer:{
        user:usedreducers
    }
});

export default appStore;