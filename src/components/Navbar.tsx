import { Link, useLocation, useNavigate } from "react-router-dom";
import Meeple from "./game/Meeple";

const NAV = [
    { id: "components", label: "Components" },
    { id: "rulebook", label: "Rulebook" },
    { id: "campaign", label: "Campaign" },
    { id: "expansions", label: "Projects" },
    { id: "join", label: "Contact" },
];

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const onHome = location.pathname === "/";

    // MyFit detail pages are fully self-themed (dark) with their own back link
    if (location.pathname.startsWith("/projects/myfit")) return null;

    const go = (id: string) => {
        if (onHome) {
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        } else {
            navigate(`/#${id}`);
        }
    };

    return (
        <header className="fixed inset-x-0 top-0 z-50 px-3 sm:px-6">
            <div className="mx-auto mt-3 flex max-w-6xl items-center justify-between rounded-2xl border border-ink/10 bg-cream/85 px-4 py-2.5 shadow-cardboard backdrop-blur-md sm:px-5">
                <Link to="/" className="flex items-center gap-2" aria-label="Home">
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-dice/10 ring-1 ring-dice/30">
                        <Meeple className="h-5 w-5" color="#C24B4B" />
                    </span>
                    <span className="font-display text-lg font-black leading-none text-ink">
                        Simone B.
                        <span className="block font-hand text-sm font-medium text-ink-soft">
                            the player&apos;s handbook
                        </span>
                    </span>
                </Link>

                <nav className="hidden items-center gap-1 md:flex">
                    {NAV.map((n) => (
                        <button
                            key={n.id}
                            onClick={() => go(n.id)}
                            className="rounded-lg px-3 py-1.5 text-sm font-semibold text-ink-soft transition-colors hover:bg-ink/5 hover:text-ink"
                        >
                            {n.label}
                        </button>
                    ))}
                </nav>

                <button onClick={() => go("join")} className="dice-btn px-4 py-2 text-sm md:hidden">
                    Contact
                </button>
            </div>
        </header>
    );
};

export default Navbar;
