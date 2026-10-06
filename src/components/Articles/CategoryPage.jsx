import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { FaBagShopping, FaArrowRight } from "react-icons/fa6";
import { CartContext } from "../context/CartContext";
import { collections } from "../Shop/catalog";
import "./CategoryPage.css";

const CategoryPage = () => {
  const { category } = useParams();
  const collection = collections[category];
  const { addToCart } = useContext(CartContext);

  if (!collection) {
    return (
      <main className="category-not-found">
        <h1>Collection introuvable</h1>
        <Link to="/">Retour à la page d&apos;accueil</Link>
      </main>
    );
  }

  return (
    <main className={`category-page category-page--${collection.theme}`}>
      <section className="category-hero">
        <div className="category-hero-copy">
          <nav className="category-breadcrumb" aria-label="Fil d'Ariane">
            <Link to="/">Accueil</Link>
            <span>/</span>
            <span>{collection.label}</span>
          </nav>
          <p className="category-eyebrow">{collection.eyebrow}</p>
          <h1>{collection.title}</h1>
          <p className="category-intro">{collection.intro}</p>
          <a className="category-scroll-link" href="#selection">
            Découvrir la collection <FaArrowRight />
          </a>
        </div>
        <div className="category-hero-image">
          <img src={collection.hero} alt={`Sélection Elite : ${collection.label.toLowerCase()}`} />
          <span>{collection.label} · Collection Elite</span>
        </div>
      </section>

      <section className="category-story" aria-label={collection.storyTitle}>
        <p className="category-eyebrow">L&apos;esprit de la collection</p>
        <h2>{collection.storyTitle}</h2>
        <p>{collection.story}</p>
      </section>

      <section className="category-products" id="selection">
        <div className="category-products-heading">
          <div>
            <p className="category-eyebrow">À découvrir</p>
            <h2>La sélection {collection.label.toLowerCase()}</h2>
          </div>
          <span>{collection.products.length} pièces</span>
        </div>

        <div className="category-product-grid">
          {collection.products.map((product, index) => (
            <article className="category-product" key={product.id}>
              <div className="category-product-image">
                <img src={product.image} alt={product.name} />
                <span className="category-product-index">0{index + 1}</span>
              </div>
              <div className="category-product-info">
                <div>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                </div>
                <span className="category-product-price">{product.price} €</span>
              </div>
              <button
                className="category-add-button"
                type="button"
                onClick={() => addToCart(product)}
              >
                <FaBagShopping /> Ajouter au panier
              </button>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default CategoryPage;
