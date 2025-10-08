import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '@/store/useStore';
import { Rocket } from 'lucide-react';

export const RocketAnimation = () => {
  const { showRocketAnimation } = useStore();

  return (
    <AnimatePresence>
      {showRocketAnimation && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm"
        >
          <div className="relative">
            <motion.div
              initial={{ y: 0, scale: 1, rotate: 0 }}
              animate={{ 
                y: -1000, 
                scale: 0.5,
                rotate: -15 
              }}
              transition={{ duration: 2, ease: 'easeIn' }}
              className="relative"
            >
              <Rocket className="w-32 h-32 text-cosmic-glow-intense" />
              <motion.div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-24 bg-gradient-to-b from-cosmic-glow-intense to-transparent"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 0.3, repeat: Infinity }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
            >
              <h2 className="text-4xl font-bold font-orbitron glow-text mb-4">
                🚀 Launch Successful!
              </h2>
              <p className="text-xl text-muted-foreground">
                Your order has been launched to the Andromeda Delivery System
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
