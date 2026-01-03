import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Hero from './components/Hero';
import Experiences from './components/Experiences';
import Education from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Extras from './components/ExtraCurricular';
import { skills } from "./constants";


export default function Main() {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <Experiences />
            <Education />
            <Extras />
            <Skills skills={skills} />
            <Contact />
        </div>
    );
}
