import React, { Component, useState } from 'react';
import LightBulb from '../components/LightBulb';
import BalloonInflate from '../components/BalloonInflate';
import ArrowLeft from '@mui/icons-material/ArrowBackIosNew';
import ArrowRight from '@mui/icons-material/ArrowForwardIos';
import BubbleWrap from '../components/BubbleWrap';
import RippleWater from '../components/RippleRainCloud';

const animations = [
  { id: 'lightbulb', component: <LightBulb /> },
  { id: 'balloon', component: <BalloonInflate /> },
  { id: 'bubblewrap', component: <BubbleWrap/>},
  { id: 'ripplewater', component: <RippleWater/>}

];

const Activities: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? animations.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === animations.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink">
      <div className="relative bg-white w-[90vw] h-[80vh] max-w-[900px] max-h-[600px] rounded-3xl shadow-light p-6 flex items-center justify-center overflow-hidden">
        
        <div className="w-full h-full flex items-center justify-center">
          {animations[currentIndex].component}
        </div>

        
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 hover:bg-gray-100 transition"
        >
          <ArrowLeft />
        </button>

        
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 hover:bg-gray-100 transition"
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Activities;

