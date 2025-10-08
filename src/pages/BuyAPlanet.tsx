import { useState } from 'react';
import { useStore } from '@/store/useStore';
import { StarField } from '@/components/StarField';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

const BuyAPlanet = () => {
  const { user } = useStore();
  const [ownerName, setOwnerName] = useState(user?.name || '');
  const [showCertificate, setShowCertificate] = useState(false);
  
  const planetName = 'Nebulon-7';
  const coordinates = `X: ${Math.floor(Math.random() * 10000)}, Y: ${Math.floor(Math.random() * 10000)}, Z: ${Math.floor(Math.random() * 10000)}`;
  const serialNumber = `GS-${Date.now().toString(36).toUpperCase()}`;

  const handlePurchase = () => {
    if (!ownerName.trim()) {
      toast.error('Please enter your name');
      return;
    }
    
    setShowCertificate(true);
    toast.success('Congratulations!', {
      description: `You are now the proud owner of Planet ${planetName}!`,
    });
  };

  const handleDownload = () => {
    toast.info('Download feature coming soon!', {
      description: 'In the meantime, take a screenshot of your certificate.',
    });
  };

  return (
    <div className="min-h-screen relative">
      <StarField />
      
      <div className="relative z-10 container mx-auto px-4 pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl mx-auto"
        >
          {!showCertificate ? (
            <Card className="glass-panel">
              <CardHeader className="text-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="text-6xl mb-4"
                >
                  🪐
                </motion.div>
                <CardTitle className="text-3xl glow-text">
                  Exclusive Planet Offer!
                </CardTitle>
                <CardDescription className="text-lg">
                  You've discovered our secret UFO! As a reward, claim your very own planet.
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="glass-panel p-6 rounded-xl space-y-4">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-primary" />
                    Planet Details
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Name:</span>
                      <span className="font-bold">Planet {planetName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Coordinates:</span>
                      <span className="font-mono text-xs">{coordinates}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Atmosphere:</span>
                      <span>79% Nitrogen, 21% Oxygen</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Moons:</span>
                      <span>3</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Price:</span>
                      <span className="text-2xl font-bold text-cosmic-glow">FREE!</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="owner-name">Your Name (for the certificate)</Label>
                  <Input
                    id="owner-name"
                    value={ownerName}
                    onChange={(e) => setOwnerName(e.target.value)}
                    placeholder="Enter your name"
                    className="text-lg"
                  />
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  size="lg"
                  className="w-full glow-border text-lg"
                  onClick={handlePurchase}
                >
                  Claim Your Planet!
                </Button>
              </CardFooter>
            </Card>
          ) : (
            <motion.div
              initial={{ opacity: 0, rotateY: -90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="glass-panel border-2 border-cosmic-glow glow-border">
                <CardHeader className="text-center border-b border-cosmic-glow/30">
                  <CardTitle className="text-3xl glow-text mb-2">
                    🎉 Planetary Ownership Certificate 🎉
                  </CardTitle>
                  <CardDescription>
                    Official Document - Galactic Registry
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-8 space-y-6">
                  <div className="text-center space-y-4">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-7xl"
                    >
                      🪐
                    </motion.div>
                    
                    <div className="space-y-2">
                      <p className="text-lg text-muted-foreground">This certifies that</p>
                      <p className="text-3xl font-bold glow-text">{ownerName}</p>
                      <p className="text-lg text-muted-foreground">is now the proud owner of</p>
                      <p className="text-4xl font-bold text-primary">Planet {planetName}</p>
                    </div>
                  </div>

                  <div className="glass-panel p-6 rounded-xl space-y-3">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground mb-1">Coordinates</p>
                        <p className="font-mono text-xs">{coordinates}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground mb-1">Serial Number</p>
                        <p className="font-mono text-xs">{serialNumber}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground mb-1">Date Acquired</p>
                        <p className="font-mono text-xs">{new Date().toLocaleDateString()}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground mb-1">Registry</p>
                        <p className="font-mono text-xs">Galactic Store</p>
                      </div>
                    </div>
                  </div>

                  <div className="text-center text-xs text-muted-foreground italic">
                    * This is a novelty certificate and does not represent actual planetary ownership.
                    <br />
                    But it's still pretty cool, right? 😄
                  </div>
                </CardContent>

                <CardFooter className="flex gap-4">
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => setShowCertificate(false)}
                  >
                    Claim Another
                  </Button>
                  <Button
                    className="flex-1 glow-border"
                    onClick={handleDownload}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default BuyAPlanet;
