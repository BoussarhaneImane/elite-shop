import React, { useMemo, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import imgFeature from "../../images/women-01.jpg";
import imgCare from "../../images/single-product-01.jpg";
import imgColor from "../../images/women-02.jpg";
import imgWardrobe from "../../images/left-banner-image.jpg";
import imgScarf from "../../images/baner-right-image-04.jpg";
import imgShoes from "../../images/men-01.jpg";
import "./ArticlePage.css";

const articleCategories = [
  { key: "tous", label: "Tous les articles" },
  { key: "style", label: "Style" },
  { key: "conseils", label: "Conseils" },
  { key: "tendances", label: "Tendances" },
];

const articles = [
  {
    slug: "garde-robe-essentielle",
    category: "Style",
    categoryKey: "style",
    title: "Construire une garde-robe essentielle, pièce après pièce",
    excerpt: "Moins de vêtements, plus de possibilités : les repères pour composer un vestiaire durable et personnel.",
    date: "12 septembre 2026",
    readTime: "5 min de lecture",
    image: imgFeature,
    body: [
      "Une garde-robe essentielle ne se résume pas à une liste de basiques. Elle commence par l'observation de votre quotidien : les pièces que vous portez vraiment, les matières dans lesquelles vous vous sentez bien et les couleurs qui s'accordent naturellement entre elles.",
      "Choisissez d'abord quelques silhouettes faciles à associer. Une chemise bien coupée, un pantalon polyvalent et une veste de caractère peuvent composer plusieurs tenues sans multiplier les achats. La coupe et le confort comptent davantage qu'une tendance passagère.",
      "Enfin, avancez à votre rythme. Une pièce choisie avec attention trouvera plus facilement sa place dans votre vestiaire et vous accompagnera saison après saison.",
    ],
  },
  {
    slug: "prendre-soin-du-cuir",
    category: "Conseils",
    categoryKey: "conseils",
    title: "Les gestes simples pour prendre soin du cuir",
    excerpt: "Nettoyage, hydratation et rangement : une routine douce pour préserver vos pièces préférées.",
    date: "08 septembre 2026",
    readTime: "4 min de lecture",
    image: imgCare,
    body: [
      "Le cuir aime la régularité. Après le port, passez un chiffon doux et sec pour retirer la poussière, puis laissez la pièce respirer loin d'une source de chaleur directe.",
      "Pour les marques légères, privilégiez un produit adapté à la finition et testez-le d'abord sur une zone discrète. Une petite quantité suffit : l'objectif est de nourrir la matière, pas de la saturer.",
      "Rangez sacs et chaussures à l'abri du soleil, dans un endroit sec. Un rangement qui conserve leur forme évite les plis et prolonge leur allure.",
    ],
  },
  {
    slug: "couleurs-de-saison",
    category: "Tendances",
    categoryKey: "tendances",
    title: "Les couleurs de saison et comment les porter",
    excerpt: "Des tons profonds aux nuances lumineuses, trouvez l'équilibre qui donne du relief à une silhouette.",
    date: "02 septembre 2026",
    readTime: "3 min de lecture",
    image: imgColor,
    body: [
      "La couleur peut transformer une silhouette sans en compliquer la composition. Pour commencer, associez une nuance marquée à des tons plus sobres que vous portez déjà.",
      "Les accessoires sont un terrain d'essai idéal : un foulard, une ceinture ou un sac apporte une note vive tout en laissant la tenue respirer.",
      "Le meilleur accord reste celui dans lequel vous vous reconnaissez. Gardez les couleurs qui vous donnent envie de vous habiller le matin, plutôt que de suivre une palette à la lettre.",
    ],
  },
  {
    slug: "composer-une-silhouette",
    category: "Style",
    categoryKey: "style",
    title: "Composer une silhouette autour d'une seule pièce",
    excerpt: "Une méthode accessible pour laisser une pièce forte guider le reste de votre tenue.",
    date: "26 août 2026",
    readTime: "4 min de lecture",
    image: imgWardrobe,
    body: [
      "Choisissez la pièce qui attire d'abord votre regard : une veste structurée, un imprimé ou une matière singulière. Elle devient le point de départ, pas une contrainte.",
      "Autour d'elle, gardez des formes simples et des textures complémentaires. Jouer sur les proportions permet de créer du mouvement sans ajouter trop d'éléments.",
      "Avant de sortir, vérifiez que chaque pièce a une raison d'être dans la tenue. Cette dernière étape aide à garder une silhouette lisible et naturelle.",
    ],
  },
  {
    slug: "porter-le-foulard",
    category: "Conseils",
    categoryKey: "conseils",
    title: "Le foulard, trois façons de changer une tenue",
    excerpt: "Noué au cou, dans les cheveux ou à la poignée d'un sac : un accessoire, plusieurs envies.",
    date: "19 août 2026",
    readTime: "3 min de lecture",
    image: imgScarf,
    body: [
      "Au cou, le foulard encadre le visage et apporte une touche de couleur immédiate. Un nœud souple donne un résultat décontracté, tandis qu'un pli plus net accompagne une tenue habillée.",
      "Dans les cheveux, il devient un détail graphique. Choisissez un nouage simple pour qu'il reste confortable tout au long de la journée.",
      "Attaché à la poignée d'un sac, il réveille une pièce familière et permet de rappeler une couleur présente ailleurs dans la tenue.",
    ],
  },
  {
    slug: "choisir-ses-chaussures",
    category: "Style",
    categoryKey: "style",
    title: "Bien choisir ses chaussures pour la journée",
    excerpt: "Confort, occasion et proportions : les détails qui font la différence au moment du choix.",
    date: "11 août 2026",
    readTime: "4 min de lecture",
    image: imgShoes,
    body: [
      "Une chaussure réussie accompagne votre journée au lieu de la dicter. Pensez d'abord au temps que vous allez la porter et aux déplacements prévus.",
      "La forme doit laisser le pied à l'aise, et la matière doit correspondre à l'usage. Essayez toujours les deux chaussures et prenez le temps de marcher quelques pas.",
      "Pour une silhouette équilibrée, observez les volumes dans leur ensemble. Une chaussure discrète laisse parler une tenue forte; un modèle affirmé peut devenir son point d'ancrage.",
    ],
  },
];

const ArticlePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { slug } = useParams();
  const [searchTerm, setSearchTerm] = useState("");
  const selectedArticle = articles.find((article) => article.slug === slug);
  const requestedCategory = searchParams.get("category") || "tous";
  const selectedCategory = articleCategories.some(({ key }) => key === requestedCategory)
    ? requestedCategory
    : "tous";
  const visibleArticles = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLocaleLowerCase("fr");
    return articles.filter((article) => {
      const matchesCategory = selectedCategory === "tous" || article.categoryKey === selectedCategory;
      const matchesSearch = `${article.title} ${article.category} ${article.excerpt}`
        .toLocaleLowerCase("fr")
        .includes(normalizedSearch);

      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  const selectCategory = (category) => {
    setSearchParams(category === "tous" ? {} : { category });
  };

  if (selectedArticle) {
    return (
      <main className="article-detail-page">
        <Link className="article-back-link" to="/articles">
          <FaArrowLeft /> Retour aux articles
        </Link>
        <article>
          <header className="article-detail-heading">
            <p className="articles-kicker">{selectedArticle.category}</p>
            <h1>{selectedArticle.title}</h1>
            <p>{selectedArticle.date} <span aria-hidden="true">·</span> {selectedArticle.readTime}</p>
          </header>
          <img className="article-detail-image" src={selectedArticle.image} alt="" />
          <div className="article-story-body">
            <p className="article-lead">{selectedArticle.excerpt}</p>
            {selectedArticle.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </article>
        <Link className="article-back-link article-back-bottom" to="/articles">
          <FaArrowLeft /> Tous les articles
        </Link>
      </main>
    );
  }

  return (
    <main className="articles-page">
      <section className="articles-heading">
        <p className="articles-kicker">Le journal Elite</p>
        <h1>Articles</h1>
        <p className="articles-intro">
          Des idées de style, des conseils et des inspirations pour cultiver votre allure.
        </p>
      </section>

      <Link className="article-feature" to={`/articles/${articles[0].slug}`}>
        <div className="article-feature-copy">
          <p className="articles-kicker">À la une <span>·</span> {articles[0].category}</p>
          <h2>{articles[0].title}</h2>
          <p>{articles[0].excerpt}</p>
          <span className="article-read-link">Lire l'article <FaArrowRight /></span>
        </div>
        <img src={articles[0].image} alt="" />
      </Link>

      <section className="article-results" aria-live="polite">
        <div className="article-results-heading">
          <div>
            <p className="articles-kicker">Le journal</p>
            <h2>{selectedCategory === "tous" ? "Tous les articles" : articleCategories.find(({ key }) => key === selectedCategory).label}</h2>
          </div>
          <p>{visibleArticles.length} article{visibleArticles.length > 1 ? "s" : ""} à découvrir</p>
        </div>

        <nav className="article-categories" aria-label="Catégories d'articles">
          {articleCategories.map((category) => (
            <button
              key={category.key}
              type="button"
              className={selectedCategory === category.key ? "category-active" : ""}
              aria-pressed={selectedCategory === category.key}
              onClick={() => selectCategory(category.key)}
            >
              {category.label}
            </button>
          ))}
        </nav>

        <div className="article-toolbar">
          <label className="article-search">
            <span>Rechercher</span>
            <input
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Titre, sujet, catégorie"
            />
          </label>
          <p className="article-result-count">{visibleArticles.length} résultat{visibleArticles.length > 1 ? "s" : ""}</p>
        </div>

        <div className="article-grid">
          {visibleArticles.map((article) => (
            <article className="article-card" key={article.slug}>
              <Link className="article-card-link" to={`/articles/${article.slug}`}>
                <div className="article-image-wrap">
                  <img src={article.image} alt="" />
                </div>
                <div className="article-card-details">
                  <span className="article-product-category">{article.category} <span aria-hidden="true">·</span> {article.readTime}</span>
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                  <span className="article-read-link">Lire l'article <FaArrowRight /></span>
                  <time>{article.date}</time>
                </div>
              </Link>
            </article>
          ))}
        </div>
        {visibleArticles.length === 0 && (
          <p className="article-empty-state">Aucun article ne correspond à votre recherche.</p>
        )}
      </section>
    </main>
  );
};

export default ArticlePage;