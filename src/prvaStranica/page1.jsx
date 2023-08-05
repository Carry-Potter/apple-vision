import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './page1.css'

function Page1() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // GSAP animacija za #page1 element
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#page1",
        start: "top top",
        scrub: 1,
        scroller: "#main",
        pin: true
      }
    });

    tl.to("#page1>h1", {
      top: `-50%`
    });
  }, []);

  return (
    <div>
        <div id="page1">
          <h1>Welcome to the era of spatial computing</h1>
          <video src="https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/foundation-spatial-computing/large.mp4" autoPlay loop muted></video>
        </div>
      </div>
  );
}

export default Page1;
