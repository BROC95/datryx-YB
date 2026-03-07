'use client'


import { PricingData } from "@/components/pricingdata";


export const Pricing =  ()=>{

    return (
    <section>
        <div className="flex flex-col items-center justify-center py-10 bg-gradient-to-b from-white to-blue-300">

<h2 className="text-4xl text-blue-800">Lo que podemos hacer por ti</h2>

<div className="align-text-top py-4">
    <ul>
        <li>
        🛠 Software a Medida
        Desarrollo web, móvil y sistemas empresariales ajustados a tus procesos.
        </li>
        <li>
        📊 Analítica de Datos
        Dashboards interactivos, visualización de KPIs y reporting automatizado.
        </li>
        {/* <li>
        🤖 Modelos Predictivos e IA
        Predicción, clasificación y optimización basada en machine learning.
        </li> */}
        <li>
        ☁️ Soluciones en la Nube
        Infraestructura escalable y segura con tecnologías modernas (AWS, GCP, Azure).
        </li>
    </ul>







</div>
<h2 className="text-4xl text-blue-800">Precios</h2>

<div className="flex flex-wrap justify-center">
    <div className="">
        <PricingData />
    </div>

</div>
        </div>

    </section>    
  
    );
}