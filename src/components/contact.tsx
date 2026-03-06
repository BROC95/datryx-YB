'use client';

import { useState } from 'react';

type Country = "CO" | "AR";

const WHATSAPP_NUMBERS: Record<Country, string> = {
  CO: "+573127066940",
  AR: "+5492915361152",
};

export default function ContactoPage() {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' });
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState<Country>("CO");

  // Detectar país automáticamente


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.nombre || !form.email || !form.mensaje) {
      setError('Por favor completa todos los campos.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setError('Por favor ingresa un correo electrónico válido.');
      return;
    }

    setLoading(true);

    try {
      const message = `¡Hola! Estoy interesado en sus servicios.

👤 Nombre: ${form.nombre}
📧 Email: ${form.email}
💬 Mensaje: ${form.mensaje}`;

      const whatsappLink = `https://wa.me/${WHATSAPP_NUMBERS[country]}?text=${encodeURIComponent(message)}`;
      window.open(whatsappLink, "_blank");

      setEnviado(true);
      setError('');
      setForm({ nombre: '', email: '', mensaje: '' });
    } catch {
      setError('Error al enviar el formulario. Intenta más tarde.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-cyan-50 text-gray-800 px-6 py-16 md:px-20 lg:px-32">
      <section className="max-w-2xl mx-auto">

        {/* Encabezado */}
        <div className="mb-10">
          <span className="text-6xl font-semibold uppercase tracking-widest text-cyan-500 mb-2 block">
            Contacto
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Hablemos de tu <span className="text-cyan-500">proyecto</span>
          </h1>
          <p className="text-gray-500 text-lg">
            ¿Tienes una idea o quieres saber más? Completa el formulario y te respondemos por WhatsApp.
          </p>
        </div>

        {/* País detectado */}
   {/* Selector de país - dentro del <form>, antes del botón submit */}
<div>
  <label className="block mb-1.5 text-sm font-medium text-gray-700">
    ¿Desde qué país nos contactás? <span className="text-red-400">*</span>
  </label>
  <div className="flex gap-3">
    {(["CO", "AR"] as Country[]).map((c) => (
      <button
        key={c}
        type="button"
        onClick={() => setCountry(c)}
        className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border-2 text-sm font-medium transition-all ${
          country === c
            ? "border-cyan-500 bg-cyan-50 text-cyan-700"
            : "border-gray-200 text-gray-500 hover:border-gray-300 hover:bg-gray-50"
        }`}
      >
        <span className="text-lg">{c === "CO" ? "🇨🇴" : "🇦🇷"}</span>
        {c === "CO" ? "Colombia" : "Argentina"}
      </button>
    ))}
  </div>
</div>

        {/* Alertas */}
        {enviado && (
          <div className="flex items-start gap-3 bg-green-50 border border-green-200 text-green-800 p-4 mb-6 rounded-xl">
            <span className="text-xl">✅</span>
            <div>
              <p className="font-semibold">¡Mensaje enviado!</p>
              <p className="text-sm text-green-600">Se abrió WhatsApp con tu consulta. Te responderemos pronto.</p>
            </div>
          </div>
        )}
        {error && (
          <div className="flex items-start gap-3 bg-red-50 border border-red-200 text-red-800 p-4 mb-6 rounded-xl">
            <span className="text-xl">⚠️</span>
            <p className="text-sm">{error}</p>
          </div>
        )}

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-5 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">

          <div>
            <label className="block mb-1.5 text-sm font-medium text-gray-700">
              Nombre <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none transition text-sm"
              placeholder="Tu nombre completo"
            />
          </div>

          <div>
            <label className="block mb-1.5 text-sm font-medium text-gray-700">
              Correo electrónico <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none transition text-sm"
              placeholder="correo@ejemplo.com"
            />
          </div>

          <div>
            <label className="block mb-1.5 text-sm font-medium text-gray-700">
              Mensaje <span className="text-red-400">*</span>
            </label>
            <textarea
              name="mensaje"
              rows={5}
              value={form.mensaje}
              onChange={handleChange}
              className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none transition text-sm resize-none"
              placeholder="¿En qué podemos ayudarte?"
            />
            <p className="text-xs text-gray-400 mt-1 text-right">{form.mensaje.length}/500</p>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-all ${
              loading
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-cyan-500 hover:bg-cyan-600 text-white shadow-md hover:shadow-cyan-200 active:scale-95"
            }`}
          >
            {loading ? (
              <>
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                </svg>
                Enviando...
              </>
            ) : (
              <>
                <span>📲</span> Enviar por WhatsApp
              </>
            )}
          </button>
        </form>

      </section>
    </main>
  );
}