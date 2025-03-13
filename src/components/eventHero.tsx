import React, { useEffect, useState } from "react";

interface EventHeroProps {
  name: string;
  date: string;
  location: string;
  image: string;
  shortDescription: string;
}

const EventHero: React.FC<EventHeroProps> = ({
  name,
  date,
  location,
  image,
  shortDescription,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Precarga la imagen
    const img = new Image();
    img.src = image;
    img.onload = () => setIsLoaded(true);
  }, [image]);

  return (
    <section className="relative w-full h-[70vh] overflow-hidden bg-primary-black">
      {/* Skeleton mientras carga */}
      <div
        className={`absolute inset-0 bg-zinc-800 animate-pulse transition-opacity duration-500 ${
          isLoaded ? "opacity-0" : "opacity-100"
        }`}
      ></div>

      {/* Imagen de fondo */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      {/* Overlay de gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/80"></div>

      {/* Contenido */}
      <div className="container mx-auto px-4 h-full relative z-10">
        <div className="flex flex-col justify-center h-full text-white max-w-4xl">
          <div className="animate-fadeIn">
            <div className="inline-flex items-center mb-4 bg-primery-yellow/90 px-3 py-1 rounded-md">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="font-medium text-primary-black">{date}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-Bebas mb-4 tracking-wide">
              {name}
            </h1>

            <p className="text-xl md:text-2xl mb-6 font-light max-w-2xl">
              {shortDescription}
            </p>

            <div className="flex items-center text-white/80 mb-8">
              <div className="flex items-center mr-6">
                <svg
                  className="w-5 h-5 mr-2 text-primery-yellow"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>{location}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#registro"
                className="bg-primery-yellow hover:bg-yellow-500 text-primary-black font-bold py-3 px-8 rounded-lg transition-all transform hover:-translate-y-1 hover:shadow-lg font-Bebas tracking-wide text-lg md:text-xl"
              >
                RESERVA TU LUGAR
              </a>

              <a
                href="#programa"
                className="bg-transparent hover:bg-white/10 border-2 border-white text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:-translate-y-1 hover:shadow-lg font-Bebas tracking-wide text-lg md:text-xl"
              >
                VER PROGRAMA
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          className="fill-zinc-900"
        >
          <path d="M0,64L60,58.7C120,53,240,43,360,53.3C480,64,600,96,720,96C840,96,960,64,1080,58.7C1200,53,1320,75,1380,85.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default EventHero;
