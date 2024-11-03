/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { a } from '@react-spring/three'

const Particles = (props) => {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('../assets/3d/particles.glb')
    const { actions } = useAnimations(animations, group)
    return (
        <a.group ref={group} {...props} dispose={null}>
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
                    <group name="4065ffb198994e789f261529ef1d88c5fbx" rotation={[Math.PI / 2, 0, 0]}>
                        <group name="Object_2">
                            <group name="RootNode">
                                <group name="_0" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                                <group name="Dust" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                                    <group name="Object_6">
                                        <primitive object={nodes._rootJoint} />
                                        <skinnedMesh
                                            name="Object_9"
                                            geometry={(nodes.Object_9 as any).geometry}
                                            material={materials.Particle}
                                            skeleton={(nodes.Object_9 as any).skeleton}
                                        />
                                        <group name="Object_8" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                                    </group>
                                </group>
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </a.group>
    )
}

export default Particles;
