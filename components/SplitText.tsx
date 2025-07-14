'use client';

import React, { useEffect, useRef, useState } from 'react';

interface SplitTextProps {
  text: string;
  height: number;
  width: number;
}

const SplitText: React.FC<SplitTextProps> = ({ text, height, width }) => {
  const hiddenRef = useRef<HTMLDivElement>(null);
  const [parts, setParts] = useState<string[]>(['', '']);

  useEffect(() => {
    if (!hiddenRef.current) return;

    const hidden = hiddenRef.current;
    const words = text.split(' ');

    // Binary search helper
    const fitWords = (wordList: string[]) => {
      let low = 0;
      let high = wordList.length;
      let bestFit = 0;

      while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const testStr = wordList.slice(0, mid).join(' ');
        hidden.textContent = testStr;

        if (hidden.scrollHeight <= height ) {
          bestFit = mid;
          low = mid + 1;
        } else {
          high = mid - 1;
        }
      }
      const fit = wordList.slice(0, bestFit).join(' ');
      const rest = wordList.slice(bestFit).join(' ');
      console.log("fit: ", fit, "rest: ", rest, "\n")
      return [fit, rest];
    };

    const [first, remaining] = fitWords(words);
    const [second, _extra] = fitWords(remaining.split(' '));

    setParts([first, second]);
  }, [text, height, width]);

  return (
    <>
      <div className="space-y-4">
        <div
          className="overflow-hidden border rounded p-4 bg-white text-black"
          style={{ height, width }}
        >
          {parts[0]}
        </div>
        <div
          className="overflow-hidden border rounded p-4 bg-white text-black"
          style={{ height, width }}
        >
          {parts[1]}
        </div>
      </div>

      {/* Hidden div for measuring text height */}
      <div
        ref={hiddenRef}
        className="invisible absolute whitespace-pre-wrap p-4 leading-normal text-black"
        style={{
          width,
          height: '0px',
          padding : '0px',
          position: 'absolute',
          visibility: 'hidden',
          zIndex: -1,
          pointerEvents: 'none',
        }}
      />
    </>
  );
};

export default SplitText;
