import React, { Suspense, useRef} from "react";
import { Canvas} from "@react-three/fiber";
import { NeonNotebook2 }  from '../NeonNotebook2'


function Note3D() {
    // const group = useRef()
  
    return (
      <Canvas  camera={{ fov: 45, near:1, far:180 }}>
        <directionalLight color="blue" position={[-2, 1, -3]} intensity={3.5} />
        <directionalLight color="#346beb" position={[3, 1, -3]} intensity={1} />
        <directionalLight color="hotpink" position={[0, -1, 0]} intensity={0.9} />
        <ambientLight intensity={3} position={[0,0,5]}/>
         <Suspense  fallback={null} > 
         
           <NeonNotebook2 
           position={[5, -4, -15]}
           rotation={[0,-0.7,0]} 
           scale={[2,2,2]}
           />
        </Suspense>
       
      </Canvas>
    );
  }
  
  export default Note3D