import React, { useEffect } from 'react';
import './App.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';
import Pocetna from './pocetna/Pocetna';
import Page1 from './prvaStranica/page1';
import Page2 from './drugaStrana/Page2';
import Page3 from './trecaStrana/page3';
import Page4 from './cetvtaStrana/Page4';
import Page5 from './petaStrana/page5';
import Page7 from './sedmaStrana/page7';
import Page8 from './osmaStrana/page8';
import Page9 from './devetaStrana/Page9';
import Page10 from './desetaStrana/Page10';
import Page11 from './jedanaestaStrana/Page11';
import Page12 from './dvanaestaStrana/Page12'; 
import Page13 from './treinaestaStrana/Page13';
import Page14 from './cetrnaestaStrana/Page14'; 
import Page15 from './petnaestaStrana/Page15';
import Page16 from './sesnaestaStrana/Page16';
import Page17 from './sedamnaestaStrana/Page17';



function App() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Inicijalizacija Locomotive Scroll-a i ScrollTrigger-a
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();

   
  }, []);

  return (
    <div id="main">
      <Pocetna />
      <Page1 />
      <Page2/>
      <Page3/>
      <Page4/>
      <Page5/>
      <Page7/>
      <Page8/>
      <Page9/>
      <Page10/>
      <Page11/>
      <Page12/>
      <Page13/>
      <Page14/>
      <Page15/>
      <Page16/>
      <Page17/>
      
    </div>
  );
}

export default App;
