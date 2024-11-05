import React, { useRef } from 'react'
import {motion, useInView} from "framer-motion"


export default function ViewBasedAnimations() {

  const ref = useRef(null)

  const isInView = useInView(ref)

  return (
    <>
    <div className='h-[150vh] bg-white' />
    <motion.div 
    className='h-screen bg-orange-600'
    initial={{
      opacity: 0
    }}
    whileInView={{
      opacity: 1
    }}
    transition={{
      duration: 1
    }}
    />

    <motion.div 
    ref={ref}
    className={`h-screen ${isInView ? "bg-blue-700" : "bg-red-600"} duration-1000`} />
    </>
    
  )
}

