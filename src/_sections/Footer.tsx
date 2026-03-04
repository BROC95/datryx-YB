import { whatsappUrl } from "@/lib/utils";
import Image from "next/image";
import LogoCaramelo from "@/public/logo-caramelo.png";
export default function Footer(){

    return (      <footer className="bg-stone-950 text-stone-400 py-12 text-center text-sm">
        <div className="container mx-auto px-6">
          <div className="font-serif text-2xl font-bold text-white tracking-tight mb-4">
              <div className="round rounded-4xl">
            <Image 
              src= {LogoCaramelo} 
              alt="Logo Caramelo Boutique" 
              width={150} 
              height={150} 
              className="inline-block mr-2"
            />
          </div>
            Caramelo <span className="text-cyan-500 italic font-light">Boutique</span>
          </div>
          <p className="mb-6">Regalos personalizados, diseño y costura creativa.</p>
          <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Facebook</a>
            <a href={whatsappUrl} className="hover:text-white transition-colors">WhatsApp</a>
          </div>
          <p>&copy; {new Date().getFullYear()} Caramelo Boutique. Todos los derechos reservados.</p>
        </div>
      </footer>)
}