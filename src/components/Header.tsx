import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Sparkles, User, Home, Store } from 'lucide-react';
import { useStore } from '@/store/useStore';
import { ThemeToggle } from './ThemeToggle';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export const Header = () => {
  const location = useLocation();
  const { cartCount, user } = useStore();
  const count = cartCount();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Sparkles className="w-8 h-8 text-primary group-hover:text-cosmic-glow transition-colors" />
              <div className="absolute inset-0 blur-xl bg-primary/30 group-hover:bg-cosmic-glow/50 transition-all" />
            </div>
            <span className="text-2xl font-bold font-orbitron glow-text">
              Galactic Store
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className={`flex items-center gap-2 transition-colors ${
                isActive('/') ? 'text-primary' : 'text-foreground/70 hover:text-primary'
              }`}
            >
              <Home className="w-4 h-4" />
              Home
            </Link>
            <Link
              to="/shop"
              className={`flex items-center gap-2 transition-colors ${
                isActive('/shop') ? 'text-primary' : 'text-foreground/70 hover:text-primary'
              }`}
            >
              <Store className="w-4 h-4" />
              Shop
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            
            <Link to="/auth">
              <Button variant="ghost" size="icon" className="relative">
                <User className="w-5 h-5" />
                {user && (
                  <Badge className="absolute -top-1 -right-1 w-2 h-2 p-0 bg-cosmic-glow" />
                )}
              </Button>
            </Link>

            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="w-5 h-5" />
                {count > 0 && (
                  <Badge className="absolute -top-1 -right-1 px-1.5 py-0.5 text-xs bg-primary">
                    {count}
                  </Badge>
                )}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
