import React from 'react';
import About from './components/About';
import Hero from './components/Hero';
import Experiences from './components/Experiences';
import Education from './components/Projects';
import Contact from './components/Contact';


export default function Main() {
    return (
        <div>
            <Hero />
            <About />
            <Experiences />
            <Education />
            <Contact />
        </div>
    );
}
