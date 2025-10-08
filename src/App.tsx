import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SpaceshipAnimation } from "@/components/animations/SpaceshipAnimation";
import { RocketAnimation } from "@/components/animations/RocketAnimation";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Auth from "./pages/Auth";
import BuyAPlanet from "./pages/BuyAPlanet";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/buy-a-planet" element={<BuyAPlanet />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <SpaceshipAnimation />
        <RocketAnimation />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
