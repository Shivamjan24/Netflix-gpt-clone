import { configureStore } from "@reduxjs/toolkit";
import usedreducers from "./userSlice";
import moviereducers from "./movieSlice";

const appStore=configureStore({
    reducer:{
        user:usedreducers,
        movieList:moviereducers,
    }
});

export default appStore;