import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validación básica del formulario
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        type: "error",
        message: "Por favor, completa todos los campos requeridos.",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulación de envío (aquí iría la lógica real)
    try {
      // Este es solo un placeholder para la lógica real de envío
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Éxito simulado
      setFormStatus({
        type: "success",
        message:
          "¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.",
      });

      // Limpiar formulario después del éxito
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setFormStatus({
        type: "error",
        message:
          "Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Estado del formulario (éxito/error) */}
      {formStatus.type && (
        <div
          className={`p-4 rounded-lg ${
            formStatus.type === "success"
              ? "bg-green-900/50 border border-green-700 text-green-100"
              : "bg-red-900/50 border border-red-700 text-red-100"
          }`}
        >
          {formStatus.message}
        </div>
      )}

      {/* Campos de formulario */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-zinc-300 mb-2">
            Nombre <span className="text-primery-yellow">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-zinc-900 border border-zinc-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primery-yellow focus:border-transparent"
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
            required
            className="w-full bg-zinc-900 border border-zinc-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primery-yellow focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-zinc-300 mb-2">
            Teléfono
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-zinc-900 border border-zinc-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primery-yellow focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-zinc-300 mb-2">
            Asunto
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full bg-zinc-900 border border-zinc-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primery-yellow focus:border-transparent"
          >
            <option value="">Selecciona un asunto</option>
            <option value="general">Información general</option>
            <option value="tickets">Entradas</option>
            <option value="sponsors">Patrocinios</option>
            <option value="speakers">Ponentes</option>
            <option value="other">Otro</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-zinc-300 mb-2">
          Mensaje <span className="text-primery-yellow">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full bg-zinc-900 border border-zinc-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primery-yellow focus:border-transparent"
        />
      </div>

      <div className="flex gap-3 items-center">
        <input
          type="checkbox"
          id="privacy"
          name="privacy"
          required
          className="h-4 w-4 text-primery-yellow focus:ring-primery-yellow border-zinc-700 rounded"
        />
        <label htmlFor="privacy" className="ml-2 block text-sm text-zinc-400">
          He leído y acepto la{" "}
          <a href="/privacy" className="text-primery-yellow hover:underline">
            política de privacidad
          </a>
        </label>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full bg-primery-yellow text-white cursor-pointer font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 transition-colors font-Bebas tracking-wide text-lg flex items-center justify-center ${
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
            ENVIANDO...
          </>
        ) : (
          "ENVIAR MENSAJE"
        )}
      </button>
    </form>
  );
};

export default ContactForm;
