import { useSelector } from "react-redux";
import UseMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({id}) =>  {
  const movi=useSelector(store=>store.movieList?.movietrailer);
  UseMovieTrailer(id);
    
	return (
	  <div className="w-screen aspect-video pt-0">
        <iframe className="w-screen aspect-video " src={"https://www.youtube.com/embed/" + movi?.key + "?si=rl9CzYhs3WGay6sJ?&autoplay=1&mute=1" }
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
	  </div>
	);
  }
  
  export default VideoBackground;
  