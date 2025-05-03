import React, { useState, useRef } from 'react';

const BalloonInflate: React.FC = () => {
  const [size, setSize] = useState(100);
  const [isPopped, setIsPopped] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const inflateSoundRef = useRef<HTMLAudioElement | null>(null); 
  const maxSize = 400;

  const startInflating = () => {
    if (isPopped) return;

    if (!inflateSoundRef.current) {
      inflateSoundRef.current = new Audio('/inflate.wav'); 
    }
    inflateSoundRef.current.playbackRate = 0.60;
    inflateSoundRef.current.play();

    intervalRef.current = setInterval(() => {
      setSize((prev) => {
        if (prev >= maxSize) {
          clearInterval(intervalRef.current!);
          setIsPopped(true);

          setTimeout(() => {
            setSize(100);
            setIsPopped(false);
            if (inflateSoundRef.current) {
              inflateSoundRef.current.pause();
              inflateSoundRef.current.currentTime = 0;
            }
          }, 500);

          return prev;
        }
        return prev + 10;
      });
    }, 100);
  };

  // Stop inflating the balloon
  const stopInflating = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    // Stop the inflating sound when the button is released
    if (inflateSoundRef.current) {
      inflateSoundRef.current.pause();
      inflateSoundRef.current.currentTime = 0;
    }
  };

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center">
      {/* Balloon in center */}
      <div
        className={`transition-all duration-200 ease-in-out ${isPopped ? 'animate-bounce' : ''}`}
        style={{
          width: `${size}px`,
          height: `${size * 1.2}px`,
          backgroundColor: 'pink',
          borderRadius: '50% 50% 45% 45%',
        }}
      ></div>

      
      <div className="absolute bottom-4 w-full flex justify-center">
        <button
          onMouseDown={startInflating}
          onMouseUp={stopInflating}
          onMouseLeave={stopInflating}
          onTouchStart={startInflating}
          onTouchEnd={stopInflating}
          className="px-6 py-3 rounded-full bg-blue hover:bg-lightorange transition-colors text-fushia"
        >
          Hold to Inflate
        </button>
      </div>
    </div>
  );
};

export default BalloonInflate;

