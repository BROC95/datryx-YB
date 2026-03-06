// const pricingPlans = [
//     {
//       name: "Basic",
//       price: "$10/month",
//       features: ["Feature 1", "Feature 2", "Feature 3"],
//     },
//     {
//       name: "Standard",
//       price: "$20/month",
//       features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
//     },
//     {
//       name: "Premium",
//       price: "$30/month",
//       features: [
//         "Feature 1",
//         "Feature 2",
//         "Feature 3",
//         "Feature 4",
//         "Feature 5",
//       ],
//     },


//   ];
const pricingPlans = [
  {
    name: "Landing Pages",
    options: [
      {
        type: "Basic",
        priceUSD: "$150 USD",
        priceCOP: "300,000 COP",
        features: [
          "Diseño de 2 página",
          "SEO básico",
          "Integración de formulario de contacto",
        ],
      },
      {
        type: "Standard",
        priceUSD: "$300 USD",
        priceCOP: "1,200,000 COP",
        features: [
          "Diseño de 5 páginas",
          "SEO avanzado",
          "Integración con API externa",
        ],
      },
      {
        type: "Premium",
        priceUSD: "$500 USD",
        priceCOP: "2,000,000 COP",
        features: [
          "Diseño personalizado",
          "Optimización SEO avanzada",
          "Animaciones y diseño responsivo",
        ],
      },
    ],
  },
  {
    name: "Dashboards BI (Power BI)",
    options: [
      {
        type: "Basic",
        priceUSD: "$85 USD",
        priceCOP: "200,000 COP",
        features: [
          "1 panel de control básico",
          "Conexión con 1 fuente de datos",
          "Gráficos estándares",
        ],
      },
      {
        type: "Standard",
        priceUSD: "$150 USD",
        priceCOP: "800,000 COP",
        features: [
          "3 paneles personalizados",
          "Conexión con múltiples fuentes de datos",
          "Análisis avanzado",
        ],
      },
      {
        type: "Premium",
        priceUSD: "$500 USD",
        priceCOP: "1,000,000 COP",
        features: [
          "Dashboard corporativo completo",
          "Automatización de informes",
          "Soporte continuo por 1 meses",
        ],
      },
    ],
  },
  // {
  //   name: "CRM o POS Service",
  //   options: [
  //     {
  //       type: "Basic",
  //       priceUSD: "$500",
  //       priceCOP: "2,000,000 COP",
  //       features: [
  //         "Configuración básica del sistema",
  //         "Gestión de clientes y productos",
  //         "Capacitación inicial",
  //       ],
  //     },
  //     {
  //       type: "Standard",
  //       priceUSD: "$1,000",
  //       priceCOP: "4,000,000 COP",
  //       features: [
  //         "Personalización de flujos",
  //         "Soporte por 3 meses",
  //         "Integración de pagos",
  //       ],
  //     },
  //     {
  //       type: "Premium",
  //       priceUSD: "$2,000",
  //       priceCOP: "8,000,000 COP",
  //       features: [
  //         "Sistema completamente personalizado",
  //         "Integración con ERP/otras herramientas",
  //         "Soporte continuo por 6 meses",
  //       ],
  //     },
  //   ],
  // },
];

import Link from 'next/link'

  export const PricingData=() => {
    return (
      <div>
        {pricingPlans.map((plan) => (
          <div key={plan.name} className="border border-blue-500 rounded-lg p-4 m-4 shadow-black ">
            <div className="justify-between  pb-4 ">
            <h3 className="gradient-title text-2xl">{plan.name}</h3>
            {/* <p>{plan.price}</p> */}
            
         
            <div className="md:flex md:flex-row justify-between ">
              
            {plan.options.map((feature) => (
              
              <div key={feature.type} className="  border m-2 rounded-lg p-4 shadow-black  ">
                <h4 className="text-4xl font-bold tracking-tighter leading-none py-1">{feature.type}</h4>
                <label >Precio:  {feature.priceCOP }  /  {feature.priceUSD} 
                </label>
                
                <ul className="list-disc pl-5">
                  {feature.features.map((item, index) => (
                    <li key={index}> {item}</li>
                  ))}
                </ul>
                         {/* <button className="btn btn-primary mt-4  gradiente-title-color">Elige tu plan</button> */}
                         <button className="gradient-bg-color mt-4" >
                          
                         
                         <Link href="/contact"> Elige tu plan</Link>
                          </button>

                         
                  </div>

              ))}
            </div>
      
            </div>
            
     
            
          </div>
        ))}
      </div>
    );
  }
  // import { motion } from "framer-motion";


//   {pricingPlans.map((plan) => (
//     <div key={plan.name} className="border border-blue-500 rounded-lg p-4 m-4 shadow-black">
//                 <div className="flex justify-between">

//                 <h3 className="text-2xl font-bold tracking-tighter leading-none">{plan.name}</h3>
//                 <div className="inline-flex  font-bol text-sm px-4  py-2  rounded-3xl border border-black/60">
//                 {/* <span className="bg-[linear-gradient(to_right,_#FFB800_0%,_#FF6A00_100%)] text-white px-4 py-2 rounded-full"> */}
//                 <motion.span animate={{backgroundPositionX:"10%"}}
//                     transition={{
//                         duration:10,
//                         // repeat:Infinity,
//                         ease: "linear",
//                         repeatType:"loop",
//                     }}
//                 // className="text-2xl bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] text-transparent bg-clip-text px-4 py-2 rounded-full font-bold">
//                 className="gradient-title-color">

//                 Popular
//                 </motion.span>
//                 </div>
//                 </div>
//         <p className="text-4xl font-bold tracking-tighter leading-none ">{plan.price}</p>
//         <ul className="list-disc pl-5">
//             {plan.features.map((feature) => (
//                 <li key={feature}>{feature}</li>
//             ))}
//         </ul>
//         <button className="btn btn-primary mt-4">Elige tu plan</button>
//     </div>
// ))}

//   const pricingPlans = [
//     {
//         name: "Basic",
//         price: "$10/month",
//         features: ["Feature 1", "Feature 2", "Feature 3"],
//     },
//     {
//         name: "Standard",
//         price: "$20/month",
//         features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
//     },
//     {
//         name: "Premium",
//         price: "$30/month",
//         features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5"],
//     },
// ];