import { useSelector } from "react-redux";
import MovieLists from "./MovieLists";

  const GptMovies = () =>  {
	const movielist=useSelector(store=>store.GPT?.MovieResults);
	const movtitle=useSelector(store=>store.GPT?.GptMovies);
	if(movielist===null)
	return;
	return (
		<div className="bg-black absolute mt-96 bg-opacity-70">
		<MovieLists title={movtitle} cont={movielist}/>
	  </div>
	);
}
export default GptMovies;
  