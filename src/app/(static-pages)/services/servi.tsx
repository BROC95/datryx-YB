// // pages/servicios.tsx
// import React from "react";
// import { useKeenSlider } from "keen-slider/react";
// import "keen-slider/keen-slider.min.css";

// const servicios = [
//   {
//     titulo: "Desarrollo de Software",
//     descripcion: "Creamos soluciones personalizadas con tecnologías modernas como Next.js, NestJS, y más.",
//   },
//   {
//     titulo: "Analítica de Datos",
//     descripcion: "Transformamos datos en decisiones con dashboards, modelos predictivos y visualizaciones.",
//   },
//   {
//     titulo: "Automatización de Procesos",
//     descripcion: "Optimizamos tus flujos de trabajo con scripts, bots y RPA.",
//   },
//   {
//     titulo: "Consultoría Técnica",
//     descripcion: "Asesoramiento experto para elegir tecnologías, arquitecturas y estrategias.",
//   },
// ];

// const carruselContenido = [
//   "Optimizamos decisiones con datos.",
//   "Desarrollamos software confiable y escalable.",
//   "Nos adaptamos a tus objetivos de negocio.",
//   "Automatiza y escala con nosotros.",
// ];

// export default function Servicios() {
//   const [sliderRef] = useKeenSlider({
//     loop: true,
//     slides: {
//       perView: 1,
//       spacing: 10,
//     },
//     duration: 1000,
//   });

//   return (
//     <div className="p-6 max-w-6xl mx-auto">
//       <h1 className="text-4xl font-bold text-center mb-10">Nuestros Servicios</h1>

//       {/* Grid de Servicios */}
//       <div className="grid md:grid-cols-2 gap-6 mb-16">
//         {servicios.map((servicio, index) => (
//           <div
//             key={index}
//             className="bg-white shadow-lg rounded-xl p-6 border hover:shadow-xl transition"
//           >
//             <h2 className="text-2xl font-semibold mb-2">{servicio.titulo}</h2>
//             <p className="text-gray-600">{servicio.descripcion}</p>
//           </div>
//         ))}
//       </div>

//       {/* Carrusel */}
//       <div className="mb-10">
//         <h2 className="text-3xl font-semibold text-center mb-6">¿Por qué elegirnos?</h2>
//         <div ref={sliderRef} className="keen-slider">
//           {carruselContenido.map((text, idx) => (
//             <div
//               key={idx}
//               className="keen-slider__slide flex justify-center items-center bg-blue-100 rounded-lg h-40 text-xl font-medium px-4 text-center"
//             >
//               {text}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
