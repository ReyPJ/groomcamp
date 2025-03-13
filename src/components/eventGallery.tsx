import React, { useState } from "react";

interface EventGalleryProps {
  images: string[];
}

const EventGallery: React.FC<EventGalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="galeria" className="py-16 md:py-24 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-Bebas text-4xl md:text-5xl text-white mb-4">
            GALERÍA DEL <span className="text-primery-yellow">EVENTO</span>
          </h2>
          <div className="w-24 h-1 bg-primery-yellow mx-auto mb-6"></div>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Revive los mejores momentos de nuestros eventos anteriores y
            anticipa lo que te espera en esta edición.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group aspect-square overflow-hidden rounded-lg cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              {/* Skeleton loader */}
              <div className="absolute inset-0 bg-zinc-800 animate-pulse"></div>

              <img
                src={image}
                alt={`Imagen de galería ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-0"
                onLoad={(e) =>
                  (e.target as HTMLImageElement).classList.remove("opacity-0")
                }
                loading="lazy"
              />

              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity flex items-center justify-center">
                <div className="bg-primery-yellow rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal para imagen ampliada */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="max-w-5xl w-full max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -right-4 -top-12 bg-primery-yellow text-primary-black rounded-full p-2 hover:bg-yellow-500 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <img
              src={selectedImage}
              alt="Imagen ampliada"
              className="w-full h-auto max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default EventGallery;
