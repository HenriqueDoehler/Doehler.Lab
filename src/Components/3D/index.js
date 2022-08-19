import React, { Suspense} from "react";
import { Canvas} from "@react-three/fiber";
import { Float, PresentationControls } from "@react-three/drei";
import './3D-Obj/styles.css'
import Model from '../3D/Ufo'


 function ThreeD({active, setActive}) {
  

  return (
    <Canvas className="canvas" camera={{ fov: 45, far:30 }}>
      <directionalLight color="blue" position={[-2, 2, 0]} intensity={2.5} />
      <directionalLight color="#346beb" position={[2, 0, -4]} intensity={1.5} />
      <directionalLight color="hotpink" position={[0.5, -2, -1]} intensity={0.8} />
      <ambientLight intensity={3} position={[0,0,5]}/>
       <Suspense  fallback={null} > 
       
         <PresentationControls 
       global
       config={{ mass: 20, tension: 300 }}
       snap={{ mass: 4, tension: 900}}
       rotation={[0, 0.3, 0]}
       polar={[-Math.PI / 30, Math.PI / 30]}
       azimuth={[-Math.PI / 0.4, Math.PI / 0.4]}
      >
        <Float 
       speed={1.3} 
       rotationIntensity={3} 
       floatIntensity={30} 
       floatingRange={[0.1,-0.1]} >
         <Model  
       position={[9, 1, -18]} 
       scale={active ? 1.5 : 2}
       onClick={() => setActive(!active)}
       active={active}
       setActive={setActive}
      />
      </Float>
      </PresentationControls>
      </Suspense>
     
    </Canvas>
  );
}

export default ThreeD