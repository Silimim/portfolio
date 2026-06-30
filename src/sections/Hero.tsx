import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { player } from "../constants/constants";

const GameBoxStack = lazy(() => import("../components/game/GameBoxStack"));

const MetaChip = ({ label, value }: { label: string; value: string }) => (
    <div className="flex flex-col items-center rounded-lg border border-ink/15 bg-cream px-4 py-2 shadow-cardboard">
        <span className="font-display text-lg font-black leading-none text-ink">{value}</span>
        <span className="text-[0.7rem] uppercase tracking-wider text-ink-soft">{label}</span>
    </div>
);

const Hero = () => {
    const scrollTo = (id: string) =>
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

    return (
        <section
            id="top"
            className="relative mx-auto grid min-h-[100svh] max-w-6xl items-center gap-8 px-6 pt-28 pb-16 lg:grid-cols-2 lg:gap-4"
        >
            {/* left: the box-cover copy */}
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative z-10"
            >
                <p className="section-eyebrow">a tabletop portfolio · {player.players} · ages {player.ages}</p>

                <h1 className="display-text mt-1 text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
                    {player.name}
                </h1>

                <p className="mt-3 inline-block rounded-md bg-ink px-3 py-1 font-display text-lg font-semibold text-cream">
                    {player.title}
                </p>

                <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-soft">
                    {player.tagline}
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                    <MetaChip label="players" value="1" />
                    <MetaChip label="based in" value={player.location} />
                    <MetaChip label="play time" value="∞" />
                    <MetaChip label="mode" value="Co-op" />
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                    <button onClick={() => scrollTo("expansions")} className="dice-btn">
                        ▶ Start playing
                    </button>
                    <button
                        onClick={() => scrollTo("join")}
                        className="inline-flex items-center gap-2 rounded-xl border-2 border-ink/20 bg-cream px-5 py-3 font-semibold text-ink shadow-cardboard transition-transform hover:-translate-y-0.5"
                    >
                        Join the table
                    </button>
                </div>
            </motion.div>

            {/* right: the 3D box stack */}
            <div className="relative h-[340px] w-full sm:h-[440px] lg:h-[560px]">
                <div className="absolute inset-0">
                    <Suspense
                        fallback={
                            <div className="grid h-full place-items-center font-hand text-2xl text-ink-soft">
                                setting up the table…
                            </div>
                        }
                    >
                        <GameBoxStack />
                    </Suspense>
                </div>
            </div>

            {/* scroll cue */}
            <div className="pointer-events-none absolute bottom-4 left-1/2 hidden -translate-x-1/2 lg:block">
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.6 }}
                    className="font-hand text-lg text-ink-soft"
                >
                    scroll to read the rules ↓
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
