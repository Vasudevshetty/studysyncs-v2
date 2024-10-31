import { motion } from "framer-motion"; // Import motion from framer-motion

function AnimatedImages({ src, className }) {
  return (
    <motion.img
      src={src}
      className={className}
      initial={{ y: 0 }}
      animate={{
        y: -6,
      }}
      transition={{
        type: "spring",
        stiffness: 1000,
        damping: 200,
        repeat: Infinity,
        repeatType: "reverse",
        duration: 1,
      }}
    />
  );
}

export default AnimatedImages;
