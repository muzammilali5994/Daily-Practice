import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function model() {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <mesh rotation={[0.5, 0.5, 0]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="orange" />
        </mesh>
        <ambientLight intensity={1} />
        <OrbitControls />
      </Canvas>
    </div>
  )
}

export default model