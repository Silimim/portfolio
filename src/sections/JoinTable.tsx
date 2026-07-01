import { useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";
import SectionHeading from "./SectionHeading";
import { socialLinks } from "../constants/constants";
import { ACHIEVEMENTS, useAchievements } from "../components/game/Achievements";

const JoinTable = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [isLoading, setIsLoading] = useState(false);
    const { alert, showAlert, hideAlert } = useAlert();
    const { unlocked, unlock, reset } = useAchievements();

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        emailjs
            .send(
                import.meta.env.VITE_APP_EMAILJS_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                {
                    from_name: form.name,
                    from_email: form.email,
                    message: form.message,
                    to_name: "Simone",
                    to_email: "baptistesimone19@gmail.com",
                },
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
            )
            .then(() => {
                setIsLoading(false);
                showAlert({ text: "Message sent — see you at the table!", type: "success" });
                setTimeout(() => {
                    hideAlert();
                    setForm({ name: "", email: "", message: "" });
                }, 2500);
            })
            .catch((err) => {
                setIsLoading(false);
                showAlert({ text: "An error occurred, please try again later.", type: "danger" });
                console.error(err);
            });
    };

    return (
        <section
            id="join"
            className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20"
            onMouseEnter={() => unlock("recruiter")}
        >
            <motion.div onViewportEnter={() => unlock("recruiter")} viewport={{ once: true }}>
                <SectionHeading
                    eyebrow="player two has entered"
                    title="Join the Table"
                    intro="Got a project, a role, or just want to talk shop (or board games)? Deal me in."
                />
            </motion.div>

            {alert.show && <Alert {...alert} />}

            <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
                {/* invitation / contact form */}
                <div className="relative rounded-2xl border border-ink/10 bg-cream p-7 shadow-cardboard-lg">
                    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
                        <label className="font-semibold text-ink">
                            Your name
                            <input
                                name="name"
                                type="text"
                                className="bg-input mt-1.5"
                                placeholder="Player Two"
                                value={form.name}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label className="font-semibold text-ink">
                            Email
                            <input
                                name="email"
                                type="email"
                                className="bg-input mt-1.5"
                                placeholder="you@example.com"
                                value={form.email}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label className="font-semibold text-ink">
                            Your move
                            <textarea
                                name="message"
                                rows={4}
                                className="bg-input mt-1.5 resize-none"
                                placeholder="Let me know how I can help…"
                                value={form.message}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <button type="submit" className="dice-btn self-start" disabled={isLoading}>
                            {isLoading ? "Rolling…" : "▶ Make your move"}
                        </button>
                    </form>

                    <div className="mt-6 flex flex-wrap gap-3 border-t border-dashed border-ink/15 pt-5">
                        {socialLinks
                            .filter((s) => s.link.startsWith("http"))
                            .map((s) => (
                                <a
                                    key={s.name}
                                    href={s.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 rounded-lg border border-ink/15 bg-parchment px-4 py-2 font-semibold text-ink shadow-cardboard transition-transform hover:-translate-y-0.5"
                                >
                                    <img src={s.iconUrl} alt="" className="h-5 w-5" />
                                    {s.name}
                                </a>
                            ))}
                    </div>
                </div>

                {/* achievements trophy shelf */}
                <div className="rounded-2xl border-2 border-gold/50 bg-gradient-to-b from-cream to-parchment p-7 shadow-cardboard-lg">
                    <div className="flex items-center justify-between">
                        <h3 className="font-display text-xl font-black text-ink">Achievements</h3>
                        <span className="rounded-md bg-gold/20 px-2 py-0.5 font-display text-sm font-bold text-gold-dark">
                            {unlocked.size}/{ACHIEVEMENTS.length}
                        </span>
                    </div>
                    <p className="mt-1 font-hand text-lg text-ink-soft">
                        Explore the page to unlock them all — some are secret. 👀
                    </p>

                    <ul className="mt-4 space-y-2.5">
                        {ACHIEVEMENTS.map((a) => {
                            const got = unlocked.has(a.id);
                            const masked = !got && a.hidden;
                            return (
                                <li
                                    key={a.id}
                                    className={`flex items-center gap-3 rounded-lg border px-3 py-2 transition-colors ${
                                        got
                                            ? "border-gold/50 bg-cream"
                                            : masked
                                            ? "border-dashed border-ink/20 bg-parchment/40 opacity-70"
                                            : "border-ink/10 bg-parchment/60 opacity-60"
                                    }`}
                                >
                                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-gold/15 text-lg">
                                        {got ? a.icon : masked ? "❓" : "🔒"}
                                    </span>
                                    <div className="min-w-0">
                                        <p className="font-display text-sm font-bold leading-tight text-ink">
                                            {got ? a.title : masked ? "Secret achievement" : a.title}
                                        </p>
                                        <p className="truncate text-xs text-ink-soft">
                                            {got ? a.description : masked ? "Keep poking around to reveal this one…" : a.description}
                                        </p>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>

                    {unlocked.size > 0 && (
                        <button
                            onClick={reset}
                            className="mt-4 font-hand text-lg text-ink-soft underline decoration-dashed underline-offset-4 hover:text-dice"
                        >
                            reset the board
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
};

export default JoinTable;
