import React from 'react'

function SkillBox({texture, position}) {
  return (
    
        <mesh rotation={[-(angleToRadians(90)),0 ,0]} position={position} receiveShadow>
          <planeGeometry args={[100, 100]}/>
          <meshStandardMaterial color="#eeeeee" 
          map={texture} 
          aoMap={texture}
          normalMap={texture}
          displacementMap={texture}
          roughnessMap={texture}
          metalnessMap={texture}
          emissiveMap={texture}
          emissiveIntensity={100}
          roughness={0.9}
          metalness={0.8}
          displacementScale={1}
          />
        </mesh>
    
  )
}

export default SkillBox