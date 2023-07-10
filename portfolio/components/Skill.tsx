import React from 'react'
import { motion } from "framer-motion"

type Props = {
    directionLeft? : boolean,
};

export default function Skill({ directionLeft }: Props) {
  return (
      <div className="group relative flex cursor-pointer">

        <motion.img
        initial={{ 
            x: directionLeft? -200 : 200,
            opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src="https://img.icons8.com/color/48/000000/javascript.png"
        className="rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
        alt="javascript"
        />

        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300
        ease-in-out group-hover:bg-white h-24 w-24 md:w-24 md:h-24 xl:w-28 xl:h-28 rounded-full z-0">
            <div className="flex items-center justify-center h-full">
                <p className="text-3xl font-bold text-gray-400 opacity-100">100%</p>
            </div>
        </div>
      </div>

  )
}