import React from "react";
import hero from "./assets/hero.jpg";

const App = () => {
  return (
    <div className="h-screen">
      <img src={hero} className="w-full h-full object-cover" />
      <div className="bg-black/10">
        <div className="flex flex-col justify-evenly  w-1/3 h-[25rem] absolute top-36 left-30">
          <h2 className="text-5xl text-[#f9ce69] font-semibold">
            Rennale <br /> Renuelly
          </h2>
          <p className="text-[1.2rem] text-gray-100">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
            reiciendis aperiam nulla maxime ea assumenda in ad libero
            voluptatum! Ut laudantium dolorum quas tenetur doloribus
            voluptatibus nam laboriosam temporibus mollitia?
          </p>
          <button className="bg-[#ffcc56] h-12 w-1/2 rounded-4xl shadow text-xl hover:shadow-2xl cursor-pointer">
            Home page
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
