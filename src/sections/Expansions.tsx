import { projects } from "../constants/constants";
import SectionHeading from "./SectionHeading";
import ProjectCard from "../components/game/ProjectCard";

const Expansions = () => (
    <section id="expansions" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
        <SectionHeading
            eyebrow="on the shelf"
            title="Expansions & Side Quests"
            intro="Projects I've designed and built. Each one is a game box — flip a card to read the back."
        />

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
                <ProjectCard key={p.id} project={p} index={i} />
            ))}
        </div>
    </section>
);

export default Expansions;
