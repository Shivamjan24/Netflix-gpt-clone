import MovieCard from "./MovieCard";

const MovieLists = ({title,cont}) =>  {
    return (
	  <div className="px-6">
        <h1 className="text-lg md:text-2xl text-white my-2">{title}</h1>
        <div className="flex flex-wrap">
            {cont?.map((movie)=>(
            <MovieCard key={movie?.id} pic={movie?.poster_path}/>))}
        </div>
	  </div>
	);
}
  
export default MovieLists;
  