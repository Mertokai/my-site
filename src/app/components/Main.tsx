'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Main = (): JSX.Element => {
    const [text, helper] = useTypewriter({
        words: [
            '_helloFriendThisIsMert.mov',
            'Person_who_loves_biskrem.txt',
            'frontendDeveloper.mpeg',
            'industriallEngineeringStudent.jsx',
        ],
        loop: true,
        delaySpeed: 2000,
    })
    return (
        <div className="mx-auto flex h-screen snap-start flex-col items-center justify-center  overflow-hidden text-center  md:px-16 md:py-32">
            <div className="xl: flex h-full w-full items-center justify-center py-16 md:max-w-[30%] md:py-12 ">
                <Image
                    className="h-2/4 w-3/5 rounded-lg md:h-auto md:w-full md:rounded-full md:py-12 xl:w-full"
                    src="/me.jpg"
                    width={400}
                    height={400}
                    alt="Mert Eyüboğlu"
                />
            </div>
            <div className="h-[50%] text-2xl md:text-4xl">
                <h1>
                    {text}
                    <Cursor cursorColor="red" />
                </h1>
            </div>
        </div>
    )
}

export default Main
