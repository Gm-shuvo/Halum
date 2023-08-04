import { useState } from "react";
import ContenerWarrap from "./ContenerWarrap";
import { PlayIcon } from "./PlayIcon";
import VideoPlayerModal from "./VideoPlayerModal";

const VideoSection = ({videos, loading}) => {
  console.log('videos', videos);
  const [isOpen, setIsOpen] = useState(false);
  const [videoId, setVideoId] = useState(null);
  return (
    <ContenerWarrap>
      {videos.length > 0 && (
        <>
          <div className="text-white text-2xl font-bold mb-4 ml-10 mt-10">
            Offical Videos            
          </div>
          <div className="flex gap-8 overflow-x-auto ml-10 mt-6 mb-8">
            {videos?.map((item) => (
              <div key={item.id} className="">
                <div className="relative w-64 h-36 overflow-hidden">
                  <img
                    src={`https://img.youtube.com/vi/${item.key}/mqdefault.jpg`}
                    alt={item.name}
                    className=" w-full h-full object-cover object-top rounded-md"
                  />
                  <div className="absolute inset-0 flex justify-center items-center">
                    <button className="text-white text-4xl" onClick={()=> {setIsOpen(true); setVideoId(item.key)}}>
                      <PlayIcon />
                    </button>
                  </div>
                </div>
              </div>
            ))}
            {isOpen && <VideoPlayerModal isOpen={isOpen} setIsOpen={setIsOpen} videoId={videoId} />}
          </div>

        </>
      )}
    </ContenerWarrap>
  );
}

export default VideoSection;