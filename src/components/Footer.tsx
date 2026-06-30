import { socialLinks } from "../constants/constants";
import Meeple from "./game/Meeple";

const Footer = () => (
    <footer className="relative mt-8 border-t border-dashed border-ink/20 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 sm:flex-row">
            <div className="flex items-center gap-2 text-ink-soft">
                <Meeple className="h-6 w-6" color="#5C8A5A" />
                <p className="text-sm">
                    © {new Date().getFullYear()} <strong className="text-ink">Simone Baptiste</strong>{" "}
                    · thanks for playing.
                </p>
            </div>

            <div className="flex items-center gap-3">
                {socialLinks
                    .filter((s) => s.link.startsWith("http"))
                    .map((link) => (
                        <a
                            key={link.name}
                            href={link.link}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={link.name}
                            className="grid h-10 w-10 place-items-center rounded-lg border border-ink/10 bg-cream shadow-cardboard transition-transform hover:-translate-y-0.5"
                        >
                            <img src={link.iconUrl} alt={link.name} className="h-5 w-5 object-contain" />
                        </a>
                    ))}
            </div>
        </div>
    </footer>
);

export default Footer;
