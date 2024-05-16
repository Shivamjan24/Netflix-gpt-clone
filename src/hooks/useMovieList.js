import { useDispatch, useSelector } from "react-redux";
import options from "../utils/options";
import { addMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieList= async () =>{
    const dispatch=useDispatch();
    const movies=useSelector(store=>store.movieList.movies);
    console.log(movies);
    const list=async ()=>{
        const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options);
        const json= await data.json();
        dispatch(addMovies(json.results));
    }
    useEffect(()=>{
        !movies && list();
    },[]);
}
export default useMovieList;