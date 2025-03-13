import React from "react";

interface VenueLocation {
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  parking: boolean;
  publicTransport: boolean;
  amenities: string[];
}

interface EventLocationProps {
  location: VenueLocation;
}

const EventLocation: React.FC<EventLocationProps> = ({ location }) => {
  return (
    <section id="ubicacion" className="py-16 md:py-24 bg-primary-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-Bebas text-4xl md:text-5xl text-white mb-4">
            <span className="text-primery-yellow">UBICACIÓN</span> DEL EVENTO
          </h2>
          <div className="w-24 h-1 bg-primery-yellow mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Mapa */}
          <div className="lg:col-span-3 rounded-xl overflow-hidden h-[400px] lg:h-auto relative bg-zinc-800">
            {/* Placeholder para el mapa real - en producción reemplazarlo con un componente de mapa interactivo */}
            <img
              src={`https://maps.googleapis.com/maps/api/staticmap?center=${location.coordinates.lat},${location.coordinates.lng}&zoom=15&size=800x600&markers=color:yellow%7C${location.coordinates.lat},${location.coordinates.lng}&key=YOUR_API_KEY`}
              alt="Mapa de la ubicación"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
              <a
                href={`https://maps.google.com/?q=${location.coordinates.lat},${location.coordinates.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primery-yellow text-primary-black font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 transition-colors font-Bebas text-lg tracking-wide"
              >
                VER EN GOOGLE MAPS
              </a>
            </div>
          </div>

          {/* Información del lugar */}
          <div className="lg:col-span-2 bg-zinc-800 rounded-xl p-8 border border-zinc-700">
            <h3 className="text-2xl font-bold text-white mb-6">
              Información del Lugar
            </h3>

            <div className="space-y-6">
              {/* Dirección */}
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-zinc-700 p-3 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-primery-yellow"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
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
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Dirección</h4>
                  <p className="text-zinc-400">{location.address}</p>
                </div>
              </div>

              {/* Transporte */}
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-zinc-700 p-3 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-primery-yellow"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Cómo llegar</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {location.parking && (
                      <span className="bg-zinc-700 px-3 py-1 text-sm rounded-full text-white flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1 text-primery-yellow"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                          />
                        </svg>
                        Estacionamiento
                      </span>
                    )}
                    {location.publicTransport && (
                      <span className="bg-zinc-700 px-3 py-1 text-sm rounded-full text-white flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1 text-primery-yellow"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                          />
                        </svg>
                        Transporte público
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Servicios */}
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-zinc-700 p-3 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-primery-yellow"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Servicios</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {location.amenities.map((amenity, index) => (
                      <span
                        key={index}
                        className="bg-zinc-700 px-3 py-1 text-sm rounded-full text-white"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventLocation;
