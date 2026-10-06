import scarfHero from "../../images/instagram-01.jpg";
import scarfOne from "../../images/instagram-02.jpg";
import scarfTwo from "../../images/baner-right-image-04.jpg";
import bagHero from "../../images/explore-image-01.jpg";
import bagOne from "../../images/explore-image-02.jpg";
import bagTwo from "../../images/single-product-01.jpg";
import shoeHero from "../../images/instagram-03.jpg";
import shoeOne from "../../images/instagram-05.jpg";
import shoeTwo from "../../images/instagram-06.jpg";

export const collections = {
  foulards: {
    label: "Foulards",
    theme: "foulards",
    eyebrow: "Soie, couleur et mouvement",
    title: "Une touche, toute une allure.",
    intro: "Des carrés lumineux et des étoffes souples à nouer selon l'humeur, la saison et l'envie.",
    storyTitle: "L'art du détail",
    story: "Imprimés expressifs, couleurs choisies et toucher délicat : chaque foulard accompagne le mouvement et transforme les gestes les plus simples.",
    hero: scarfHero,
    products: [
      { id: "scarf-sienne", name: "Carré Sienne", description: "Imprimé chaud, fini satiné", price: 49, image: scarfOne },
      { id: "scarf-jardin", name: "Étole Jardin", description: "Motifs floraux, toucher léger", price: 59, image: scarfTwo },
      { id: "scarf-soleil", name: "Carré Soleil", description: "Une palette vive et lumineuse", price: 45, image: scarfHero },
    ],
  },
  sacs: {
    label: "Sacs",
    theme: "sacs",
    eyebrow: "Ligne, matière et savoir-faire",
    title: "La forme juste, au quotidien.",
    intro: "Des volumes pensés pour suivre le rythme de la journée, avec une attention particulière portée aux détails.",
    storyTitle: "Beaux dedans, beaux dehors",
    story: "Des lignes nettes, des proportions équilibrées et des détails fonctionnels donnent à chaque sac sa place naturelle dans votre vestiaire.",
    hero: bagHero,
    products: [
      { id: "bag-studio", name: "Sac Studio", description: "Format compact, ligne structurée", price: 140, image: bagOne },
      { id: "bag-signature", name: "Cabas Signature", description: "Un grand format pour la journée", price: 165, image: bagTwo },
      { id: "bag-nomade", name: "Sac Nomade", description: "L'essentiel, toujours à portée", price: 125, image: bagHero },
    ],
  },
  chaussures: {
    label: "Chaussures",
    theme: "chaussures",
    eyebrow: "Confort, caractère et mouvement",
    title: "Prenez le bon chemin.",
    intro: "Des silhouettes faites pour avancer : des lignes affirmées, des matières choisies et un confort qui suit vos journées.",
    storyTitle: "Du premier pas au dernier",
    story: "La bonne paire trouve l'équilibre entre maintien, souplesse et allure. Des essentiels faciles à porter, avec juste ce qu'il faut de caractère.",
    hero: shoeHero,
    products: [
      { id: "shoe-eclat", name: "Ballerines Éclat", description: "Souplesse et ligne épurée", price: 75, image: shoeOne },
      { id: "shoe-atelier", name: "Escarpins Atelier", description: "Un talon pensé pour bouger", price: 120, image: shoeTwo },
      { id: "shoe-ville", name: "Baskets de Ville", description: "Le confort des jours actifs", price: 95, image: shoeHero },
    ],
  },
};

export const products = Object.entries(collections).flatMap(([category, collection]) =>
  collection.products.map((product) => ({ ...product, category, categoryLabel: collection.label }))
);