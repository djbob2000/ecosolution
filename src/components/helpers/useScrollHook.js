import { useState, useEffect, useRef, useCallback, useMemo } from 'react';

const useScrollHook = () => {
  const [backgroundColor, setBackgroundColor] = useState('transparent');
  const scrollPositionRef = useRef(0);
  const animationFrameRef = useRef(null);

  const handleScroll = useCallback(() => {
    const position =
      document.documentElement.scrollTop || document.body.scrollTop;

    scrollPositionRef.current = position;

    if (animationFrameRef.current === null) {
      animationFrameRef.current = requestAnimationFrame(() => {
        const transparency = Math.min(1, position / 112);
        const color = `rgba(255, 255, 255, ${transparency})`;
        setBackgroundColor(color);
        animationFrameRef.current = null;
      });
    }
  }, []);

  const debouncedHandleScroll = useMemo(
    () => debounce(handleScroll, 20),
    [handleScroll]
  );

  useEffect(() => {
    const scrollListener = () => {
      debouncedHandleScroll();
    };

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [debouncedHandleScroll]);

  return {
    backgroundColor,
  };
};

function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

export default useScrollHook;
