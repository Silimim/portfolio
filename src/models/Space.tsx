import {useGLTF} from "@react-three/drei";

// @ts-ignore
import spaceScene from "../assets/3d/sky.glb";
import {useEffect, useState} from "react";

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