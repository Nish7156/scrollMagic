import React, { useState, useRef } from "react";
import PlayButton from "/public/images/PlayButton.svg";
import pauseButton from "/public/images/pause.svg";
import Image from "next/image";

function VideoSction() {
  const [videoOpen, setVideoOpen] = useState(false);
  const [stop, setStop] = useState(false);
  const videoRef = useRef<any>();
  const handleVideo = () => {
    setVideoOpen(!videoOpen);
    setStop(!stop);
    if (stop === true) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };
  console.log(videoOpen);
  return (
    <div className="container relative md:px-[15px] max-w-[1024px]">
      <div className="flex items-center justify-center">
        <video
          className="masked add"
          ref={videoRef}
          loop={true}
          controls
          src={"/video/smallVideo.mp4"}
        />
      </div>
      <div
        className={`flex items-center absolute py-8 ${
          videoOpen ? "top-[53%] left-[61.1%] " : " top-[25%] left-[15%]"
        } `}
      >
        {!videoOpen ? (
          <div className="w-1/2 ">
            <h1 className="text-7xl px-[20%] font-bold combined">
              Be the part of the change
            </h1>
          </div>
        ) : (
          ""
        )}
        {!videoOpen ? (
          <div className="w-1/2 duration-500 opacity-100 hover:opacity-100">
            <div className="cursor-pointer " onClick={handleVideo}>
              <Image src={PlayButton} width={200} alt="PlayButton" />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="flex justify-between">
        <div
          onClick={handleVideo}
          className={` cursor-pointer top-[63%] right-[0%] absolute`}
        >
          <Image src={pauseButton} alt="PasueButton" />
        </div>
      </div>
    </div>
  );
}

export default VideoSction;
