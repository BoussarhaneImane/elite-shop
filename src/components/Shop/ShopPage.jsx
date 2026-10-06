import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaBagShopping, FaMagnifyingGlass } from "react-icons/fa6";
import { CartContext } from "../context/CartContext";
import { products } from "./catalog";
import "./shop.css";

const categories = [
  { id: "all", label: "Tout voir" },
  { id: "foulards", label: "Foulards" },
  { id: "sacs", label: "Sacs" },
  { id: "chaussures", label: "Chaussures" },
];

const ShopPage = () => {
  const { addToCart } = useContext(CartContext);
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("featured");
  const [addedProduct, setAddedProduct] = useState("");

  const visibleProducts = products
    .filter((product) => activeCategory === "all" || product.category === activeCategory)
    .filter((product) => `${product.name} ${product.categoryLabel}`.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((first, second) => {
      if (sortOrder === "price-asc") return first.price - second.price;
      if (sortOrder === "price-desc") return second.price - first.price;
      return 0;
    });

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedProduct(product.id);
    window.setTimeout(() => setAddedProduct(""), 1400);
  };

  return (
    <main className="shop-page">
      <section className="shop-heading">
        <div>
          <p className="shop-eyebrow">La sélection Elite</p>
          <h1>Les pièces qui font la différence.</h1>
          <p>Foulards, sacs et chaussures choisis pour accompagner chaque jour avec allure.</p>
        </div>
        <Link className="shop-heading-link" to="/panier">
          <FaBagShopping /> Voir mon panier
        </Link>
      </section>

      <section className="shop-catalog" aria-label="Catalogue de la boutique">
        <div className="shop-toolbar">
          <div className="shop-filters" aria-label="Filtrer par catégorie">
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                className={activeCategory === category.id ? "shop-filter active" : "shop-filter"}
                onClick={() => setActiveCategory(category.id)}
                aria-pressed={activeCategory === category.id}
              >
                {category.label}
              </button>
            ))}
          </div>
          <div className="shop-tools">
            <label className="shop-search">
              <FaMagnifyingGlass aria-hidden="true" />
              <span className="visually-hidden">Rechercher un article</span>
              <input
                type="search"
                placeholder="Rechercher"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
              />
            </label>
            <label className="shop-sort-label" htmlFor="shop-sort">Trier</label>
            <select id="shop-sort" className="shop-sort" value={sortOrder} onChange={(event) => setSortOrder(event.target.value)}>
              <option value="featured">À la une</option>
              <option value="price-asc">Prix croissant</option>
              <option value="price-desc">Prix décroissant</option>
            </select>
          </div>
        </div>

        <p className="shop-results-count">{visibleProducts.length} {visibleProducts.length > 1 ? "articles" : "article"}</p>
        {visibleProducts.length ? (
          <div className="shop-product-grid">
            {visibleProducts.map((product) => (
              <article className="shop-product-card" key={product.id}>
                <Link className="shop-product-image" to={`/categories/${product.category}`} aria-label={`Découvrir ${product.name}`}>
                  <img src={product.image} alt={product.name} loading="lazy" />
                  <span>{product.categoryLabel}</span>
                </Link>
                <div className="shop-product-details">
                  <div>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                  </div>
                  <strong>{product.price} €</strong>
                </div>
                <button className="shop-add-button" type="button" onClick={() => handleAddToCart(product)}>
                  <FaBagShopping />
                  {addedProduct === product.id ? "Ajouté au panier" : "Ajouter au panier"}
                </button>
              </article>
            ))}
          </div>
        ) : (
          <p className="shop-empty-results">Aucun article ne correspond à cette recherche.</p>
        )}
      </section>
    </main>
  );
};

export default ShopPage;