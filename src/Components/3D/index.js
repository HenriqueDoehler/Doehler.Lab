import React, { Suspense } from "react";
import { Canvas} from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import './3D-Obj/styles.css'
import Model from '../3D/Ufo'


  


 function ThreeD() {
  

  return (
    <Canvas >
      <OrbitControls />
      <directionalLight color="blue" position={[0, 1, -0.1]} intensity={0.9} />
      <directionalLight color="hotpink" position={[0, -1, 0.1]} intensity={0.9} />
      <ambientLight intensity={2} />
      <Suspense  fallback={null} > 
         <Model   />
      </Suspense>
     
    </Canvas>
  );
}

export default ThreeD