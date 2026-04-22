import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function Model() {
  return(
    <div style={{width:'300px', height:'300px'}}>
      <Canvas camera={{position: [5, 5, 5]}}>
        <mesh>
          <boxGeometry args={[3, 3, 3]} />
          <meshStandardMaterial color="orange" />
        </mesh>
        <ambientLight intensity={1} />
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  )

}
export default Model