import React, { useState } from "react";

interface Price {
  regular: number;
  early: number;
  vip: number;
}

interface EventRegistrationProps {
  eventName: string;
  eventDate: string;
  price: Price;
}

type TicketType = "early" | "regular" | "vip";

const EventRegistration: React.FC<EventRegistrationProps> = ({
  eventName,
  eventDate,
  price,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    ticketType: "regular" as TicketType,
    quantity: 1,
    coupon: "",
    acceptTerms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });

  // Calculate ticket price based on selected type and quantity
  const getTicketPrice = () => price[formData.ticketType] * formData.quantity;

  // Ticket features based on type
  const ticketFeatures = {
    early: [
      "Acceso a todas las conferencias",
      "Materiales básicos",
      "Certificado de participación",
      "20% de descuento preventa",
    ],
    regular: [
      "Acceso a todas las conferencias",
      "Materiales completos",
      "Certificado de participación",
      "Comidas incluidas",
    ],
    vip: [
      "Acceso a todas las conferencias",
      "Kit premium de materiales",
      "Certificado de participación",
      "Comidas gourmet incluidas",
      "Acceso al área VIP con ponentes",
      "Sesión privada con expertos",
      "Regalo exclusivo del evento",
    ],
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.acceptTerms
    ) {
      setFormStatus({
        type: "error",
        message:
          "Por favor completa todos los campos requeridos y acepta los términos.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulación de envío - reemplazar con llamada API real
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setFormStatus({
        type: "success",
        message:
          "¡Registro exitoso! Te hemos enviado un correo con los detalles de tu compra.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        ticketType: "regular",
        quantity: 1,
        coupon: "",
        acceptTerms: false,
      });
    } catch (error) {
      setFormStatus({
        type: "error",
        message:
          "Ha ocurrido un error al procesar tu registro. Por favor intenta nuevamente.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="registration" className="py-16 md:py-24 bg-zinc-900 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-primary-black to-transparent"></div>
      <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-primery-yellow opacity-5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-Bebas text-4xl md:text-5xl text-white mb-4">
            RESERVA TU <span className="text-primery-yellow">LUGAR</span>
          </h2>
          <div className="w-24 h-1 bg-primery-yellow mx-auto mb-6"></div>
          <p className="text-zinc-400 text-lg">
            Asegura tu participación en este increíble evento y comienza a
            prepararte para una experiencia única
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Ticket options */}
          <div className="lg:col-span-1 space-y-6">
            {/* Early Bird Ticket */}
            <div
              className={`bg-zinc-800 rounded-xl p-6 border transition-all ${
                formData.ticketType === "early"
                  ? "border-primery-yellow ring-2 ring-primery-yellow/30"
                  : "border-zinc-700 hover:border-zinc-500"
              }`}
              onClick={() =>
                setFormData((prev) => ({ ...prev, ticketType: "early" }))
              }
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-white">Early Bird</h3>
                <div className="bg-primery-yellow text-primary-black text-sm font-bold px-3 py-1 rounded-full">
                  AHORRA 20%
                </div>
              </div>
              <div className="flex items-baseline mb-4">
                <span className="text-3xl font-bold text-white">
                  ${price.early.toLocaleString()}
                </span>
                <span className="text-zinc-400 ml-2 line-through">
                  ${price.regular.toLocaleString()}
                </span>
              </div>
              <ul className="space-y-2 mb-4">
                {ticketFeatures.early.map((feature, index) => (
                  <li key={index} className="flex items-center text-zinc-300">
                    <svg
                      className="w-4 h-4 text-primery-yellow mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="pt-4 mt-4 border-t border-zinc-700">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="ticket-early"
                    name="ticketType"
                    value="early"
                    checked={formData.ticketType === "early"}
                    onChange={handleChange}
                    className="w-4 h-4 text-primery-yellow"
                  />
                  <label
                    htmlFor="ticket-early"
                    className="ml-2 text-white cursor-pointer"
                  >
                    Seleccionar
                  </label>
                </div>
              </div>
            </div>

            {/* Regular Ticket */}
            <div
              className={`bg-zinc-800 rounded-xl p-6 border transition-all ${
                formData.ticketType === "regular"
                  ? "border-primery-yellow ring-2 ring-primery-yellow/30"
                  : "border-zinc-700 hover:border-zinc-500"
              }`}
              onClick={() =>
                setFormData((prev) => ({ ...prev, ticketType: "regular" }))
              }
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-white">Regular</h3>
                <div className="bg-zinc-700 text-white text-sm font-bold px-3 py-1 rounded-full">
                  STANDARD
                </div>
              </div>
              <div className="flex items-baseline mb-4">
                <span className="text-3xl font-bold text-white">
                  ${price.regular.toLocaleString()}
                </span>
              </div>
              <ul className="space-y-2 mb-4">
                {ticketFeatures.regular.map((feature, index) => (
                  <li key={index} className="flex items-center text-zinc-300">
                    <svg
                      className="w-4 h-4 text-primery-yellow mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="pt-4 mt-4 border-t border-zinc-700">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="ticket-regular"
                    name="ticketType"
                    value="regular"
                    checked={formData.ticketType === "regular"}
                    onChange={handleChange}
                    className="w-4 h-4 text-primery-yellow"
                  />
                  <label
                    htmlFor="ticket-regular"
                    className="ml-2 text-white cursor-pointer"
                  >
                    Seleccionar
                  </label>
                </div>
              </div>
            </div>

            {/* VIP Ticket */}
            <div
              className={`bg-zinc-800 rounded-xl p-6 border transition-all ${
                formData.ticketType === "vip"
                  ? "border-primery-yellow ring-2 ring-primery-yellow/30"
                  : "border-zinc-700 hover:border-zinc-500"
              }`}
              onClick={() =>
                setFormData((prev) => ({ ...prev, ticketType: "vip" }))
              }
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-white">VIP</h3>
                <div className="bg-gradient-to-r from-yellow-500 to-amber-500 text-black text-sm font-bold px-3 py-1 rounded-full">
                  PREMIUM
                </div>
              </div>
              <div className="flex items-baseline mb-4">
                <span className="text-3xl font-bold text-white">
                  ${price.vip.toLocaleString()}
                </span>
              </div>
              <ul className="space-y-2 mb-4">
                {ticketFeatures.vip.map((feature, index) => (
                  <li key={index} className="flex items-center text-zinc-300">
                    <svg
                      className="w-4 h-4 text-primery-yellow mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="pt-4 mt-4 border-t border-zinc-700">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="ticket-vip"
                    name="ticketType"
                    value="vip"
                    checked={formData.ticketType === "vip"}
                    onChange={handleChange}
                    className="w-4 h-4 text-primery-yellow"
                  />
                  <label
                    htmlFor="ticket-vip"
                    className="ml-2 text-white cursor-pointer"
                  >
                    Seleccionar
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Registration form */}
          <div className="lg:col-span-2">
            <div className="bg-zinc-800 rounded-xl p-8 border border-zinc-700">
              <h3 className="text-2xl font-bold text-white mb-6">
                Formulario de registro
              </h3>

              {formStatus.type && (
                <div
                  className={`p-4 mb-6 rounded-lg ${
                    formStatus.type === "success"
                      ? "bg-green-900/40 border border-green-800 text-green-100"
                      : "bg-red-900/40 border border-red-800 text-red-100"
                  }`}
                >
                  {formStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-zinc-300 mb-2">
                      Nombre completo{" "}
                      <span className="text-primery-yellow">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-zinc-900 border border-zinc-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primery-yellow"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-zinc-300 mb-2">
                      Email <span className="text-primery-yellow">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-zinc-900 border border-zinc-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primery-yellow"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-zinc-300 mb-2">
                    Teléfono <span className="text-primery-yellow">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primery-yellow"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="quantity"
                      className="block text-zinc-300 mb-2"
                    >
                      Cantidad de entradas
                    </label>
                    <select
                      id="quantity"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full bg-zinc-900 border border-zinc-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primery-yellow"
                    >
                      {[1, 2, 3, 4, 5].map((num) => (
                        <option key={num} value={num}>
                          {num}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="coupon"
                      className="block text-zinc-300 mb-2"
                    >
                      Código promocional (opcional)
                    </label>
                    <input
                      type="text"
                      id="coupon"
                      name="coupon"
                      value={formData.coupon}
                      onChange={handleChange}
                      className="w-full bg-zinc-900 border border-zinc-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primery-yellow"
                    />
                  </div>
                </div>

                <div className="bg-gradient-to-r from-zinc-800 to-zinc-900 p-6 rounded-lg border border-zinc-700">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-zinc-300">Subtotal:</span>
                    <span className="text-white font-medium">
                      ${getTicketPrice().toLocaleString()}
                    </span>
                  </div>

                  <div className="flex justify-between items-center mb-4">
                    <span className="text-zinc-300">IVA (16%):</span>
                    <span className="text-white font-medium">
                      ${(getTicketPrice() * 0.16).toLocaleString()}
                    </span>
                  </div>

                  <div className="pt-4 border-t border-zinc-700 flex justify-between items-center">
                    <span className="text-white font-bold">Total a pagar:</span>
                    <span className="text-xl text-primery-yellow font-bold">
                      ${(getTicketPrice() * 1.16).toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="acceptTerms"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleChange}
                    className="mt-1 h-4 w-4 text-primery-yellow focus:ring-primery-yellow border-zinc-700 rounded"
                    required
                  />
                  <label
                    htmlFor="acceptTerms"
                    className="ml-2 block text-sm text-zinc-400"
                  >
                    Acepto los{" "}
                    <a
                      href="/terms"
                      className="text-primery-yellow hover:underline"
                    >
                      términos y condiciones
                    </a>{" "}
                    y la{" "}
                    <a
                      href="/privacy"
                      className="text-primery-yellow hover:underline"
                    >
                      política de privacidad
                    </a>
                    .
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-primery-yellow text-primary-black font-bold py-4 px-6 rounded-lg hover:bg-yellow-500 transition-colors font-Bebas tracking-wide text-xl flex items-center justify-center ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-primary-black"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      PROCESANDO...
                    </>
                  ) : (
                    "COMPLETAR REGISTRO"
                  )}
                </button>
              </form>

              <div className="mt-6 text-center text-sm text-zinc-500">
                <p>
                  Pago seguro procesado por Stripe. No almacenamos datos de
                  tarjetas.
                </p>
                <div className="flex justify-center space-x-2 mt-2">
                  <svg
                    className="h-6 w-8 text-zinc-400"
                    viewBox="0 0 32 21"
                    fill="currentColor"
                  >
                    <path d="M26.58 21H5.42A5.42 5.42 0 0 1 0 15.58V5.42A5.42 5.42 0 0 1 5.42 0h21.16A5.42 5.42 0 0 1 32 5.42v10.16A5.42 5.42 0 0 1 26.58 21zM5.42 2A3.42 3.42 0 0 0 2 5.42v10.16A3.42 3.42 0 0 0 5.42 19h21.16a3.42 3.42 0 0 0 3.42-3.42V5.42A3.42 3.42 0 0 0 26.58 2H5.42z" />
                    <path d="M11.51 7.17l-4.05 6.5h4.83l.72-1.34h1.47l.74 1.34h4.88v-1.01l.4 1.01h2.46l.41-1.02v1.02h9.74l1.2-1.24.26-.27 1.2 1.51h4.77l-4.18-6.5h-4.77l-1.21 1.24-.27.28L17.84 7.17h-5.63L11.51 9v-1.3l-.92-.53h-3.15l-.66 1.5h-1.34L4.7 7.17H0l2.3 3.7-2.3 2.8H4.4l.5-1.08h1.17l.51 1.08h17.1v-.92l.43.92h2.52l.43-.93v.93h4.97v-3.3h.85c.61 0 .76.04.76.78v2.52h2.97v-.3c.96.19 1.64.3 2.75.3h3.1l.53-1.09h1.16l.52 1.09h5.8v-.77l.87.77h4.61v-.92l.34.92h5.93l-4.08-6.5h-4.08v.27l-.31-.27h-4.86l-2.37 5.38-2.5-5.38h-3.7v.26l-.31-.26h-4.35l-.75 1.72-.77-1.72H9.7v.71l-.57-1.24zM25.13 9.5H28L26.58 13 25.13 9.5z" />
                  </svg>
                  <svg
                    className="h-6 w-8 text-zinc-400"
                    viewBox="0 0 32 21"
                    fill="currentColor"
                  >
                    <path d="M26.9 0H5.1A5.1 5.1 0 0 0 0 5.1v10.8A5.1 5.1 0 0 0 5.1 21h21.8a5.1 5.1 0 0 0 5.1-5.1V5.1A5.1 5.1 0 0 0 26.9 0z" />
                    <path d="M12.2 3.9c2.3 0 4.2 1.9 4.2 4.2 0 2.3-1.9 4.2-4.2 4.2S8 10.4 8 8.1c0-2.3 1.9-4.2 4.2-4.2zm7.6 0a4.2 4.2 0 1 1 0 8.4 4.2 4.2 0 0 1 0-8.4zM12.2 8.9c.4 0 .8-.4.8-.8 0-.4-.4-.8-.8-.8-.5 0-.8.4-.8.8 0 .4.3.8.8.8zm7.6 0c.4 0 .8-.4.8-.8 0-.4-.4-.8-.8-.8-.5 0-.8.4-.8.8 0 .4.3.8.8.8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventRegistration;
