"use client"

import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { type Mesh, type PointLight, PointLightHelper } from "three"
import * as THREE from "three" // Import THREE
import { useHelper, MeshTransmissionMaterial, Environment, OrbitControls, Box, Sphere } from "@react-three/drei"
import { useControls, folder } from "leva"

const SceneMesh = () => {
  const reflectiveTorusRef = useRef<Mesh>(null)
  const glassTorusRef = useRef<Mesh>(null)
  const lightRef = useRef<PointLight>(null)

  // Light controls
  const lightControls = useControls({

    Lights: folder({
      // Point Light controls
      light1Position: { value: [0, 0, 0], min: -10, max: 10, step: 0.1 },
      light1Intensity: { value: 10, min: 0, max: 10, step: 0.1 },
      light2Position: { value: [0, -1, 0], min: -10, max: 10, step: 0.1 },
      light2Intensity: { value: 2, min: 0, max: 10, step: 0.1 },
      light3Position: { value: [0, 1, 0], min: -10, max: 10, step: 0.1 },
      light3Intensity: { value: 2, min: 0, max: 10, step: 0.1 },

      // Directional Light controls
      dirLightPosition: { value: [2, 2, 2], min: -10, max: 100, step: 0.1 },
      dirLightIntensity: { value: 1.5, min: 0, max: 100, step: 0.1 },
    }),
  })

  // Reflective material controls
  const reflectiveControls = useControls({
    "Reflective Material": folder({
      reflectiveMetalness: { value: 1, min: 0, max: 1, step: 0.01 },
      reflectiveRoughness: { value: 0.1, min: 0, max: 1, step: 0.01 },
      reflectiveClearcoat: { value: 1, min: 0, max: 1, step: 0.01 },
      reflectiveColor: { value: "#ffffff" },
    }),
  })

  // Glass material controls
  const glassControls = useControls({
    "Glass Material": folder({
      glassIor: { value: 1.2, min: 1, max: 2.5, step: 0.01 },
      glassThickness: { value: 0.5, min: 0, max: 10, step: 0.1 },
      glassRoughness: { value: 0, min: 0, max: 1, step: 0.01 },
      glassTransmission: { value: 1, min: 0, max: 1, step: 0.01 },
      glassChromaticAberration: { value: 0.04, min: 0, max: 1, step: 0.01 },
      glassDistortion: { value: 0.1, min: 0, max: 1, step: 0.01 },
      glassColor: { value: "#ffffff" },
      glassOpacity: { value: 0.3, min: 0, max: 1, step: 0.01 },
    }),
  })

  // Environment controls
  const { environmentPreset } = useControls("Environment", {
    environmentPreset: {
      value: "sunset",
      options: ["sunset", "dawn", "night", "warehouse", "forest", "apartment", "studio", "city", "park", "lobby"],
    },
  })

  useHelper(lightRef, PointLightHelper, 0.5, "hotpink")

  useFrame(() => {
    if (reflectiveTorusRef.current) {
      reflectiveTorusRef.current.rotation.y += 0.01
    }
    if (glassTorusRef.current) {
      glassTorusRef.current.rotation.y -= 0.01
    }
  })

  return (
    <>
      {/* Environment map - crucial for reflections and glass */}
      {/* <Environment preset={environmentPreset} background /> */}

    <perspectiveCamera
         fov={15} position={[1, 0, -5]} />
      {/* Orbit controls for better viewing */}
      {/* <OrbitControls /> */}

      {/* Directional Light */}
      <directionalLight
        intensity={lightControls.dirLightIntensity}
        position={lightControls.dirLightPosition}
        color="#ffffff"
      />

      {/* Point Lights */}
      <pointLight
        ref={lightRef}
        intensity={lightControls.light1Intensity}
        position={lightControls.light1Position}
        color="#aaffaa"
      />
      <pointLight intensity={lightControls.light2Intensity} position={lightControls.light2Position} color="#aaaaff" />
      <pointLight intensity={lightControls.light3Intensity} position={lightControls.light3Position} color="#ff0000" />

      {/* Background objects to see through the glass */}
 


      {/* Reflective Torus - positioned on the left */}
      {/* <mesh ref={reflectiveTorusRef} position={[0, 0, -1]}>
        <torusKnotGeometry args={[1, 0.5, 200, 200]} />
        <meshPhysicalMaterial
          metalness={reflectiveControls.reflectiveMetalness}
          roughness={reflectiveControls.reflectiveRoughness}
          clearcoat={reflectiveControls.reflectiveClearcoat}
          clearcoatRoughness={0.1}
          color={reflectiveControls.reflectiveColor}
          envMapIntensity={1}
        />
      </mesh> */}

      {/* Glass Torus - positioned on the right */}
      <mesh ref={glassTorusRef} position={[0, 0, -1]}>

        <torusKnotGeometry args={[1, 0.5, 200, 200]} />
        <MeshTransmissionMaterial
          roughness={glassControls.glassRoughness}
          thickness={glassControls.glassThickness}
          ior={glassControls.glassIor}
          transmission={glassControls.glassTransmission}
          chromaticAberration={glassControls.glassChromaticAberration}
          distortion={glassControls.glassDistortion}
          color={glassControls.glassColor}
          opacity={glassControls.glassOpacity}
          transparent={true}
          backside={true}
          samples={6}
          resolution={256}
          background={new THREE.Color("#ffffff")}
        />
      </mesh>
    </>
  )
}

export default SceneMesh
