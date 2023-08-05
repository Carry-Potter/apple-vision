import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './page4.css'

function Page4() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // GSAP animacija za #page4 element
    var tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#page4",
        start: "top top",
        scrub: 1,
        scroller: "#main",
        pin: true
      }
    });

    tl2.to("#center-page4", {
      top: `-50%`
    });


   

  }, []);

  return (
    <div id="page4">
      <div id="center-page4">
        <h5>Apps</h5>
        <h1>Free your desktop.
          <br />
          And your apps will follow.</h1>
      </div>
      <video src="https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/visionos/large.mp4" autoPlay loop muted></video>
    </div>
  );
}

export default Page4;
