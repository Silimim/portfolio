import {useGLTF, useScroll} from "@react-three/drei";

import spaceScene from "../assets/3d/sky.glb";
import {useFrame} from "@react-three/fiber";
import {useEffect, useRef, useState} from "react";

const Space = () => {

    const space = useGLTF(spaceScene)

    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRotation(rotation + .001);
        }, 8);
        return () => clearInterval(interval);
    }, [rotation]);

    return (
        <mesh rotation={[0, rotation, 0]}>
            <primitive object={space.scene}></primitive>
        </mesh>
    );
}

export default Space;