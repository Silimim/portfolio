import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Chess, type Move } from "chess.js";
import { Vector3, type Group } from "three";

/* ─────────────────────────────────────────────────────────────
   A self-playing 3D chess board. It replays a famous game
   (Morphy's "Opera Game", 1858) move by move, then loops.
   Pieces and board are fully procedural — no external assets.
   ───────────────────────────────────────────────────────────── */

const OPERA_GAME = [
    "e4", "e5", "Nf3", "d6", "d4", "Bg4", "dxe5", "Bxf3", "Qxf3", "dxe5",
    "Bc4", "Nf6", "Qb3", "Qe7", "Nc3", "c6", "Bg5", "b5", "Nxb5", "cxb5",
    "Bxb5+", "Nbd7", "O-O-O", "Rd8", "Rxd7", "Rxd7", "Rd1", "Qe6", "Bxd7+",
    "Nxd7", "Qb8+", "Nxb8", "Rd8#",
];

type PieceType = "p" | "n" | "b" | "r" | "q" | "k";
type Color = "w" | "b";
type Piece = {
    id: string;
    type: PieceType;
    color: Color;
    file: number; // 0..7 (a..h)
    rank: number; // 0..7 (1..8)
    alive: boolean;
};

const LIGHT = "#F3EAD6";
const DARK = "#4A3B2A";
const SQ_LIGHT = "#E9D8B4";
const SQ_DARK = "#B0895E";

const fileOf = (sq: string) => sq.charCodeAt(0) - 97;
const rankOf = (sq: string) => parseInt(sq[1], 10) - 1;
const toXZ = (file: number, rank: number): [number, number] => [file - 3.5, -(rank - 3.5)];

function buildInitial(game: Chess): { pieces: Piece[]; map: Map<string, string> } {
    const board = game.board(); // board[0] = rank 8, board[row][col].square present
    const pieces: Piece[] = [];
    const map = new Map<string, string>();
    board.forEach((row, r) => {
        row.forEach((cell, c) => {
            if (!cell) return;
            const id = cell.square; // initial square is a stable unique id
            pieces.push({
                id,
                type: cell.type as PieceType,
                color: cell.color as Color,
                file: c,
                rank: 7 - r,
                alive: true,
            });
            map.set(cell.square, id);
        });
    });
    return { pieces, map };
}

