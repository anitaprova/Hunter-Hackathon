import React, { useState, useRef, useEffect } from 'react';

const PlantGrow: React.FC = () => {
  const [stage, setStage] = useState(0); 
  const growSoundRef = useRef<HTMLAudioElement | null>(null);

  const imageStages = [
    '/pot1.png', 
    '/pot2.png', 
    '/pot3.png', 
    '/pot4.png', 
    '/pot5.png', 
  ];

  useEffect(() => {
    growSoundRef.current = new Audio('/grow.wav');
    growSoundRef.current.volume = 0.5;
  }, []);

  const handleClick = () => {
    if (stage < imageStages.length - 1) {
      setStage((prev) => prev + 1);
      growSoundRef.current?.play();
    }
  };

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center">
      <img
        src={imageStages[stage]}
        alt={`Plant stage ${stage}`}
        className="w-64 h-auto transition-all duration-300"
      />

      {/* Tap Button */}
      <div className="absolute bottom-4 w-full flex justify-center">
        <button
          onClick={handleClick}
          className="px-6 py-3 rounded-full bg-blue hover:bg-lightpink text-hotpink transition-colors"
        >
          Tap to Grow
        </button>
      </div>
    </div>
  );
};

export default PlantGrow;
