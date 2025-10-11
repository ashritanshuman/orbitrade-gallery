import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Product {
  sku: string;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  type: string;
  category: string;
  collection: string;
  description: string;
  color: string;
  image: string;
}

export interface CartItem extends Product {
  quantity: number;
}

interface StoreState {
  // Theme
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  
  // Cart
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (sku: string) => void;
  updateQuantity: (sku: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: () => number;
  cartCount: () => number;
  
  // Auth
  user: { name: string; email: string } | null;
  setUser: (user: { name: string; email: string } | null) => void;
  
  // Animations
  showSpaceshipAnimation: boolean;
  showRocketAnimation: boolean;
  spaceshipStartPosition: { x: number; y: number } | null;
  triggerSpaceshipAnimation: (position: { x: number; y: number }) => void;
  triggerRocketAnimation: () => void;
}

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      // Theme
      theme: 'dark',
      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === 'light' ? 'dark' : 'light',
        })),
      
      // Cart
      cart: [],
      addToCart: (product) =>
        set((state) => {
          const existingItem = state.cart.find((item) => item.sku === product.sku);
          if (existingItem) {
            return {
              cart: state.cart.map((item) =>
                item.sku === product.sku
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          }
          return {
            cart: [...state.cart, { ...product, quantity: 1 }],
          };
        }),
      removeFromCart: (sku) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.sku !== sku),
        })),
      updateQuantity: (sku, quantity) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.sku === sku ? { ...item, quantity } : item
          ),
        })),
      clearCart: () => set({ cart: [] }),
      cartTotal: () => {
        return get().cart.reduce((total, item) => total + item.price * item.quantity, 0);
      },
      cartCount: () => {
        return get().cart.reduce((count, item) => count + item.quantity, 0);
      },
      
      // Auth
      user: null,
      setUser: (user) => set({ user }),
      
      // Animations
      showSpaceshipAnimation: false,
      showRocketAnimation: false,
      spaceshipStartPosition: null,
      triggerSpaceshipAnimation: (position) => {
        set({ showSpaceshipAnimation: true, spaceshipStartPosition: position });
        setTimeout(() => set({ showSpaceshipAnimation: false, spaceshipStartPosition: null }), 2000);
      },
      triggerRocketAnimation: () => {
        set({ showRocketAnimation: true });
        setTimeout(() => set({ showRocketAnimation: false }), 3000);
      },
    }),
    {
      name: 'galactic-store-storage',
      partialize: (state) => ({
        theme: state.theme,
        cart: state.cart,
        user: state.user,
      }),
    }
  )
);
