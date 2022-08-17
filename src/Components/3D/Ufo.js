import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'


export default function Model(props) {

  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/ufo.glb')
  const { actions } = useAnimations(animations, group)
React.useEffect(() => {
  actions.Animation.play()
}, [actions])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="UFO_Empty">
          <mesh name="Ufo_Body_Up" geometry={nodes.Ufo_Body_Up.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, 0]} />
          <mesh name="Ufo_Body_Up001" geometry={nodes.Ufo_Body_Up001.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, 1.26]} />
          <mesh name="Ufo_Body_Up002" geometry={nodes.Ufo_Body_Up002.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, 2.51]} />
          <mesh name="Ufo_Body_Up003" geometry={nodes.Ufo_Body_Up003.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, -2.51]} />
          <mesh name="Ufo_Body_Up004" geometry={nodes.Ufo_Body_Up004.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, -1.26]} />
          <mesh name="Ufo_Ring_1" geometry={nodes.Ufo_Ring_1.geometry} material={materials.UFO} />
          <mesh name="Ufo_Ring_6" geometry={nodes.Ufo_Ring_6.geometry} material={materials.UFO} />
          <mesh name="Ufo_Ring_5" geometry={nodes.Ufo_Ring_5.geometry} material={materials.UFO} />
          <mesh name="Ufo_Large_1" geometry={nodes.Ufo_Large_1.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, 0]} />
          <mesh name="Ufo_Large_1001" geometry={nodes.Ufo_Large_1001.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, 1.26]} />
          <mesh name="Ufo_Large_1002" geometry={nodes.Ufo_Large_1002.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, 2.51]} />
          <mesh name="Ufo_Large_1003" geometry={nodes.Ufo_Large_1003.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, -2.51]} />
          <mesh name="Ufo_Large_1004" geometry={nodes.Ufo_Large_1004.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, -1.26]} />
          <mesh name="Ufo_Gun_1" geometry={nodes.Ufo_Gun_1.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, 0]} />
          <mesh name="Ufo_Gun_1001" geometry={nodes.Ufo_Gun_1001.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, 1.26]} />
          <mesh name="Ufo_Gun_1002" geometry={nodes.Ufo_Gun_1002.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, 2.51]} />
          <mesh name="Ufo_Gun_1003" geometry={nodes.Ufo_Gun_1003.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, -2.51]} />
          <mesh name="Ufo_Gun_1004" geometry={nodes.Ufo_Gun_1004.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, -1.26]} />
          <mesh name="Ufo_Gun_2" geometry={nodes.Ufo_Gun_2.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, 0]} />
          <mesh name="Ufo_Gun_2001" geometry={nodes.Ufo_Gun_2001.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, 1.26]} />
          <mesh name="Ufo_Gun_2002" geometry={nodes.Ufo_Gun_2002.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, 2.51]} />
          <mesh name="Ufo_Gun_2003" geometry={nodes.Ufo_Gun_2003.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, -2.51]} />
          <mesh name="Ufo_Gun_2004" geometry={nodes.Ufo_Gun_2004.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, -1.26]} />
          <mesh name="Ufo_Gun_3000" geometry={nodes.Ufo_Gun_3000.geometry} material={materials.UFO} position={[-0.48, 0.54, -1.43]} rotation={[Math.PI / 2, 0, 1.26]} />
          <mesh name="Ufo_Gun_3001" geometry={nodes.Ufo_Gun_3001.geometry} material={materials.UFO} position={[1.21, 0.54, -0.89]} rotation={[Math.PI / 2, 0, 2.51]} />
          <mesh name="Ufo_Gun_3002" geometry={nodes.Ufo_Gun_3002.geometry} material={materials.UFO} position={[-0.45, 0.54, 1.43]} rotation={[Math.PI / 2, 0, -1.26]} />
          <mesh name="Ufo_Gun_3003" geometry={nodes.Ufo_Gun_3003.geometry} material={materials.UFO} position={[-1.5, 0.54, 0.01]} rotation={[Math.PI / 2, 0, 0]} />
          <mesh name="Ufo_Gun_3004" geometry={nodes.Ufo_Gun_3004.geometry} material={materials.UFO} position={[1.22, 0.54, 0.87]} rotation={[Math.PI / 2, 0, -2.51]} />
          <mesh name="Ufo_Large_2" geometry={nodes.Ufo_Large_2.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, 0]} />
          <mesh name="Ufo_Large_2001" geometry={nodes.Ufo_Large_2001.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, 1.26]} />
          <mesh name="Ufo_Large_2002" geometry={nodes.Ufo_Large_2002.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, 2.51]} />
          <mesh name="Ufo_Large_2003" geometry={nodes.Ufo_Large_2003.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, -2.51]} />
          <mesh name="Ufo_Large_2004" geometry={nodes.Ufo_Large_2004.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, -1.26]} />
          <mesh name="Ufo_Main_Body" geometry={nodes.Ufo_Main_Body.geometry} material={materials.UFO} />
          <mesh name="Ufo_Kabel" geometry={nodes.Ufo_Kabel.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, 0]} />
          <mesh name="Ufo_Kabel001" geometry={nodes.Ufo_Kabel001.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, 1.26]} />
          <mesh name="Ufo_Kabel002" geometry={nodes.Ufo_Kabel002.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, 2.51]} />
          <mesh name="Ufo_Kabel003" geometry={nodes.Ufo_Kabel003.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, -2.51]} />
          <mesh name="Ufo_Kabel004" geometry={nodes.Ufo_Kabel004.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, -1.26]} />
          <mesh name="Ufo_Sensoren" geometry={nodes.Ufo_Sensoren.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, 0]} />
          <mesh name="Ufo_Sensoren001" geometry={nodes.Ufo_Sensoren001.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, 1.26]} />
          <mesh name="Ufo_Sensoren002" geometry={nodes.Ufo_Sensoren002.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, 2.51]} />
          <mesh name="Ufo_Sensoren003" geometry={nodes.Ufo_Sensoren003.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, -2.51]} />
          <mesh name="Ufo_Sensoren004" geometry={nodes.Ufo_Sensoren004.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, -1.26]} />
          <mesh name="Ufo_Ufo_Engine_2" geometry={nodes.Ufo_Ufo_Engine_2.geometry} material={materials.UFO} position={[0, -0.78, 0]} rotation={[0, -0.03, 0]} />
          <mesh name="Ufo_Ufo_Engine_2001" geometry={nodes.Ufo_Ufo_Engine_2001.geometry} material={materials['Material.002']} position={[0, -0.78, 0]} rotation={[0, -0.03, 0]} />
          <mesh name="Ufo_Engine_1" geometry={nodes.Ufo_Engine_1.geometry} material={materials.UFO} position={[0, -0.56, 0]} />
          <mesh name="Circle" geometry={nodes.Circle.geometry} material={materials.UFO} position={[0, -0.79, 0]} />
          <mesh name="Ufo_Body_Down" geometry={nodes.Ufo_Body_Down.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, 0]} />
          <mesh name="Ufo_Body_Down001" geometry={nodes.Ufo_Body_Down001.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, 1.26]} />
          <mesh name="Ufo_Body_Down002" geometry={nodes.Ufo_Body_Down002.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, 2.51]} />
          <mesh name="Ufo_Body_Down003" geometry={nodes.Ufo_Body_Down003.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, -2.51]} />
          <mesh name="Ufo_Body_Down004" geometry={nodes.Ufo_Body_Down004.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, -1.26]} />
          <mesh name="Ufo_Mid_1" geometry={nodes.Ufo_Mid_1.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, 0]} />
          <mesh name="Ufo_Mid_1001" geometry={nodes.Ufo_Mid_1001.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, 1.26]} />
          <mesh name="Ufo_Mid_1002" geometry={nodes.Ufo_Mid_1002.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, 2.51]} />
          <mesh name="Ufo_Mid_1003" geometry={nodes.Ufo_Mid_1003.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, -2.51]} />
          <mesh name="Ufo_Mid_1004" geometry={nodes.Ufo_Mid_1004.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, -1.26]} />
          <mesh name="Ufo_Emi_Red" geometry={nodes.Ufo_Emi_Red.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, 0]} />
          <mesh name="Ufo_Emi_Red001" geometry={nodes.Ufo_Emi_Red001.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, 1.26]} />
          <mesh name="Ufo_Emi_Red002" geometry={nodes.Ufo_Emi_Red002.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, 2.51]} />
          <mesh name="Ufo_Emi_Red003" geometry={nodes.Ufo_Emi_Red003.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, -2.51]} />
          <mesh name="Ufo_Emi_Red004" geometry={nodes.Ufo_Emi_Red004.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, -1.26]} />
          <mesh name="Ufo_Ring_2" geometry={nodes.Ufo_Ring_2.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, 0]} />
          <mesh name="Ufo_Ring_2001" geometry={nodes.Ufo_Ring_2001.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, 1.26]} />
          <mesh name="Ufo_Ring_2002" geometry={nodes.Ufo_Ring_2002.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, 2.51]} />
          <mesh name="Ufo_Ring_2003" geometry={nodes.Ufo_Ring_2003.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, -2.51]} />
          <mesh name="Ufo_Ring_2004" geometry={nodes.Ufo_Ring_2004.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, -1.26]} />
          <mesh name="Ufo_Emi_Blue" geometry={nodes.Ufo_Emi_Blue.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, 0]} />
          <mesh name="Ufo_Emi_Blue001" geometry={nodes.Ufo_Emi_Blue001.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, 1.26]} />
          <mesh name="Ufo_Emi_Blue002" geometry={nodes.Ufo_Emi_Blue002.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, 2.51]} />
          <mesh name="Ufo_Emi_Blue003" geometry={nodes.Ufo_Emi_Blue003.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, -2.51]} />
          <mesh name="Ufo_Emi_Blue004" geometry={nodes.Ufo_Emi_Blue004.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, -1.26]} />
          <mesh name="Ufo_Ring_3" geometry={nodes.Ufo_Ring_3.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, 0]} />
          <mesh name="Ufo_Ring_3001" geometry={nodes.Ufo_Ring_3001.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, 1.26]} />
          <mesh name="Ufo_Ring_3002" geometry={nodes.Ufo_Ring_3002.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, 2.51]} />
          <mesh name="Ufo_Ring_3003" geometry={nodes.Ufo_Ring_3003.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, -2.51]} />
          <mesh name="Ufo_Ring_3004" geometry={nodes.Ufo_Ring_3004.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, -1.26]} />
          <mesh name="Ufo_Ring_4" geometry={nodes.Ufo_Ring_4.geometry} material={materials.UFO} />
          <mesh name="Ufo_Small_3" geometry={nodes.Ufo_Small_3.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, 0]} />
          <mesh name="Ufo_Small_3001" geometry={nodes.Ufo_Small_3001.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, 1.26]} />
          <mesh name="Ufo_Small_3002" geometry={nodes.Ufo_Small_3002.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, 2.51]} />
          <mesh name="Ufo_Small_3003" geometry={nodes.Ufo_Small_3003.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, -2.51]} />
          <mesh name="Ufo_Small_3004" geometry={nodes.Ufo_Small_3004.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, -1.26]} />
          <mesh name="Ufo_Small_2" geometry={nodes.Ufo_Small_2.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, 0]} />
          <mesh name="Ufo_Small_2001" geometry={nodes.Ufo_Small_2001.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, 1.26]} />
          <mesh name="Ufo_Small_2002" geometry={nodes.Ufo_Small_2002.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, 2.51]} />
          <mesh name="Ufo_Small_2003" geometry={nodes.Ufo_Small_2003.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, -2.51]} />
          <mesh name="Ufo_Small_2004" geometry={nodes.Ufo_Small_2004.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, -1.26]} />
          <mesh name="Ufo_Small_4" geometry={nodes.Ufo_Small_4.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, 0]} />
          <mesh name="Ufo_Small_4001" geometry={nodes.Ufo_Small_4001.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, 1.26]} />
          <mesh name="Ufo_Small_4002" geometry={nodes.Ufo_Small_4002.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, 2.51]} />
          <mesh name="Ufo_Small_4003" geometry={nodes.Ufo_Small_4003.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, -2.51]} />
          <mesh name="Ufo_Small_4004" geometry={nodes.Ufo_Small_4004.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, -1.26]} />
          <mesh name="Ufo_Small_5" geometry={nodes.Ufo_Small_5.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, 0]} />
          <mesh name="Ufo_Small_5001" geometry={nodes.Ufo_Small_5001.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, 1.26]} />
          <mesh name="Ufo_Small_5002" geometry={nodes.Ufo_Small_5002.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, 2.51]} />
          <mesh name="Ufo_Small_5003" geometry={nodes.Ufo_Small_5003.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, -2.51]} />
          <mesh name="Ufo_Small_5004" geometry={nodes.Ufo_Small_5004.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, -1.26]} />
          <mesh name="Ufo_Small_1" geometry={nodes.Ufo_Small_1.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, 0]} />
          <mesh name="Ufo_Small_1001" geometry={nodes.Ufo_Small_1001.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, 1.26]} />
          <mesh name="Ufo_Small_1002" geometry={nodes.Ufo_Small_1002.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, 2.51]} />
          <mesh name="Ufo_Small_1003" geometry={nodes.Ufo_Small_1003.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, -2.51]} />
          <mesh name="Ufo_Small_1004" geometry={nodes.Ufo_Small_1004.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, -1.26]} />
          <mesh name="Ufo_Small_6" geometry={nodes.Ufo_Small_6.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, 0]} />
          <mesh name="Ufo_Small_6001" geometry={nodes.Ufo_Small_6001.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, 1.26]} />
          <mesh name="Ufo_Small_6002" geometry={nodes.Ufo_Small_6002.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, 2.51]} />
          <mesh name="Ufo_Small_6003" geometry={nodes.Ufo_Small_6003.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, -2.51]} />
          <mesh name="Ufo_Small_6004" geometry={nodes.Ufo_Small_6004.geometry} material={materials.UFO} rotation={[Math.PI / 2, 0, -1.26]} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/ufo.glb')
