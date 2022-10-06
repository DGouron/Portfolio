import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Scene from './Scene'
import { Loader } from '@react-three/drei'

function ThreeCanvas() {
  return (
    <div className='canvas__container'>
        <Canvas shadows>
            <Suspense fallback={null}> {/* Load this component after the dom was completly loaded */}
            <Scene />
            </Suspense>
        </Canvas>
        <Loader />
    </div>
  )
}

export default ThreeCanvas