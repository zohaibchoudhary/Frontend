import React, { useEffect } from 'react'
import {animate, motion, useMotionTemplate, useMotionValue} from "framer-motion"
import { ArrowRight } from 'lucide-react'
import { Canvas } from '@react-three/fiber'
import { Stars } from '@react-three/drei'


const colors = [
  "#13FFAA",
  "#1E67C6",
  "#CE84CF",
  "#DD335C",
]

export default function AuroraEffect() {
  const color = useMotionValue(colors[0])
  
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`

  const border = useMotionTemplate`1px solid ${color}`

  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`

  useEffect(() => {
    animate(color, colors, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror"
    })
  }, [])

  return (
    <motion.section 
    style={{
      backgroundImage
    }}
    className='relative w-full min-h-screen grid place-content-center px-4 py-24 bg-gray-950 text-gray-200 font-fredoka'>
      <div className='relative z-10 flex flex-col items-center'>
        <span className='inline-block rounded-full bg-gray-600/50 px-4 py-1.5 text-sm mb-1.5'>Beta Now Live!</span>
        <h1 className='max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight'>
          Decrease your SaaS churn by over 90%
        </h1>
        <p className='my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem placeat dolorum itaque blanditiis eum cum sequi. 
        </p>
        <motion.button
        whileHover={{
          scale: 1.015
        }}
        whileTap={{
          scale: 0.985
        }}
        className='group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-6 py-2 text-base text-gray-50 transition-colors hover:bg-gray-950/50'
        style={{
          border,
          boxShadow
        }}
        >
          Start your trial
          <ArrowRight className='transition-transform group-hover:rotate-45 group-active:rotate-12' />
        </motion.button>
      </div>
      <div className='absolute inset-0 z-0'>
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </motion.section>
  )
}
