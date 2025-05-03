
import React, { useState } from 'react';

const LightBulb: React.FC = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleLight = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="lightbulb-container">
      <div
        className="lightbulb"
        style={{
          backgroundColor: isOn ? 'yellow' : 'gray',
          boxShadow: isOn ? '0 0 30px rgba(255, 255, 0, 0.7)' : 'none',
        }}
      >
      </div>
      <div className="string">
        <div className="circle" onClick={toggleLight}></div>
      </div>
    </div>
  );
};

export default LightBulb;
