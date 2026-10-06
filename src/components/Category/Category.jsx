import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { collections } from "../Shop/catalog";
import "./products.css";

const Category = () => (
  <section className="collection-section" id="collections">
    <div className="collection-section-heading">
      <div>
        <p>Nos essentiels</p>
        <h2>À chacune son allure.</h2>
      </div>
      <Link to="/shop">Voir toute la boutique <FaArrowRight /></Link>
    </div>
    <div className="collection-grid">
      {Object.entries(collections).map(([slug, collection], index) => (
        <Link className="collection-card" to={`/categories/${slug}`} key={slug}>
          <div className="collection-card-image">
            <img src={collection.hero} alt={collection.label} loading="lazy" />
            <span>0{index + 1}</span>
          </div>
          <div className="collection-card-copy">
            <div>
              <h3>{collection.label}</h3>
              <p>{collection.eyebrow}</p>
            </div>
            <FaArrowRight aria-hidden="true" />
          </div>
        </Link>
      ))}
    </div>
  </section>
);

export default Category;