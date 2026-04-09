import { useState, useCallback, useEffect } from 'react';
import { siteConfig } from './config';
import type { Product } from './config';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import SubHero from './sections/SubHero';
import VideoSection from './sections/VideoSection';
import Sectors from './sections/Sectors';
import Products from './sections/Products';
import FAQ from './sections/FAQ';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import CEE from './CEE';
import Residentiel from './Residentiel';
import Tertiaire from './Tertiaire';
import Industriel from './Industriel';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Handle scrolling to anchor when navigating from other pages
  useEffect(() => {
    const anchor = sessionStorage.getItem('scrollToAnchor');
    if (anchor) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const element = document.querySelector(anchor);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      sessionStorage.removeItem('scrollToAnchor');
    }
  }, []);

  const handleAddToCart = useCallback((product: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [
        ...prevItems,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
          image: product.image,
        },
      ];
    });
  }, []);

  const handleRemoveFromCart = useCallback((id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }, []);

  const handleUpdateQuantity = useCallback((id: number, quantity: number) => {
    if (quantity === 0) {
      setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    } else {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === id ? { ...item, quantity } : item
        )
      );
    }
  }, []);

  const currentPath = window.location.pathname;

  return (
    <div className="min-h-screen bg-white" lang={siteConfig.language || undefined}>
      <Navigation
        cartItems={cartItems}
        onRemoveFromCart={handleRemoveFromCart}
        onUpdateQuantity={handleUpdateQuantity}
      />
      <main>
        {currentPath === '/cee' ? (
          <CEE />
        ) : currentPath === '/secteur-residentiel' ? (
          <Residentiel />
        ) : currentPath === '/secteur-tertiaire' ? (
          <Tertiaire />
        ) : currentPath === '/secteur-industriel' ? (
          <Industriel />
        ) : (
          <>
            <Hero />
            <SubHero />
            <Sectors />
            <Products onAddToCart={handleAddToCart} />
            <VideoSection />
            <FAQ />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
