import React from 'react'
import {motion, useAnimationControls} from "framer-motion"

export default function AnimationControls() {

  const controls = useAnimationControls()

  const handleClick = () => {
    controls.start("flip")
  }

  return (
    <div className='h-96 grid place-content-center gap-4'>
      <motion.button 
      onClick={handleClick}
      className='bg-orange-500 text-dark rounded-lg py-2 px-12 font-medium tracking-tighter'>
        CLICK ME
      </motion.button>
      <motion.div
      className='w-48 h-48 bg-dark'
      variants={{
        initial: {
          rotate: "0deg",
        },
        flip: {
          rotate: "360deg"
        },
      }}
      initial="initial"
      animate={controls}
      transition={{
        duration: 1,
        ease: "easeInOut"
      }}
      />
    </div>
  )
}
