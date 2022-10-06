import { useLoader } from '@react-three/fiber';
import React from 'react'
import { Material, TextureLoader } from 'three';
import { openInNewTab } from '../../utils/navigation';

function Poster({position, rotation, textureUrl, size, linkedUrl}) {
    const textureLoaded = useLoader(TextureLoader, textureUrl);

    function handleClick(){
        openInNewTab(linkedUrl)
    }

  return (
    <mesh rotation={rotation} position={position} receiveShadow castShadow side={Material.BackSide} onClick={() => handleClick()}>
            <boxGeometry args={[size[0], size[1], size[2]]}/>
            <meshPhysicalMaterial color="#eeeeee" 
            map={textureLoaded}
            normalMap={textureLoaded}
            aoMap={textureLoaded}
            displacementScale={1}
            opacity={1}
            transparent={true}
            />
        </mesh>
  )
}

export default Poster