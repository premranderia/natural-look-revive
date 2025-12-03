import { useState, useEffect } from "react";

interface UseTypewriterOptions {
  words: string[];
  loop?: boolean;
  typeSpeed?: number;
  deleteSpeed?: number;
  delayBetweenWords?: number;
}

export const useTypewriter = ({
  words,
  loop = true,
  typeSpeed = 150,
  deleteSpeed = 100,
  delayBetweenWords = 2000,
}: UseTypewriterOptions) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    const handleTyping = () => {
      if (isDeleting) {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          // Finished deleting
          setIsDeleting(false);
          if (currentWordIndex < words.length - 1) {
            setCurrentWordIndex(currentWordIndex + 1);
          } else if (loop) {
            setCurrentWordIndex(0);
          } else {
            setIsComplete(true);
            return;
          }
        }
      } else {
        // Typing
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        } else {
          // Word complete
          if (currentWordIndex === words.length - 1 && !loop) {
            setIsComplete(true);
            return;
          }
          // Wait before deleting or moving to next word
          setTimeout(() => {
            setIsDeleting(true);
          }, delayBetweenWords);
          return;
        }
      }
    };

    if (!isComplete) {
      const timer = setTimeout(handleTyping, isDeleting ? deleteSpeed : typeSpeed);
      return () => clearTimeout(timer);
    }
  }, [currentText, currentWordIndex, isDeleting, words, loop, typeSpeed, deleteSpeed, delayBetweenWords, isComplete]);

  return { text: currentText, isComplete, currentWordIndex };
};
