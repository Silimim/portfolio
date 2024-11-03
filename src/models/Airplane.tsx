import {useAnimations, useGLTF} from "@react-three/drei";
// @ts-ignore
import airplaneScene from '../assets/3d/aereo2.glb';
import {useEffect, useRef} from "react";

// @ts-ignore
const Airplane = ({isRotating, ...props}) => {
    const ref = useRef();
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


