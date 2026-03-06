'use client'
// import cube from '@/assets/form-cube.png'
// import cube2 from '@/assets/form-cube-helix1.png'
// import Image from 'next/image'
import Link from 'next/link'
import { AbrirWhatsApp } from '@/components/whatsapptalk'
export const CallToAction = () => {

    return (
        <section className='bg-gradient-to-b from-white to-blue-200 py-12 '>
            <div className='relative'>

                <h2 className="gradient-title flex justify-center text-2xl">
                ¿Por qué elegir Datrix YB?
                </h2>

                <div className='md:px-[200px]   justify-center md:text-justify '>

<div className='p-2'>
<ul>
                        <li>✔ Soluciones personalizadas y escalables

</li>
<li>
    ✔ Equipo multidisciplinario experto
    </li>
<li>

✔ Enfoque 100% en resultados y retorno de inversión
</li>
<li>

✔ Acompañamiento técnico y estratégico continuo
</li>
                    </ul>
</div>

                 


<div>

                   <h3 className='gradient-title text-2xl'>Lo que dicen nuestros clientes</h3> 
                   <p>
    
                  “Con Datrix YB logramos automatizar procesos críticos y ahorrar cientos de horas de trabajo al mes.”
<br />
— Gerente de Tecnología, empresa del sector logístico
</p> 
</div>
                </div>
                <h4 className='gradient-title text-4xl text-center'>¿Listo para llevar tus datos al siguiente nivel?</h4>
            <div className='flex gap-2 mt-10 justify-center '>
                <button className='btn btn-primary' type="button">
                    
                <Link href="/contact" className="hover:text-primary">Contáctanos</Link>
            </button>
                {/* <button className='btn btn-text' type="button">Agenda una reunión gratuita Whatsapp</button> */}
                <AbrirWhatsApp></AbrirWhatsApp>
            </div>
                
                {/* <Image src={cube} alt=" c2" width={260} className='hidden md:block absolute -left-[100px] -top-[17px] '/> */}
                {/* <Image src={cube2} alt=" c2" width={160} className='hidden md:block absolute -right-0 -top-0'/> */}
            </div>
        </section>
    )
}