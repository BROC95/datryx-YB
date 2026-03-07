// pages/demos.tsx

import Head from "next/head";
import Image from "next/image";
// import inf2 from "@/assets/demos/data/informeV1.webp";
import { demos ,demosSoft} from "@/lib/datademo";
import Link from "next/link";
import ImageModal from "@/components/ImageModal";
export default function Demos() {
  // const  data = Object.entries(demos);

  



  return (
    <>
      <Head>
        <title>Demos | Datrix YB</title>
        <meta name="description" content="Explora nuestras soluciones en acción. Dashboards, aplicaciones y modelos inteligentes." />
      </Head>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Explora nuestras soluciones en acción</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            En esta sección puedes ver demos interactivas y ejemplos reales de cómo nuestras soluciones transforman datos en decisiones.
          </p>
        </section>
        <div>
          <h2 className="text-2xl font-bold mb-4 text-center">Demos de data</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Explora nuestras soluciones en acción. Dashboards, modelos inteligentes.
          </p>
        </div>
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 p-3">
          
          {demos.map((demo, index) => (
            <div
              key={index}
              // href={demo.link}
              className="group bg-white rounded-xl border shadow hover:shadow-xl transition overflow-hidden"
            >
          <ImageModal demo={demo}>
          </ImageModal>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{demo.titulo}</h3>
                <p className="text-gray-600 text-sm">{demo.descripcion}</p>
              </div>
            </div>
          ))}
        </section>
        <div>
          <h2 className="text-2xl font-bold mb-4 text-center">Demos de software</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Explora nuestras soluciones en acción.  Aplicaciones y sistemas de información ideales para tu negocio.
          </p>
        </div>
        {/* <section className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-20 p-3  place-items-center"> */}
        <section className="flex justify-center gap-8 mb-20 p-3 ">
          {demosSoft.map((demo, index) => (
            <div
              key={index}
              // href={demo.link}
              className="group bg-white rounded-xl border shadow hover:shadow-xl transition overflow-hidden"
            >
       
              <Image
                src={String(demo.img)}
                alt={demo.titulo}
                width={500}
                height={300}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{demo.titulo}</h3>
                <p className="text-gray-600 text-sm">{demo.descripcion}</p>
      
          <button
            
            className="inline-block bg-cyan-600 text-white px-6 py-3 rounded-lg hover:bg-cyan-700 transition"
          >
               <Link href={demo.link} target="_blank" className="hover:text-primary">    Demo </Link>
        
          </button>
              </div>
            </div>
          ))}
        </section>
        <section className="bg-gray-100 rounded-2xl p-10 text-center shadow-inner">
          <h3 className="text-2xl font-bold mb-4">¿Quieres ver una demo en vivo?</h3>
          <p className="text-gray-700 mb-6">
            Agenda una reunión personalizada con nuestro equipo y te mostraremos cómo nuestras soluciones pueden adaptarse a tu empresa.
          </p>
          <button
            
            className="inline-block bg-cyan-600 text-white px-6 py-3 rounded-lg hover:bg-cyan-700 transition"
          >
               <Link href="/contact" className="hover:text-primary">    Contáctanos</Link>
        
          </button>
        </section>
      </main>
    </>
  );
}
