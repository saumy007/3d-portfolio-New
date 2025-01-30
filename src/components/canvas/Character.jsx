
import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function Character(props) {
  const group = React.useRef()
  const { scene, animations } = useGLTF('/character.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="metarig002">
          <primitive object={nodes.spine} />
          <group name="Face002" />
          <skinnedMesh name="Ear001" geometry={nodes.Ear001.geometry} material={materials['default']} skeleton={nodes.Ear001.skeleton} />
          <skinnedMesh name="Eyebrow" geometry={nodes.Eyebrow.geometry} material={materials['Material.014']} skeleton={nodes.Eyebrow.skeleton} />
          <skinnedMesh name="EYEs001" geometry={nodes.EYEs001.geometry} material={materials['EyesMaterial.001']} skeleton={nodes.EYEs001.skeleton} />
          <skinnedMesh name="Hand" geometry={nodes.Hand.geometry} material={materials['default']} skeleton={nodes.Hand.skeleton} />
          <skinnedMesh name="Neck" geometry={nodes.Neck.geometry} material={materials['default']} skeleton={nodes.Neck.skeleton} />
          <skinnedMesh name="Pant" geometry={nodes.Pant.geometry} material={materials['default']} skeleton={nodes.Pant.skeleton} />
          <skinnedMesh name="Shoe" geometry={nodes.Shoe.geometry} material={materials['default']} skeleton={nodes.Shoe.skeleton} />
          <skinnedMesh name="Sole" geometry={nodes.Sole.geometry} material={materials['default']} skeleton={nodes.Sole.skeleton} />
          <skinnedMesh name="Plane007" geometry={nodes.Plane007.geometry} material={materials['default']} skeleton={nodes.Plane007.skeleton} morphTargetDictionary={nodes.Plane007.morphTargetDictionary} morphTargetInfluences={nodes.Plane007.morphTargetInfluences} />
          <skinnedMesh name="BODYSHIRT" geometry={nodes.BODYSHIRT.geometry} material={materials['default']} skeleton={nodes.BODYSHIRT.skeleton} morphTargetDictionary={nodes.BODYSHIRT.morphTargetDictionary} morphTargetInfluences={nodes.BODYSHIRT.morphTargetInfluences} />
        </group>
        <mesh name="Cube002" geometry={nodes.Cube002.geometry} material={materials['default']} position={[0, 6.349, 0.19]} scale={0.133} />
        <mesh name="screenlight" geometry={nodes.screenlight.geometry} material={materials['screenlight.001']} position={[-0.053, 9.041, 5.122]} />
        <mesh name="Keyboard" geometry={nodes.Keyboard.geometry} material={materials['Material.024']} position={[0.082, 9.098, 3.55]}>
          <mesh name="KEYS002" geometry={nodes.KEYS002.geometry} material={materials['Material.025']} position={[0, -0.006, 0]} />
          <mesh name="KEYS013" geometry={nodes.KEYS013.geometry} material={materials['Material.025']} position={[0, -0.005, 0]} />
          <mesh name="KEYS014" geometry={nodes.KEYS014.geometry} material={materials['Material.025']} position={[0, -0.104, 0]} />
          <mesh name="KEYS015" geometry={nodes.KEYS015.geometry} material={materials['Material.025']} position={[0, -0.006, 0]} />
          <mesh name="KEYS020" geometry={nodes.KEYS020.geometry} material={materials['Material.025']} position={[0, -0.004, 0]} />
          <mesh name="KEYS021" geometry={nodes.KEYS021.geometry} material={materials['Material.025']} />
          <mesh name="KEYS" geometry={nodes.KEYS.geometry} material={materials['Material.025']} />
          <mesh name="KEYS001" geometry={nodes.KEYS001.geometry} material={materials['Material.025']} />
          <mesh name="KEYS003" geometry={nodes.KEYS003.geometry} material={materials['Material.025']} />
          <mesh name="KEYS004" geometry={nodes.KEYS004.geometry} material={materials['Material.025']} />
          <mesh name="KEYS005" geometry={nodes.KEYS005.geometry} material={materials['Material.025']} />
          <mesh name="KEYS006" geometry={nodes.KEYS006.geometry} material={materials['Material.025']} />
          <mesh name="KEYS007" geometry={nodes.KEYS007.geometry} material={materials['Material.025']} />
          <mesh name="KEYS008" geometry={nodes.KEYS008.geometry} material={materials['Material.025']} />
          <mesh name="KEYS009" geometry={nodes.KEYS009.geometry} material={materials['Material.025']} />
          <mesh name="KEYS010" geometry={nodes.KEYS010.geometry} material={materials['Material.025']} />
          <mesh name="KEYS011" geometry={nodes.KEYS011.geometry} material={materials['Material.025']} />
          <mesh name="KEYS012" geometry={nodes.KEYS012.geometry} material={materials['Material.025']} />
          <mesh name="KEYS016" geometry={nodes.KEYS016.geometry} material={materials['Material.025']} />
          <mesh name="KEYS017" geometry={nodes.KEYS017.geometry} material={materials['Material.025']} />
          <mesh name="KEYS018" geometry={nodes.KEYS018.geometry} material={materials['Material.025']} />
          <mesh name="KEYS019" geometry={nodes.KEYS019.geometry} material={materials['Material.025']} />
          <mesh name="KEYS022" geometry={nodes.KEYS022.geometry} material={materials['Material.025']} />
          <mesh name="KEYS023" geometry={nodes.KEYS023.geometry} material={materials['Material.025']} />
          <mesh name="KEYS024" geometry={nodes.KEYS024.geometry} material={materials['Material.025']} />
          <mesh name="KEYS025" geometry={nodes.KEYS025.geometry} material={materials['Material.025']} />
          <mesh name="KEYS026" geometry={nodes.KEYS026.geometry} material={materials['Material.025']} />
          <mesh name="KEYS027" geometry={nodes.KEYS027.geometry} material={materials['Material.025']} />
          <mesh name="KEYS028" geometry={nodes.KEYS028.geometry} material={materials['Material.025']} />
          <mesh name="KEYS029" geometry={nodes.KEYS029.geometry} material={materials['Material.025']} />
          <mesh name="KEYS030" geometry={nodes.KEYS030.geometry} material={materials['Material.025']} />
          <mesh name="KEYS031" geometry={nodes.KEYS031.geometry} material={materials['Material.025']} />
          <mesh name="KEYS032" geometry={nodes.KEYS032.geometry} material={materials['Material.025']} />
          <mesh name="KEYS033" geometry={nodes.KEYS033.geometry} material={materials['Material.025']} />
          <mesh name="KEYS034" geometry={nodes.KEYS034.geometry} material={materials['Material.025']} />
          <mesh name="KEYS035" geometry={nodes.KEYS035.geometry} material={materials['Material.025']} />
          <mesh name="KEYS036" geometry={nodes.KEYS036.geometry} material={materials['Material.025']} />
          <mesh name="KEYS037" geometry={nodes.KEYS037.geometry} material={materials['Material.025']} />
          <mesh name="KEYS038" geometry={nodes.KEYS038.geometry} material={materials['Material.025']} />
          <mesh name="KEYS039" geometry={nodes.KEYS039.geometry} material={materials['Material.025']} />
        </mesh>
        <mesh name="Plane" geometry={nodes.Plane.geometry} material={nodes.Plane.material} position={[0, 6.349, 0]} scale={1.578} />
        <mesh name="ground" geometry={nodes.ground.geometry} material={materials['ground material.001']} position={[0, 2.753, 2.015]} />
        <mesh name="Plane002" geometry={nodes.Plane002.geometry} material={materials['Material.026']} position={[0, 8.898, 3.306]} scale={[3.458, 1.426, 1.426]} />
        <mesh name="Plane003" geometry={nodes.Plane003.geometry} material={materials['default']} position={[-3.201, 8.914, 3.269]} scale={0.204} />
        <group name="Plane004" position={[-0.063, 9.041, 5.119]}>
          <mesh name="Plane017" geometry={nodes.Plane017.geometry} material={materials['Material.027']} />
          <mesh name="Plane017_1" geometry={nodes.Plane017_1.geometry} material={materials['Material.028']} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/character.glb')
