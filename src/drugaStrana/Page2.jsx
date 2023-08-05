import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './page2.css'

function Page2() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // GSAP animacija za #page2 element
    var tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#page2",
        start: "top top",
        end: () => "+=" + document.querySelector("#page2").offsetHeight,
        scrub: 1,
        scroller: "#main",
        pin: true
      }
    });

    tl1.to("#page2>h1", {
      top: `-50%`
    });

    

  }, []);

  return (
    <div id="page2">
      <h1>Apple Vision Pro seamlessly blends <br /> digital content with your physical space.</h1>
      <video src="https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/foundation-digital-canvas/large.mp4" autoPlay loop muted></video>
    </div>
  );
}

export default Page2;
