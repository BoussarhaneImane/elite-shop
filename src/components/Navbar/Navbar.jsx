import { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaTimes, FaBars, FaChevronDown } from "react-icons/fa";

import { FaBagShopping } from "react-icons/fa6";

import logopng from "./logo.png";
import "./Nav.css";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  const location = useLocation();

  const itemCount = cartItems.reduce((count, item) => count + (item.quantity || 1), 0);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isArticlesMenuOpen, setIsArticlesMenuOpen] = useState(false);
  const [isMobileArticlesOpen, setIsMobileArticlesOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMenus = () => {
    setIsMobileMenuOpen(false);
    setIsArticlesMenuOpen(false);
    setIsMobileArticlesOpen(false);
  };

  return (
    <>
      <nav className="fashion-navbar">
        <div className="navbar-announcement">
          <span>Nouvelle collection · Automne / Hiver</span>
          <span className="announcement-detail">Livraison offerte dès 150 €</span>
        </div>

        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMenus}>
            <img src={logopng} alt="Logo" />
            <span className="logo-copy">
              <strong>ELITE</strong>
              <small>Maison contemporaine</small>
            </span>
          </Link>

          <div className="desktop-menu">
            <Link to="/" className={`nav-link ${location.pathname === "/" ? "active" : ""}`}>
              Accueil
            </Link>
            <Link to="/shop" className={`nav-link ${location.pathname === "/shop" ? "active" : ""}`}>
              Boutique
            </Link>
            <div
              className="articles-wrapper"
              onMouseEnter={() => setIsArticlesMenuOpen(true)}
              onMouseLeave={() => setIsArticlesMenuOpen(false)}
            >
              <button
                type="button"
                className={`nav-link articles-button ${location.pathname.startsWith("/categories/") ? "active" : ""}`}
                aria-haspopup="true"
                aria-expanded={isArticlesMenuOpen}
                onClick={() => setIsArticlesMenuOpen((open) => !open)}
                onFocus={() => setIsArticlesMenuOpen(true)}
              >
                Collections <FaChevronDown className={`chevron ${isArticlesMenuOpen ? "rotate" : ""}`} />
              </button>
              {isArticlesMenuOpen && (
                <div className="dropdown-menu">
                  <Link to="/categories/foulards" onClick={closeMenus}>
                    <span>Foulards</span>
                    <small>Soie, couleur et mouvement</small>
                  </Link>
                  <Link to="/categories/sacs" onClick={closeMenus}>
                    <span>Sacs</span>
                    <small>Ligne et savoir-faire</small>
                  </Link>
                  <Link to="/categories/chaussures" onClick={closeMenus}>
                    <span>Chaussures</span>
                    <small>Confort et caractère</small>
                  </Link>
                </div>
              )}
            </div>
            <Link to="/articles" className={`nav-link ${location.pathname.startsWith("/articles") ? "active" : ""}`}>
              Le journal
            </Link>
          </div>

          <div className="navbar-actions">
            <Link to="/panier" className="cart-button" aria-label="Voir le panier">
              <FaBagShopping />
              {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
            </Link>

            <button
              className="mobile-toggle"
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        <div className={`mobile-menu ${isMobileMenuOpen ? "mobile-open" : ""}`}>
          <Link to="/" onClick={closeMenus}>Accueil</Link>
          <Link to="/shop" onClick={closeMenus}>Boutique</Link>
          <Link to="/about" onClick={closeMenus}>À propos</Link>
          <button
            type="button"
            className="mobile-articles-toggle"
            aria-expanded={isMobileArticlesOpen}
            onClick={() => setIsMobileArticlesOpen((open) => !open)}
          >
            Collections <FaChevronDown className={`chevron ${isMobileArticlesOpen ? "rotate" : ""}`} />
          </button>
          {isMobileArticlesOpen && (
            <div className="mobile-submenu">
              <Link to="/categories/foulards" onClick={closeMenus}>Foulards</Link>
              <Link to="/categories/sacs" onClick={closeMenus}>Sacs</Link>
              <Link to="/categories/chaussures" onClick={closeMenus}>Chaussures</Link>
            </div>
          )}
          <Link to="/articles" onClick={closeMenus}>Le journal</Link>

          <Link to="/panier" className="mobile-cart" onClick={closeMenus}>
            <FaBagShopping />
            Panier
            {itemCount > 0 && <span>{itemCount}</span>}
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
