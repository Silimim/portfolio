import React from 'react';
import {Link} from "react-router-dom";

const CTA = () => {
    return (
        <section className={"cta"}>
            <p className={"cta-text"}>
                I'm currently looking for new opportunities, if you have a project or a job offer, feel free to contact me.
            </p>
            <Link to={"/contacts"} className={"btn"}>Contact me</Link>
        </section>
    );
};

export default CTA;