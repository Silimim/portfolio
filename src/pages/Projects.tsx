import {projects} from "../constants/constants.ts";
import {Link} from "react-router-dom";
// @ts-ignore
import {arrow} from "../assets/icons";
import CTA from "../components/CTA.tsx";

const Projects = () => {
    return (
        <section className={"max-container"}>
            <h1 className={"head-text"}>
                Some of my <span className={"red-gradient_text font-semibold drop-shadow"}>
                    Projects
                </span>
            </h1>

            <div className={"mt-5 flex flex-col gap-3 text-slate-500"}>
                <p>
                    I've had the opportunity to work on a diverse range of projects, from web development to game
                    development. Here are a few I'm currently working on—most are still in progress, but I’m actively
                    developing them. Some are personal projects, while others are collaborations with talented devs. As
                    a developer, I’m always excited to connect with new people, so if you'd like to contribute or have
                    ideas to share, feel free to reach out!
                </p>
            </div>

            <div className={"flex flex-wrap my-20 gap-16"}>
                {projects.map((project) => (
                    <div className={"lg:w-[400px] w-full"} key={project.name}>
                        <div className={"block-container w-12 h-12"}>
                            <div className={`btn-back rounded-xl ${project.theme}`}/>
                            <div className={"btn-front rounded-xl flex justify-center items-center"}>
                                {
                                    project.iconUrl &&
                                    <img className={"w-1/2 h-1/2 object-contain"} src={project.iconUrl}
                                         alt={project.name}/>
                                }
                            </div>
                        </div>

                        <div className={"mt-5 flex flex-col"}>
                            <h4 className={"text-2xl font-poppins font-semibold"}>
                                {project.name}
                            </h4>
                            <p className={"mt-2 text-slate-500"}>
                                {project.description}
                            </p>
                            {
                                project.link && <div className={"mt-5 flex items-center gap-3 font-poppins"}>
                                    <Link to={project.link} target={"_blank"} rel={"noopener noreferrer"}
                                          className={"font-semibold text-red-600"}>
                                        View Project
                                    </Link>
                                    <img src={arrow} alt={"arrow"} className={"w-4 h-4 object-contain"}/>
                                </div>
                            }

                        </div>
                    </div>
                ))}
            </div>

            <hr className={"border-slate-200"}/>
            <CTA/>
        </section>
    )
}

export default Projects