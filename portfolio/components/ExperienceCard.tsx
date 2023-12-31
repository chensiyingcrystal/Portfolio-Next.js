import { motion } from 'framer-motion';
import React from 'react'

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[400px] h-[500px] md:w-[400px] xl:w-[600px] snap-center bg-[#dfb5f0] p-10 
    hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
      initial={{ 
        y: -100,
        opacity: 0 }}
      transition={{ duration: 1.2 }}
      whileInView={{ opacity: 1, y: 0}}
      viewport={{ once: true }}
      className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px]
      object-cover object-center"
      src=""
      alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light text-black">Software Engineer Intern</h4>
        <p className="font-bold text-2xl mt-1 text-black">Vanguard</p>
        <div className="flex space-x-2 my-2">
          <img 
            className="h-10 w-10 rounded-full"
            src=""
            alt=""
          />
          <img 
            className="h-10 w-10 rounded-full"
            src=""
            alt=""
          />
          <img 
            className="h-10 w-10 rounded-full"
            src=""
            alt=""
          />
        </div>
        <p className="uppercase py-5 text-gray-500">Started work... ended at... </p>

        <ul className="list-disc space-y-4 ml-5 text-md text-black">
          <li> Summary Points </li>
          <li> Summary Points </li>
          <li> Summary Points </li>
          <li> Summary Points </li>
        </ul>
      </div>
    </article>
  );
}