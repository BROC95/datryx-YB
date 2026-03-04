import { whatsappUrl } from "@/lib/utils";
import { MessageCircle } from "lucide-react";
import Image from "next/image";
export default function Nav() {

return (<nav className="absolute top-0 w-full z-50 p-6 flex justify-between items-center">
        <div className="font-serif text-2xl font-bold text-stone-800 tracking-tight">
        
          Caramelo <span className="text-cyan-500 italic font-light">Boutique</span>
        </div>
        <div className="hidden md:flex gap-6 text-sm font-medium text-stone-600 uppercase tracking-wider">
          <a href="#servicios" className="hover:text-cyan-500 transition-colors">Servicios</a>
          <a href="#por-que-elegirnos" className="hover:text-cyan-500 transition-colors">Nosotros</a>
          <a href="#productos" className="hover:text-cyan-500 transition-colors">Productos</a>
        </div>
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 bg-stone-800 text-stone-50 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-stone-700 transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          Contacto
        </a>
      </nav>)
}