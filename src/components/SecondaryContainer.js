import { useSelector } from "react-redux";
import MovieLists from "./MovieLists";

const SecondaryContainer = () =>  {
	const moviess=useSelector(store=>store.movieList)
	return (
	  <div className="bg-black absolute">
		<div className="mt-8 md:-mt-56">
			<MovieLists title="Now Playing" cont={moviess?.movies}/>
			<MovieLists title="Popular" cont={moviess?.popularmovies}/>
			<MovieLists title="Top Rated" cont={moviess?.topmovies}/>
			<MovieLists title="Upcoming" cont={moviess?.upcomingmovies}/>
		</div>
	  </div>
	);
}
  
export default SecondaryContainer;
  