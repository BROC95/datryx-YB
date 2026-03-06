"use client"
// import Com from "@/assets/comp1.svg" 
// import Visual from "@/assets/form-visual.png"
import Visual from "@/assets/data/datadev.jpeg"
// import Cylinder from "@/assets/form-cylinder.png"
// import HalfTorus from "@/assets/form-half-torus.png"
import ArrowRight from "@/assets/arrow-right.svg";
// import Image from "next/image";
// import { motion,useScroll,useTransform ,useMotionValue} from "framer-motion";
// import { motion, useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
// import { useRef } from "react";
import Link from "next/link";
// import { motion } from "framer-motion";


// import { section } from "framer-motion/client";
// import {motion} from 'framer-motion';
// const MyComponent = () => (
//     <motion.div animate={{ x: 100 }} />
//   );



export const Hero = () => {

  // const heroRef = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   layoutEffect: false ,
  //   target: heroRef,
  //   offset: ["start end", "end start"],
  // });


  // const scrollOptions: Parameters<typeof useScroll>[0] = heroRef.current
  //   ? { layoutEffect: false, target: heroRef, offset: ["start end", "end start"] }
  //   : {};
  // const { scrollYProgress } = useScroll(scrollOptions || {});
  // Example usage to avoid unused variable warning
  // const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  // const traslateY = useTransform(scrollYProgrest,[0,1],[150,-150]);
  // const val =  useMotionValue(translateY);
  // console.log(val)

  return (
    <section className="pt-8 pb-20 gap-2  md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_66%)]  overflow-hidden">

      <div className="container">
        <div className=" md:flex items-center  ">
          <div className="md:flex-1/2   ">
            <div className="text-sm inline-flex border px-3 py-2 rounded-lg tracking-tight text-amber-700">
              Version full
            </div>
            <h1 className="text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-red-700 text-transparent  bg-clip-text mt-6">Transformamos tus datos en decisiones inteligentes</h1>
            <p className="text-xl text-black-800 tracking-tight mt-6 ">En Datrix YB diseñamos soluciones de software y analítica de datos a medida para impulsar la eficiencia, innovación y crecimiento de tu empresa.</p>
            <div className="flex gap-1 items-center mt-30">
              <button className="btn btn-text border border-b-blue-950">
                <Link href="/services" className="">  Conoce nuestros servicios</Link>

              </button>
              <button className="btn btn-primary   ">
                <span >
                  <Link href="/contact" className="hover:text-primary">Solicita una Demo</Link>

                </span>
                <svg className="h-4 w-4 inline-flex justify-center items-center ml-2">
                  <ArrowRight />
                </svg>

              </button>
            </div>
          </div>
          {/* <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 "> */}
          <div className="mt-20   md:my-0 md:h-[600px] md:flex-1   relative      ">
            {/* <div className="mt-20  border border-amber-600 md:my-0 md:h-[600px] md:flex-1   relative     "> */}


            <motion.img src={Visual.src} alt="Visual 2" height={340} width={340} className="md:absolute     md:max-w-none md:-left-[-140px]  rounded-4xl "
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: "easeOut"
              }} />

            {/* <Image src={Visual} alt ="Visual 2" height={340} width={340} className="md:absolute md:h-full  md:w-auto  md:max-w-none   md:-left-[-110px]  " /> */}
            {/* <Image src={Cylinder} alt ="Visual 1" height={220} width={220} className="hidden md:block md:absolute  md:w-[220] md:h-[220px]  md:max-w-none md:-top-8 md:right-43 "/> */}
            {/* <motion.img src={HalfTorus.src} alt="Visual 1" height={220} width={220} className="hidden 2xl:block lg:absolute  lg:w-[220] lg:h-[220px]  lg:max-w-none lg:-top-[-330px] lg:right-[-350px]" style={{ translateY: translateY }} /> */}
            {/* <motion.img src={Cylinder.src} alt="Visual 1" style={{ translateY: translateY }} height={220} width={220} className="hidden md:block md:absolute  md:w-[220] md:h-[220px]  md:max-w-none md:-top-8 md:right-43 " /> */}

          </div>
        </div>



      </div>

      {/* <motion.div
      initial={{opacity: 0, y: 100}}
      animate={{
        opacity: 1,
        y: 0,
	  transition:{duration:0.5}
      }}
    >
      <div>
        <h1>Welcome to the Home Page</h1>
      </div>
    </motion.div>
     */}

      <div>
        {/* <motion.button>
    Hover
</motion.button> */}
      </div>
      {/* <div>
 
        <motion.button className="px-10 p-3 shadow-md text-white  
         text-xl rounded-full bg-gradient-to-br 
         block mx-auto from-sky-500 to to-blue-700"
        whileHover={{scale:1.2,textShadow:'1px 1px 10px skyblue'  
        ,boxShadow:'2px 2px 20px 2px blue'}}
        whileTap={{scale:0.8}}
        >Hover / Tap</motion.button>
    </div> */}
    </section>
  )
}


export default Hero