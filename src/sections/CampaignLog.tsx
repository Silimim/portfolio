import { motion } from "framer-motion";
import { experiences } from "../constants/constants";
import SectionHeading from "./SectionHeading";

const CampaignLog = () => (
    <section id="campaign" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
        <SectionHeading
            eyebrow="campaign log"
            title="Level Progression"
            intro="Every campaign has a path. Here's how the developer class has leveled up so far."
        />

        <div className="relative ml-2 border-l-2 border-dashed border-ink/25 pl-8 sm:ml-4">
            {experiences.map((exp, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="relative mb-10 last:mb-0"
                >
                    {/* level token on the rail */}
                    <span className="absolute -left-[3.05rem] top-0 grid h-10 w-10 place-items-center rounded-full border-2 border-gold bg-cream font-display text-sm font-black text-gold-dark shadow-cardboard">
                        L{exp.level}
                    </span>

                    <div className="rounded-2xl border border-ink/10 bg-cream p-6 shadow-cardboard">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                            <div>
                                <h3 className="font-display text-xl font-black text-ink">{exp.title}</h3>
                                <p className="font-hand text-lg text-board">{exp.company_name}</p>
                            </div>
                            <span className="rounded-md bg-meeple px-3 py-1 text-xs font-bold text-cream">
                                {exp.date}
                            </span>
                        </div>

                        <ul className="mt-4 space-y-2">
                            {exp.points.map((p, j) => (
                                <li key={j} className="flex gap-2 text-sm text-ink-soft">
                                    <span className="mt-1 inline-block h-2 w-2 shrink-0 rotate-45 rounded-[1px] bg-dice" />
                                    <span>{p}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            ))}

            {/* "to be continued" marker */}
            <div className="relative">
                <span className="absolute -left-[3.05rem] top-0 grid h-10 w-10 place-items-center rounded-full border-2 border-dashed border-ink/30 bg-parchment text-lg">
                    🎲
                </span>
                <p className="pt-1.5 font-hand text-2xl text-ink-soft">the campaign continues…</p>
            </div>
        </div>
    </section>
);

export default CampaignLog;
