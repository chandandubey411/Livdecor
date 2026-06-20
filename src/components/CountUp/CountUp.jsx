import { useEffect, useState } from 'react';

export default function CountUp({ value, duration = 1.5, inView }) {
  const [count, setCount] = useState(0);

  // Extract numeric part and suffix (e.g. "500+" -> 500 and "+")
  const target = parseInt(value, 10);
  const suffix = typeof value === 'string' ? value.replace(target.toString(), '') : '';

  useEffect(() => {
    if (!inView) {
      setCount(0);
      return;
    }

    if (isNaN(target)) {
      setCount(value);
      return;
    }

    let start = 0;
    const totalMiliseconds = duration * 1000;
    const startTime = performance.now();
    let animationFrameId;

    const updateCount = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      if (elapsedTime >= totalMiliseconds) {
        setCount(target);
        return;
      }

      // Ease out quad function
      const progress = elapsedTime / totalMiliseconds;
      const easeProgress = progress * (2 - progress);

      const currentCount = Math.floor(easeProgress * (target - start) + start);
      setCount(currentCount);

      animationFrameId = requestAnimationFrame(updateCount);
    };

    animationFrameId = requestAnimationFrame(updateCount);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [value, target, duration, inView]);

  if (isNaN(target)) {
    return <span>{value}</span>;
  }

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}
