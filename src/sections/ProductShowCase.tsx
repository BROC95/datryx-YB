import Logo from "@/public/logo.svg"
// import Star from "@/assets/form-emojistar.png"
// import Torus from "@/assets/form-torus.png"
// import Image from "next/image";
export const ProductShowCase = () => {
        return (
            <section className=" py-10 md:py-15 bg-gradient-to-b from-white to-blue-300 overflow-x-clip">
                <div>
                    <div className="">
                        <div className="flex justify-center">
                         <span className="text-4xl text-blue-900 leading-tight tracking-tighter ">Lo quieres, lo tienes</span>

                         </div>
 
                        <h2 className="text-center  gradient-title ">Tecnología que impulsa resultados reales</h2>

                        <p className="text-center py-4 px-9">Somos una empresa especializada en el desarrollo de software personalizado y análisis de datos avanzados. Acompañamos a empresas en su transformación digital mediante soluciones tecnológicas enfocadas en resolver desafíos reales y mejorar la toma de decisiones basada en datos.Somos una empresa especializada en el desarrollo de software personalizado y análisis de datos avanzados. Acompañamos a empresas en su transformación digital mediante soluciones tecnológicas enfocadas en resolver desafíos reales y mejorar la toma de decisiones basada en datos. </p>
                        <div className="flex justify-center mt-10 relative">
                        <Logo className="rounded-3xl" />
                        
                        {/* <Image src={Star} alt="emoji" className= "hidden md:block md:absolute -right-36 -top-36"/> */}
                        {/* <Image src={Torus} alt="emoji" className="hidden md:block md:absolute -left-6 -bottom-0"/> */}
                        </div>
                    </div>
                </div>
            </section>
        );
    };
    