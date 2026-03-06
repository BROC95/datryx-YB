"use client"
// import ImageModal from "@/components/imagemodal";
import products from "@/lib/services_dat";
import { whatsappUrl } from "@/lib/utils";
import { motion } from "motion/react";
import ImageModal from "@/components/ImageModal";
import Image from "next/image";

export default function Products(){

    return ( <section id="productos" className="py-24 bg-stone-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-4">Productos Destacados</h2>
              <p className="text-stone-600">Explora algunas de nuestras creaciones más queridas por nuestros clientes.</p>
            </div>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-600 font-medium hover:text-cyan-700 flex items-center gap-2">
              Ver catálogo completo <span aria-hidden="true">&rarr;</span>
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative h-80 rounded-2xl overflow-hidden mb-4 bg-stone-200">
                  {/* <Image 
                    src={`${product.img}`} 
                    alt={product.title} 
                    fill 
                    // width={900}
                    // height={500}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  /> */}

                  <ImageModal demo={product}></ImageModal>
                </div>
                <h3 className="text-lg font-serif font-bold text-stone-800">{product.title}</h3>
                <p className="text-sm text-stone-500">{product.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>)
}