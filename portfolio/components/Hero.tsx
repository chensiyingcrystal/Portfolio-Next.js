import React from 'react'
import { Cursor, useTypewriter } from "react-simple-typewriter"

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
        <div>
            <h1>
                <span>{ text } </span>
                <Cursor cursorColor='orange'/>
            </h1>

        </div>
    )
}