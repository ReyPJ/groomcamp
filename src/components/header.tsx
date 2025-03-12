import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <header className="bg-primary-black shadow-lg w-full py-2 z-[9999]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-6">
          {/* Logo */}
          <a href="/" className="z-20">
            <img
              src="/images/LOGO.webp"
              alt="GroomCamp Logo"
              width={180}
              height={80}
              className="h-20 w-auto object-contain"
            />
          </a>

          {/* Navegación para desktop */}
          <nav className="hidden lg:flex items-center space-x-12">
            <a
              href="#inicio"
              className="font-Bebas text-2xl text-white hover:text-primery-yellow transition-colors tracking-wide"
            >
              INICIO
            </a>
            <a
              href="#nuestro-equipo"
              className="font-Bebas text-2xl text-white hover:text-primery-yellow transition-colors tracking-wide"
            >
              NUESTRO EQUIPO
            </a>
            <a
              href="#contacto"
              className="font-Bebas text-2xl text-white hover:text-primery-yellow transition-colors tracking-wide"
            >
              CONTACTO
            </a>
          </nav>

          {/* Iconos de usuario y carrito */}
          <div className="hidden lg:flex items-center space-x-6">
            <a
              href="/usuario"
              className="text-white hover:text-primery-yellow transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zm-4 7a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </a>
            <a
              href="/carrito"
              className="text-white hover:text-primery-yellow transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </a>
          </div>

          {/* Botón de menú móvil */}
          <button
            onClick={toggleMenu}
            className="lg:hidden bg-zinc-800 p-2 rounded-lg text-primery-yellow z-20 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {!isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      <div
        className={`fixed inset-0 bg-black z-10 transform transition-transform duration-300 lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="container mx-auto px-6 pt-28 pb-8">
          <nav className="flex flex-col space-y-6">
            <a
              href="#inicio"
              onClick={closeMenu}
              className="text-white hover:text-primery-yellow font-Bebas text-3xl tracking-wide flex items-center border-b border-zinc-800 pb-4"
            >
              <span className="text-primery-yellow mr-3 text-2xl">01.</span>
              INICIO
            </a>
            <a
              href="#nuestro-equipo"
              onClick={closeMenu}
              className="text-white hover:text-primery-yellow font-Bebas text-3xl tracking-wide flex items-center border-b border-zinc-800 pb-4"
            >
              <span className="text-primery-yellow mr-3 text-2xl">02.</span>
              NUESTRO EQUIPO
            </a>
            <a
              href="#contacto"
              onClick={closeMenu}
              className="text-white hover:text-primery-yellow font-Bebas text-3xl tracking-wide flex items-center border-b border-zinc-800 pb-4"
            >
              <span className="text-primery-yellow mr-3 text-2xl">03.</span>
              CONTACTO
            </a>

            <div className="flex justify-between pt-6">
              <a
                href="/usuario"
                onClick={closeMenu}
                className="bg-zinc-800 hover:bg-zinc-700 text-white p-3 rounded-lg transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zm-4 7a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </a>
              <a
                href="/carrito"
                onClick={closeMenu}
                className="bg-zinc-800 hover:bg-zinc-700 text-white p-3 rounded-lg transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </a>
            </div>
          </nav>
        </div>
      </div>

      <style>{`
        nav a:after {
          content: "";
          display: block;
          width: 0;
          height: 2px;
          background: #ffcc00;
          transition: width 0.3s;
          margin-top: 2px;
        }
        
        nav a:hover:after {
          width: 100%;
        }
      `}</style>
    </header>
  );
};

export default Header;
