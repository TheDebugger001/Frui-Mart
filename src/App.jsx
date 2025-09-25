import React from "react";
import hero from "./assets/hero.jpg";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import orange from './assets/noback/8.png'
import blender from './assets/back/k.jfif'
import bananasD from './assets/back/g.jpg'
import peasD from './assets/back/z.jfif'
import OrangesD from './assets/back/m.jpg'
import BerriesD from './assets/back/b.jpg'

const App = () => {
  return (
    <div className="w-full min-h-screen bg-[rgb(7,7,17)] overflow-scroll]">
      <Navbar />
      <div className="w-full h-[40em]">
        <Hero />
      </div>

      <div className="w-full h-[23em] mt-35 flex items-center justify-evenly">
        <div className="w-3/7 h-full flex flex-col items-center justify-evenly">
          <div className="w-full h-2/10 font-bold text-5xl flex items-center justify-center text-gray-300">
            Orange Benefits
          </div>
          <div className="w-full h-5/7 flex items-center justify-evenly">
            <div className="w-30 h-3/6 flex items-center justify-center">
              <img src={orange} alt="" />
            </div>
            <div className="w-5/8 h-4/7 flex flex-col gap-8">
              <p className="text-gray-300 leading-8">Just recognize the freshness of the Orange and feel better, It is a future well being and it's the better you can do</p>
              <button className="w-3/9 h-3/10 rounded bg-orange-500 text-gray-300 font-semibold hover:bg-transparent hover:text-orange-500 hover:border-2 hover:border-orange-500 hover:transition hover:duration-150 ease-in transition duration-150"> Learn More </button>
            </div>
          </div>
        </div>
        <div className="w-3/10 h-full">
          <img src={blender} alt="" className="w-full h-full object-cover rounded-2xl" />
        </div>
      </div>

      <div className="w-full h-[25em] flex items-center justify-evenly mt-5">
        <div className="w-3/12 h-11/12 rounded flex flex-col items-center justify-evenly">
          <div className="w-full h-8/12 rounded-xl overflow-hidden bg-black">
            <img src={bananasD} alt="" className="w-full h-full object-cover"/>
          </div>
          <div className="w-full h-3/12 flex flex-col gap-2 justify-center">
            <p className="text-gray-300 font-semibold text-lg">ARCU VOLUT FAT VITAE</p>
            <p className="text-gray-300 text-sm">Phestiers Lgeart</p>
          </div>
        </div>

        <div className="w-3/12 h-11/12 rounded flex flex-col items-center justify-evenly">
          <div className="w-full h-8/12 rounded-xl overflow-hidden bg-black">
            <img src={OrangesD} alt="" className="w-full h-full object-cover"/>
          </div>
          <div className="w-full h-3/12 flex flex-col gap-2 justify-center">
            <p className="text-gray-300 font-semibold text-lg">ARCU VOLUT FAT VITAE</p>
            <p className="text-gray-300 text-sm">Phestiers Lgeart</p>
          </div>
        </div>

        <div className="w-3/12 h-11/12 rounded flex flex-col items-center justify-evenly">
          <div className="w-full h-8/12 rounded-xl overflow-hidden bg-black">
            <img src={BerriesD} alt="" className="w-full h-full object-cover"/>
          </div>
          <div className="w-full h-3/12 flex flex-col gap-2 justify-center">
            <p className="text-gray-300 font-semibold text-lg">ARCU VOLUT FAT VITAE</p>
            <p className="text-gray-300 text-sm">Phestiers Lgeart</p>
          </div>
        </div>
      </div>

      <div className="w-full h-[20em] bg-gray-800 flex items-center gap-20 justify-center">
        <div className="w-2/9 h-10/12 rounded-xl flex items-center justify-center">
          <p className="font-semibold text-gray-300 text-4xl w-2/3"> Just Imagine seeds and summer in gell sunshine</p>
        </div>
        <div className="w-2/9 h-10/12 bg-orange-400 rounded-xl overflow-hidden">
          <img src={peasD} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="w-1/6 h-10/12 bg-gray-300 rounded-xl flex flex-col gap-3 items-center">
          <div className="w-4/5 h-20 flex flex-col items-center justify-center mt-2 relative top-3">
            <p className="font-semibold text-lg"> EVEN THERE THERE STILL </p>
            <p className="font-bold text-xl"> BENEFIT </p>
          </div>
          <div className="w-full h-14 text-center flex items-center justify-center"> <p className="w-[14.9em] font-semibold underline"> Here you will find products you may like </p> </div>
          <div className="w-full h-20 flex items-center justify-center">
            <button className="w-5/9 h-7/10 rounded bg-orange-500 text-gray-300 font-semibold text-xl hover:bg-transparent hover:text-orange-500 hover:border-2 hover:border-orange-500 hover:transition hover:duration-150 ease-in transition duration-150"> Learn More </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default App;

// bg-[rgb(15,15,23)