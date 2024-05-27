import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";
import useMovieList from "../hooks/useMovieList";
import UsePopularMovieList from "../hooks/usePopularMovieList";
import UseTopRatedMovieList from "../hooks/useTopRatedMovieList";
import UseUpcomingMovieList from "../hooks/useUpcomingMovieList";
import GptSearchPage from "./GptSearchPage";

const Browsing = () =>{
    useMovieList();
    UsePopularMovieList();
    UseTopRatedMovieList();
    UseUpcomingMovieList();
    const isgpt=useSelector(store=>store.GPT?.insideGPT)
    const moviess=useSelector(store=>store.movieList?.movies);
    return(
        <div>
            <Header/>
            {isgpt ? <GptSearchPage/> : <>
            <MainContainer/>
            <SecondaryContainer/>
            </>}
        </div>
    );
};

export default Browsing;