/* ───────────── Procedural piece meshes ───────────── */
function PieceMeshes({ type, color }: { type: PieceType; color: Color }) {
    const c = color === "w" ? LIGHT : DARK;
    const mat = <meshStandardMaterial color={c} roughness={0.55} metalness={0.05} />;

    // shared foot/base for every piece
    const Base = (
        <mesh position={[0, 0.06, 0]} castShadow>
            <cylinderGeometry args={[0.18, 0.28, 0.12, 24]} />
            {mat}
        </mesh>
    );

    switch (type) {
        case "p":
            return (
                <group>
                    {Base}
                    <mesh position={[0, 0.2, 0]} castShadow>
                        <cylinderGeometry args={[0.09, 0.15, 0.18, 20]} />
                        {mat}
                    </mesh>
                    <mesh position={[0, 0.36, 0]} castShadow>
                        <sphereGeometry args={[0.13, 20, 16]} />
                        {mat}
                    </mesh>
                </group>
            );
        case "r":
            return (
                <group>
                    {Base}
                    <mesh position={[0, 0.3, 0]} castShadow>
                        <cylinderGeometry args={[0.16, 0.18, 0.36, 22]} />
                        {mat}
                    </mesh>
                    <mesh position={[0, 0.52, 0]} castShadow>
                        <cylinderGeometry args={[0.21, 0.19, 0.12, 22]} />
                        {mat}
                    </mesh>
                </group>
            );
        case "b":
            return (
                <group>
                    {Base}
                    <mesh position={[0, 0.34, 0]} castShadow>
                        <cylinderGeometry args={[0.08, 0.17, 0.44, 22]} />
                        {mat}
                    </mesh>
                    <mesh position={[0, 0.6, 0]} castShadow>
                        <sphereGeometry args={[0.11, 20, 16]} />
                        {mat}
                    </mesh>
                    <mesh position={[0, 0.72, 0]} castShadow>
                        <coneGeometry args={[0.045, 0.1, 12]} />
                        {mat}
                    </mesh>
                </group>
            );
        case "n":
            // stylized (cubist) knight — base + angled neck + muzzle
            return (
                <group>
                    {Base}
                    <mesh position={[0, 0.22, 0]} castShadow>
                        <cylinderGeometry args={[0.12, 0.16, 0.2, 20]} />
                        {mat}
                    </mesh>
                    <mesh position={[-0.02, 0.46, 0.02]} rotation={[0.5, 0, 0]} castShadow>
                        <boxGeometry args={[0.16, 0.34, 0.2]} />
                        {mat}
                    </mesh>
                    <mesh position={[0, 0.58, 0.2]} rotation={[0.9, 0, 0]} castShadow>
                        <boxGeometry args={[0.14, 0.22, 0.16]} />
                        {mat}
                    </mesh>
                    {/* ears */}
                    <mesh position={[0.05, 0.66, -0.02]} castShadow>
                        <coneGeometry args={[0.03, 0.1, 8]} />
                        {mat}
                    </mesh>
                    <mesh position={[-0.05, 0.66, -0.02]} castShadow>
                        <coneGeometry args={[0.03, 0.1, 8]} />
                        {mat}
                    </mesh>
                </group>
            );
        case "q":
            return (
                <group>
                    {Base}
                    <mesh position={[0, 0.36, 0]} castShadow>
                        <cylinderGeometry args={[0.1, 0.18, 0.5, 24]} />
                        {mat}
                    </mesh>
                    <mesh position={[0, 0.64, 0]} castShadow>
                        <torusGeometry args={[0.12, 0.035, 12, 24]} />
                        {mat}
                    </mesh>
                    <mesh position={[0, 0.72, 0]} castShadow>
                        <sphereGeometry args={[0.08, 16, 14]} />
                        {mat}
                    </mesh>
                </group>
            );
        case "k":
        default:
            return (
                <group>
                    {Base}
                    <mesh position={[0, 0.37, 0]} castShadow>
                        <cylinderGeometry args={[0.11, 0.18, 0.52, 24]} />
                        {mat}
                    </mesh>
                    <mesh position={[0, 0.66, 0]} castShadow>
                        <cylinderGeometry args={[0.16, 0.13, 0.1, 24]} />
                        {mat}
                    </mesh>
                    {/* crown cross */}
                    <mesh position={[0, 0.82, 0]} castShadow>
                        <boxGeometry args={[0.06, 0.2, 0.06]} />
                        {mat}
                    </mesh>
                    <mesh position={[0, 0.8, 0]} castShadow>
                        <boxGeometry args={[0.16, 0.06, 0.06]} />
                        {mat}
                    </mesh>
                </group>
            );
    }
}

/* one animated piece: lerps toward its target square with a little hop */
function PieceNode({ piece }: { piece: Piece }) {
    const ref = useRef<Group>(null);
    const [tx, tz] = toXZ(piece.file, piece.rank);
    const target = useMemo(() => new Vector3(tx, 0, tz), [tx, tz]);
    const scale = useRef(0);
    const started = useRef(false);

    useFrame(() => {
        const g = ref.current;
        if (!g) return;
        if (!started.current) {
            g.position.set(target.x, 0, target.z);
            started.current = true;
        }
        // horizontal glide
        g.position.x += (target.x - g.position.x) * 0.14;
        g.position.z += (target.z - g.position.z) * 0.14;
        // hop: lift proportional to remaining travel
        const d = Math.hypot(target.x - g.position.x, target.z - g.position.z);
        g.position.y = Math.min(0.45, d * 0.9);
        // scale in on spawn, scale out on capture
        const targetScale = piece.alive ? 1 : 0;
        scale.current += (targetScale - scale.current) * 0.18;
        g.scale.setScalar(scale.current);
    });

    return (
        <group ref={ref}>
            <PieceMeshes type={piece.type} color={piece.color} />
        </group>
    );
}

