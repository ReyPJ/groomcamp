import React from "react";

interface EventDetailsProps {
  description: string;
  venue: string;
  price: {
    regular: number;
    early: number;
    vip: number;
  };
}

const EventDetails: React.FC<EventDetailsProps> = ({
  description,
  venue,
  price,
}) => {
  return (
    <section id="detalles" className="bg-zinc-900 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Información principal */}
          <div className="lg:col-span-2">
            <h2 className="font-Bebas text-3xl md:text-4xl text-white mb-8">
              SOBRE EL <span className="text-primery-yellow">EVENTO</span>
            </h2>

            <div className="prose prose-lg prose-invert max-w-none mb-8">
              <p className="text-zinc-300 leading-relaxed">{description}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
              <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 flex flex-col items-center text-center">
                <div className="bg-primery-yellow text-primary-black p-3 rounded-full mb-4">
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                </div>
                <h3 className="text-white text-xl font-bold mb-2">
                  Certificación
                </h3>
                <p className="text-zinc-400">
                  Certificado oficial al finalizar el evento
                </p>
              </div>

              <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 flex flex-col items-center text-center">
                <div className="bg-primery-yellow text-primary-black p-3 rounded-full mb-4">
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-white text-xl font-bold mb-2">
                  3 días completos
                </h3>
                <p className="text-zinc-400">
                  Con más de 20 horas de contenido
                </p>
              </div>

              <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 flex flex-col items-center text-center">
                <div className="bg-primery-yellow text-primary-black p-3 rounded-full mb-4">
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-white text-xl font-bold mb-2">
                  Networking
                </h3>
                <p className="text-zinc-400">
                  Conoce a los mejores profesionales
                </p>
              </div>
            </div>
          </div>

          {/* Tarjeta de información del evento */}
          <div className="bg-zinc-800 rounded-xl p-8 border border-zinc-700 sticky top-24">
            <h3 className="text-white text-2xl font-bold font-Bebas mb-6">
              INFORMACIÓN RÁPIDA
            </h3>

            <div className="space-y-5">
              <div className="flex items-start">
                <div className="bg-zinc-900 p-2 rounded-lg mr-4">
                  <svg
                    className="w-5 h-5 text-primery-yellow"
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
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Lugar</h3>
                  <p className="text-zinc-400">{venue}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-zinc-900 p-2 rounded-lg mr-4">
                  <svg
                    className="w-5 h-5 text-primery-yellow"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Precios</h3>
                  <p className="text-zinc-400">Desde ${price.early} MXN</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-zinc-900 p-2 rounded-lg mr-4">
                  <svg
                    className="w-5 h-5 text-primery-yellow"
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
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Duración</h3>
                  <p className="text-zinc-400">3 días completos</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-zinc-900 p-2 rounded-lg mr-4">
                  <svg
                    className="w-5 h-5 text-primery-yellow"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Idioma</h3>
                  <p className="text-zinc-400">Español</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="#registro"
                className="w-full bg-primery-yellow text-black font-bold py-3 px-6 rounded-lg flex items-center justify-center transition-all hover:bg-yellow-500 transform hover:-translate-y-1 hover:shadow-lg font-Bebas tracking-wide text-xl"
              >
                REGISTRARME AHORA
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
