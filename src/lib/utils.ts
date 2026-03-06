import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


  const whatsappNumber = "+5493751534778"; // Replace with actual number
  const whatsappMessage = encodeURIComponent("¡Hola! Me gustaría hacer un pedido personalizado.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  const instagramUrl = "https://www.instagram.com/carameloboutique.eldo/";
  const facebookUrl = "https://www.facebook.com/people/Caramelo-Boutique/100048891286379/#";
  export { whatsappUrl, whatsappNumber, whatsappMessage, instagramUrl, facebookUrl }