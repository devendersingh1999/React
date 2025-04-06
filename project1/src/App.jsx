
import React from "react";
import Canvas from "./Canvas"; // Import your Canvas component
import Data from "./Data"; // Import your Data array
import "./App.css";

const App = () => {
  return (
    <>
      <div className="w-full relative">
        {Data[0].map((canvasdets, index) => (
          <Canvas key={index} details={canvasdets} />
        ))}
      </div>

      <div className="w-full relative">
        {Data[1].map((canvasdets, index) => (
          <Canvas key={index} details={canvasdets} />
        ))}
      </div>
      <div className="w-full relative">
        {Data[3].map((canvasdets, index) => (
          <Canvas key={index} details={canvasdets} />
        ))}
      </div>
    </>
  );
};

export default App;


