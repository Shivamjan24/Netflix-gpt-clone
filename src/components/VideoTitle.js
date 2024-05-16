const VideoTitle = ({title,desc}) => {
  return (
    <div className="w-screen pt-[] px-8 absolute bg-gradient-to-r from-slate-950 aspect-video">
        <h1 className="font-bold text-4xl mb-2 text-white">{title}</h1>
        <p className="w-1/4 font-semibold text-white">{desc}</p>
        <div className="mt-2">
            <button className="bg-white text-xl rounded-lg text-black px-6 py-2 mr-2">▶️PLAY</button>
            <button className="bg-gray-500 text-xl rounded-lg text-white px-6 py-2">ℹ️INFO</button>
        </div>
    </div>
  )
}

export default VideoTitle;