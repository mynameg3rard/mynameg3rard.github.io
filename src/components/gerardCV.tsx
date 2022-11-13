import "../styles/styles.css"
import React, {useState} from "react";
import Header from "./header";
import Presentation from "./presentation";
import BackgroundSkills from "./backgroundskills";
import ImagesContainer from "./images-container";
import Experience from "./experience";
import Education from "./education";
import Contact from "./contact";
import Projects from "./projects";
import Footer from "./footer";
import ImagesContainer2 from "./images-container2";

export default function GerardCV() {



    return (
        <div className="main">
            <Header/>
            <Presentation/>
            <BackgroundSkills/>
            <Experience/>
            <ImagesContainer/>
            <Education/>
            <Projects/>
            <ImagesContainer2/>
            <Contact/>
            <Footer/>
        </div>

    )
}