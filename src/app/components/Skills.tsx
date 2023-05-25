'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Set from './Set'

type Props = {}

const Skills = (props: Props): JSX.Element => {
    return (
        <div className="mx-auto max-w-7xl space-y-8 py-32 md:space-y-7">
            <h3 className="text-center tracking-[20px]">Skills</h3>
            <Set name="HTML" value="3/5" />
            <Set name="CSS" value="1/2" />
            <Set name="JAVASCRIPT" value="3/5" />
            <Set name="REACT" value="3/5" />
            <Set name="TYPESCRIPT" value="1/2" />
            <Set name="NEXT13" value="3/5" />
            <Set name="SANITY" value="1/2" />
            <Set name="FIREBASE" value="1/2" />
            <Set name="CLERK" value="1/2" />
            <Set name="ASTROJS" value="3/5" />
            <Set name="TAILWIND" value="1/2" />
            <Set name="BOOTSTRAP" value="3/5" />
            <Set name="ENGLISH" value="1/2" />
        </div>
    )
}
export default Skills
