import { useEffect, useRef, useState } from "react";
import Meeple from "./Meeple";

/* A meeple token that chases the cursor with a little spring lag.
   Disabled on touch / coarse-pointer devices and when reduced-motion is set. */
const MeepleCursor = () => {
    const [enabled, setEnabled] = useState(false);
    const dotRef = useRef<HTMLDivElement>(null);
    const target = useRef({ x: -100, y: -100 });
    const pos = useRef({ x: -100, y: -100 });
    const raf = useRef<number>();

    useEffect(() => {
        const fine = window.matchMedia("(pointer: fine)").matches;
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (!fine || reduced) return;
        setEnabled(true);

        const onMove = (e: MouseEvent) => {
            target.current = { x: e.clientX, y: e.clientY };
        };
        window.addEventListener("mousemove", onMove);

        const tick = () => {
            pos.current.x += (target.current.x - pos.current.x) * 0.16;
            pos.current.y += (target.current.y - pos.current.y) * 0.16;
            const dx = target.current.x - pos.current.x;
            const tilt = Math.max(-22, Math.min(22, dx * 0.9));
            if (dotRef.current) {
                dotRef.current.style.transform =
                    `translate3d(${pos.current.x - 14}px, ${pos.current.y - 6}px, 0) rotate(${tilt}deg)`;
            }
            raf.current = requestAnimationFrame(tick);
        };
        raf.current = requestAnimationFrame(tick);

        return () => {
            window.removeEventListener("mousemove", onMove);
            if (raf.current) cancelAnimationFrame(raf.current);
        };
    }, []);

    if (!enabled) return null;

    return (
        <div
            ref={dotRef}
            className="pointer-events-none fixed left-0 top-0 z-[55] will-change-transform"
            aria-hidden
        >
            <Meeple className="h-7 w-7 drop-shadow-[0_3px_3px_rgba(43,38,32,0.35)]" color="#C24B4B" />
        </div>
    );
};

export default MeepleCursor;
