import { useState, useMemo } from 'react';
import { products, categories, collections } from '@/data/products';
import { useStore } from '@/store/useStore';
import { ProductViewer } from '@/components/3d/ProductViewer';
import { StarField } from '@/components/StarField';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { ShoppingCart, Sparkles, Filter, Tag } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

const Shop = () => {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCollection, setSelectedCollection] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 100000]);

  const { addToCart, triggerSpaceshipAnimation } = useStore();

  const maxPrice = Math.max(...products.map(p => p.price));

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesCollection = selectedCollection === 'All' || product.collection === selectedCollection;
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      return matchesCategory && matchesCollection && matchesPrice;
    });
  }, [selectedCategory, selectedCollection, priceRange]);

  const handleAddToCart = (product: typeof products[0], event?: React.MouseEvent) => {
    let position = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    
    if (event) {
      const target = event.currentTarget as HTMLElement;
      const card = target.closest('.product-card');
      if (card) {
        const rect = card.getBoundingClientRect();
        position = {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        };
      }
    }
    
    triggerSpaceshipAnimation(position);
    addToCart(product);
    toast.success(`${product.name} added to cargo!`, {
      description: 'Your spaceship is on the way! 🚀',
    });
  };

  const resetFilters = () => {
    setSelectedCategory('All');
    setSelectedCollection('All');
    setPriceRange([0, maxPrice]);
  };

  return (
    <div className="min-h-screen relative">
      <StarField />
      
      <div className="relative z-10 container mx-auto px-4 pt-28 pb-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-5xl font-bold mb-4">
            <span className="glow-text">Interstellar Products</span>
          </h1>
          <p className="text-xl text-muted-foreground font-exo">
            Discover treasures from across the cosmos
          </p>
        </motion.div>

        {/* Filters Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-panel p-6 mb-8 rounded-lg"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold font-orbitron">Filters</h2>
            </div>
            <Button variant="outline" size="sm" onClick={resetFilters}>
              Reset All
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Category Filter */}
            <div>
              <label className="text-sm font-medium mb-2 block">Category</label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Collection Filter */}
            <div>
              <label className="text-sm font-medium mb-2 block">Collection</label>
              <Select value={selectedCollection} onValueChange={setSelectedCollection}>
                <SelectTrigger>
                  <SelectValue placeholder="Select collection" />
                </SelectTrigger>
                <SelectContent>
                  {collections.map((collection) => (
                    <SelectItem key={collection} value={collection}>
                      {collection}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Price Range Filter */}
            <div>
              <label className="text-sm font-medium mb-2 block">
                Price Range: ${priceRange[0]} - ${priceRange[1].toLocaleString()}
              </label>
              <Slider
                min={0}
                max={maxPrice}
                step={100}
                value={priceRange}
                onValueChange={setPriceRange}
                className="mt-2"
              />
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
            <Sparkles className="w-4 h-4" />
            <span>{filteredProducts.length} products found</span>
          </div>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, idx) => (
            <motion.div
              key={product.sku}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
            >
              <Card className="glass-panel hover-lift overflow-hidden group cursor-pointer h-full flex flex-col product-card">
                {product.discount && (
                  <div className="absolute top-2 right-2 z-10">
                    <Badge variant="destructive" className="bg-red-500/90 hover:bg-red-600">
                      <Tag className="w-3 h-3 mr-1" />
                      {product.discount}% OFF
                    </Badge>
                  </div>
                )}

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
                    <CardTitle className="text-lg line-clamp-1">{product.name}</CardTitle>
                    <Badge variant="outline" className="text-xs whitespace-nowrap">
                      {product.type}
                    </Badge>
                  </div>
                  <CardDescription className="line-clamp-2 text-xs">
                    {product.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1">
                  <div className="flex items-center gap-2">
                    <div className="text-2xl font-bold text-primary">
                      ${product.price.toLocaleString()}
                    </div>
                    {product.originalPrice && (
                      <div className="text-sm text-muted-foreground line-through">
                        ${product.originalPrice.toLocaleString()}
                      </div>
                    )}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {product.collection}
                  </div>
                </CardContent>

                <CardFooter>
                  <Button
                    className="w-full glow-border"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(product, e);
                    }}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <Sparkles className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-2xl font-bold mb-2">No products found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your filters to discover more cosmic treasures
            </p>
            <Button onClick={resetFilters}>Reset Filters</Button>
          </motion.div>
        )}
      </div>

      {/* Product Detail Modal */}
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="glass-panel max-w-2xl">
          {selectedProduct && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl flex items-center justify-between">
                  {selectedProduct.name}
                  {selectedProduct.discount && (
                    <Badge variant="destructive" className="bg-red-500/90">
                      <Tag className="w-3 h-3 mr-1" />
                      {selectedProduct.discount}% OFF
                    </Badge>
                  )}
                </DialogTitle>
                <DialogDescription className="flex items-center gap-2 flex-wrap">
                  <Badge variant="outline">{selectedProduct.type}</Badge>
                  <Badge variant="outline">{selectedProduct.category}</Badge>
                  <Badge variant="outline">{selectedProduct.collection}</Badge>
                  <span>SKU: {selectedProduct.sku}</span>
                </DialogDescription>
              </DialogHeader>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="h-64 rounded-lg bg-gradient-to-br from-card to-muted">
                  <ProductViewer color={selectedProduct.color} type={selectedProduct.type} />
                </div>

                <div className="space-y-4">
                  <p className="text-muted-foreground">{selectedProduct.description}</p>
                  
                  <div className="flex items-center gap-3">
                    <div className="text-3xl font-bold text-primary">
                      ${selectedProduct.price.toLocaleString()}
                    </div>
                    {selectedProduct.originalPrice && (
                      <div className="text-lg text-muted-foreground line-through">
                        ${selectedProduct.originalPrice.toLocaleString()}
                      </div>
                    )}
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
