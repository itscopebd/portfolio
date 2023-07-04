import React from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import Skills from '../../components/Skills/Skills';
import Projects from '../../components/Projects/Projects';
import Quality from '../../components/Quality/Quality';

const HomePage = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <Quality></Quality>
            <Skills></Skills>
            <Projects></Projects>

        </div>
    );
};

export default HomePage;