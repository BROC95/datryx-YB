import { whatsappUrl } from "@/lib/utils";
import { Sparkles, MessageCircle, Heart } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";


export default function Hero() {

    return (      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-cyan-50/50">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 text-xs font-semibold uppercase tracking-wider mb-6">
              <Sparkles className="w-3 h-3" />
              Detalles que enamoran
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-stone-900 leading-[1.1] mb-6">
              Regalos únicos <br />
              <span className="font-light italic text-cyan-600">hechos con el corazón</span>
            </h1>
            <p className="text-lg text-stone-600 mb-8 leading-relaxed max-w-lg">
              Transformamos tus ideas en detalles inolvidables. Desde costura creativa hasta regalos personalizados, diseñamos piezas exclusivas que cuentan tu historia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-cyan-500 text-white px-8 py-4 rounded-full text-base font-medium hover:bg-cyan-600 transition-all shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" />
                Hacer tu pedido
              </a>
              <a 
                href="#servicios"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-medium text-stone-700 bg-white border border-stone-200 hover:bg-stone-50 transition-colors"
              >
                Descubrir más
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[600px] w-full hidden md:block"
          >
            <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl">
              <Image 
                src="https://picsum.photos/seed/boutique/800/1000" 
                alt="Regalos personalizados y costura creativa" 
                fill 
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-500">
                  <Heart className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <p className="text-sm text-stone-500 font-medium uppercase tracking-wider">Hecho a mano</p>
                  <p className="text-xl font-serif font-bold text-stone-800">100% Artesanal</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
)
}
