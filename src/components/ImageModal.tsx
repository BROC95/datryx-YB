'use client'
import { useState } from "react";
// import Image from "next/image";
import Image from "next/image";
type Producto = {
  title: string;
  desc: string;
//   precio: number;
  img: string;
};

export default function ImageModal({ demo }: { demo: Producto }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Imagen miniatura */}
      <div 
        onClick={() => setIsOpen(true)} 
        className="cursor-pointer group"
      >
        <Image
          src={String(demo.img)}
          alt={demo.title}
        //   width={500}
        //   height={300}
        fill
          className="w-full h-48 object-cover rounded-2xl shadow-md group-hover:scale-105 transition-transform"
        />
        {/* <h3 className="mt-3 text-lg font-semibold text-white">{demo.nombre}</h3> */}
        {/* <p className="text-sm text-gray-300">{demo.precio} USD</p> */}
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-[9999]">
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 animate-fadeIn scale-105 border-4 border-cyan-500">
            
            {/* Botón cerrar */}
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-red-600 text-2xl font-bold cursor-pointer"
              onClick={() => setIsOpen(false)}
              aria-label="Cerrar"
            >
              ×
            </button>

            {/* Imagen principal */}
            <Image
              src={String(demo.img)}
              alt={demo.title}
              width={600}
              height={600}
              className="rounded-xl object-contain max-h-[60vh] mx-auto drop-shadow-xl"
            />

            {/* Información del producto */}
            <div className="mt-6 text-center">
              {/* <h2 className="text-2xl font-bold text-gray-800">{demo.nombre}</h2> */}
              {/* <p className="text-gray-600 mt-2">{demo.descripcion}</p> */}
              {/* <p className="text-xl font-semibold text-indigo-600 mt-4"> */}
                {/* {demo.precio} USD */}
              {/* </p> */}

              {/* CTA */}

            </div>
          </div>
        </div>
      )}
    </div>
  );
}