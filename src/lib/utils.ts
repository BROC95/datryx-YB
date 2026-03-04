import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


  const whatsappNumber = "1234567890"; // Replace with actual number
  const whatsappMessage = encodeURIComponent("¡Hola! Me gustaría hacer un pedido personalizado.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  export { whatsappUrl, whatsappNumber, whatsappMessage }