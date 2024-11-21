// src/App.js
import React from "react";
import Frame from "./components/Frame/Frame";  // Import Frame component
import FrameBottom from "./components/FrameBottom/FrameBottom";  // Import FrameBottom component

function App() {
  return (
    <div className="bg-gray-100">
      <div className="max-w-[1620px] mx-auto">
        <Frame /> 
        <FrameBottom />
      </div>
    </div>
  );
}

export default App;
