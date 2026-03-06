import { whatsappUrl } from "@/lib/utils";
import { Heart, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function Cta() {

    return (      <section className="py-32 bg-cyan-100 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/img/ropa1.jpeg" 
            alt="Fondo de tela" 
            fill 
            className="object-cover opacity-10 mix-blend-multiply"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
          <Heart className="w-12 h-12 text-cyan-500 mx-auto mb-8" />
          <h2 className="text-4xl md:text-6xl font-serif text-stone-900 mb-8 leading-tight">
            Haz de cada regalo <br />
            <span className="italic font-light text-cyan-600">algo inolvidable</span>
          </h2>
          <p className="text-xl text-stone-700 mb-10">
            ¿Tienes una idea en mente? Escríbenos y juntos la haremos realidad.
          </p>
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-stone-900 text-white px-10 py-5 rounded-full text-lg font-medium hover:bg-stone-800 transition-all shadow-xl shadow-stone-900/20 hover:-translate-y-1"
          >
            <MessageCircle className="w-6 h-6" />
            👉 Pedir por WhatsApp
          </a>
        </div>
      </section>)
}