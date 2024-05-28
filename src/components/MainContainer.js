import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
import { useSelector } from 'react-redux';
  
  const MainContainer = () =>  {
    const moviess=useSelector(store=>store.movieList?.movies);
    if(moviess===null)
        return;
    const mainmovie=moviess[1];
    const {title,overview,id}=mainmovie;
	return (
	  <div>
      <div>
        <VideoTitle title={title} desc={overview}/>
        <VideoBackground id={id}/>
      </div>
	  </div>
	);
  }
  
  export default MainContainer;
  