/* the checkered board + wooden frame */
function Board() {
    const squares = [];
    for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
            const [x, z] = toXZ(c, r);
            squares.push(
                <mesh key={`${r}-${c}`} position={[x, -0.06, z]} receiveShadow>
                    <boxGeometry args={[1, 0.12, 1]} />
                    <meshStandardMaterial
                        color={(c + r) % 2 === 0 ? SQ_DARK : SQ_LIGHT}
                        roughness={0.7}
                    />
                </mesh>
            );
        }
    }
    return (
        <group>
            {/* frame / table */}
            <mesh position={[0, -0.18, 0]} receiveShadow>
                <boxGeometry args={[9, 0.2, 9]} />
                <meshStandardMaterial color="#5A4632" roughness={0.8} />
            </mesh>
            {squares}
        </group>
    );
}

function Scene() {
    const game = useRef(new Chess());
    const moveIdx = useRef(0);
    const mapRef = useRef(new Map<string, string>());
    const group = useRef<Group>(null);

    const init = useMemo(() => buildInitial(game.current), []);
    const [pieces, setPieces] = useState<Piece[]>(init.pieces);
    useMemo(() => {
        mapRef.current = init.map;
    }, [init]);

    // gentle sway + pointer reactivity
    useFrame((state) => {
        if (!group.current) return;
        const t = state.clock.elapsedTime;
        group.current.rotation.y = Math.sin(t * 0.12) * 0.18 + state.pointer.x * 0.25;
        group.current.rotation.x = 0.02 + state.pointer.y * -0.08;
    });

    useEffect(() => {
        let timer: number;

        const applyMove = (mv: Move) => {
            setPieces((prev) => {
                const next = prev.map((p) => ({ ...p }));
                const byId: Record<string, Piece> = {};
                next.forEach((p) => (byId[p.id] = p));
                const map = mapRef.current;

                const id = map.get(mv.from);
                if (!id) return prev;

                // captures
                if (mv.flags.includes("e")) {
                    // en passant: captured pawn sits behind the destination
                    const capSq = mv.to[0] + mv.from[1];
                    const cid = map.get(capSq);
                    if (cid && byId[cid]) {
                        byId[cid].alive = false;
                        map.delete(capSq);
                    }
                } else if (mv.captured) {
                    const cid = map.get(mv.to);
                    if (cid && byId[cid]) byId[cid].alive = false;
                }

                // move the piece
                map.delete(mv.from);
                map.set(mv.to, id);
                byId[id].file = fileOf(mv.to);
                byId[id].rank = rankOf(mv.to);
                if (mv.promotion) byId[id].type = mv.promotion as PieceType;

                // castling — move the rook too
                if (mv.flags.includes("k") || mv.flags.includes("q")) {
                    const homeRank = mv.color === "w" ? "1" : "8";
                    const kingSide = mv.flags.includes("k");
                    const rFrom = (kingSide ? "h" : "a") + homeRank;
                    const rTo = (kingSide ? "f" : "d") + homeRank;
                    const rid = map.get(rFrom);
                    if (rid && byId[rid]) {
                        map.delete(rFrom);
                        map.set(rTo, rid);
                        byId[rid].file = fileOf(rTo);
                        byId[rid].rank = rankOf(rTo);
                    }
                }

                return Object.values(byId);
            });
        };

        const reset = () => {
            game.current = new Chess();
            moveIdx.current = 0;
            const fresh = buildInitial(game.current);
            mapRef.current = fresh.map;
            setPieces(fresh.pieces);
        };

        const loop = () => {
            if (moveIdx.current >= OPERA_GAME.length) {
                reset();
                timer = window.setTimeout(loop, 3200);
                return;
            }
            const mv = game.current.move(OPERA_GAME[moveIdx.current]);
            moveIdx.current += 1;
            if (mv) applyMove(mv);
            timer = window.setTimeout(loop, 2100);
        };

        timer = window.setTimeout(loop, 1600);
        return () => window.clearTimeout(timer);
    }, []);

    return (
        <group ref={group} position={[0, -0.3, 0]}>
            <Board />
            {pieces.map((p) => (
                <PieceNode key={p.id} piece={p} />
            ))}
        </group>
    );
}

const ChessGame = () => (
    <Canvas
        camera={{ position: [0, 6.6, 7.4], fov: 82 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
    >
        <ambientLight intensity={0.7} />
        <directionalLight position={[4, 9, 5]} intensity={1.4} />
        <directionalLight position={[-5, 4, -4]} intensity={0.35} color="#F4ECD8" />
        <Scene />
    </Canvas>
);

export default ChessGame;
