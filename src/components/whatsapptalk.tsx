'use client';
export const numberCo = "+573116381751";
export const numberAr = "+5492915361152";
export const AbrirWhatsApp = ({ country = "CO" }: { country?: "CO" | "AR" }) => {
  const numbers = {
    CO: numberCo,
    AR: numberAr,
  };

  const message = "¡Hola Datrix YB! Estoy interesado en adquirir tus servicios de software y análisis de datos. ¿Podrías enviarme la información sobre planes y precios para avanzar con la contratación?";
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