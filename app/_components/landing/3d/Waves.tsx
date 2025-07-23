// import MeshComp from '@/app/(routes)/test/mesh'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { ACESFilmicToneMapping } from 'three'

const Waves = () => {
    return (
        <Canvas
            className=' w-screen h-fit'
            gl={{

                antialias: true,
                transmissionResolutionScale: 3,
                toneMapping: ACESFilmicToneMapping,
                pixelRatio: Math.min(1.5, window.devicePixelRatio)
            }}
        >

            {/* <MeshComp /> */}

        </Canvas>
    )
}

export default Waves