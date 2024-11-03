import {Link} from "react-router-dom";
// @ts-ignore
import {arrow} from "../assets/icons";

const Info = ({text, btnText, link}: {text: string, btnText: string, link: string}) => (
    <div className={"info-box"}>
        <p className={"font-medium sm:text-xl text-center"}>{text}</p>
        <Link to={link} className={"neo-brutalism-white neo-btn"}>
            {btnText}
            <img src={arrow} alt={"arrow"} className={"w-4 h-4 "}/>
        </Link>
    </div>
)

const content = {
    1: (
        <h1 className={"sm:text-xl sm:leading-snug text-center neo-brutalism-red py-4 px-8 text-white mx-5"}>
            Hi, my name is <span className={"font-semibold"}>Simone</span>, a software developer based in Italy.
        </h1>
    ),
    2: (
        <Info text={"I'm half italian, here in Italy i learned web development, game development foundations and more."}
                btnText={"Know me better"}
                link={"/about"}
        />
    ),
    3: (
        <Info text={"I'm half seychellois. This half grow my curiosity and love for travelling."}
                btnText={"Let's get a coffee"}
                link={"/contacts"}
        />
    )
}


const LandingInfo = ({currentStage}: {currentStage: number}) => {
    // @ts-ignore
    return content[currentStage];
}

export default LandingInfo;