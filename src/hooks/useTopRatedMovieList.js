import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import options from "../utils/options";
import {addTopMovies} from "../utils/movieSlice";
import { useEffect } from "react";
const UseTopRatedMovieList = () =>  {
    const dispatch = useDispatch();
    const movies=useSelector(store=>store.movieList.topmovies);
    //console.log(movies);
    const list=async ()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    const json= await data.json();
    dispatch(addTopMovies(json.results));
    }
    useEffect(()=>{
      !movies && list();
    },[]);
}
  
export default UseTopRatedMovieList;
  