import { useSelector } from "react-redux"

const VideoPlayer = (video) => {
  const videoUrl = useSelector((state) => state.video.video.sources)

  return (
    <>
      <video controls autoPlay width={'800rem'} height={'700rem'}  src={videoUrl[0]}></video>

    </>
  )
}

export default VideoPlayer