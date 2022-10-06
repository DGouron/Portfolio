import React from 'react'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import comfortaa from '../../fonts/Comfortaa_Regular.json';
import { extend } from '@react-three/fiber';

extend ({ TextGeometry });

function TextCustom({message, position, color, size, rotation, bevelThickness}) {
  const font = new FontLoader().parse(comfortaa);

    return (
        <mesh position={position} rotation={rotation}>
            <textGeometry args={[ message, {
                font: font,
                size: size,
                height: 2.5,
                color: color,
                curveSegments: 12,
                bevelEnabled: true,
                bevelThickness: bevelThickness,
                bevelSize: 0.5,
                bevelOffset: 0,
                bevelSegments: 5
            } ]} />
            </mesh>
            

    )
}

export default TextCustom