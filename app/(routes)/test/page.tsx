"use client"
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { ACESFilmicToneMapping } from 'three'
import MeshComp from './mesh'
const Page = () => {


  return (
    <div
      className='w-screen h-screen bg-amber-300'
    >
      <Canvas
        className='w-screen h-screen  bg-accent-foreground'
        gl={{

          antialias: true,
          transmissionResolutionScale: 3,
          toneMapping: ACESFilmicToneMapping,
          pixelRatio: Math.min(1.5, window.devicePixelRatio)
        }}
      >

<MeshComp/>

      </Canvas>

    </div>
  )
}

export default Page