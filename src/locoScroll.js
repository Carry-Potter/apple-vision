// locoScroll.js
import gsap from 'gsap';
import LocomotiveScroll from 'locomotive-scroll';

function loco() {
  const script = document.createElement("script");
  script.src = "https://cdnjs.cloudflare.com/ajax/libs/locomotive-scroll/4.0.6/locomotive-scroll.min.js";
  script.async = true;

  // Callback funkcija koja će se izvršiti kada se skripta učita
  script.onload = function () {
    // Sada možete koristiti LocomotiveScroll funkcionalnosti
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
    });

    // GSAP animacija za video element
    gsap.to("#page>video", {
      scrollTrigger: {
        trigger: `#page>video`,
        start: `2% top`,
        end: `bottom top`,
        scroller: `#main`
      },
      onStart: () => {
        document.querySelector("#page>video").play();
      }
    });

    // GSAP animacija za #page element
    gsap.to("#page", {
      scrollTrigger: {
        trigger: `#page`,
        start: `top top`,
        end: `bottom top`,
        scroller: `#main`,
        pin: true
      }
    });

    // GSAP animacija za #page-bottom element
    gsap.to("#page-bottom", {
      scrollTrigger: {
        trigger: `#page-bottom`,
        start: `5% top`,
        end: `bottom top`,
        scroller: `#main`,
        scrub: .5,
      },
      opacity: 0
    });
  };

  // Učitavanje skripte dodavanjem elementa u <head> sekciju HTML-a
  document.head.appendChild(script);
}

export default loco;
