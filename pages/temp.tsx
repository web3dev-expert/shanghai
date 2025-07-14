import { useEffect, useRef, useState } from "react";

interface TextSplitterProps {
  text: string;
  maxHeight?: number;
  onOverflowTextChange?: (overflow: string) => void;
}

const TextSplitter: React.FC<TextSplitterProps> = ({
  text,
  maxHeight = 200,
  onOverflowTextChange,
}) => {
  const measureRef = useRef<HTMLDivElement>(null);
  const [visibleText, setVisibleText] = useState("");
  const [overflowText, setOverflowText] = useState("");

  useEffect(() => {
    const measurer = measureRef.current;
    if (!measurer) return;

    const words = text.split(" ");
    let currentText = "";
    measurer.innerText = "";

    for (let i = 0; i < words.length; i++) {
      measurer.innerText += words[i] + " ";

      if (measurer.scrollHeight > maxHeight) {
        const overflow = words.slice(i).join(" ");
        setVisibleText(currentText.trim());
        setOverflowText(overflow);
        onOverflowTextChange?.(overflow);
        return;
      }

      currentText = measurer.innerText;
    }

    setVisibleText(text);
    setOverflowText("");
    onOverflowTextChange?.("");
  }, [text, maxHeight, onOverflowTextChange]);

  return (
    <>
      {/* Hidden measurer div */}
      <div
        ref={measureRef}
        className="invisible absolute top-[-9999px] left-[-9999px] whitespace-pre-wrap w-full text-base leading-relaxed p-4 border border-gray-300"
        style={{ maxHeight: `${maxHeight}px`, overflow: "hidden" }}
      />

      <div className="flex space-x-6">
        {/* Visible clipped text */}
        <div
          className="border border-gray-300 p-4 w-1/2 text-base leading-relaxed overflow-hidden"
          style={{ maxHeight: `${maxHeight}px` }}
        >
          {visibleText}
        </div>

        {/* Remaining overflow text */}
        {overflowText && (
          <div className="border border-gray-300 p-4 w-1/2 text-base leading-relaxed bg-gray-50 whitespace-pre-wrap">
            {overflowText}
          </div>
        )}
      </div>
    </>
  );
};

export default TextSplitter;
