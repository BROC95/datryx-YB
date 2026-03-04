import { Gift, Shirt, Scissors, Coffee, Briefcase, Star } from "lucide-react";
import { motion } from "motion/react";


export default function Services() {
    return (      <section id="servicios" className="py-24 bg-white">
            <div className="container mx-auto px-6">
              <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-4">Nuestros Servicios</h2>
                <p className="text-stone-600">Creamos piezas únicas y personalizadas para cada ocasión especial.</p>
              </div>
    
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { icon: Gift, title: "Regalos personalizados", desc: "Detalles únicos pensados especialmente para esa persona especial." },
                  { icon: Shirt, title: "Diseño y confección", desc: "Prendas a medida que reflejan tu estilo y personalidad." },
                  { icon: Scissors, title: "Costura creativa", desc: "Arreglos y transformaciones que dan nueva vida a tus prendas." },
                  { icon: Coffee, title: "Sublimación", desc: "Tazas, camisetas y accesorios con tus diseños favoritos." },
                  { icon: Briefcase, title: "Marroquinería", desc: "Bolsos y accesorios artesanales hechos con dedicación." },
                  { icon: Star, title: "Merchandising", desc: "Productos personalizados para empresas y eventos." }
                ].map((service, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-8 rounded-3xl bg-stone-50 border border-stone-100 hover:border-cyan-200 hover:shadow-lg hover:shadow-cyan-100/50 transition-all group"
                  >
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-cyan-500 mb-6 shadow-sm group-hover:scale-110 transition-transform">
                      <service.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-stone-800 mb-3">{service.title}</h3>
                    <p className="text-stone-600 leading-relaxed">{service.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>)}