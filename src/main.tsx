import React, { UIEvent, useState } from 'react';
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const ScrollComponent: React.FC = () => {
  // Create event listener
  // look for upscroll past certain threshold
  // if upscroll > 10 then apply header fixed class to header???
  const handleUIEvent = (e: UIEvent<HTMLDivElement>) => {
    // Do something
  };

  return <div onScroll={handleUIEvent}>{/** Some code */}</div>;
};

const WheelComponent: React.FC = () => {
  const [wheelDirection, setWheelDirection] = useState<string>('');

  // Event handler function
  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    if (event.deltaY < 0) {
      setWheelDirection('up');
    } else {
      setWheelDirection('down');
    }
  };

  return (
    <div onWheel={handleWheel} style={{ width: '200px', height: '200px', border: '1px solid black' }}>
      <p>Mouse wheel scrolled: {wheelDirection}</p>
      <p>Scroll inside this box</p>
    </div>
  );
};

export default WheelComponent;