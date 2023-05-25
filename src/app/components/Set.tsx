'use client'
import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    name: string
    value: string
}

const Set = ({ name, value }: Props): JSX.Element => {
    return (
        <div className="mx-auto w-3/5 rounded-full bg-gray-300 md:w-full">
            <motion.div
                initial={{
                    x: -100,
                    opacity: 0,
                    scale: 1,
                }}
                transition={{
                    duration: 1.2,
                }}
                whileInView={{ x: 0, opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className={`text-slate-200 w-${value} rounded-lg bg-blue-500 text-center text-xs leading-none`}
            >
                {name}
            </motion.div>
        </div>
    )
}

export default Set
