import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Scene from './Scene';
import { Html, Loader } from '@react-three/drei';

function ThreeCanvas() {
  return (
    <div className='canvas__container'>
      <Canvas shadows>
        <Suspense
          fallback={
            <Html>
              <h2
                style={{
                  width: '600px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                  fontSize: '2rem',
                  borderBottom: '1px solid #fff',
                  padding: '20px',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              >
                Ouverture de la scène
              </h2>
            </Html>
          }
        >
          {' '}
          {/* Load this component after the dom was completly loaded */}
          <Scene />
        </Suspense>
      </Canvas>
      <Loader />
    </div>
  );
}

export default ThreeCanvas;
