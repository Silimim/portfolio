import {Canvas} from "@react-three/fiber";
import React, {Suspense, useEffect, useRef, useState} from "react";
import Loader from "../components/Loader.tsx";
import Planet from "../models/Planet.tsx";
import Space from "../models/Space.tsx";
import Airplane from "../models/Airplane.tsx";
import {Euler} from "three";
import LandingInfo from "../components/LandingInfo.tsx";

import lofi from "../assets/music/lofi.mp3";
import {soundoff, soundon} from "../assets/icons";

const Landing = () => {

    const audio = useRef(new Audio(lofi));

    audio.current.volume = 0.05;
    audio.current.loop = true;

    const [isPlayingMusic, setIsPlayingMusic] = useState(false);

    const [isRotating, setIsRotating] = useState(false);

    const [airplaneRotation, setAirplaneRotation] = useState(new Euler(1.5, 2, 0));

    const adjustPlanetForScreenSize = () => {
        let screenScale;
        const screenPosition = [0, -4, -43];
        const rotation = [0.1, 4, 0];

        if (window.innerWidth < 768) {
            screenScale = [4, 4, 4];
        } else {
            screenScale = [5, 5, 5];
        }

        return [screenScale, screenPosition, rotation];
    }

    const adjustAirplaneForScreenSize = () => {
        let screenScale: number[];
        let screenPosition: number[];

        if (window.innerWidth < 768) {
            screenScale = [.015, .015, .015];
            screenPosition = [0, -1, -3];
        } else {
            screenScale = [.15, .15, .15];
            screenPosition = [0, -1, -3];
        }

        return [screenScale, screenPosition];
    }

    const [planetScale, planetPosition, planetRotation] = adjustPlanetForScreenSize();

    const [airplaneScale, airplanePosition] = adjustAirplaneForScreenSize();

    const [currentStage, setCurrentStage] = React.useState<number>(1);

    const handleRotationRadToArray = (rotation: Euler) => {
        return [rotation.x, rotation.y, rotation.z];
    }

    useEffect(() => {
        if (isPlayingMusic) {
            audio.current.play();
        } else {
            audio.current.pause();
        }
    }, [isPlayingMusic]);

    return (
        <section className="w-full h-screen relative bg-black-500">
            <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
                <LandingInfo currentStage={currentStage}/>
            </div>
            <Canvas className={`w-full h-screen bg-transparent`}
                    camera={{near: 0.2, far: 1000}}>
                <Suspense fallback={<Loader/>}>
                    <ambientLight/>
                    <directionalLight position={[-4, 3, 1]} intensity={1}/>
                    <hemisphereLight groundColor={"#fb9f9f"} intensity={1}/>

                    <Space/>
                    <Planet
                        position={planetPosition}
                        scale={planetScale}
                        rotation={planetRotation}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                        setAirplaneRotation={setAirplaneRotation}
                        setCurrentStage={setCurrentStage}
                    />
                    <Airplane
                        isRotating={isRotating}
                        position={airplanePosition}
                        scale={airplaneScale}
                        rotation={handleRotationRadToArray(airplaneRotation)}
                    />
                </Suspense>
            </Canvas>
            <div className={"absolute bottom-2 left-2"}>
                <img src={isPlayingMusic ? soundon : soundoff} alt={"music"}
                     className={"w-10 h-10 cursor-pointer object-contain"}
                     onClick={() => setIsPlayingMusic(!isPlayingMusic)}/>
            </div>
        </section>
    )
}

export default Landing