import { Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-border/40 bg-background/50 backdrop-blur-sm mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Rocket className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold font-orbitron">Galactic Store</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              The Universe's Finest Marketplace for Cosmic Treasures. Delivering across all galaxies since 2524.
            </p>
            <p className="text-xs text-muted-foreground">
              <strong>Headquarters:</strong><br />
              Andromeda Galaxy, Sector 7G<br />
              Nebula Plaza, Floor 42<br />
              Cosmic Postal Code: AG-7G-42
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 font-orbitron">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-muted-foreground hover:text-primary transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-muted-foreground hover:text-primary transition-colors">
                  Cart
                </Link>
              </li>
              <li>
                <Link to="/buy-a-planet" className="text-muted-foreground hover:text-primary transition-colors">
                  Buy a Planet
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold text-lg mb-4 font-orbitron">Customer Service</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Shipping across all galaxies</li>
              <li>30-day return policy</li>
              <li>Quantum Support: 24/7/365</li>
              <li>Telepathic Chat Available</li>
              <li>Email: support@galacticstore.cosmos</li>
              <li>Quantum Phone: +∞ 0000-GALAXY</li>
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div>
            <h3 className="font-semibold text-lg mb-4 font-orbitron">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Intergalactic Trade Agreement</li>
              <li>Universal Warranty Info</li>
              <li>Alien Rights Compliance</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/40">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} Galactic Store™. All rights reserved across all known universes.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>Registered with:</span>
              <span className="text-primary">Intergalactic Commerce Commission</span>
            </div>
          </div>
          <p className="text-xs text-muted-foreground text-center mt-4">
            Licensed to operate in 47 galaxies. Certified by the Universal Trade Federation. Member of the Cosmic Better Business Bureau.
          </p>
        </div>
      </div>
    </footer>
  );
};
