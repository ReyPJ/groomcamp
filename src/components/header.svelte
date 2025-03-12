<script>
  import { onMount } from "svelte";

  // Estado para controlar la apertura del menú
  let isMenuOpen = false;
  let mounted = false;

  // Simplificado para mejor rendimiento
  onMount(() => {
    mounted = true;
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  });

  // Función de toggle simplificada
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;

    // Controlar el overflow del body
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }
</script>

<header class="bg-primary-black shadow-lg w-full py-2 z-[9999]">
  <div class="container mx-auto px-4">
    <div class="flex items-center justify-between py-6">
      <!-- Logo -->
      <a href="/" class="z-20" aria-label="GroomCamp Inicio">
        <img
          src="/images/LOGO.webp"
          alt="GroomCamp Logo"
          width="180"
          height="80"
          class="h-20 w-auto object-contain"
        />
      </a>

      <!-- Navegación para desktop -->
      <nav class="hidden lg:flex items-center space-x-12">
        <a
          href="#inicio"
          class="font-Bebas text-2xl text-white hover:text-primery-yellow transition-colors tracking-wide"
        >
          INICIO
        </a>
        <a
          href="#nuestro-equipo"
          class="font-Bebas text-2xl text-white hover:text-primery-yellow transition-colors tracking-wide"
        >
          NUESTRO EQUIPO
        </a>
        <a
          href="#contacto"
          class="font-Bebas text-2xl text-white hover:text-primery-yellow transition-colors tracking-wide"
        >
          CONTACTO
        </a>
      </nav>

      <!-- Iconos de usuario y carrito -->
      <div class="hidden lg:flex items-center space-x-6">
        <a
          href="/usuario"
          class="text-white hover:text-primery-yellow transition-colors"
          aria-label="Perfil de usuario"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zm-4 7a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </a>
        <a
          href="/carrito"
          class="text-white hover:text-primery-yellow transition-colors"
          aria-label="Ver carrito de compras"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </a>
      </div>

      <!-- Botón de menú móvil - Simplificado -->
      <button
        on:click={toggleMenu}
        class="lg:hidden p-2 rounded-lg z-20 focus:outline-none active:bg-zinc-700 {isMenuOpen
          ? 'text-white bg-zinc-900'
          : 'text-primery-yellow bg-zinc-800'}"
        aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={isMenuOpen}
        id="menu-toggle"
      >
        {#if !isMenuOpen}
          <span class="sr-only">Abrir menú</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        {:else}
          <span class="sr-only">Cerrar menú</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        {/if}
      </button>
    </div>
  </div>

  <!-- Menú móvil - COMPLETAMENTE SIMPLIFICADO -->
  {#if mounted && isMenuOpen}
    <div
      class="fixed inset-0 bg-zinc-900 z-10 lg:hidden"
      style="background-color: rgb(24, 24, 27);"
    >
      <div class="absolute inset-0 bg-black" aria-hidden="true"></div>

      <div class="container mx-auto px-6 pt-28 pb-8 relative z-10">
        <nav class="flex flex-col space-y-6">
          <a
            href="#inicio"
            on:click={toggleMenu}
            class="text-white hover:text-primery-yellow font-Bebas text-3xl tracking-wide flex items-center border-b border-zinc-800 pb-4"
          >
            <span class="text-primery-yellow mr-3 text-2xl">01.</span>
            INICIO
          </a>
          <a
            href="#nuestro-equipo"
            on:click={toggleMenu}
            class="text-white hover:text-primery-yellow font-Bebas text-3xl tracking-wide flex items-center border-b border-zinc-800 pb-4"
          >
            <span class="text-primery-yellow mr-3 text-2xl">02.</span>
            NUESTRO EQUIPO
          </a>
          <a
            href="#contacto"
            on:click={toggleMenu}
            class="text-white hover:text-primery-yellow font-Bebas text-3xl tracking-wide flex items-center border-b border-zinc-800 pb-4"
          >
            <span class="text-primery-yellow mr-3 text-2xl">03.</span>
            CONTACTO
          </a>

          <div class="flex justify-between pt-6">
            <a
              href="/usuario"
              on:click={toggleMenu}
              class="bg-zinc-800 hover:bg-zinc-700 text-white p-3 rounded-lg"
              aria-label="Perfil de usuario"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zm-4 7a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </a>
            <a
              href="/carrito"
              on:click={toggleMenu}
              class="bg-zinc-800 hover:bg-zinc-700 text-white p-3 rounded-lg"
              aria-label="Ver carrito de compras"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </a>
          </div>
        </nav>
      </div>
    </div>
  {/if}
</header>

<style>
  /* Estilos para el subrayado de enlaces en modo desktop */
  :global(.lg\:flex a::after) {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: #ffcc00;
    transition: width 0.3s;
    margin-top: 2px;
  }

  :global(.lg\:flex a:hover::after) {
    width: 100%;
  }

  /* Eliminar transiciones en mobile para mejorar rendimiento */
  @media (max-width: 1023px) {
    :global(a),
    :global(button) {
      transition: none !important;
    }
  }
</style>
