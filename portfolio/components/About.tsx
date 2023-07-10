/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion';
import photo from '../public/assets/images/sky.jpg';
import React from 'react';
import Image from 'next/image';

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
    initial={{
        x: -200,
        opacity: 0,
    }}
    transition={{
        duration: 1.2,
    }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once:true }}
    className="flex flxe-col relative h-screen text-center md:text-left md:flex-col xl:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center">
        
        <h3 className="absolute top-24 uppercase tracking-[10px] text-white-500 text-2xl">
            About
        </h3>



        <Image 
            className="-mb-20 md:mb-0 md:pt-5 flex-shrink-0 w-56 h-56 rounded-full pr-10 pt-5 pb-0
            object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[300px] xl:h-[400px]" 
            src={photo} 
            alt="" 
        />


        <div >
            <h4 className='text-4xl font-semibold pb-5'>
                Here is a <span className='underline decoration-purple-300'>little</span> background
            </h4>
            <p className="text-base">
                As a graduate student of computer science, I had a solid grasp of data structure, algorithm, OOP, networking and scalable distributed systems, 
                through some hands-on projects, including a distributed search service implementing Raft distributed consensus algorithm, an Instacart Android
                 mobile app, and a React web app based on microservice architecture. In this year, I gained a deeper understanding of cloud technology, throughout 
                 my internship at Schrodinger’s infra team working with developers in promoting system’s visibility, reliability and security; I'm also interning 
                 at Vanguard researching memory leak on the Android mobile app, which strengthens my understanding of Android underlying system.
            </p>
        </div>


        
        

        
 
        
    </ motion.div>
    
  );
}