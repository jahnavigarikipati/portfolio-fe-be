import React from "react";
import Project from "./Project";
import Blogs from "./Blogs";
import SkillSection from "./SkillSection";
import RecommendationSection from "./RecommendationSection";
import Title from "./Title";
import About from "./About";

function HomePage() {
    return(
        <div>
            <Title name="Potnuru Hema Manasi" leadText="I am a freelancer developer"/>
            <RecommendationSection />
            <SkillSection />
            <Project />
            <About />
            <Blogs />
        </div>
    );
}

export default HomePage;