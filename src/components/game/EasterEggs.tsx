import { useEffect } from "react";
import { useAchievements } from "./Achievements";

const KONAMI = [
    "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
    "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
    "b", "a",
];

/* Invisible component that listens for secret interactions and unlocks
   the hidden achievements. */
const EasterEggs = () => {
    const { unlock } = useAchievements();

    useEffect(() => {
        // 🌙 night owl — visiting between midnight and 5am
        const hour = new Date().getHours();
        let owlTimer: number | undefined;
        if (hour >= 0 && hour < 5) {
            owlTimer = window.setTimeout(() => unlock("nightowl"), 4000);
        }

        // 🕹️ konami code
        let pos = 0;
        const onKey = (e: KeyboardEvent) => {
            const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
            if (key === KONAMI[pos]) {
                pos++;
                if (pos === KONAMI.length) {
                    unlock("konami");
                    document.body.classList.add("konami-mode");
                    window.setTimeout(() => document.body.classList.remove("konami-mode"), 1500);
                    pos = 0;
                }
            } else {
                // allow restart if the wrong key is actually the first key
                pos = key === KONAMI[0] ? 1 : 0;
            }
        };
        window.addEventListener("keydown", onKey);

        // 😴 idle for 45s
        let idleTimer: number | undefined;
        const resetIdle = () => {
            if (idleTimer) window.clearTimeout(idleTimer);
            idleTimer = window.setTimeout(() => unlock("idle"), 45000);
        };
        const idleEvents: (keyof WindowEventMap)[] = ["mousemove", "keydown", "scroll", "touchstart"];
        idleEvents.forEach((ev) => window.addEventListener(ev, resetIdle, { passive: true }));
        resetIdle();

        return () => {
            if (owlTimer) window.clearTimeout(owlTimer);
            if (idleTimer) window.clearTimeout(idleTimer);
            window.removeEventListener("keydown", onKey);
            idleEvents.forEach((ev) => window.removeEventListener(ev, resetIdle));
        };
    }, [unlock]);

    return null;
};

export default EasterEggs;
