import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '@/store/useStore';
import { Rocket } from 'lucide-react';

export const SpaceshipAnimation = () => {
  const { showSpaceshipAnimation } = useStore();

  return (
    <AnimatePresence>
      {showSpaceshipAnimation && (
        <motion.div
          initial={{ x: '-100%', y: '50%', opacity: 0, rotate: 45 }}
          animate={{ 
            x: '120%', 
            y: '-50%', 
            opacity: [0, 1, 1, 0],
            rotate: 45 
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
          className="fixed top-1/2 left-0 z-50 pointer-events-none"
        >
          <div className="relative">
            <Rocket className="w-16 h-16 text-cosmic-glow-intense" />
            <motion.div
              className="absolute inset-0 blur-xl bg-cosmic-glow-intense/50"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
