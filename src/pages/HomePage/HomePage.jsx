import React from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import Skills from '../../components/Skills/Skills';
import Projects from '../../components/Projects/Projects';

const HomePage = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <Skills></Skills>
            <Projects></Projects>
        </div>
    );
};

export default HomePage;