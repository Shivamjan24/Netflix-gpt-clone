import { createSlice } from "@reduxjs/toolkit";


const movieList=createSlice({
    name:"movieList",
    initialState:{
        movies:null,
        movietrailer:null,
        popularmovies:null,
        topmovies:null,
        upcomingmovies:null,
    },
    reducers:{
        addMovies : (state,action) =>{
            state.movies=action.payload;
        },
        addMovieTrailer : (state,action) =>{
            state.movietrailer=action.payload;
        },
        addPopularMovies : (state,action) =>{
            state.popularmovies=action.payload;
        },
        addTopMovies : (state,action) =>{
            state.topmovies=action.payload;
        },
        addUpcomingMovies : (state,action) =>{
            state.upcomingmovies=action.payload;
        },
    }
});

export default movieList.reducer;
export const {addMovies,addMovieTrailer,addPopularMovies,addTopMovies,addUpcomingMovies} = movieList.actions;