"use client"

import user from "@/assets/pexels-olly-774909.jpg"
// import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const testimonialsData = [
    {
        name: "John Doe",
        feedback: "This service is amazing! Highly recommend to everyone.",
        image: user
    },
    {
        name: "Jane Smith",
        feedback: "A wonderful experience from start to finish. Great team!",
        image: user
    },
    {
        name: "Alice Johnson",
        feedback: "Exceptional quality and customer service. Will use again.",
        image: "user"
    },
    {
        name: "Alice ",
        feedback: "Exceptional quality and customer service. Will use again.",
        image: "user"
    },
    {
        name: "Yeico Lainer Escobar Giraldo",
        feedback: "Exceptional quality and customer service. Will use again.",
        image: "user"
    },
    {
        name: "Breyner Ocampo Cárdenas",
        feedback: "Exceptional quality and customer service. Will use again.",
        image: "user"
    }
];

export const Testimonials = ()=>{

    return (
        <section className=" overflow-x-clip ">
            <div>
<h3 className="text-4xl flex justify-center">Testimonials</h3>

                <h2 className="text-5xl p-2">What say about we</h2>
                <p className="text-justify">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum deleniti rerum expedita eius nesciunt architecto aliquid, totam molestias hic eum itaque quaerat ducimus quam amet quas dolorem error, tenetur quibusdam.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, ex nihil iste minus placeat veniam quibusdam corrupti distinctio quod officiis numquam. Dolor deleniti et dolorem laboriosam! Quis ad tempora suscipit.

                </p>

                {/* <div className="grid grid-cols-2 mt-10 bg-[linear-gradient(to_bottom,transparent, black_25%, black_75%, transparent)]"> */}
                {/* <div className="grid grid-cols-2 mt-10 bg-[linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]"> */}
                <div className="[mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent) flex  flex-col justify-center md:grid grid-cols-2 mt-10  ]">
           
 
        {/* //    [...new Array(2)].fill(0).map(_ ,index)=>{ */}
{/* <motion.div animate={{translateY:"-50%"}} transition={{
    repeat: Infinity,
    ease:'linear',
    repeatType:"loop",
    duration:15,
}}> */}
{testimonialsData.map((testi) => (
    <div key={testi.name} className="border border-blue-500 rounded-lg p-4 m-4 shadow-black">
                <div className="flex justify-between">

                <h3 className="text-2xl font-bold tracking-tighter leading-none">{testi.name}</h3>
                <div className="inline-flex  font-bol text-sm px-4  py-2  rounded-3xl border border-black/60">
                {/* <span className="bg-[linear-gradient(to_right,_#FFB800_0%,_#FF6A00_100%)] text-white px-4 py-2 rounded-full"> */}
                {/* <span className="text-2xl bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] text-transparent bg-clip-text px-4 py-2 rounded-full font-bold"> */}
                <span className="gradient-title-color">

                Popular
                </span>
                </div>
                </div>
                <div>
                  <Image src={user} alt={ testi.name} className="w-20 h-20 rounded-full"></Image>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident vitae voluptas et ab dolore repellat, dolorem maxime autem dolores praesentium modi accusantium doloribus! Excepturi alias iure unde nemo, laboriosam eveniet!
                  </p>
                </div>
        <p className=" font-bold tracking-tighter leading-none ">{testi.feedback}</p>
        <button className="btn btn-primary mt-4">Choose Plan</button>
    </div>
))}
{/* </motion.div> */}

            {/* // <React.Fragment key={index}> */}
  

            {/* </React.Fragment> */}
           {/* }}; */}
           
           
 
            </div>
            </div>


        </section>
    )
}