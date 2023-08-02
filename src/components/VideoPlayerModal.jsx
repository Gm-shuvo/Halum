import React from "react";
import ReactPlayer from "react-player/youtube";
import "daisyui/dist/full.css";

const VideoPlayerModal = ({isOpen, setIsOpen, videoId}) => {
  return (
    <div className={`modal ${isOpen ? "modal-open" : ""} `}>
      <div className="modal-box p-0  max-w-2xl h-[400px] relative">
      <button className="text-white absolute w-8 h-8 rounded-full text-center text-sm hover:bg-slate-50/20 bg-slate-50/10 top-2 right-2 z-40" onClick={()=>setIsOpen(false)}>✕</button>
      <ReactPlayer url={`https://www.youtube.com/watch?v=${videoId}`} controls width="100%" height="100%" />
      </div>
      <div className="modal-backdrop" onClick={()=> setIsOpen(false)}></div>
    </div>
  );
};

export default VideoPlayerModal;
