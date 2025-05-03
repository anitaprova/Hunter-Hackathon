
import React, { useState } from 'react';

const LightBulb: React.FC = () => {
  const [isOn, setIsOn] = useState(true);

  const toggleLight = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="lightbulb-container">
      <div
        className="lightbulb"
        style={{
          backgroundColor: isOn ? 'yellow' : 'pink',
          boxShadow: isOn ? '0 0 20px rgba(255, 255, 0, 0.5)' : 'none',
        }}
      ></div>
      <div className="string" onClick={toggleLight}></div>
    </div>
  );
};

export default LightBulb;
