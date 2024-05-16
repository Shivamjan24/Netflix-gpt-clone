import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import UseMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const Browsing = () =>{
    const moviess=useSelector(store=>store.movieList?.movies);
    UseMovieTrailer();
    return(
        <div>
            <Header/>
            <MainContainer/>
        </div>
    );
};

export default Browsing;