```jsx
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPhoneAlt,
  FaTruck,
  FaSearch,
} from "react-icons/fa";

const Nav = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        <div className="h-16 flex items-center justify-between gap-6">

          {/* Search */}
          <div className="relative hidden md:block w-56 lg:w-64">
            <input
              type="text"
              placeholder="Rechercher..."
              className="
                w-full
                bg-gray-50
                border border-gray-200
                rounded-full
                pl-10 pr-4 py-2.5
                text-sm
                text-gray-700
                placeholder-gray-400
                outline-none
                focus:border-emerald-500
                focus:ring-2
                focus:ring-emerald-100
                transition-all duration-300
              "
            />

            <FaSearch
              className="
                absolute left-4 top-1/2
                -translate-y-1/2
                text-gray-400
              "
              size={13}
            />
          </div>

          {/* Center information */}
          <div className="hidden lg:flex items-center gap-8 text-sm">

            {/* Livraison */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-emerald-50 flex items-center justify-center">
                <FaTruck className="text-emerald-600" size={14} />
              </div>

              <div>
                <p className="font-semibold text-gray-800">
                  Livraison rapide
                </p>
                <p className="text-xs text-gray-400">
                  Partout au Maroc
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-emerald-50 flex items-center justify-center">
                <FaPhoneAlt className="text-emerald-600" size={13} />
              </div>

              <div>
                <p className="font-semibold text-gray-800">
                  Contactez-nous
                </p>
                <p className="text-xs text-gray-400">
                  +212 6 XX XX XX XX
                </p>
              </div>
            </div>

          </div>

          {/* Social Media */}
          <div className="flex items-center gap-2">

            <a
              href="#"
              className="
                w-9 h-9
                rounded-full
                flex items-center justify-center
                bg-gray-50
                text-gray-500
                hover:bg-emerald-500
                hover:text-white
                hover:-translate-y-1
                transition-all duration-300
              "
            >
              <FaFacebookF size={13} />
            </a>

            <a
              href="#"
              className="
                w-9 h-9
                rounded-full
                flex items-center justify-center
                bg-gray-50
                text-gray-500
                hover:bg-emerald-500
                hover:text-white
                hover:-translate-y-1
                transition-all duration-300
              "
            >
              <FaTwitter size={13} />
            </a>

            <a
              href="#"
              className="
                w-9 h-9
                rounded-full
                flex items-center justify-center
                bg-gray-50
                text-gray-500
                hover:bg-emerald-500
                hover:text-white
                hover:-translate-y-1
                transition-all duration-300
              "
            >
              <FaInstagram size={13} />
            </a>

          </div>

        </div>

      </div>
    </nav>
  );
};

export default Nav;
```
