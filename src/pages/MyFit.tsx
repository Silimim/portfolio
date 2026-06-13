import { Link } from "react-router-dom";
import { myfit, flutter } from "../assets/icons";

const features = [
    {
        emoji: "💪",
        title: "Training Cards",
        description:
            "Create unlimited training cards — Push Day, Full Body A, Leg Day. Set one as Active for one-tap access from Home, organize exercises by day and group (superset, warmup), and configure sets, reps, weight, and rest per exercise.",
    },
    {
        emoji: "📚",
        title: "Exercise Library",
        description:
            "Browse 50+ pre-loaded exercises across 7 muscle groups: Chest, Back, Shoulders, Legs, Arms, Core and Cardio. Filter, search, and add your own custom exercises with detailed parameters.",
    },
    {
        emoji: "📊",
        title: "Stats & Analytics",
        description:
            "Log body weight, calories and measurements (waist, chest, hips). Track your fitness phase — Cut 📉, Bulk 📈 or Balanced ⚖️ — and visualize trends with interactive line charts.",
    },
    {
        emoji: "🍎",
        title: "Recipes & Macros",
        description:
            "Browse and save recipes, hit daily macro targets, and keep your nutrition aligned with your training phase — all from a single dashboard.",
    },
    {
        emoji: "⏱️",
        title: "Live Workout Tracker",
        description:
            "Run guided workouts with rest timers, quick-log sets, pause and resume mid-session, and even keep the timer alive in picture-in-picture mode.",
    },
    {
        emoji: "🗓️",
        title: "History & Calendar",
        description:
            "Every workout is logged. Review your past sessions in a calendar view and watch your consistency compound week after week.",
    },
    {
        emoji: "🔔",
        title: "Smart Reminders",
        description:
            "Local notifications keep you on schedule. Hydration, training, weigh-ins — set it once, stay consistent.",
    },
    {
        emoji: "🏠",
        title: "Home Screen Widget",
        description:
            "Glance at your active card and next exercise straight from the Android home screen, without opening the app.",
    },
];

const stack = [
    "Flutter",
    "Dart",
    "Provider",
    "SQLite",
    "Material 3",
    "fl_chart",
    "Google Mobile Ads",
    "RevenueCat",
    "Home Widget",
    "Local Notifications",
];

