import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Koristimo createRoot umesto ReactDOM.render
const root = document.getElementById('root');
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Koristimo createRoot umesto ReactDOM.render
if (root && root.createRoot) {
  root.createRoot(app).render();
} else {
  ReactDOM.render(app, root);
}