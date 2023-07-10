/* eslint-disable react/jsx-key */
import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function Projects({}: Props) {
  const projects = [1, 2, 3]
  return (
    <motion.div 
    initial={{ opacity: 0, }}
    whileInView={{ opacity: 1, }} 
    transition={{ duration: 1.5, }}
    className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row
    max-w-full justify-center mx-auto items-center z-0">

        <h3 className="absolute top-24 uppercase tracking-[20px] text-white text-2xl">
            Projects
        </h3>

        <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
            {/* Project1 */}
            {projects.map((project, i) => (
                <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 snap-mandatory items-center justify-center p-20 md:p-44 h-screen">
                    <img
                        src=""
                        alt=""
                    /> 

                    <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                        <h4 className="text-4xl font-semibold text-center">
                            <span className="underline decoration-[#F7AB0A]/50">Project {i + 1} of {projects.length}</span> Instacart Mobile App
                        </h4>
                    </div>

                    <p className="text-lg text-center md:text-left">Project Summary Project Summary Project Summary Project Summary</p>

                </div>
            ))}

        </div>

        <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12">

        </div>
    </motion.div>
  )
}