const MyFit = () => {
    return (
        <section className={"myfit-page"}>
            {/* Hero */}
            <div className={"myfit-hero"}>
                <div className={"myfit-hero-glow"}/>
                <div className={"max-w-5xl mx-auto sm:px-16 px-8 !pt-[126px] pb-20 relative z-10"}>
                    <Link to={"/projects"} className={"myfit-back"}>
                        <span>←</span> Back to projects
                    </Link>

                    <div className={"flex flex-col md:flex-row items-start md:items-center gap-8 mt-8"}>
                        <div className={"myfit-logo-card"}>
                            <img src={myfit} alt={"MyFit logo"} className={"w-20 h-20 object-contain"}/>
                        </div>
                        <div className={"flex-1"}>
                            <p className={"myfit-eyebrow"}>Personal project · Android</p>
                            <h1 className={"myfit-title"}>
                                My<span className={"myfit-gradient-text"}>Fit</span>
                            </h1>
                            <p className={"myfit-tagline"}>
                                Your Personal Fitness Evolution.
                            </p>
                            <p className={"myfit-subtagline"}>
                                A high-energy fitness companion built in Flutter — training cards,
                                live workouts, macros, body stats and analytics, all wrapped in a
                                neon-mint dark UI.
                            </p>

                            <div className={"flex flex-wrap gap-3 mt-6"}>
                                <a
                                    href={"#features"}
                                    className={"myfit-btn-primary"}
                                >
                                    Explore features
                                </a>
                                <Link
                                    to={"/projects/myfit/privacy"}
                                    className={"myfit-btn-ghost"}
                                >
                                    Privacy Policy
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Body */}
            <div className={"myfit-body"}>
                <div className={"max-w-5xl mx-auto sm:px-16 px-8 py-20"}>
                    {/* About */}
                    <div className={"grid md:grid-cols-3 gap-6 mb-20"}>
                        <div className={"myfit-card md:col-span-2"}>
                            <h2 className={"myfit-h2"}>About the app</h2>
                            <p className={"myfit-p mt-4"}>
                                MyFit is the app I built for myself when no existing tracker quite
                                fit. It's a focused, offline-first fitness companion that brings
                                training planning, live workout execution, nutrition and body
                                analytics together — without burying the basics under endless menus.
                            </p>
                            <p className={"myfit-p mt-3"}>
                                Built natively in Flutter with a custom Material 3 theme, MyFit
                                ships a dark, high-energy UI accented with mint neon and lime energy
                                — designed to feel as charged as your next session.
                            </p>
                        </div>
                        <div className={"myfit-card myfit-card-accent"}>
                            <p className={"text-xs uppercase tracking-widest text-[#5EFFA5]"}>
                                Built with
                            </p>
                            <div className={"flex items-center gap-3 mt-3"}>
                                <img src={flutter} alt={"Flutter"} className={"w-10 h-10"}/>
                                <div>
                                    <p className={"text-white font-semibold"}>Flutter</p>
                                    <p className={"text-xs text-white/60"}>Dart · Material 3</p>
                                </div>
                            </div>
                            <hr className={"my-5 border-white/10"}/>
                            <p className={"text-xs uppercase tracking-widest text-[#D8FF4B]"}>
                                Platform
                            </p>
                            <p className={"text-white mt-2 text-sm"}>Android 8.0+ (API 26+)</p>
                            <hr className={"my-5 border-white/10"}/>
                            <p className={"text-xs uppercase tracking-widest text-[#5EFFA5]"}>
                                Status
                            </p>
                            <p className={"text-white mt-2 text-sm"}>In active development</p>
                        </div>
                    </div>

                    {/* Design system */}
                    <div className={"mb-20"}>
                        <h2 className={"myfit-h2"}>Design system</h2>
                        <p className={"myfit-p mt-3"}>
                            A dark canvas with two signature accents. Every screen breathes the same
                            visual language.
                        </p>
                        <div className={"grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"}>
                            <Swatch hex={"#5EFFA5"} name={"Mint Neon"} sub={"Primary accent"}/>
                            <Swatch hex={"#D8FF4B"} name={"Lime Energy"} sub={"Highlight"}/>
                            <Swatch hex={"#121212"} name={"Deep Black"} sub={"Background"} dark/>
                            <Swatch hex={"#1E1E1E"} name={"Slate Grey"} sub={"Cards"} dark/>
                        </div>
                    </div>

                    {/* Features */}
                    <div id={"features"} className={"mb-20"}>
                        <h2 className={"myfit-h2"}>What's inside</h2>
                        <p className={"myfit-p mt-3"}>
                            Eight pillars, one focused experience.
                        </p>
                        <div className={"grid md:grid-cols-2 gap-5 mt-8"}>
                            {features.map((f) => (
                                <div key={f.title} className={"myfit-feature-card"}>
                                    <div className={"text-3xl"}>{f.emoji}</div>
                                    <h3 className={"text-white text-xl font-poppins font-semibold mt-3"}>
                                        {f.title}
                                    </h3>
                                    <p className={"text-white/70 mt-2 text-sm leading-relaxed"}>
                                        {f.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Stack */}
                    <div className={"mb-20"}>
                        <h2 className={"myfit-h2"}>Tech stack</h2>
                        <div className={"flex flex-wrap gap-3 mt-6"}>
                            {stack.map((s) => (
                                <span key={s} className={"myfit-chip"}>{s}</span>
                            ))}
                        </div>
                    </div>

                    {/* Legal / Links */}
                    <div className={"myfit-card"}>
                        <h2 className={"myfit-h2"}>Legal & developer info</h2>
                        <p className={"myfit-p mt-3"}>
                            Resources required by the Google Play Console and end users.
                        </p>
                        <div className={"flex flex-wrap gap-3 mt-6"}>
                            <Link to={"/projects/myfit/privacy"} className={"myfit-btn-primary"}>
                                Privacy Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Swatch = ({hex, name, sub, dark}: {hex: string, name: string, sub: string, dark?: boolean}) => (
    <div className={"myfit-card !p-0 overflow-hidden"}>
        <div
            className={"h-20 w-full"}
            style={{
                background: dark
                    ? hex
                    : `linear-gradient(135deg, ${hex} 0%, ${hex}cc 100%)`,
                boxShadow: dark ? "none" : `0 0 40px ${hex}66`,
            }}
        />
        <div className={"p-4"}>
            <p className={"text-white font-semibold text-sm"}>{name}</p>
            <p className={"text-white/50 text-xs"}>{sub}</p>
            <p className={"text-white/40 text-xs font-mono mt-1"}>{hex}</p>
        </div>
    </div>
);

export default MyFit;
