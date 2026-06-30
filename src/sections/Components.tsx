import { motion } from "framer-motion";
import { skills, skillCategoryOrder, type Skill } from "../constants/constants";
import SectionHeading from "./SectionHeading";
import Die from "../components/game/Die";

const grouped = skills.reduce((acc, s) => {
    (acc[s.type] = acc[s.type] || []).push(s);
    return acc;
}, {} as Record<string, Skill[]>);

const SkillToken = ({ skill, i }: { skill: Skill; i: number }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.04, type: "spring", stiffness: 260, damping: 20 }}
        className="group relative"
    >
        <div className="flex h-24 w-24 flex-col items-center justify-center gap-1 rounded-2xl border border-ink/10 bg-cream shadow-cardboard transition-transform duration-200 group-hover:-translate-y-1.5 group-hover:shadow-cardboard-lg">
            <img src={skill.imageUrl} alt={skill.name} className="h-9 w-9 object-contain" />
            <span className="text-xs font-semibold text-ink">{skill.name}</span>
        </div>

        {/* hover "stat card" with the die rating */}
        <div className="pointer-events-none absolute -top-24 left-1/2 z-20 w-44 -translate-x-1/2 translate-y-2 rounded-xl border-2 border-gold/60 bg-cream p-3 text-center opacity-0 shadow-cardboard-lg transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">
            <p className="font-display font-bold text-ink">{skill.name}</p>
            <p className="text-xs text-ink-soft">{skill.type}</p>
            <div className="mt-2 flex items-center justify-center gap-2">
                <Die value={skill.level} className="h-8 w-8" pipColor="#5C8A5A" />
                <span className="font-hand text-xl text-board">{skill.level}/6</span>
            </div>
        </div>
    </motion.div>
);

const Components = () => (
    <section id="components" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
        <SectionHeading
            eyebrow="what's in the box"
            title="Game Components"
            intro="The pieces I bring to the table — hover any token to see its proficiency, rated on a six-sided die."
        />

        <div className="flex flex-col gap-10">
            {skillCategoryOrder
                .filter((cat) => grouped[cat]?.length)
                .map((cat) => (
                    <div key={cat}>
                        <div className="mb-5 flex items-center gap-4">
                            <h3 className="whitespace-nowrap font-display text-xl font-bold text-ink">
                                {cat}
                            </h3>
                            <span className="h-px flex-1 bg-gradient-to-r from-ink/25 to-transparent" />
                            <span className="font-hand text-lg text-ink-soft">
                                {grouped[cat].length} {grouped[cat].length === 1 ? "piece" : "pieces"}
                            </span>
                        </div>
                        <div className="flex flex-wrap gap-5">
                            {grouped[cat].map((skill, i) => (
                                <SkillToken key={skill.name} skill={skill} i={i} />
                            ))}
                        </div>
                    </div>
                ))}
        </div>
    </section>
);

export default Components;
