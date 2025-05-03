import React, { useState } from 'react';

const LightBulb: React.FC = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleLight = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      {/* Bulb */}
      <div
        className="w-40 h-52 rounded-t-full rounded-b-[60%] transition-all duration-300"
        style={{
          backgroundColor: isOn ? 'yellow' : '#b0e0e6',
          boxShadow: isOn ? '0 0 30px rgba(255, 255, 0, 0.7)' : 'none',
        }}
      ></div>

      {/* String + Circle */}
      <div className="flex flex-col items-center mt-2">
        <div className="w-1 h-16 bg-hotpink" />

        <button
          onClick={toggleLight}
          className="w-6 h-6 rounded-full bg-hotpink hover:bg-pink transition mt-0 -translate-y-1"
          title="Toggle Light"
        ></button>
      </div>
    </div>
  );
};

export default LightBulb;

