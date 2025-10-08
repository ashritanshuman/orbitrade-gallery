import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '@/store/useStore';
import { Rocket } from 'lucide-react';
import { useEffect, useState } from 'react';

export const SpaceshipAnimation = () => {
  const { showSpaceshipAnimation, spaceshipStartPosition } = useStore();
  const [cartPosition, setCartPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Get cart icon position
    const updateCartPosition = () => {
      const cartIcon = document.querySelector('[data-cart-icon]');
      if (cartIcon) {
        const rect = cartIcon.getBoundingClientRect();
        setCartPosition({
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        });
      }
    };

    updateCartPosition();
    window.addEventListener('resize', updateCartPosition);
    return () => window.removeEventListener('resize', updateCartPosition);
  }, []);

  if (!spaceshipStartPosition) return null;

  return (
    <AnimatePresence>
      {showSpaceshipAnimation && (
        <motion.div
          initial={{ 
            x: spaceshipStartPosition.x, 
            y: spaceshipStartPosition.y, 
            opacity: 1,
            scale: 1,
            rotate: 0
          }}
          animate={{ 
            x: cartPosition.x,
            y: cartPosition.y,
            opacity: [1, 1, 0],
            scale: [1, 0.8, 0.3],
            rotate: 45
          }}
          exit={{ opacity: 0 }}
          transition={{ 
            duration: 1.5,
            ease: [0.4, 0.0, 0.2, 1]
          }}
          className="fixed z-50 pointer-events-none"
          style={{
            left: 0,
            top: 0,
          }}
        >
          <div className="relative">
            <Rocket className="w-12 h-12 text-cosmic-glow-intense" />
            <motion.div
              className="absolute inset-0 blur-xl bg-cosmic-glow-intense/50"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 0.3, repeat: Infinity }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
