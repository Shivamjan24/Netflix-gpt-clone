import { configureStore } from "@reduxjs/toolkit";
import usedreducers from "./userSlice";
import moviereducers from "./movieSlice";
import GPTreducers from "./GPTSlice";

const appStore=configureStore({
    reducer:{
        user:usedreducers,
        movieList:moviereducers,
        GPT:GPTreducers,
    }
});

export default appStore;