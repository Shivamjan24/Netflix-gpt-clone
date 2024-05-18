import { PLAY_URL } from "../utils/constants";

const VideoTitle = ({title,desc}) => {
  return (
    <div className="w-screen pt-[20%] px-8 absolute bg-gradient-to-r from-black aspect-video">
        <h1 className="font-bold text-4xl mb-2 text-white">{title}</h1>
        <p className="w-1/3 font-semibold text-white">{desc}</p>
        <div className="mt-6 flex">
            <div><button className="bg-white text-md rounded-lg font-semibold text-black px-10 py-2 mr-2 hover:opacity-80"><div className="flex text-center"><img src={PLAY_URL} alt="play" className="w-7"/>Play</div></button></div>
            <div><button className="bg-gray-500 text-md rounded-lg font-semibold text-white px-10 py-2 hover:opacity-80"><div className="flex text-center">ℹ️ More Info</div></button></div>
        </div>
    </div>
  )
}

export default VideoTitle;