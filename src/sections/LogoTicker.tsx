"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import excelLogo from "@/assets/logos/excel.png";
import fastapiLogo from "@/assets/logos/fastapi.png";
import nestjsLogo from "@/assets/logos/nest-js.png";
import nextjsLogo from "@/assets/logos/next-js.png";
import pythonLogo from "@/assets/logos/python.png";
import powerbiLogo from "@/assets/logos/powerbi.png";

export const LogoTicker = () => {
  return (
    <section className="py-10 md:py-15 bg-white">
      <div className="flex justify-center overflow-hidden">
        {/* Contenedor con animación */}
        <motion.div
          className="flex gap-14 flex-none"
          animate={{ x: ["100%", "-100%"] }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Image src={excelLogo} alt="excel Logo"  className="logo-ticker-img" />
          <Image src={powerbiLogo} alt="power bi Logo"   className="logo-ticker-img" />
          <Image src={nextjsLogo} alt="next js Logo" className="logo-ticker-img" />
          <Image src={nestjsLogo} alt="nest js Logo" className="logo-ticker-img" />
          <Image src={fastapiLogo} alt="fastapi Logo" className="logo-ticker-img" />
          <Image src={pythonLogo} alt="python Logo"  className="logo-ticker-img" />
        </motion.div>
      </div>
    </section>
  );
};