import React, { useState, useRef, useEffect } from 'react';
import CloudIcon from '@mui/icons-material/Cloud';

interface Drop {
  id: number;
  x: number;
  y: number;
}

const RippleRainCloud: React.FC = () => {
  const [drops, setDrops] = useState<Drop[]>([]);
  const [isRaining, setIsRaining] = useState(false);
  const dropId = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const waterSoundRef = useRef<HTMLAudioElement | null>(null);
  const rainTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dropIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    waterSoundRef.current = new Audio('/rain.wav');
    waterSoundRef.current.loop = true;
    waterSoundRef.current.volume = 0.6;

    // Stop sound when component unmounts
    return () => {
      if (dropIntervalRef.current) clearInterval(dropIntervalRef.current);
      if (rainTimeoutRef.current) clearTimeout(rainTimeoutRef.current);
      if (waterSoundRef.current) {
        waterSoundRef.current.pause();
        waterSoundRef.current.currentTime = 0;
      }
    };
  }, []);

  useEffect(() => {
    if (isRaining) {
      // Start sound
      if (waterSoundRef.current) {
        waterSoundRef.current.currentTime = 0;
        waterSoundRef.current.play();
      }

      // Start raindrops
      dropIntervalRef.current = setInterval(() => {
        if (!containerRef.current) return;
        const bounds = containerRef.current.getBoundingClientRect();
        const x = Math.random() * bounds.width;

        const newDrop: Drop = {
          id: dropId.current++,
          x,
          y: 0,
        };
        setDrops((prev) => [...prev, newDrop]);

        setTimeout(() => {
          setDrops((prev) => prev.filter((d) => d.id !== newDrop.id));
        }, 1200);
      }, 300);

      // Auto-stop after 5 seconds
      rainTimeoutRef.current = setTimeout(() => {
        setIsRaining(false);
      }, 5000);
    } else {
      // Stop sound and cleanup
      if (dropIntervalRef.current) clearInterval(dropIntervalRef.current);
      if (rainTimeoutRef.current) clearTimeout(rainTimeoutRef.current);
      if (waterSoundRef.current) {
        waterSoundRef.current.pause();
        waterSoundRef.current.currentTime = 0;
      }
    }
  }, [isRaining]);

  const handleCloudTap = () => {
    // Don't restart rain if it's already happening
    if (!isRaining) {
      setIsRaining(true);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden flex flex-col items-center justify-start pt-10"
    >
      {/* Cloud button */}
      <button onClick={handleCloudTap} className="z-10">
        <CloudIcon style={{ fontSize: 200, color: '#b0e0e6' }} />
      </button>

      {/* Drops */}
      {drops.map((drop) => (
        <div
          key={drop.id}
          className="absolute w-2 h-6 bg-blue rounded-full animate-fall"
          style={{ left: drop.x, top: `${drop.y}px` }}
        />
      ))}

      {/* Prompt text */}
      <p className="absolute bottom-4 mt-4 text-hotpink text-lg">Tap the cloud to make it rain!</p>

      {/* CSS animation */}
      <style>
        {`
          @keyframes fall {
            0% { transform: translateY(0); opacity: 1; }
            100% { transform: translateY(100vh); opacity: 0; }
          }

          .animate-fall {
            animation: fall 1.2s linear forwards;
          }
        `}
      </style>
    </div>
  );
};

export default RippleRainCloud;
