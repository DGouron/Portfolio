import { OrbitControls, PerspectiveCamera, useTexture, SpotLight } from '@react-three/drei';
import { useLoader, useFrame } from '@react-three/fiber';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import React, { useEffect, useRef } from 'react';
import { angleToRadians } from '../../utils/angle';

import gsap from 'gsap';
import Holotable from './Holotable';
import Lamp from './Lamp';
import Tablet from './Tablet';
import PlantCapsule from './PlantCapsule';
import Case from './Case';
import TextCustom from './TextCustom';
import Poster from './Poster';

function Scene() {
  const mugMesh = useLoader(FBXLoader, 'assets/mug/mug.fbx');
  const floorUVMap = useLoader(TextureLoader, 'assets/floor/Sci_fi_Metal_Panel_004_basecolor.webp');
  const floorNormalMap = useLoader(
    TextureLoader,
    'assets/floor/Sci_fi_Metal_Panel_004_normal.webp',
  );
  const floorRoughnessMap = useLoader(
    TextureLoader,
    'assets/floor/Sci_fi_Metal_Panel_004_roughness.webp',
  );
  const floorMetallicMap = useLoader(
    TextureLoader,
    'assets/floor/Sci_fi_Metal_Panel_004_metallic.webp',
  );
  const floorDisplacementMap = useLoader(
    TextureLoader,
    'assets/floor/Sci_fi_Metal_Panel_004_height.webp',
  );
  const floorAmbientOcclusionMap = useLoader(
    TextureLoader,
    'assets/floor/Sci_fi_Metal_Panel_004_ambientOcclusion.webp',
  );
  const floorEmissiveMap = useLoader(
    TextureLoader,
    'assets/floor/Sci_fi_Metal_Panel_004_emissive.webp',
  );

  const wallUVMap = useLoader(TextureLoader, 'assets/wall/Sci-Fi_Wall_014_basecolor.webp');
  const wallNormalMap = useLoader(TextureLoader, 'assets/wall/Sci-Fi_Wall_014_normal.webp');
  const wallRoughnessMap = useLoader(TextureLoader, 'assets/wall/Sci-Fi_Wall_014_roughness.webp');
  const wallMetallicMap = useLoader(TextureLoader, 'assets/wall/Sci-Fi_Wall_014_metallic.webp');
  const wallDisplacementMap = useLoader(TextureLoader, 'assets/wall/Sci-Fi_Wall_014_height.webp');
  const wallAmbientOcclusionMap = useLoader(
    TextureLoader,
    'assets/wall/Sci-Fi_Wall_014_ambientOcclusion.webp',
  );

  const githubSkill = useLoader(TextureLoader, 'assets/skills/logo_github.webp');
  const reactSkill = useLoader(TextureLoader, 'assets/skills/logo_react.webp');
  const nodeSkill = useLoader(TextureLoader, 'assets/skills/logo_node.webp');
  const mongoSkill = useLoader(TextureLoader, 'assets/skills/logo_mongo.webp');
  const nginxSkill = useLoader(TextureLoader, 'assets/skills/logo_nginx.webp');
  const reduxSkill = useLoader(TextureLoader, 'assets/skills/logo_redux.webp');
  const sassSkill = useLoader(TextureLoader, 'assets/skills/logo_sass.webp');
  const mysqlSkill = useLoader(TextureLoader, 'assets/skills/logo_mysql.webp');

  const orbitControlsRef = useRef(null);

  const coffeeRef = useRef(null);
  const mugRef = useRef(null);

  const rightLampLightRef = useRef(null);
  const leftLampLightRef = useRef(null);

  const holoSkillsRef = useRef(null);

  useEffect(() => {
    if (rightLampLightRef.current && leftLampLightRef.current) {
      gsap.fromTo(
        rightLampLightRef.current,
        { intensity: 0 },
        { intensity: 10, duration: 5, delay: 3, ease: 'power4.out' },
      );
      gsap.fromTo(
        leftLampLightRef.current,
        { intensity: 0 },
        { intensity: 7, duration: 5, delay: 6, ease: 'power4.out' },
      );
    }
  }, [rightLampLightRef, leftLampLightRef]);

  useEffect(() => {
    if (holoSkillsRef.current) {
      gsap.fromTo(
        holoSkillsRef.current.rotation,
        { y: angleToRadians(0) },
        { y: angleToRadians(360), duration: 10, delay: 0, yoyo: false, ease: 'linear', repeat: -1 },
      );
    }
  }, [holoSkillsRef]);

  useFrame((state) => {
    if (!!orbitControlsRef.current) {
      const { x, y } = state.mouse;
      orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadians(45));
      orbitControlsRef.current.setPolarAngle(y + 0.75 * angleToRadians(90 - 30));
      orbitControlsRef.current.update();
    }
  });

  let arrayItems = [];
  useEffect(() => {
    if (!!coffeeRef.current) {
      const timeline = gsap.timeline();

      timeline.fromTo(
        coffeeRef.current.position,
        { y: 1100 },
        { y: 1230, duration: 2.75, delay: 8.5, ease: 'power4.out' },
      );

      const { rotation } = coffeeRef.current;
      timeline.to(coffeeRef.current.rotation, {
        y: rotation.y - 0.1,
        duration: 1.5,
        delay: 5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });
    }
  }, [coffeeRef.current]);

  useEffect(() => {
    if (!!mugRef.current) {
      const timeline = gsap.timeline();
      timeline.fromTo(
        mugRef.current.position,
        { x: -1000 },
        { x: 1220, duration: 1.5, delay: 6, yoyo: false, ease: 'power.in' },
      );
      timeline.fromTo(
        mugRef.current.position,
        { y: 4500 },
        { y: 1000, duration: 1.5, delay: 0, yoyo: false, ease: 'bounce.out' },
        '<',
      );
    }
  }, [mugRef.current]);

  return (
    <>
      {/* Camera */}
      <PerspectiveCamera makeDefault position={[1000, 0, 300]} fov={50} />
      <OrbitControls
        ref={orbitControlsRef}
        minPolarAngle={angleToRadians(0)}
        maxPolarAngle={angleToRadians(80)}
        maxAzimuthAngle={360}
        minAzimuthAngle={angleToRadians(30)}
        maxDistance={900}
        minDistance={400}
        distance={800}
        enablePan={false}
      />

      {/* Floor */}
      <group>
        <mesh rotation={[-angleToRadians(90), 0, 0]} position={[0, 0, 0]} receiveShadow>
          <planeGeometry args={[500, 500]} />
          <meshStandardMaterial
            color='#eeeeee'
            map={floorUVMap}
            aoMap={floorAmbientOcclusionMap}
            normalMap={floorNormalMap}
            displacementMap={floorDisplacementMap}
            roughnessMap={floorRoughnessMap}
            metalnessMap={floorMetallicMap}
            emissiveMap={floorEmissiveMap}
            emissiveIntensity={100}
            roughness={0.9}
            metalness={0.8}
            displacementScale={1}
          />
        </mesh>
        <mesh rotation={[-angleToRadians(90), 0, 0]} position={[500, 0, 0]} receiveShadow>
          <planeGeometry args={[500, 500]} />
          <meshStandardMaterial
            color='#eeeeee'
            map={floorUVMap}
            aoMap={floorAmbientOcclusionMap}
            normalMap={floorNormalMap}
            displacementMap={floorDisplacementMap}
            roughnessMap={floorRoughnessMap}
            metalnessMap={floorMetallicMap}
            emissiveMap={floorEmissiveMap}
            emissiveIntensity={100}
            roughness={0.9}
            metalness={0.8}
            displacementScale={1}
          />
        </mesh>
        <mesh rotation={[-angleToRadians(90), 0, 0]} position={[-500, 0, 0]} receiveShadow>
          <planeGeometry args={[500, 500]} />
          <meshStandardMaterial
            color='#eeeeee'
            map={floorUVMap}
            aoMap={floorAmbientOcclusionMap}
            normalMap={floorNormalMap}
            displacementMap={floorDisplacementMap}
            roughnessMap={floorRoughnessMap}
            metalnessMap={floorMetallicMap}
            emissiveMap={floorEmissiveMap}
            emissiveIntensity={100}
            roughness={0.9}
            metalness={0.8}
            displacementScale={1}
          />
        </mesh>
      </group>
      <group>
        <mesh rotation={[-angleToRadians(90), 0, 0]} position={[0, 0, 500]} receiveShadow>
          <planeGeometry args={[500, 500]} />
          <meshStandardMaterial
            color='#eeeeee'
            map={floorUVMap}
            aoMap={floorAmbientOcclusionMap}
            normalMap={floorNormalMap}
            displacementMap={floorDisplacementMap}
            roughnessMap={floorRoughnessMap}
            metalnessMap={floorMetallicMap}
            emissiveMap={floorEmissiveMap}
            emissiveIntensity={100}
            roughness={0.9}
            metalness={0.8}
            displacementScale={1}
          />
        </mesh>
        <mesh rotation={[-angleToRadians(90), 0, 0]} position={[500, 0, 500]} receiveShadow>
          <planeGeometry args={[500, 500]} />
          <meshStandardMaterial
            color='#eeeeee'
            map={floorUVMap}
            aoMap={floorAmbientOcclusionMap}
            normalMap={floorNormalMap}
            displacementMap={floorDisplacementMap}
            roughnessMap={floorRoughnessMap}
            metalnessMap={floorMetallicMap}
            emissiveMap={floorEmissiveMap}
            emissiveIntensity={100}
            roughness={0.9}
            metalness={0.8}
            displacementScale={1}
          />
        </mesh>
        <mesh rotation={[-angleToRadians(90), 0, 0]} position={[-500, 0, 500]} receiveShadow>
          <planeGeometry args={[500, 500]} />
          <meshStandardMaterial
            color='#eeeeee'
            map={floorUVMap}
            aoMap={floorAmbientOcclusionMap}
            normalMap={floorNormalMap}
            displacementMap={floorDisplacementMap}
            roughnessMap={floorRoughnessMap}
            metalnessMap={floorMetallicMap}
            emissiveMap={floorEmissiveMap}
            emissiveIntensity={100}
            roughness={0.9}
            metalness={0.8}
            displacementScale={1}
          />
        </mesh>
      </group>
      <mesh rotation={[-angleToRadians(90), 0, 0]} position={[0, 0, -500]} receiveShadow>
        <planeGeometry args={[500, 500]} />
        <meshStandardMaterial
          color='#eeeeee'
          map={floorUVMap}
          aoMap={floorAmbientOcclusionMap}
          normalMap={floorNormalMap}
          displacementMap={floorDisplacementMap}
          roughnessMap={floorRoughnessMap}
          metalnessMap={floorMetallicMap}
          emissiveMap={floorEmissiveMap}
          emissiveIntensity={100}
          roughness={0.9}
          metalness={0.8}
          displacementScale={1}
        />
      </mesh>
      <mesh rotation={[-angleToRadians(90), 0, 0]} position={[500, 0, -500]} receiveShadow>
        <planeGeometry args={[500, 500]} />
        <meshStandardMaterial
          color='#eeeeee'
          map={floorUVMap}
          aoMap={floorAmbientOcclusionMap}
          normalMap={floorNormalMap}
          displacementMap={floorDisplacementMap}
          roughnessMap={floorRoughnessMap}
          metalnessMap={floorMetallicMap}
          emissiveMap={floorEmissiveMap}
          emissiveIntensity={100}
          roughness={0.9}
          metalness={0.8}
          displacementScale={1}
        />
      </mesh>
      <mesh rotation={[-angleToRadians(90), 0, 0]} position={[-500, 0, -500]} receiveShadow>
        <planeGeometry args={[500, 500]} />
        <meshStandardMaterial
          color='#eeeeee'
          map={floorUVMap}
          aoMap={floorAmbientOcclusionMap}
          normalMap={floorNormalMap}
          displacementMap={floorDisplacementMap}
          roughnessMap={floorRoughnessMap}
          metalnessMap={floorMetallicMap}
          emissiveMap={floorEmissiveMap}
          emissiveIntensity={100}
          roughness={0.9}
          metalness={0.8}
          displacementScale={1}
        />
      </mesh>

      {/*Wall*/}
      <group name='right__wall'>
        <mesh
          rotation={[0, 0, angleToRadians(90)]}
          position={[500, 200, -750]}
          receiveShadow
          castShadow
        >
          <planeGeometry args={[500, 500]} />
          <meshStandardMaterial
            color='#eeeeee'
            map={wallUVMap}
            aoMap={wallAmbientOcclusionMap}
            normalMap={wallNormalMap}
            displacementMap={wallDisplacementMap}
            roughnessMap={wallRoughnessMap}
            metalnessMap={wallMetallicMap}
            roughness={0.9}
            metalness={0.8}
            displacementScale={1}
          />
        </mesh>
        <mesh
          rotation={[0, 0, angleToRadians(90)]}
          position={[0, 200, -750]}
          receiveShadow
          castShadow
        >
          <planeGeometry args={[500, 500]} />
          <meshStandardMaterial
            color='#eeeeee'
            map={wallUVMap}
            aoMap={wallAmbientOcclusionMap}
            normalMap={wallNormalMap}
            displacementMap={wallDisplacementMap}
            roughnessMap={wallRoughnessMap}
            metalnessMap={wallMetallicMap}
            roughness={0.9}
            metalness={0.8}
            displacementScale={1}
          />
        </mesh>
        <mesh
          rotation={[0, 0, angleToRadians(90)]}
          position={[-500, 200, -750]}
          receiveShadow
          castShadow
        >
          <planeGeometry args={[500, 500]} />
          <meshStandardMaterial
            color='#eeeeee'
            map={wallUVMap}
            aoMap={wallAmbientOcclusionMap}
            normalMap={wallNormalMap}
            displacementMap={wallDisplacementMap}
            roughnessMap={wallRoughnessMap}
            metalnessMap={wallMetallicMap}
            roughness={0.9}
            metalness={0.8}
            displacementScale={1}
          />
        </mesh>
      </group>

      <group name='left__wall'>
        <mesh
          rotation={[0, angleToRadians(90), angleToRadians(90)]}
          position={[-750, 200, 0]}
          receiveShadow
          castShadow
        >
          <planeGeometry args={[500, 500]} />
          <meshStandardMaterial
            color='#eeeeee'
            map={wallUVMap}
            aoMap={wallAmbientOcclusionMap}
            normalMap={wallNormalMap}
            displacementMap={wallDisplacementMap}
            roughnessMap={wallRoughnessMap}
            metalnessMap={wallMetallicMap}
            roughness={0.9}
            metalness={0.8}
            displacementScale={1}
          />
        </mesh>
        <mesh
          rotation={[0, angleToRadians(90), angleToRadians(90)]}
          position={[-750, 200, 500]}
          receiveShadow
          castShadow
        >
          <planeGeometry args={[500, 500]} />
          <meshStandardMaterial
            color='#eeeeee'
            map={wallUVMap}
            aoMap={wallAmbientOcclusionMap}
            normalMap={wallNormalMap}
            displacementMap={wallDisplacementMap}
            roughnessMap={wallRoughnessMap}
            metalnessMap={wallMetallicMap}
            roughness={0.9}
            metalness={0.8}
            displacementScale={1}
          />
        </mesh>
        <mesh
          rotation={[0, angleToRadians(90), angleToRadians(90)]}
          position={[-750, 200, -500]}
          receiveShadow
          castShadow
        >
          <planeGeometry args={[500, 500]} />
          <meshStandardMaterial
            color='#eeeeee'
            map={wallUVMap}
            aoMap={wallAmbientOcclusionMap}
            normalMap={wallNormalMap}
            displacementMap={wallDisplacementMap}
            roughnessMap={wallRoughnessMap}
            metalnessMap={wallMetallicMap}
            roughness={0.9}
            metalness={0.8}
            displacementScale={1}
          />
        </mesh>
      </group>
      <group scale={0.15}>
        <primitive object={mugMesh} ref={mugRef} castShadow position={[-1000, 500, 0]}>
          <meshStandardMaterial roughness={0.9} metalness={0} />
        </primitive>

        {/* Coffee */}
        <mesh
          position={[1220, 2230, 0]}
          rotation={[-angleToRadians(90), 0, 0]}
          ref={coffeeRef}
          castShadow
        >
          <circleGeometry args={[90, 32, 32]} />
          <meshPhysicalMaterial color={'#462e01'} opacity={0.9} transparent={true} />
        </mesh>
      </group>

      <Holotable />

      {/* lamp */}
      <Lamp position={[420, 400, -730]} rotation={[angleToRadians(90), angleToRadians(90), 0]} />

      {/* Posters */}
      <group name='posters'>
        <Poster
          position={[400, 230, -740]}
          rotation={[0, 0, 0]}
          size={[140, 140, 1]}
          textureUrl={'assets/skills/logo_github.webp'}
          linkedUrl={'https://github.com/DGouron/'}
        />
        <Poster
          position={[550, 230, -740]}
          rotation={[0, 0, 0]}
          size={[140, 140, 1]}
          textureUrl={'assets/contact/logo_linkedin.png'}
          linkedUrl={'https://www.linkedin.com/in/damien-gouron/'}
        />
      </group>

      <group name='holo_skills' ref={holoSkillsRef}>
        <mesh
          rotation={[angleToRadians(0), angleToRadians(45), angleToRadians(0)]}
          position={[60, 230, 60]}
        >
          <boxGeometry args={[50, 50, 0.01]} />
          <meshStandardMaterial
            color='#eeeeee'
            map={reduxSkill}
            transparent={true}
            emissive={'#ffffff'}
            emissiveIntensity={10}
            opacity={1}
          />
        </mesh>
        <mesh
          rotation={[angleToRadians(0), angleToRadians(0), angleToRadians(0)]}
          position={[0, 230, 80]}
        >
          <boxGeometry args={[50, 50, 0.01]} />
          <meshStandardMaterial
            color='#eeeeee'
            map={nodeSkill}
            transparent={true}
            emissive={'#ffffff'}
            emissiveIntensity={10}
            opacity={1}
          />
        </mesh>
        <mesh
          rotation={[angleToRadians(0), angleToRadians(90), angleToRadians(0)]}
          position={[80, 230, 0]}
        >
          <boxGeometry args={[50, 50, 0.01]} />
          <meshStandardMaterial
            color='#eeeeee'
            map={mongoSkill}
            transparent={true}
            emissive={'#ffffff'}
            emissiveIntensity={10}
            opacity={1}
          />
        </mesh>
        <mesh
          rotation={[angleToRadians(0), angleToRadians(0), angleToRadians(0)]}
          position={[0, 230, -80]}
        >
          <boxGeometry args={[50, 50, 0.01]} />
          <meshStandardMaterial
            color='#eeeeee'
            map={nginxSkill}
            transparent={true}
            emissive={'#ffffff'}
            emissiveIntensity={1}
            opacity={1}
          />
        </mesh>
        <mesh
          rotation={[angleToRadians(0), angleToRadians(-45), angleToRadians(0)]}
          position={[60, 230, -60]}
        >
          <boxGeometry args={[50, 50, 0.01]} />
          <meshStandardMaterial
            color='#eeeeee'
            map={reactSkill}
            transparent={true}
            emissive={'#ffffff'}
            emissiveIntensity={1}
            opacity={1}
          />
        </mesh>
        <mesh
          rotation={[angleToRadians(0), angleToRadians(45), angleToRadians(0)]}
          position={[-60, 230, -60]}
        >
          <boxGeometry args={[50, 50, 0.01]} />
          <meshStandardMaterial
            color='#eeeeee'
            map={githubSkill}
            transparent={true}
            emissive={'#ffffff'}
            emissiveIntensity={1}
            opacity={1}
          />
        </mesh>
        <mesh
          rotation={[angleToRadians(0), angleToRadians(-45), angleToRadians(0)]}
          position={[-60, 230, 60]}
        >
          <boxGeometry args={[50, 50, 0.01]} />
          <meshStandardMaterial
            color='#eeeeee'
            map={sassSkill}
            transparent={true}
            emissive={'#ffffff'}
            emissiveIntensity={1}
            opacity={1}
          />
        </mesh>
        <mesh
          rotation={[angleToRadians(0), angleToRadians(-90), angleToRadians(0)]}
          position={[-80, 230, 0]}
        >
          <boxGeometry args={[50, 50, 0.01]} />
          <meshStandardMaterial
            color='#eeeeee'
            map={mysqlSkill}
            transparent={true}
            emissive={'#ffffff'}
            emissiveIntensity={1}
            opacity={1}
          />
        </mesh>
      </group>

      <Tablet
        position={[0, 20, 200]}
        rotation={[-angleToRadians(10), angleToRadians(90), angleToRadians(40)]}
        scale={60}
      />
      <PlantCapsule
        position={[-550, 0, 350]}
        rotation={[angleToRadians(0), angleToRadians(70), angleToRadians(0)]}
        scale={800}
      />
      <Case
        position={[500, 70, -590]}
        rotation={[angleToRadians(0), angleToRadians(-90), angleToRadians(0)]}
        scale={200}
      />

      {/* Light */}

      <pointLight
        ref={rightLampLightRef}
        position={[700, 150, -700]}
        rotation={[0, angleToRadians(90), 0]}
        color={'#ffffff'}
        focus={1}
        angle={0.8}
        distance={1000}
        decay={1}
        penumbre={1}
      />

      <pointLight
        ref={leftLampLightRef}
        position={[-500, 150, 410]}
        color={'#ffffff'}
        focus={1}
        angle={0.8}
        distance={500}
        decay={1}
        penumbre={1}
      />

      <SpotLight
        castShadow
        position={[0, 600, 0]}
        rotation={[angleToRadians(20), angleToRadians(30), angleToRadians(30)]}
        color={'#aaccff'}
        penumbra={1}
        distance={5000}
        angle={0.9}
        attenuation={5}
        anglePower={4}
        intensity={2}
      />

      <TextCustom
        message={'Damien Gouron - Portfolio'}
        position={[300, 350, -750]}
        color={'#000000'}
        size={20}
        rotation={[0, 0, 0]}
        bevelThickness={0.5}
      />
      <TextCustom
        message={'Cliquez sur les éléments pour naviguer'}
        position={[200, 310, -750]}
        color={'#000000'}
        size={18}
        rotation={[0, 0, 0]}
        bevelThickness={0.5}
      />
    </>
  );
}

export default Scene;
