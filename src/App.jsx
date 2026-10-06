import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import Category from './components/Category/Category.jsx';
import Services from './components/Services/Services.jsx';
import Banner from './components/Banner/Banner.jsx';
import Banner2 from './components/Banner/Banner2.jsx';
import Footer from './components/Footer/Footer.jsx';
import AboutPage from './components/AboutPage.jsx';
import Panier from './components/Panier/Panier.jsx';
import SubscribeArea from './components/Footer/SubscribeArea.jsx';
import ShopPage from './components/Shop/ShopPage.jsx';
import NotFoundPage from './components/Shop/components/NotFoundPage.jsx';
import ArticlePage from './components/Articles/ArticlePage.jsx';
import CategoryPage from './components/Articles/CategoryPage.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { CartProvider } from './components/context/CartContext.jsx';


const ScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const target = document.getElementById(decodeURIComponent(hash.slice(1)));
    target?.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      block: 'start',
    });
  }, [pathname, hash]);

  return null;
};

const App = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <CartProvider>
        <Router>
          <ScrollToHash />
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <div className="scroll-mt-24">
                    <Category />
                    <Services />
                    <Banner />
                    <Banner2 />
                    <SubscribeArea />
                    <Footer />
                  </div>
                </>
              }
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/articles" element={<ArticlePage />} />
            <Route path="/articles/:slug" element={<ArticlePage />} />
            <Route path="/categories/:category" element={<CategoryPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/panier" element={<Panier />} />
            <Route path="*" element={<NotFoundPage />} />

          </Routes>
        </Router>
      </CartProvider>
    </div>
  );
};

export default App;
