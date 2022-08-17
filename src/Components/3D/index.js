import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame} from "@react-three/fiber";
import { Float, PresentationControls } from "@react-three/drei";
import './3D-Obj/styles.css'
import Model from '../3D/Ufo'


  


 function ThreeD({active, setActive}) {
  const group = useRef()

  return (
    <Canvas  camera={{ fov: 45, near:1, far:180 }}>
      <directionalLight color="blue" position={[-2, 1, -3]} intensity={3.5} />
      <directionalLight color="#346beb" position={[3, 1, -3]} intensity={1} />
      <directionalLight color="hotpink" position={[0, -1, 0]} intensity={0.9} />
      <ambientLight intensity={3} position={[0,0,5]}/>
       <Suspense  fallback={null} > 
       
         <PresentationControls 
       global
       config={{ mass: 20, tension: 300 }}
       snap={{ mass: 4, tension: 5500 }}
       rotation={[0, 0.3, 0]}
       polar={[-Math.PI / 3, Math.PI / 3]}
       azimuth={[-Math.PI / 1.4, Math.PI / 2]}
      >
        <Float 
       speed={1} 
       rotationIntensity={2} 
       floatIntensity={1.8} 
       floatingRange={[1.2, 2]} >
         <Model  
       position={[9, 1, -18]} 
       scale={active ? 1.5 : 2}
       onClick={() => setActive(!active)}
       ref={group}/>
      </Float>
      </PresentationControls>
      </Suspense>
     
    </Canvas>
  );
}

export default ThreeD