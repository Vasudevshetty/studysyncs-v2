import { useRef, useEffect } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

const ROTATION_RANGE = 20; // Reduced range for quicker rotation
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

const HoverCard = ({ children }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const z = useMotionValue(0); // Adding Z rotation

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);
  const zSpring = useSpring(z); // Adding spring for Z

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg) rotateZ(${zSpring}deg)`;

  // Function to set random rotation values
  const setRandomRotation = () => {
    if (!ref.current) return;

    const randomX = Math.random() * ROTATION_RANGE - HALF_ROTATION_RANGE;
    const randomY = Math.random() * ROTATION_RANGE - HALF_ROTATION_RANGE;
    const randomZ = Math.random() * ROTATION_RANGE - HALF_ROTATION_RANGE; // Random Z rotation

    x.set(randomX);
    y.set(randomY);
    z.set(randomZ); // Setting Z rotation
  };

  // Animate automatically at intervals
  useEffect(() => {
    const interval = setInterval(() => {
      setRandomRotation();
    }, 500); // Change direction every 0.5 seconds for faster rotation

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <motion.div
      ref={ref}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative h-64 w-64 rounded-xl flex items-center justify-center"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 rounded-xl flex justify-center items-center h-full"
      >
        {children}
      </div>
    </motion.div>
  );
};

export default HoverCard;
