
import Header from "../components/Header"
import VideoPlayer from "../components/VideoPlayer"
import data from '../../data.js'
import HorizontalCards from "../components/HorizontalCards.jsx";
import { useSelector } from "react-redux"
const Watch = () => {
const videoData=useSelector((state)=>state.video.video)
  return (
    <>
      <Header />
      <div className="w-full bg-white h-auto">
        <div className="flex flex-wrap justify-around mx-auto mt-5 max-w-[90%]">
          <div className="w-auto md:w-[50%]">
            <VideoPlayer />
            <h1 className="text-3xl mt-3">{videoData.title}</h1>
            <p>{videoData.description}</p>
          </div>

          <div className="w-auto ">
            <h3 className="text-3xl mt-2">Related Videos</h3>
            {data.categories[0].videos.map((video) => (
              <HorizontalCards key={Math.random()} data={video} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Watch