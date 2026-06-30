import { useState } from "react";
import { Link } from "react-router-dom";
import type { Project } from "../../constants/constants";
import { useAchievements } from "./Achievements";

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
    const [flipped, setFlipped] = useState(false);
    const { unlock } = useAchievements();

    const toggle = () => {
        setFlipped((f) => !f);
        unlock("flipper");
    };

    return (
        <div
            className="flip-card h-[400px] w-full animate-pop-in"
            style={{ animationDelay: `${index * 110}ms` }}
        >
            <div
                className={`flip-inner cursor-pointer ${flipped ? "is-flipped" : ""}`}
                onClick={toggle}
                role="button"
                tabIndex={0}
                aria-label={`${project.name} — tap to ${flipped ? "see the cover" : "reveal the stats"}`}
                onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        toggle();
                    }
                }}
            >
                {/* ───── Front: box cover ───── */}
                <div
                    className="flip-face shadow-cardboard border-2"
                    style={{ borderColor: project.color, background: "#FBF6E9" }}
                >
                    <div className="flex h-full flex-col">
                        <div
                            className="relative flex flex-1 items-center justify-center"
                            style={{
                                background: `linear-gradient(160deg, ${project.color} 0%, ${project.color}cc 100%)`,
                            }}
                        >
                            <span className="absolute right-3 top-3 rounded-md bg-cream/90 px-2 py-0.5 font-hand text-base text-ink">
                                tap to flip ↻
                            </span>
                            <div className="grid h-24 w-24 place-items-center rounded-2xl bg-cream shadow-cardboard">
                                <img
                                    src={project.iconUrl}
                                    alt={project.name}
                                    className="h-14 w-14 object-contain"
                                />
                            </div>
                        </div>
                        <div className="bg-cream px-5 py-4">
                            <p className="font-hand text-lg leading-none" style={{ color: project.color }}>
                                {project.category}
                            </p>
                            <h3 className="font-display text-2xl font-black text-ink">{project.name}</h3>
                            <p className="text-sm text-ink-soft">{project.tagline}</p>
                        </div>
                    </div>
                </div>

                {/* ───── Back: the stats ───── */}
                <div
                    className="flip-face flip-back shadow-cardboard border-2 bg-cream"
                    style={{ borderColor: project.color }}
                >
                    <div className="flex h-full flex-col p-5">
                        <div className="flex items-center justify-between">
                            <h3 className="font-display text-xl font-black text-ink">{project.name}</h3>
                            <span
                                className="rounded-md px-2 py-0.5 text-xs font-bold text-cream"
                                style={{ background: project.color }}
                            >
                                {project.year}
                            </span>
                        </div>

                        <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                            {project.description}
                        </p>

                        <dl className="mt-4 space-y-1 text-sm">
                            <div className="flex justify-between border-b border-dashed border-ink/15 py-1">
                                <dt className="font-semibold text-ink">Role</dt>
                                <dd className="text-ink-soft">{project.role}</dd>
                            </div>
                            <div className="flex justify-between border-b border-dashed border-ink/15 py-1">
                                <dt className="font-semibold text-ink">Type</dt>
                                <dd className="text-ink-soft">{project.category}</dd>
                            </div>
                        </dl>

                        <div className="mt-3 flex flex-wrap gap-1.5">
                            {project.tech.map((t) => (
                                <span
                                    key={t}
                                    className="rounded-full border border-ink/15 bg-parchment px-2.5 py-0.5 text-xs font-medium text-ink-soft"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>

                        <div className="mt-auto pt-4" onClick={(e) => e.stopPropagation()}>
                            {project.link ? (
                                project.internal ? (
                                    <Link
                                        to={project.link}
                                        className="dice-btn w-full text-sm"
                                        style={{ background: project.color, boxShadow: "none", borderColor: project.color }}
                                    >
                                        ▶ Open project
                                    </Link>
                                ) : (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="dice-btn w-full text-sm"
                                        style={{ background: project.color, boxShadow: "none" }}
                                    >
                                        ▶ Open project
                                    </a>
                                )
                            ) : (
                                <p className="text-center font-hand text-lg text-ink-soft">
                                    a personal project · no link yet
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
