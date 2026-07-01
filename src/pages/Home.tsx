import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../sections/Hero";
import Components from "../sections/Components";
import Rulebook from "../sections/Rulebook";
import CampaignLog from "../sections/CampaignLog";
import Expansions from "../sections/Expansions";
import JoinTable from "../sections/JoinTable";
import Footer from "../components/Footer";
import DiceNav from "../components/game/DiceNav";
import BoardNav from "../components/game/BoardNav";

const BOARD_SPACES = [
    { id: "top", label: "Start" },
    { id: "components", label: "Components" },
    { id: "rulebook", label: "Rulebook" },
    { id: "campaign", label: "Campaign" },
    { id: "expansions", label: "Projects" },
    { id: "join", label: "Contact" },
];

const Home = () => {
    const { hash } = useLocation();

    // honor /#section deep-links (e.g. when arriving from another route)
    useEffect(() => {
        if (hash) {
            const id = hash.replace("#", "");
            const t = window.setTimeout(() => {
                document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
            }, 60);
            return () => window.clearTimeout(t);
        }
    }, [hash]);

    return (
        <>
            <Hero />
            <Components />
            <Rulebook />
            <CampaignLog />
            <Expansions />
            <JoinTable />
            <Footer />
            <DiceNav />
            <BoardNav spaces={BOARD_SPACES} />
        </>
    );
};

export default Home;
