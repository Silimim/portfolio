import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Meeple from "./Meeple";
import { useAchievements } from "./Achievements";

export type BoardSpace = { id: string; label: string };

/* A vertical "game board" rail down the right edge. Each space is a section;
   a meeple token rides to whichever section is in view. */
const BoardNav = ({ spaces }: { spaces: BoardSpace[] }) => {
    const [active, setActive] = useState(0);
    const { unlock } = useAchievements();
    const visited = useRef<Set<string>>(new Set());

    useEffect(() => {
        const els = spaces
            .map((s) => document.getElementById(s.id))
            .filter((el): el is HTMLElement => !!el);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const idx = spaces.findIndex((s) => s.id === entry.target.id);
                        if (idx !== -1) {
                            setActive(idx);
                            visited.current.add(entry.target.id);
                            if (visited.current.size >= spaces.length) unlock("explorer");
                        }
                    }
                });
            },
            { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
        );

        els.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, [spaces, unlock]);

    const go = (id: string) =>
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

    return (
        <nav
            aria-label="Section navigation"
            className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
        >
            <ul className="relative flex flex-col items-center gap-6">
                {/* connecting track */}
                <span
                    className="absolute left-1/2 top-2 bottom-2 -translate-x-1/2 border-l-2 border-dashed border-ink/25"
                    aria-hidden
                />
                {spaces.map((s, i) => {
                    const isActive = i === active;
                    return (
                        <li key={s.id} className="relative z-10 flex items-center justify-end">
                            <button
                                onClick={() => go(s.id)}
                                className="group flex items-center gap-3"
                                aria-current={isActive ? "true" : undefined}
                            >
                                <span
                                    className={`order-1 whitespace-nowrap rounded-md px-2 py-0.5 font-display text-sm font-semibold transition-all ${
                                        isActive
                                            ? "bg-ink text-cream opacity-100"
                                            : "text-ink-soft opacity-0 group-hover:opacity-100"
                                    }`}
                                >
                                    {s.label}
                                </span>
                                <span className="relative order-2 grid h-7 w-7 place-items-center">
                                    <span
                                        className={`h-3.5 w-3.5 rotate-45 rounded-[3px] border-2 transition-colors ${
                                            isActive
                                                ? "border-dice bg-dice"
                                                : "border-ink/40 bg-cream group-hover:border-dice"
                                        }`}
                                    />
                                    {isActive && (
                                        <motion.span
                                            layoutId="board-token"
                                            className="absolute -right-0.5 -top-5"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        >
                                            <Meeple className="h-6 w-6 drop-shadow-[0_2px_2px_rgba(43,38,32,0.4)]" color="#3E6B8C" />
                                        </motion.span>
                                    )}
                                </span>
                            </button>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default BoardNav;
