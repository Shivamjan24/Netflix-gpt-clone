import { createSlice } from "@reduxjs/toolkit";

const GPT = createSlice({
    name: "GPT",
    initialState:{
        insideGPT:false,
        GptMovies:null,
        MovieResults:null,
    },
    reducers:{
        toggleinside : (state,action)=>{
            state.insideGPT= !state.insideGPT;
        },
        AddMovies : (state,action)=>{
            state.GptMovies=action.payload;
        },
        AddResults : (state,action)=>{
            state.MovieResults=action.payload;
        },
    },
});

export default GPT.reducer;
export const {toggleinside,AddMovies,AddResults}=GPT.actions;
  