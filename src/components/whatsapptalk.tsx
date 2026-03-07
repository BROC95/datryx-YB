'use client';

export const AbrirWhatsApp = ({ country = "CO" }: { country?: "CO" | "AR" }) => {
  const numbers = {
    CO: "+573127066940",
    AR: "+5492915361152",
  };

  const message = "¡Hola! Estoy interesado en tus servicios.";
  const whatsappLink = `https://wa.me/${numbers[country]}?text=${encodeURIComponent(message)}`;

  return (
    <button
      onClick={() => window.open(whatsappLink, "_blank")}
      className="btn btn-text-whatsapp px-4 py-2 rounded border"
    >
     📲 WhatsApp
    </button>
  );
};