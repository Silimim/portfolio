import {experiences, skills} from "../constants/constants.ts";
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from "../components/CTA.tsx";

const About = () => {
    return (
        <section className={"max-container"}>
            <h1 className={"head-text"}>
                Hi, I'm <span className={"red-gradient_text font-semibold drop-shadow"}>
                    Simone
                </span>
            </h1>

            <div className={"mt-5 flex flex-col gap-3 text-slate-500"}>
                <p>
                    Software developer based in Italy, specialized in web development mostly with in frontend
                    development. Interested in game development.
                </p>
            </div>

            <div className={"py-10 flex flex-col"}>
                <h3 className={"subhead-text"}>My Skills</h3>

                <div className={"mt-16 flex flex-wrap gap-12"}>
                    {skills.map((skill, index) => (
                        <div className={"block-container w-20 h-20"} key={index}>
                            <div className={"btn-back rounded-xl"}/>
                            <div className={"btn-front rounded-xl flex justify-center items-center"}>
                                <img className={"w-1/2 h-1/2 object-contain"} src={skill.imageUrl} alt={skill.name}/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={"py-16"}>
                <h3 className={"subhead-text"}>Work Experience</h3>
                <div className={"mt-5 flex flex-col gap-3 text-slate-500"}>
                    <p>
                        My work experience gave me the opportunity to work with different technologies and tools, from
                        frontend to backend development. I have worked on various projects with different teams, which
                        has helped me to improve my communication and problem-solving skills.
                    </p>
                </div>
                <div className={"mt-12 flex"}>
                    <VerticalTimeline>
                        {experiences.map((experience) => (
                            <VerticalTimelineElement
                                key={experience.company_name}
                                date={experience.date}
                                icon={
                                    <div className={"flex justify-center items-center w-full h-full"}>
                                        <img className={"w-[60%] h-[60%] object-contain"} src={experience.icon}
                                             alt={experience.company_name}/>
                                    </div>
                                }
                                iconStyle={{background: experience.iconBg}}
                                contentStyle={
                                    {
                                        borderBottom: '8px',
                                        borderStyle: 'solid',
                                        borderBottomColor: experience.iconBg,
                                        boxShadow: 'none',
                                    }
                                }
                            >
                                <div>
                                    <h3 className="text-black text-xl font-poppins font-semibold">
                                        {experience.title}
                                    </h3>
                                    <p className="text-black-500 font-medium m-0">
                                        {experience.company_name}
                                    </p>
                                </div>
                                <ul className={"my-5 list-disc ml-5 space-6"}>
                                    {experience.points.map((point, index) => (
                                        <li className={"text-black-500/50 font-normal pl-1 text-sm"}
                                            key={`experience-${index}`}>{point}</li>
                                    ))}
                                </ul>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </div>
            </div>

            <hr className={"border-slate-200"} />
            <CTA />
        </section>
    )
}

export default About