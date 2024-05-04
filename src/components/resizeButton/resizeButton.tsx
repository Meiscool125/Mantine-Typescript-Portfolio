import React from 'react';
import "./resizeButton.css"

const ResizeButton: React.FC<{ width: number; height: number }> = ({ width, height }) => {
  const handleResize = () => {
    window.resizeTo(width, height);
  };

  return (
    <button onClick={handleResize}>
      Resize Window to {width}x{height}
    </button>
  );
};

export default ResizeButton;
