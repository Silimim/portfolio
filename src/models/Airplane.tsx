import {useAnimations, useGLTF} from "@react-three/drei";
// @ts-ignore
import airplaneScene from '../assets/3d/aereo2.glb';
import {useEffect, useRef} from "react";
import {BufferGeometry, Mesh, NormalBufferAttributes} from "three";

const Airplane = ({isRotating, ...props}: {isRotating: boolean, props: any}) => {
    const ref = useRef<Mesh<BufferGeometry<NormalBufferAttributes>>>(null);
    const {scene, animations} = useGLTF(airplaneScene);
    const {actions} = useAnimations(animations, ref);

    useEffect(() => {
        actions.Animation?.play();
    }, [actions]);

    return (
        <mesh ref={ref} {...props}>
            <primitive object={scene}></primitive>
        </mesh>
    )
}

export default Airplane;


