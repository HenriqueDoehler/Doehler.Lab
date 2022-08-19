import React from 'react'
import { useGLTF } from '@react-three/drei'

export function NeonNotebook2(props) {
  const { nodes, materials } = useGLTF('/NeonNotebook2.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 1.4, -0.4]} rotation={[1.73, 0, Math.PI]} scale={[1.81, 5.37, 1.22]}>
        <mesh geometry={nodes.Plane002.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Plane002_1.geometry} material={materials.Metal} />
        <mesh geometry={nodes.Plane002_2.geometry} material={materials.Black} />
        <mesh geometry={nodes.Plane002_3.geometry} material={materials['Keyboard layout']} />
        <mesh geometry={nodes.Plane002_4.geometry} material={materials['Glossy Black']} />
        <mesh geometry={nodes.Plane002_5.geometry} material={materials.Emission} />
      </group>
    </group>
  )
}

useGLTF.preload('/NeonNotebook2.glb')
