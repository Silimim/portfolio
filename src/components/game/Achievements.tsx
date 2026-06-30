import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useRef,
    useState,
    type ReactNode,
} from "react";
import { AnimatePresence, motion } from "framer-motion";

/* ───────────── Achievement definitions ───────────── */
export type AchievementId =
    | "arrival"
    | "roller"
    | "flipper"
    | "explorer"
    | "recruiter"
    | "completionist";

type Achievement = {
    id: AchievementId;
    title: string;
    description: string;
    icon: string;
};

export const ACHIEVEMENTS: Achievement[] = [
    { id: "arrival", title: "Welcome to the Table", description: "You joined the game.", icon: "🪑" },
    { id: "roller", title: "High Roller", description: "Rolled the dice of fate.", icon: "🎲" },
    { id: "flipper", title: "Card Counter", description: "Flipped a project card.", icon: "🃏" },
    { id: "explorer", title: "Explorer", description: "Scrolled through every section.", icon: "🗺️" },
    { id: "recruiter", title: "Player Two", description: "Opened the invitation to play.", icon: "🤝" },
    { id: "completionist", title: "Completionist", description: "Unlocked every achievement!", icon: "🏆" },
];

const STORAGE_KEY = "sb-achievements";
const UNLOCKABLE = ACHIEVEMENTS.filter((a) => a.id !== "completionist").map((a) => a.id);

type Ctx = {
    unlocked: Set<AchievementId>;
    unlock: (id: AchievementId) => void;
    reset: () => void;
    total: number;
};

const AchievementContext = createContext<Ctx | null>(null);

export const useAchievements = () => {
    const ctx = useContext(AchievementContext);
    if (!ctx) throw new Error("useAchievements must be used within AchievementProvider");
    return ctx;
};

function loadStored(): Set<AchievementId> {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return new Set();
        return new Set(JSON.parse(raw) as AchievementId[]);
    } catch {
        return new Set();
    }
}

export function AchievementProvider({ children }: { children: ReactNode }) {
    const [unlocked, setUnlocked] = useState<Set<AchievementId>>(() => loadStored());
    const [toasts, setToasts] = useState<Achievement[]>([]);
    const unlockedRef = useRef(unlocked);
    unlockedRef.current = unlocked;

    const pushToast = useCallback((a: Achievement) => {
        setToasts((t) => [...t, a]);
        window.setTimeout(() => {
            setToasts((t) => t.filter((x) => x.id !== a.id));
        }, 4200);
    }, []);

    const unlock = useCallback(
        (id: AchievementId) => {
            if (unlockedRef.current.has(id)) return;
            const def = ACHIEVEMENTS.find((a) => a.id === id);
            if (!def) return;

            setUnlocked((prev) => {
                const next = new Set(prev);
                next.add(id);
                // completionist auto-unlocks when all others are in
                const haveAll = UNLOCKABLE.every((u) => next.has(u));
                if (haveAll && !next.has("completionist")) {
                    next.add("completionist");
                }
                try {
                    localStorage.setItem(STORAGE_KEY, JSON.stringify([...next]));
                } catch {
                    /* ignore */
                }
                return next;
            });

            pushToast(def);
            // queue the completionist toast just after, if newly earned
            const willHaveAll = UNLOCKABLE.every(
                (u) => u === id || unlockedRef.current.has(u)
            );
            if (willHaveAll && !unlockedRef.current.has("completionist")) {
                const comp = ACHIEVEMENTS.find((a) => a.id === "completionist")!;
                window.setTimeout(() => pushToast(comp), 700);
            }
        },
        [pushToast]
    );

    const reset = useCallback(() => {
        try {
            localStorage.removeItem(STORAGE_KEY);
        } catch {
            /* ignore */
        }
        setUnlocked(new Set());
    }, []);

    // award "arrival" shortly after mount
    useEffect(() => {
        const t = window.setTimeout(() => unlock("arrival"), 1200);
        return () => window.clearTimeout(t);
    }, [unlock]);

    const value = useMemo<Ctx>(
        () => ({ unlocked, unlock, reset, total: UNLOCKABLE.length + 1 }),
        [unlocked, unlock, reset]
    );

    return (
        <AchievementContext.Provider value={value}>
            {children}
            {/* toast stack */}
            <div className="fixed bottom-5 right-5 z-[60] flex flex-col gap-3 pointer-events-none">
                <AnimatePresence>
                    {toasts.map((a) => (
                        <motion.div
                            key={a.id}
                            initial={{ opacity: 0, x: 40, scale: 0.9 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: 40, scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 320, damping: 26 }}
                            className="pointer-events-auto flex items-center gap-3 rounded-xl border-2 border-gold/70 bg-cream px-4 py-3 shadow-cardboard-lg max-w-[300px]"
                        >
                            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-gold/20 text-xl">
                                {a.icon}
                            </span>
                            <div>
                                <p className="font-hand text-lg leading-none text-dice">
                                    Achievement unlocked!
                                </p>
                                <p className="font-display font-bold text-ink leading-tight">
                                    {a.title}
                                </p>
                                <p className="text-xs text-ink-soft">{a.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </AchievementContext.Provider>
    );
}
