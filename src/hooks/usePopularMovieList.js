import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import options from "../utils/options";
import {addPopularMovies} from "../utils/movieSlice";
import { useEffect } from "react";
const UsePopularMovieList = () =>  {
    const dispatch = useDispatch();
    const movies=useSelector(store=>store.movieList.popularmovies);
    //console.log(movies);
    const list=async ()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
    const json= await data.json();
    dispatch(addPopularMovies(json.results));
    }
    useEffect(()=>{
      !movies && list();
    },[]);
}
  
export default UsePopularMovieList;
  