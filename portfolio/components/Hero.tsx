import React from 'react';
import photo from '../public/assets/images/me.png';
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image';
import Link from 'next/link';

type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "HI Siying",
            "Coffee",
            "Cheese",
        ],
        loop: true,
        delaySpeed: 2000,
    });


    return (
        <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
            <BackgroundCircles />
            <Image className="relative rounded-full h-44 w-44 mx-auto object-cover" src={photo} alt="" />
            <div className="z-20">
                <h2 className="text-sm uppercase text-gray-300 pb-2 tracking-[15px]">
                    Software Engineer
                </h2>
                <h1 className="text-5xl lg:text-5xl font-semibold px-10">
                    <span>{ text } </span>
                    <Cursor cursorColor='orange'/>
                </h1>

                <div className='pt-5'>
                    <Link href="#about">
                        <button className="heroButton">About Me</button>
                    </Link>
                    <Link href="#experience">
                        <button className="heroButton">Experience</button>
                    </Link>
                    <Link href="#skills">
                        <button className="heroButton">Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className="heroButton">Project s</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}