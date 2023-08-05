import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Page18() {
  const canvasRef = useRef(null);
  const images = useRef([]);
  const imageSeq = useRef({ frame: 1 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    function scaleImage(img, ctx) {
      var canvas = ctx.canvas;
      var hRatio = canvas.width / img.width;
      var vRatio = canvas.height / img.height;
      var ratio = Math.max(hRatio, vRatio);
      var centerShift_x = (canvas.width - img.width * ratio) / 2;
      var centerShift_y = (canvas.height - img.height * ratio) / 2;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
      );
    }

    function files(index) {
      var data = `
.//Apple vision canvas images/Vision00001.png
.//Apple vision canvas images/Vision00002.png
.//Apple vision canvas images/Vision00003.png
.//Apple vision canvas images/Vision00004.png
.//Apple vision canvas images/Vision00005.png
.//Apple vision canvas images/Vision00006.png
.//Apple vision canvas images/Vision00007.png
.//Apple vision canvas images/Vision00008.png
.//Apple vision canvas images/Vision00009.png
.//Apple vision canvas images/Vision00010.png
.//Apple vision canvas images/Vision00011.png
.//Apple vision canvas images/Vision00012.png
.//Apple vision canvas images/Vision00013.png
.//Apple vision canvas images/Vision00014.png
.//Apple vision canvas images/Vision00015.png
.//Apple vision canvas images/Vision00016.png
.//Apple vision canvas images/Vision00017.png
.//Apple vision canvas images/Vision00018.png
.//Apple vision canvas images/Vision00019.png
.//Apple vision canvas images/Vision00020.png
.//Apple vision canvas images/Vision00021.png
.//Apple vision canvas images/Vision00022.png
.//Apple vision canvas images/Vision00023.png
.//Apple vision canvas images/Vision00024.png
.//Apple vision canvas images/Vision00025.png
`;
      return data.split("\n")[index];
    }

    const frameCount = 2; // Total number of images

    // Load all images
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = files(i);
      images.current.push(img);
    }

    // Wait for all images to load before starting animation
    const imagePromises = images.current.map((img) => {
      return new Promise((resolve) => {
        img.onload = () => resolve();
      });
    });

    Promise.all(imagePromises).then(() => {
      gsap.to(imageSeq.current, {
        frame: frameCount - 1,
        snap: 'frame',
        ease: 'none',
        scrollTrigger: {
          scrub: 0.15,
          trigger: '#page18',
          start: 'top top',
          end: '80% top',
          scroller: '#main',
        },
        onUpdate: () => render(images.current, imageSeq.current.frame, context),
      });

      images.current[1].onload = () =>
        render(images.current, imageSeq.current.frame, context);
    });

    // Resize canvas on window resize
    function handleResize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render(images.current, imageSeq.current.frame, context);
    }

    window.addEventListener('resize', handleResize);

    ScrollTrigger.create({
      trigger: '#page18',
      pin: true,
      scroller: 'body',
      start: 'top top',
      end: '80% top',
    });
  }, []);

  function render(images, frame, ctx) {
    // eslint-disable-next-line no-undef
    scaleImage(images[frame], ctx);
  }

  return (
    <div>
      <div id="page18">
        <canvas ref={canvasRef}></canvas>
      </div>
    </div>
  );
}

export default Page18;
