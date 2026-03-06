// import Image from "next/image";
import {Hero} from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { ProductShowCase } from "@/sections/ProductShowCase";
import { Pricing } from "@/sections/Pricing";
// import { Testimonials } from "@/sections/Testimonials";
import { CallToAction } from "@/sections/CallToAction";
export default function page() {
  return (
    <div  >
     <Hero></Hero>
     <LogoTicker></LogoTicker>
     <ProductShowCase></ProductShowCase>
     <Pricing></Pricing>
     {/* <Testimonials></Testimonials> */}
     <CallToAction></CallToAction>
   
    </div>
  );
}
