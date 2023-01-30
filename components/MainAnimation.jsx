import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import videoImage from "../public/images/Video Frame.svg";
import PlayButton from "../public/images/PlayButton.svg";
import soundBars from "../public/images/soundbar.svg";

function MainAnimation() {
  useEffect(() => {
    // function pathPrepare($el) {
    //   var lineLength = $el[0].getTotalLength();
    //   $el.css("stroke-dasharray", lineLength);
    //   $el.css("stroke-dashoffset", lineLength);
    // }
    // var $word = $("path#word");
    // var $dot = $("path#dot");
    // var $red = $("path#redLine");
    // // prepare SVG
    // pathPrepare($word);
    // pathPrepare($dot);
    // pathPrepare($red);
    // // init controller
    // var controller = new ScrollMagic.Controller();
    // // build tween
    // var tween = new TimelineMax()
    //   .add(
    //     TweenMax.to($word, 12, { strokeDashoffset: 0, ease: Linear.easeNone })
    //   ) // draw word for 0.9
    //   .add(
    //     TweenMax.to($dot, 12, { strokeDashoffset: 0, ease: Linear.easeNone })
    //   ); // draw dot for 0.1
    // // .add(
    // //   TweenMax.to("path", 1, { stroke: "#33629c", ease: Linear.easeNone }),
    // //   0
    // // );
    // var tween1 = new TimelineMax().add(
    //   TweenMax.to($red, 0.9, { strokeDashoffset: 0, ease: Linear.easeNone })
    // );
    // // build scene
    // var scene = new ScrollMagic.Scene({
    //   triggerElement: "#trigger1",
    //   offset: 30,
    //   triggerHook: "onCenter",
    //   duration: 2190,
    //   tweenChanges: true,
    // })
    //   .setTween(tween)
    //   .addIndicators() // add indicators (requires plugin)
    //   .addTo(controller);
    // var scene = new ScrollMagic.Scene({
    //   triggerElement: "#trigger2",
    //   offset: 30,
    //   triggerHook: "onCenter",
    //   duration: 2190,
    //   tweenChanges: true,
    // })
    //   .setTween(tween1)
    //   .addIndicators() // add indicators (requires plugin)
    //   .addTo(controller);
    // // scene.removeTween(true);
  }, []);

  const [videoOpen, setVideoOpen] = useState(false);
  const [stop, setStop] = useState(false);
  const videoRef = useRef();
  const handleVideo = () => {
    setStop(!stop);
    if (stop === true) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };
  console.log(videoOpen);
  return (
    <>
      <div className="container relative mx-auto border-2">
        <div className="container mx-[15px] flex items-center py-24 justify-center">
          {videoOpen ? (
            <div id="" className="">
              <video
                ref={videoRef}
                loop={true}
                width={900}
                autoPlay={true}
                controls
                src={"/smallVideo.mp4"}
              />
              <div
                onClick={handleVideo}
                className="absolute cursor-pointer top-[65%] right-[12%] "
              >
                <Image src={soundBars} />
              </div>
            </div>
          ) : (
            <div>
              <Image src={videoImage} width={900} height={900} />
            </div>
          )}
        </div>

        <div class="flex items-center absolute py-8 top-[20%] left-[15%]">
          {!videoOpen ? (
            <div class="w-1/2 ">
              <h1 class="text-7xl px-[20%] font-bold combined">
                Be the part of the change
              </h1>
            </div>
          ) : (
            ""
          )}
          {!videoOpen ? (
            <div class="w-1/2">
              <div
                className="cursor-pointer "
                onClick={(e) => setVideoOpen(!videoOpen)}
              >
                <Image src={PlayButton} width={200} />
              </div>
            </div>
          ) : (
            ""
          )}
          <div className="absolute top-[80%] right-[12%] ">
            <Image src={soundBars} />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainAnimation;
