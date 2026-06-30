import { motion } from "framer-motion";

const SectionHeading = ({
    eyebrow,
    title,
    intro,
}: {
    eyebrow: string;
    title: string;
    intro?: string;
}) => (
    <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mb-10"
    >
        <p className="section-eyebrow">{eyebrow}</p>
        <h2 className="display-text text-3xl sm:text-4xl lg:text-5xl">{title}</h2>
        {intro && <p className="mt-3 max-w-2xl text-lg text-ink-soft">{intro}</p>}
        <hr className="cut-line mt-6" />
    </motion.div>
);

export default SectionHeading;
