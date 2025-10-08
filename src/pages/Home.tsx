import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { PlanetScene } from '@/components/3d/PlanetScene';
import { StarField } from '@/components/StarField';
import { Sparkles, ShoppingBag, User } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <StarField />
      
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-2 text-primary"
              >
                <Sparkles className="w-6 h-6" />
                <span className="text-lg font-exo">Welcome to the Universe's Marketplace</span>
              </motion.div>
              
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                <span className="glow-text">Galactic</span>
                <br />
                <span className="text-primary">Store</span>
              </h1>
              
              <p className="text-xl text-muted-foreground font-exo max-w-lg">
                The Universe's Finest Marketplace for Cosmic Treasures. Discover artifacts from distant galaxies, alien technology, and interstellar wonders.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link to="/shop">
                <Button size="lg" className="glow-border text-lg px-8">
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Explore Store
                </Button>
              </Link>
              
              <Link to="/auth">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <User className="w-5 h-5 mr-2" />
                  Sign In / Sign Up
                </Button>
              </Link>
            </div>

            {/* Easter Egg Hint */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-sm text-muted-foreground/60 italic"
            >
              💫 Psst... Look for the mysterious UFO floating around...
            </motion.p>
          </motion.div>

          {/* Right - 3D Planet */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-[600px] relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-cosmic-glow/20 rounded-full blur-3xl" />
            <PlanetScene />
            
            {/* Easter Egg UFO */}
            <Link to="/buy-a-planet">
              <motion.div
                className="absolute top-10 right-10 cursor-pointer hover:scale-110 transition-transform"
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="relative group">
                  <div className="text-4xl">🛸</div>
                  <div className="absolute inset-0 blur-xl bg-cosmic-glow-intense/30 group-hover:bg-cosmic-glow-intense/50 transition-all" />
                </div>
              </motion.div>
            </Link>
          </motion.div>
        </div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-24 grid md:grid-cols-3 gap-8"
        >
          {[
            { icon: '🌙', title: 'Authentic Cosmic Items', desc: 'Every product is sourced from verified celestial locations' },
            { icon: '⚡', title: 'Instant Delivery', desc: 'Quantum teleportation ensures your items arrive instantly' },
            { icon: '🛡️', title: 'Galactic Guarantee', desc: 'Protected by intergalactic commerce laws' },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + idx * 0.1 }}
              className="glass-panel p-6 rounded-2xl hover-lift text-center"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
