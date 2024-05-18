import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";
import useMovieList from "../hooks/useMovieList";
import UsePopularMovieList from "../hooks/usePopularMovieList";
import UseTopRatedMovieList from "../hooks/useTopRatedMovieList";
import UseUpcomingMovieList from "../hooks/useUpcomingMovieList";

const Browsing = () =>{
    useMovieList();
    UsePopularMovieList();
    UseTopRatedMovieList();
    UseUpcomingMovieList();
    const moviess=useSelector(store=>store.movieList?.movies);
    return(
        <div>
            <Header/>
            <MainContainer/>
            <SecondaryContainer/>
        </div>
    );
};

export default Browsing;