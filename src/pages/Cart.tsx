import { useStore } from '@/store/useStore';
import { StarField } from '@/components/StarField';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Trash2, Plus, Minus, Rocket, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, clearCart, triggerRocketAnimation } = useStore();

  const handleCheckout = () => {
    if (cart.length === 0) {
      toast.error('Your cargo hold is empty!');
      return;
    }

    triggerRocketAnimation();
    
    setTimeout(() => {
      clearCart();
      toast.success('Order launched successfully!', {
        description: 'Track your shipment through the Andromeda Delivery System.',
      });
    }, 3000);
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen relative">
        <StarField />
        
        <div className="relative z-10 container mx-auto px-4 pt-28 pb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-md mx-auto text-center"
          >
            <div className="glass-panel p-12 rounded-2xl">
              <ShoppingBag className="w-24 h-24 mx-auto mb-6 text-muted-foreground" />
              <h2 className="text-3xl font-bold mb-4">Your Cargo Hold is Empty</h2>
              <p className="text-muted-foreground mb-8">
                Time to explore the cosmos and fill it with treasures!
              </p>
              <Link to="/shop">
                <Button size="lg" className="glow-border">
                  Explore Store
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative">
      <StarField />
      
      <div className="relative z-10 container mx-auto px-4 pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-5xl font-bold mb-2">
            <span className="glow-text">Your Galactic Cargo</span>
          </h1>
          <p className="text-muted-foreground">Review your items before launch</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item, idx) => (
              <motion.div
                key={item.sku}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="glass-panel">
                  <CardContent className="p-6">
                    <div className="flex gap-6">
                      <div className="w-24 h-24 rounded-lg bg-gradient-to-br from-card to-muted flex items-center justify-center text-4xl">
                        {item.type === 'wearable' && '⌚'}
                        {item.type === 'clothing' && '👕'}
                        {item.type === 'mineral' && '💎'}
                        {item.type === 'footwear' && '👟'}
                        {item.type === 'gadget' && '🔧'}
                        {item.type === 'consumable' && '🧪'}
                      </div>

                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-bold text-lg">{item.name}</h3>
                            <p className="text-sm text-muted-foreground">SKU: {item.sku}</p>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeFromCart(item.sku)}
                          >
                            <Trash2 className="w-4 h-4 text-destructive" />
                          </Button>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => updateQuantity(item.sku, Math.max(1, item.quantity - 1))}
                            >
                              <Minus className="w-3 h-3" />
                            </Button>
                            <Input
                              type="number"
                              value={item.quantity}
                              onChange={(e) =>
                                updateQuantity(item.sku, Math.max(1, parseInt(e.target.value) || 1))
                              }
                              className="w-16 text-center"
                              min="1"
                            />
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => updateQuantity(item.sku, item.quantity + 1)}
                            >
                              <Plus className="w-3 h-3" />
                            </Button>
                          </div>

                          <div className="text-xl font-bold text-primary">
                            ${(item.price * item.quantity).toFixed(2)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Card className="glass-panel sticky top-24">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span>${cartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Quantum Shipping</span>
                  <span className="text-cosmic-glow">FREE</span>
                </div>
                <Separator />
                <div className="flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span className="text-primary">${cartTotal().toFixed(2)}</span>
                </div>
              </CardContent>
              <CardFooter className="flex-col gap-4">
                <Button
                  size="lg"
                  className="w-full glow-border"
                  onClick={handleCheckout}
                >
                  <Rocket className="w-5 h-5 mr-2" />
                  Proceed to Launch
                </Button>
                <Link to="/shop" className="w-full">
                  <Button variant="outline" size="lg" className="w-full">
                    Continue Shopping
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
