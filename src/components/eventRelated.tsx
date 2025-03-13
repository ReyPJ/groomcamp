import React from "react";

interface RelatedEvent {
  id: number;
  name: string;
  date: string;
  image: string;
  slug: string;
}

interface EventRelatedProps {
  events: RelatedEvent[];
}

const EventRelated: React.FC<EventRelatedProps> = ({ events }) => {
  if (!events || events.length === 0) return null;

  return (
    <section className="bg-primary-black py-16 md:py-20 relative">
      <div className="absolute inset-0 pattern-bg opacity-5"></div>

      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-Bebas text-4xl md:text-5xl text-white mb-4">
            OTROS <span className="text-primery-yellow">EVENTOS</span>
          </h2>
          <div className="w-24 h-1 bg-primery-yellow mx-auto mb-6"></div>
          <p className="text-zinc-400 text-lg">
            Descubre más eventos de GroomCamp por todo el país
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-zinc-800 rounded-xl overflow-hidden border border-zinc-700 transition-transform hover:transform hover:scale-105 hover:border-primery-yellow group"
            >
              <a href={`/events/${event.slug}`} className="block">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-zinc-800 animate-pulse"></div>
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onLoad={(e) => {
                      (
                        e.target as HTMLImageElement
                      ).previousElementSibling?.classList.add("hidden");
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primery-yellow transition-colors">
                    {event.name}
                  </h3>
                  <p className="text-zinc-400 mb-4">{event.date}</p>
                  <div className="flex items-center text-primery-yellow font-medium">
                    Ver detalles
                    <svg
                      className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="/events"
            className="inline-flex items-center text-primery-yellow hover:text-yellow-400 transition-colors font-medium"
          >
            Ver todos los eventos
            <svg
              className="w-5 h-5 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>

      <style>{`
        .pattern-bg {
          background-color: rgba(255, 255, 255, 0.03);
          background-image: radial-gradient(
              circle at 25px 25px,
              rgba(255, 255, 255, 0.2) 2px,
              transparent 0
            ),
            radial-gradient(
              circle at 75px 75px,
              rgba(255, 255, 255, 0.2) 2px,
              transparent 0
            );
          background-size: 100px 100px;
        }
      `}</style>
    </section>
  );
};

export default EventRelated;
