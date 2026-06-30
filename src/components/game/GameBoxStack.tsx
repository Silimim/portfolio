import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, RoundedBox } from "@react-three/drei";
import type { Group, Mesh } from "three";

/* A single board-game box: a coloured base with a slightly lighter lid rim. */
function GameBox({
    color,
    lid,
    y,
    rotation,
    scale = 1,
}: {
    color: string;
    lid: string;
    y: number;
    rotation: number;
    scale?: number;
}) {
    return (
        <group position={[0, y, 0]} rotation={[0, rotation, 0]} scale={scale}>
            {/* box body */}
            <RoundedBox args={[2.2, 0.5, 2.2]} radius={0.06} smoothness={4} castShadow receiveShadow>
                <meshStandardMaterial color={color} roughness={0.85} metalness={0.05} />
            </RoundedBox>
            {/* lid rim on top */}
            <RoundedBox args={[2.26, 0.16, 2.26]} radius={0.05} smoothness={4} position={[0, 0.3, 0]}>
                <meshStandardMaterial color={lid} roughness={0.7} metalness={0.05} />
            </RoundedBox>
            {/* printed label panel on the lid */}
            <mesh position={[0, 0.385, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[1.5, 1.5]} />
                <meshStandardMaterial color="#FBF6E9" roughness={0.95} />
            </mesh>
            {/* a little accent stripe */}
            <mesh position={[0, 0.388, -0.55]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[1.5, 0.22]} />
                <meshStandardMaterial color={color} roughness={0.9} />
            </mesh>
        </group>
    );
}

function Stack() {
    const group = useRef<Group>(null);
    const die = useRef<Mesh>(null);

    useFrame((state, delta) => {
        if (group.current) {
            // gentle idle spin + tilt toward pointer
            group.current.rotation.y += delta * 0.18;
            group.current.rotation.x +=
                (state.pointer.y * 0.25 - group.current.rotation.x) * 0.05;
        }
        if (die.current) {
            die.current.rotation.x += delta * 0.6;
            die.current.rotation.y += delta * 0.8;
        }
    });

    return (
        <group ref={group} position={[0, -0.2, 0]}>
            <Float speed={1.4} rotationIntensity={0.15} floatIntensity={0.5}>
                <GameBox color="#3F6B3E" lid="#5C8A5A" y={-0.55} rotation={0.15} scale={1.05} />
                <GameBox color="#3E6B8C" lid="#5a86a6" y={0.1} rotation={-0.25} scale={0.92} />
                <GameBox color="#C24B4B" lid="#d06b6b" y={0.7} rotation={0.35} scale={0.8} />
                {/* a floating die on top of the stack */}
                <mesh ref={die} position={[0.1, 1.25, 0.1]}>
                    <boxGeometry args={[0.45, 0.45, 0.45]} />
                    <meshStandardMaterial color="#C9A84C" roughness={0.6} metalness={0.1} />
                </mesh>
            </Float>
        </group>
    );
}

const GameBoxStack = () => (
    <Canvas
        camera={{ position: [3.4, 2.6, 4.2], fov: 42 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
    >
        <ambientLight intensity={0.75} />
        <directionalLight position={[5, 6, 4]} intensity={1.5} castShadow />
        <directionalLight position={[-4, 2, -3]} intensity={0.4} color="#F4ECD8" />
        <Stack />
    </Canvas>
);

export default GameBoxStack;
