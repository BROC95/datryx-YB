import Image from "next/image"
import logo from "@/assets/LogoDatrixYB.jpeg"

// export const Footer = ()=>{
//     return (
//         <footer className="bg-black text-amber-50 py-10 text-center">
//         <div className="border border-amber-300">
//            {/* <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:h-full before:w-full before:blur-2xl before:gradient-bg-color "> */}
//            <div className="inline-flex relative  ">
        //    <Image src = {logo} height={40} alt="Datrix logo" className="relative rounded-full shadow-cyan-600 shadow-xl "/>

//            </div>
//             <div>

            
//             <nav className="flex md:flex-col gap-5 mt-5 justify-between p-2">
//                 <a href="#">About</a>
//                 <a href="#">Feutures</a>
//                 <a href="#">About</a>
//                 <a href="#">carees</a>
//             </nav>
//             <div className="flex justify-center gap-2 mt-6">
//             <Image src = {logo} height={40} alt="Datrix logo" className="rounded-tl-xl p-2"/>
//             <Image src = {logo} height={40} alt="Datrix logo" className="rounded-tl-xl p-2"/>
//             <Image src = {logo} height={40} alt="Datrix logo" className="rounded-tl-xl p-2"/>
//             <Image src = {logo} height={40} alt="Datrix logo" className="rounded-tl-xl p-2"/>

//             </div >
//             <p className="mt-7">@copy: 2025 DATRIX YB All rights reserved</p>
//             </div>

//            </div>
//         </footer>
        
//     )
// }


import Link from 'next/link';
import { numberAr, numberCo } from "@/components/whatsapptalk";
export const Footer=() =>{
  return (
    <footer className="bg-gray-900 text-white py-10 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
        
        {/* Marca e información breve */}
        <div className="gap-20">
            <div className="relative justify-center right-[-50px]">

        <Image src = {logo} height={40} alt="Datrix logo" className="relative rounded-full shadow-cyan-600 shadow-xl"/>
            </div>

          <h2 className="text-2xl font-bold text-primary p-3">Datrix YB</h2>
          <p className="mt-2 text-sm text-gray-400">
            Soluciones a medida en desarrollo de software y análisis de datos.
          </p>
        </div>

   <div className="">
          <h3 className="text-lg font-semibold mb-2 p-2">Empresa SAS</h3>
          <ul className="space-y-1 text-sm">
      
            <li>
              <Link href="/about" className="hover:text-primary">Nosotros</Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-primary">Términos y condiciones</Link>
            </li>
            {/* <li>
              <Link href="/carrers" className="hover:text-primary">Carreras</Link>
            </li> */}
            <li>
        <Link href="/politic"  >Politica de privacidad</Link>
            </li>
          </ul>
        </div>


        {/* Navegación rápida */}
        <div className="">
          <h3 className="text-lg font-semibold mb-2 p-2">Enlaces</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link href="/" className="hover:text-primary">Inicio</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-primary">Nosotros</Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-primary">Servicios</Link>
            </li>
            <li>
              <Link href="/demos" className="hover:text-primary">Demos</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary">Contacto</Link>
            </li>
          </ul>
        </div>

        {/* Información de contacto */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contáctanos</h3>
          <p className="text-sm text-gray-400">

        <a href="mailto:datrixyb@gmail.com" className=" hover:underline">datrixyb@gmail.com</a>
        <br />
        {numberCo}<br />
            {numberAr}<br />
            Sede Principal en 
            Armenia ,Quindió, Colombia
          </p>
          <div className="flex mt-3 space-x-4">
            {/* <a href="#" aria-label="LinkedIn" className="hover:text-primary">🔗</a> */}
            {/* <a href="#" aria-label="GitHub" className="hover:text-primary">🐙</a> */}
            <a href="https://www.facebook.com/profile.php?id=61573578643464" target="_blank" aria-label="Facebook" className="hover:text-primary"><Image src={'/facebook.png'} alt="facebook" width={16} height={16}/></a>
            {/* <a href="#" aria-label="Twitter" className="hover:text-primary">🐦</a> */}
          </div>
        </div>
      </div>

      {/* Línea final */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Datrix YB. Todos los derechos reservados.
      </div>
    </footer>
  );
}
