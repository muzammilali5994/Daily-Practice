import React from 'react'
import { Canvas } from '@react-three/fiber'


function object() {
  return (
    <div id="canvas-container">
    <Canvas>
      <mesh>
        <boxGeometry />
        <meshBasicMaterial color="red" />
      </mesh>
    </Canvas>
    </div>
  )
}

export default object