'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

function About() {
    return (
        <div className="mx-auto max-w-7xl space-y-10 py-32 md:space-y-16">
            <h3 className=" text-center tracking-[20px]">ABOUT</h3>
            <motion.div
                initial={{
                    x: -200,
                    opacity: 0,
                }}
                transition={{
                    duration: 1.2,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <Image
                    className="mx-auto w-5/6 rounded-lg md:w-1/4"
                    src="/audi.jpg"
                    width={400}
                    height={400}
                    alt="Mert Eyüboğlu"
                />
            </motion.div>
            <div className="space-y-5">
                <h4 className="text-center font-semibold">Who Am I</h4>
                <h4 className="px-5 pb-4 font-sans">
                    Hello, my name is Mert and I am a Student. My First year on
                    industrial engineering on AYBÜ. I have been working on
                    Frontend. In my free time, I enjoy watching footbal
                    basketball and reading book. I was born in Samsun in 2002. I
                    won Samsun Anadolu Lisesi. When I was 16 me and my family
                    moved to Trabzon.Currently I have been living in Ankara. If
                    you would like to learn more about me or my work, please
                    feel free to contact my social media account which is on the
                    navigation bar.
                </h4>
            </div>
        </div>
    )
}

export default About
