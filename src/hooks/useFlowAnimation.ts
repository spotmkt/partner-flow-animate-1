import { Variants } from "framer-motion";

interface FlowAnimationConfig {
  staggerDelay?: number;
  duration?: number;
  initialDelay?: number;
}

export const useFlowAnimation = (config: FlowAnimationConfig = {}) => {
  const { staggerDelay = 0.3, duration = 0.5, initialDelay = 0 } = config;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: initialDelay,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: -30,
      scale: 0.9,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration,
        ease: "easeOut",
      },
    },
  };

  const badgeVariants: Variants = {
    hidden: { 
      opacity: 0, 
      scale: 0,
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: duration * 0.8,
        ease: "backOut",
      },
    },
  };

  const lineVariants: Variants = {
    hidden: { 
      pathLength: 0,
      opacity: 0,
    },
    visible: { 
      pathLength: 1,
      opacity: 1,
      transition: { 
        duration: duration * 1.2,
        ease: "easeInOut",
      },
    },
  };

  const bottomBadgesContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };
  const getDelayedVariants = (delay: number): Variants => ({
    hidden: { 
      opacity: 0, 
      y: -20,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration,
        delay,
        ease: "easeOut",
      },
    },
  });

  return {
    containerVariants,
    cardVariants,
    badgeVariants,
    lineVariants,
    bottomBadgesContainerVariants,
    getDelayedVariants,
  };
};
