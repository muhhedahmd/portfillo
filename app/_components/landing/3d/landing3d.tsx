"use client"
import { Canvas } from '@react-three/fiber'
import React from 'react'
import SceneMesh from './SceneMesh'
import { ACESFilmicToneMapping } from 'three'


const Landing3d = () => {

  return (
    <Canvas 
    
    className=' w-screen h-screen  '
    gl={{
    
      alpha: true,
      antialias: true,
      transmissionResolutionScale:3,
      toneMapping: ACESFilmicToneMapping,
      pixelRatio : Math.min(1.5, window.devicePixelRatio) 
    }}
    >
        {/* <PerspectiveCamera makeDefault fov={75} position={[1, 0, 0]} resolution={1024}> */}
 
<SceneMesh/>

                
            {/* </PerspectiveCamera> */}
    </Canvas>
  )
}

export default Landing3d