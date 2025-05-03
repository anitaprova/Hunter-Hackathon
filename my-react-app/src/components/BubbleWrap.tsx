import React, { useState } from 'react';

const BubbleWrap: React.FC = () => {
  const gridSize = 6; // 5x5 grid
  const totalBubbles = gridSize * gridSize;
  const [popped, setPopped] = useState<boolean[]>(Array(totalBubbles).fill(false));

  const handlePop = (index: number) => {
    if (popped[index]) return;

    const newState = [...popped];
    newState[index] = true;
    setPopped(newState);

    const audio = new Audio('/public/pop.mp3');
    audio.play().catch((e) => console.log("Sound playback failed:", e));
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div
        className="grid gap-3"
        style={{
          gridTemplateColumns: `repeat(${gridSize}, 50px)`,
          gridTemplateRows: `repeat(${gridSize}, 50px)`,
        }}
      >
        {popped.map((isPopped, idx) => (
          <div
            key={idx}
            onClick={() => handlePop(idx)}
            className={`w-12 h-12 rounded-full cursor-pointer transform transition-all duration-200 ease-out ${
              isPopped
                ? 'bg-lightpink scale-90'
                : 'bg-blue hover:bg-pink active:scale-105'
            }`}
          />
        ))}
      </div>
      <p className="mt-4 text-hotpink text-lg">Tap the bubbles to pop!</p>
    </div>
  );
};

export default BubbleWrap;
