import { useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { player, rulebook } from "../constants/constants";
import SectionHeading from "./SectionHeading";
import Meeple from "../components/game/Meeple";
import { useAchievements } from "../components/game/Achievements";

const Rule = ({
    label,
    color,
    children,
}: {
    label: string;
    color: string;
    children: ReactNode;
}) => (
    <div className="relative pl-6">
        <span
            className="absolute left-0 top-1.5 h-3 w-3 rotate-45 rounded-[2px]"
            style={{ background: color }}
        />
        <h4 className="font-display text-lg font-bold uppercase tracking-wide text-ink">
            {label}
        </h4>
        <div className="mt-1 text-ink-soft">{children}</div>
    </div>
);

const Rulebook = () => {
    const { unlock } = useAchievements();
    const [pokes, setPokes] = useState(0);
    const pokeRef = useRef(0);
    const [wiggle, setWiggle] = useState(false);

    const pokeMeeple = () => {
        pokeRef.current += 1;
        setPokes(pokeRef.current);
        setWiggle(true);
        window.setTimeout(() => setWiggle(false), 350);
        if (pokeRef.current >= 5) unlock("meeplewhisperer");
    };

    return (
    <section id="rulebook" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
        <SectionHeading eyebrow="how to play" title="The Rulebook" />

        <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
            {/* the rules page */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
                className="relative overflow-hidden rounded-2xl border border-ink/10 bg-cream p-8 shadow-cardboard-lg"
            >
                {/* folded corner */}
                <span className="absolute right-0 top-0 h-12 w-12 bg-parchment [clip-path:polygon(100%_0,0_0,100%_100%)] shadow-[-2px_2px_4px_rgba(0,0,0,0.08)]" />

                <p className="mb-6 font-hand text-2xl text-dice">Player manual — {player.name}</p>

                <div className="flex flex-col gap-6">
                    <Rule label="Objective" color="#C24B4B">
                        <p>{rulebook.objective}</p>
                    </Rule>

                    <Rule label="Setup" color="#3E6B8C">
                        <ul className="list-disc space-y-1 pl-5">
                            {rulebook.setup.map((s) => (
                                <li key={s}>{s}</li>
                            ))}
                        </ul>
                    </Rule>

                    <Rule label="On your turn" color="#5C8A5A">
                        <ul className="list-disc space-y-1 pl-5">
                            {rulebook.howToPlay.map((s) => (
                                <li key={s}>{s}</li>
                            ))}
                        </ul>
                    </Rule>
                </div>
            </motion.div>

            {/* the "character card" */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex flex-col items-center justify-center rounded-2xl border-2 border-gold/50 bg-gradient-to-b from-cream to-parchment p-8 text-center shadow-cardboard-lg"
            >
                <button
                    onClick={pokeMeeple}
                    aria-label="Poke the meeple"
                    className="grid h-28 w-28 place-items-center rounded-full bg-dice/10 ring-2 ring-dice/30 transition-transform hover:scale-105 active:scale-95"
                >
                    <Meeple
                        className={`h-16 w-16 ${wiggle ? "animate-dice-tumble" : ""}`}
                        color="#C24B4B"
                        title="Simone meeple"
                    />
                </button>
                <h3 className="mt-4 font-display text-2xl font-black text-ink">{player.name}</h3>
                <p className="font-hand text-xl text-board">the developer class</p>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">{player.blurb}</p>

                {/* gamertag easter egg */}
                <button
                    onClick={() => unlock("gamertag")}
                    className="group mt-5 inline-flex items-center gap-2 rounded-full border border-board/30 bg-board/10 px-4 py-1.5 transition-colors hover:bg-board/20"
                    title="Add me at game night"
                >
                    <span className="text-base">🎮</span>
                    <span className="font-hand text-lg text-board-dark">
                        at the table I&apos;m{" "}
                        <span className="font-bold underline decoration-dashed underline-offset-2">
                            @{player.gamertag}
                        </span>
                    </span>
                </button>
                {pokes > 0 && pokes < 5 && (
                    <p className="mt-2 font-hand text-base text-ink-soft">
                        {pokes === 1 ? "hey, that tickles" : `${pokes} pokes… keep going?`}
                    </p>
                )}
            </motion.div>
        </div>
    </section>
    );
};

export default Rulebook;
