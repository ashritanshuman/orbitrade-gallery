import { useState } from 'react';
import { products } from '@/data/products';
import { useStore } from '@/store/useStore';
import { ProductViewer } from '@/components/3d/ProductViewer';
import { StarField } from '@/components/StarField';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ShoppingCart, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

const Shop = () => {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const { addToCart, triggerSpaceshipAnimation } = useStore();

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart(product);
    triggerSpaceshipAnimation();
    toast.success(`${product.name} added to cargo!`, {
      description: 'Your spaceship is on the way! 🚀',
    });
  };

  return (
    <div className="min-h-screen relative">
      <StarField />
      
      <div className="relative z-10 container mx-auto px-4 pt-28 pb-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4">
            <span className="glow-text">Interstellar Products</span>
          </h1>
          <p className="text-xl text-muted-foreground font-exo">
            Discover treasures from across the cosmos
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, idx) => (
            <motion.div
              key={product.sku}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="glass-panel hover-lift overflow-hidden group cursor-pointer h-full flex flex-col">
                <div
                  className="h-48 relative bg-gradient-to-br from-card to-muted"
                  onClick={() => setSelectedProduct(product)}
                >
                  <ProductViewer color={product.color} type={product.type} />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-primary" />
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <Badge variant="outline" className="text-xs">
                      {product.type}
                    </Badge>
                  </div>
                  <CardDescription className="line-clamp-2">
                    {product.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1">
                  <div className="text-2xl font-bold text-primary">
                    ${product.price.toFixed(2)}
                  </div>
                </CardContent>

                <CardFooter>
                  <Button
                    className="w-full glow-border"
                    onClick={() => handleAddToCart(product)}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Product Detail Modal */}
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="glass-panel max-w-2xl">
          {selectedProduct && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedProduct.name}</DialogTitle>
                <DialogDescription className="flex items-center gap-2">
                  <Badge variant="outline">{selectedProduct.type}</Badge>
                  <span>SKU: {selectedProduct.sku}</span>
                </DialogDescription>
              </DialogHeader>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="h-64 rounded-lg bg-gradient-to-br from-card to-muted">
                  <ProductViewer color={selectedProduct.color} type={selectedProduct.type} />
                </div>

                <div className="space-y-4">
                  <p className="text-muted-foreground">{selectedProduct.description}</p>
                  
                  <div className="text-3xl font-bold text-primary">
                    ${selectedProduct.price.toFixed(2)}
                  </div>

                  <Button
                    className="w-full glow-border"
                    size="lg"
                    onClick={() => {
                      handleAddToCart(selectedProduct);
                      setSelectedProduct(null);
                    }}
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Shop;
