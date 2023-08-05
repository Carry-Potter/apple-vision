import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
import "./pocetna.css";

function Pocetna() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Inicijalizacija Locomotive Scroll-a i ScrollTrigger-a
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();

    // Vratite funkciju za "čišćenje" kad komponenta unmounts
    
  }, []);

  useEffect(() => {
    // GSAP animacija za video element
    gsap.to("#page video", {
      scrollTrigger: {
        trigger: "#page video",
        start: "2% top",
        end: "bottom top",
        scroller: "#main",
      },
      onStart: () => {
        document.querySelector("#page video").play();
      },
    });

    // GSAP animacija za #page element
    gsap.to("#page", {
      scrollTrigger: {
        trigger: "#page",
        start: "top top",
        end: "bottom top",
        scroller: "#main",
        pin: true,
      },
    });

    // GSAP animacija za #page-bottom element
    gsap.to("#page-bottom", {
      scrollTrigger: {
        trigger: "#page-bottom",
        start: "5% top",
        end: "bottom top",
        scroller: "#main",
        scrub: 1,
      },
      opacity: 0,
    });
  }, []);

  return (
    
      <div id="page">
        <video
          src="https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/hero/large_2x.mp4"
          muted
        ></video>
        <nav>
          <h3>Vision Pro</h3>
          <button>Notify me</button>
        </nav>
        <div id="page-bottom">
          <h3>Introduction</h3>
          <img
            src="https://www.apple.com/v/apple-vision-pro/a/images/overview/hero/apple_vision_pro_logo__ux94yix23r6y_large.png"
            alt=""
          />
        </div>
      </div>
    
  );
}

export default Pocetna;
