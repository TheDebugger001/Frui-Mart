import React from "react";
import hero from "./assets/hero.jpg";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import { } from './assets/noback/8.png'

const App = () => {
  return (
    <div className="w-full min-h-screen bg-[rgb(7,7,17)] overflow-scroll]">
      <Navbar />
      <div className="w-full h-[40em]">
        <Hero />
      </div>

      <div className="w-full h-[30em] mt-35 flex items-center justify-evenly">
        <div className="w-3/7 h-full bg-gray-500 flex flex-col items-center justify-evenly">
          <div className="w-full h-2/10 font-bold text-5xl flex items-center justify-center text-gray-300">
            Orange Benefits
          </div>
          <div className="w-full h-5/7 bg-gray-700 flex items-center justify-evenly">
            <div className="w-30 h-3/6 bg-yellow-500">
              <img src="" alt="" />
            </div>
            <div className="w-5/8 h-3/6 bg-yellow-500"></div>
          </div>
        </div>
        <div className="w-3/10 h-full bg-gray-500"></div>
        <div></div>
      </div>
    </div>
  );
};

export default App;

// bg-[rgb(15,15,23)