/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: inuhitman (https://sketchfab.com/inuhitman)
license: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
source: https://sketchfab.com/3d-models/scifi-light-02-279119592d9545f5821f81f2ba52be6d
title: SciFi Light 02
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Lamp({position, rotation}) {
  const { nodes, materials } = useGLTF('assets/lamp/lamp-transformed.glb')
  return (
    <group position={position} rotation={rotation} dispose={null}>
      <group position={[0, -6.72, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <group rotation={[-Math.PI, 0, 0]}>
          <mesh castShadow receiveShadow geometry={nodes['Light_02_Material_#39_0'].geometry} material={materials.Material_39} />
          <mesh castShadow receiveShadow geometry={nodes['Light_02_Material_#38_0'].geometry} material={materials.Material_38} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('assets/lamp/lamp-transformed.glb')
