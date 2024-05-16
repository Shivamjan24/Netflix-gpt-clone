import { createSlice } from "@reduxjs/toolkit";


const movieList=createSlice({
    name:"movieList",
    initialState:{
        movies:null,
        movietrailer:null,
    },
    reducers:{
        addMovies : (state,action) =>{
            state.movies=action.payload;
        },
        addMovieTrailer : (state,action) =>{
            state.movietrailer=action.payload;
        },
    }
});

export default movieList.reducer;
export const {addMovies,addMovieTrailer} = movieList.actions;