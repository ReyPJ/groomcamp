import React, { useState } from "react";

interface ScheduleEvent {
  time: string;
  title: string;
  description: string;
  speaker?: string;
  speakerImage?: string;
}

interface ScheduleDay {
  day: string;
  events: ScheduleEvent[];
}

interface EventScheduleProps {
  schedule: ScheduleDay[];
}

const EventSchedule: React.FC<EventScheduleProps> = ({ schedule }) => {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <section id="programa" className="bg-primary-black py-16 md:py-24 relative">
      {/* Decorative elements */}
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-primery-yellow opacity-5 rounded-full blur-xl"></div>
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-primery-yellow opacity-5 rounded-full blur-xl"></div>

      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-Bebas text-4xl md:text-5xl text-white mb-4">
            PROGRAMA DEL <span className="text-primery-yellow">EVENTO</span>
          </h2>
          <div className="w-24 h-1 bg-primery-yellow mx-auto mb-6"></div>
          <p className="text-zinc-400 text-lg">
            Tres días intensivos con los mejores expertos del grooming.
            Workshops prácticos, demostraciones en vivo y mucho más.
          </p>
        </div>

        {/* Day selector tabs */}
        <div className="flex flex-wrap justify-center mb-10 gap-2">
          {schedule.map((day, index) => (
            <button
              key={index}
              onClick={() => setActiveDay(index)}
              className={`py-3 px-6 rounded-lg font-bold transition-all font-Bebas tracking-wide text-xl ${
                activeDay === index
                  ? "bg-primery-yellow text-primary-black"
                  : "bg-zinc-800 text-white hover:bg-zinc-700"
              }`}
            >
              {day.day.split(" - ")[0]}
            </button>
          ))}
        </div>

        {/* Schedule timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-zinc-800/50 rounded-xl p-6 md:p-10 border border-zinc-700">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 font-Bebas">
              {schedule[activeDay]?.day || ""}
            </h3>

            <div className="space-y-6">
              {schedule[activeDay]?.events.map((event, index) => (
                <div key={index} className="relative pl-8 md:pl-10">
                  {/* Timeline dot and line */}
                  <div className="absolute left-0 top-0 h-full">
                    <div className="w-4 h-4 rounded-full bg-primery-yellow"></div>
                    {index < schedule[activeDay].events.length - 1 && (
                      <div className="w-0.5 h-full bg-zinc-700 ml-2 -mt-2"></div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="bg-zinc-800 rounded-lg p-5 border border-zinc-700 transition-all hover:border-primery-yellow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h4 className="text-xl font-bold text-white">
                        {event.title}
                      </h4>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-zinc-900 text-primery-yellow">
                        <svg
                          className="w-4 h-4 mr-1"
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
                        {event.time}
                      </span>
                    </div>

                    <p className="text-zinc-400 mb-4">{event.description}</p>

                    {/* Speaker info if available */}
                    {event.speaker && (
                      <div className="flex items-center mt-4 pt-4 border-t border-zinc-700">
                        {event.speakerImage && (
                          <div className="mr-4">
                            <img
                              src={event.speakerImage}
                              alt={event.speaker}
                              className="w-12 h-12 rounded-full object-cover border-2 border-primery-yellow"
                            />
                          </div>
                        )}
                        <div>
                          <p className="text-sm text-zinc-400">
                            Presentado por
                          </p>
                          <p className="text-white font-medium">
                            {event.speaker}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSchedule;
