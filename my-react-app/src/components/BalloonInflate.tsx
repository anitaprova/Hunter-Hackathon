import React, { useState, useRef, useEffect } from 'react';

const BalloonInflate: React.FC = () => {
  const [size, setSize] = useState(100);
  const [isPopped, setIsPopped] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const inflateSoundRef = useRef<HTMLAudioElement | null>(null); 
  const popSoundRef = useRef<HTMLAudioElement | null>(null); 
  const maxSize = 400;

  useEffect(() => {
    inflateSoundRef.current = new Audio('/inflate.wav');
    inflateSoundRef.current.playbackRate = 0.6;

    popSoundRef.current = new Audio('/pop.mp3');
  }, []);

  const startInflating = () => {
    if (isPopped) return;

    inflateSoundRef.current?.play();

    intervalRef.current = setInterval(() => {
      setSize((prev) => {
        if (prev >= maxSize) {
          clearInterval(intervalRef.current!);
          inflateSoundRef.current?.pause();
          inflateSoundRef.current!.currentTime = 0;
          popSoundRef.current?.play();
          setIsPopped(true);

          setTimeout(() => {
            setSize(100);
            setIsPopped(false);
          }, 800);

          return prev;
        }
        return prev + 10;
      });
    }, 100);
  };

  const stopInflating = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    inflateSoundRef.current?.pause();
    inflateSoundRef.current!.currentTime = 0;
  };

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center">
      {/* Balloon */}
      <div
        className={`transition-all duration-200 ease-in-out ${
          isPopped ? 'scale-0 opacity-0' : ''
        }`}
        style={{
          width: `${size}px`,
          height: `${size * 1.2}px`,
          backgroundColor: 'pink',
          borderRadius: '50% 50% 45% 45%',
        }}
      ></div>

      {/* Inflate Button */}
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
