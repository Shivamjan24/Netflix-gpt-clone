import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import options from "../utils/options";
import {addUpcomingMovies} from "../utils/movieSlice";
import { useEffect } from "react";
const UseUpcomingMovieList = () =>  {
    const dispatch = useDispatch();
    const movies=useSelector(store=>store.movieList.upcomingmovies);
    //console.log(movies);
    const list=async ()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
    const json= await data.json();
    dispatch(addUpcomingMovies(json.results));
    }
    useEffect(()=>{
      !movies && list();
    },[]);
}
  
export default UseUpcomingMovieList;
  