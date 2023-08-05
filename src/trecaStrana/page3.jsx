import React from 'react';
import VR from '../assets/Apple vision image.png'
import './page3.css'

function Page3() {
 
  return (
    <div id="page3">
            <div id="page3-upper">
                <img src="https://www.apple.com/v/apple-vision-pro/a/images/overview/intro/logo__4zgkuyebgtem_large.png" alt=""/>
                <div id="page3-upper-inner">
                    <h3>WATCH THE FILM</h3>
                    <h3>WATCH THE EVENT</h3>
                </div>
            </div>
            <img src={VR} alt=""/>
            <button> + Take a closer look at Vision Pro</button>
        </div>
  );
}

export default Page3;
