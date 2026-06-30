import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Die from "./Die";
import { useAchievements } from "./Achievements";

/* Floating die — click to "roll" and teleport to a random section. */
const SECTIONS = ["components", "rulebook", "campaign", "expansions", "join"];

const DiceNav = () => {
    const [value, setValue] = useState(6);
    const [rolling, setRolling] = useState(false);
    const rollCount = useRef(0);
    const { unlock } = useAchievements();

    const roll = () => {
        if (rolling) return;
        setRolling(true);
        unlock("roller");
        rollCount.current += 1;
        if (rollCount.current >= 7) unlock("gambler");

        // flicker through faces while it tumbles
        let ticks = 0;
        const flick = window.setInterval(() => {
            setValue(1 + Math.floor(Math.random() * 6));
            ticks++;
            if (ticks > 6) window.clearInterval(flick);
        }, 90);

        window.setTimeout(() => {
            const target = SECTIONS[Math.floor(Math.random() * SECTIONS.length)];
            document.getElementById(target)?.scrollIntoView({ behavior: "smooth", block: "start" });
            setRolling(false);
        }, 700);
    };

    return (
        <motion.button
            onClick={roll}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            aria-label="Roll the dice to jump to a random section"
            className="fixed bottom-5 left-5 z-50 grid place-items-center rounded-2xl bg-cream p-1.5 shadow-cardboard-lg border-2 border-ink/15 group"
        >
            <motion.span
                animate={rolling ? { rotate: 360, scale: [1, 1.15, 1] } : { rotate: 0 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="block"
            >
                <Die value={value} className="h-11 w-11" pipColor="#C24B4B" />
            </motion.span>
            <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-ink px-2 py-1 font-hand text-base text-cream opacity-0 transition-opacity group-hover:opacity-100">
                Roll me!
            </span>
        </motion.button>
    );
};

export default DiceNav;
