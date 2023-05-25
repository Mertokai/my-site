'use client'
import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import Head from 'next/head'

type Props = {}

const Header = (): JSX.Element => {
    return (
        <header className="sticky top-0 mx-auto flex max-w-7xl items-start justify-between px-10 py-10 ">
            <motion.div
                className="flex"
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
                    duration: 1.5,
                }}
            >
                <SocialIcon
                    url="https://twitter.com/mertokai"
                    fgColor="#1DA1F2"
                    bgColor="transparent"
                />
                <SocialIcon
                    url="https://www.linkedin.com/in/mert-ey%C3%BCbo%C4%9Flu-615204226/"
                    fgColor="#0077b5"
                    bgColor="transparent"
                />
                <SocialIcon
                    url="https://github.com/jaketrent"
                    fgColor="#333"
                    bgColor="transparent"
                />
                <SocialIcon
                    url="https://instagram.com/jaketrent"
                    fgColor="red"
                    bgColor="transparent"
                />
            </motion.div>
        </header>
    )
}

export default Header
