import { CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

export default function WhyWe() {

    return (    <section id="por-que-elegirnos" className="py-24 bg-stone-900 text-stone-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] rounded-[2rem] overflow-hidden">
              <Image 
                src="https://picsum.photos/seed/crafting/800/1000" 
                alt="Proceso artesanal" 
                fill 
                className="object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/20 to-transparent"></div>
            </div>

            <div>
              <h2 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">
                ¿Por qué elegir <br />
                <span className="text-cyan-400 italic font-light">Caramelo Boutique?</span>
              </h2>
              <p className="text-stone-400 text-lg mb-10">
                Nos apasiona crear productos que transmitan emociones. Cada puntada, cada diseño y cada detalle está pensado para sorprender.
              </p>

              <div className="space-y-6">
                {[
                  "Productos únicos y hechos a medida",
                  "Atención personalizada en cada paso",
                  "Materiales de la más alta calidad",
                  "Ideal para regalos especiales y memorables",
                  "Diseños exclusivos que no encontrarás en otro lugar"
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="mt-1 bg-cyan-500/20 p-1 rounded-full">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                    </div>
                    <p className="text-lg text-stone-300">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>)
}