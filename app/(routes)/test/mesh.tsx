import {  OrbitControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'
import * as THREE from 'three'
import vertex from "./shaders/vertex.glsl"
import fragment from "./shaders/fragment.glsl"



const MeshComp = () => {
  const materialRef = useRef<THREE.ShaderMaterial>(null)

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime
      console.log(materialRef.current.uniforms.uTime)
    }
  })
  

  return (
    <>
      {/* <OrbitControls /> */}

      <mesh rotation={[Math.PI , 0, 0]} position={[0, -0.5, 0]}>
        <planeGeometry  args={[19, 5, 64, 64]} />
        <shaderMaterial
          ref={materialRef}
          vertexShader={vertex}
          fragmentShader={fragment}
          uniforms={{
            uReslution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
            uTime: { value: 0 },
          }}
          side={THREE.DoubleSide}
        />
      </mesh>
    </>
  )
}

export default MeshComp
