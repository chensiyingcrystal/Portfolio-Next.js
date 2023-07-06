import React from 'react'
import { SocialIcon } from "react-social-icons"
import { motion } from 'framer-motion'

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
        {/* add animation to header icons with framer-motion */}
        <motion.div 
            initial={{
                x: -500,
                opacity: 0,
                scale: 0.5,
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1,
            }}
            transition={{
                duration: 1,
            }}
            className='flex flex-row items-center'
        >
            {/* social icon header with react-social-icons */}
            <SocialIcon 
                url="https://www.linkedin.com/in/siyingchencrystal/"
                fgColor='gray'
                bgColor='transparent'
            />

            <SocialIcon 
                url="https://github.com/chensiyingcrystal"
                fgColor='gray'
                bgColor='transparent'
            />

            <SocialIcon 
                url="https://chensiyingcrystal.github.io/chensiying.github.io/"
                fgColor='gray'
                bgColor='transparent'
            />
        </motion.div>

        <div className='flex flex-row items-center text-gray-300 cursor-pointer'>
            <SocialIcon 
                className='cursor-pointer'
                network='email'
                fgColor='gray'
                bgColor='transparent'
            /> 
            <p className='"uppercase hidden md:inline-flex text-sm text-gray-400'>Get In Touch</p>
        </div>

    </header>
  );
}