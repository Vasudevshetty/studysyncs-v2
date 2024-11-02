import { useEffect, useState } from "react";

function TypingAnimation({ text, typingSpeed = 200, pauseTime = 1000 }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    let timeoutId;

    const typeText = () => {
      if (index <= text.length) {
        setDisplayedText((prev) => prev + text.charAt(index));
        index++;
        timeoutId = setTimeout(typeText, typingSpeed);
      } else {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          setDisplayedText("");
          index = -1; // Reset index for loop
          typeText();
        }, pauseTime);
      }
    };

    typeText();

    return () => clearTimeout(timeoutId);
  }, [text, typingSpeed, pauseTime]);

  return <span>{displayedText}</span>;
}

export default TypingAnimation;
