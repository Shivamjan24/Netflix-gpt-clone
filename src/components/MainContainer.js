import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
import { useSelector } from 'react-redux';
  
  const MainContainer = () =>  {
    const moviess=useSelector(store=>store.movieList?.movies);
    if(moviess===null)
        return;
    const mainmovie=moviess[10];
    const {title,overview,id}=mainmovie;
	return (
	  <div>
        <VideoTitle title={title} desc={overview}/>
        <VideoBackground id={id}/>
	  </div>
	);
  }
  
  export default MainContainer;
  