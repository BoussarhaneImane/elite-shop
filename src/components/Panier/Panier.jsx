import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaTrash } from "react-icons/fa6";
import { toast, ToastContainer } from "react-toastify";
import { CartContext } from "../context/CartContext";
import "react-toastify/dist/ReactToastify.css";
import "./Panier.css";

const Panier = () => {
  const { cartItems, handleQuantityChange, handleRemoveItem } = useContext(CartContext);
  const [showForm, setShowForm] = useState(false);
  const [userInfo, setUserInfo] = useState({ name: "", email: "", address: "", clientNumber: "" });
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleInputChange = (event) => {
    setUserInfo((currentInfo) => ({ ...currentInfo, [event.target.name]: event.target.value }));
  };

  const handleCheckout = (event) => {
    event.preventDefault();

    const orderLines = cartItems.map((item) => {
      const name = item.name || item.title;
      return `- ${name} x ${item.quantity} : ${(item.price * item.quantity).toFixed(2)} €`;
    });
    const message = [
      "Bonjour, je souhaite confirmer cette commande :",
      "",
      ...orderLines,
      "",
      `Total : ${totalPrice.toFixed(2)} €`,
      "",
      "Coordonnées de livraison :",
      `Nom : ${userInfo.name}`,
      `E-mail : ${userInfo.email}`,
      `Adresse : ${userInfo.address}`,
      `Téléphone : ${userInfo.clientNumber}`,
    ].join("\n");
    const whatsappUrl = `https://wa.me/212632409738?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setUserInfo({ name: "", email: "", address: "", clientNumber: "" });
    toast.success("Votre commande est prête dans WhatsApp. Appuyez sur Envoyer pour la transmettre.");
  };

  return (
    <main className="cart-page">
      <div className="cart-page-heading">
        <div>
          <p className="cart-eyebrow">Votre sélection</p>
          <h1>Le panier</h1>
        </div>
        <Link className="cart-continue-link" to="/shop"><FaArrowLeft /> Continuer mes achats</Link>
      </div>

      {cartItems.length === 0 ? (
        <section className="cart-empty-state">
          <p>Votre panier attend ses premières pièces.</p>
          <Link to="/shop">Découvrir la boutique</Link>
        </section>
      ) : (
        <div className="cart-layout">
          <section className="cart-lines" aria-label="Articles dans votre panier">
            {cartItems.map((item) => {
              const name = item.name || item.title;
              const image = item.image || item.img;

              return (
                <article className="cart-line" key={item.id}>
                  <img className="cart-line-image" src={image} alt={name} />
                  <div className="cart-line-info">
                    <div className="cart-line-heading">
                      <div>
                        <h2>{name}</h2>
                        <p>{item.description || "Collection Elite"}</p>
                      </div>
                      <strong>{(item.price * item.quantity).toFixed(2)} €</strong>
                    </div>
                    <div className="cart-line-actions">
                      <div className="cart-quantity" aria-label={`Quantité de ${name}`}>
                        <button type="button" onClick={() => handleQuantityChange(item.id, item.quantity - 1)} disabled={item.quantity <= 1} aria-label="Réduire la quantité">−</button>
                        <span>{item.quantity}</span>
                        <button type="button" onClick={() => handleQuantityChange(item.id, item.quantity + 1)} aria-label="Augmenter la quantité">+</button>
                      </div>
                      <button className="cart-remove" type="button" onClick={() => handleRemoveItem(item.id)}>
                        <FaTrash aria-hidden="true" /> Retirer
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </section>

          <aside className="cart-summary">
            <h2>Récapitulatif</h2>
            <div className="cart-summary-row"><span>Sous-total</span><span>{totalPrice.toFixed(2)} €</span></div>
            <div className="cart-summary-row"><span>Livraison</span><span>Calculée à la commande</span></div>
            <div className="cart-summary-total"><span>Total</span><strong>{totalPrice.toFixed(2)} €</strong></div>
            {!showForm ? (
              <button className="cart-checkout-button" type="button" onClick={() => setShowForm(true)}>Commander</button>
            ) : (
              <form className="cart-checkout-form" onSubmit={handleCheckout}>
                <h3>Coordonnées de livraison</h3>
                <label htmlFor="checkout-name">Nom complet</label>
                <input id="checkout-name" name="name" autoComplete="name" required value={userInfo.name} onChange={handleInputChange} />
                <label htmlFor="checkout-email">Adresse e-mail</label>
                <input id="checkout-email" type="email" name="email" autoComplete="email" required value={userInfo.email} onChange={handleInputChange} />
                <label htmlFor="checkout-address">Adresse de livraison</label>
                <textarea id="checkout-address" name="address" autoComplete="street-address" required rows="3" value={userInfo.address} onChange={handleInputChange} />
                <label htmlFor="checkout-phone">Téléphone</label>
                <input id="checkout-phone" type="tel" name="clientNumber" autoComplete="tel" required value={userInfo.clientNumber} onChange={handleInputChange} />
                <button className="cart-checkout-button" type="submit">Envoyer la commande sur WhatsApp</button>
                <button className="cart-cancel-button" type="button" onClick={() => setShowForm(false)}>Annuler</button>
              </form>
            )}
            <p className="cart-checkout-note">WhatsApp s’ouvrira pour confirmer l’envoi de votre commande.</p>
          </aside>
        </div>
      )}
      <ToastContainer position="bottom-right" />
    </main>
  );
};

export default Panier;