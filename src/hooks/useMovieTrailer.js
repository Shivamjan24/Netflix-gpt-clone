import { useDispatch, useSelector } from "react-redux";
import options from "../utils/options";
import { addMovieTrailer } from "../utils/movieSlice";
import { useEffect } from "react";

const UseMovieTrailer = (id) =>  {
    const dispatch=useDispatch();
    const item=useSelector(store=>store.movieList?.movietrailer);
    //console.log(item);
    const Trailer = async ()=>{
        const data= await fetch('https://api.themoviedb.org/3/movie/'+id+'/videos?language=en-US', options)
        const json= await data.json();
        const trail=json?.results.filter(vid=>vid.type==="Trailer");
        const maint= trail.length ? trail[0] : json.results[0]
        console.log(maint);
        dispatch(addMovieTrailer(maint));
    }
    useEffect(()=>{
        Trailer();
    },[]);
}
  
export default UseMovieTrailer;
  