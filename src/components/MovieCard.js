import { MOVIE_POSTER } from "../utils/constants";

const MovieCard = ({pic}) =>  {
	if(!pic)
		return null;
	return (
		<div className="p-2 w-20 md:w-36 transition-all duration-1000 hover:translate-x-2 hover:scale-110 hover:cursor-pointer">
        	<img src={MOVIE_POSTER+pic} alt="piclogo"/>
		</div>
	);
}
  
export default MovieCard;
  