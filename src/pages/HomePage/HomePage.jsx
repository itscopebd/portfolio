import React from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import Skills from '../../components/Skills/Skills';
import Projects from '../../components/Projects/Projects';
import Quality from '../../components/Quality/Quality';
import Services from '../../components/Services/Services';

const HomePage = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <Quality></Quality>
            <Skills></Skills>
            <Projects></Projects>
            <Services></Services>

        </div>
    );
};

export default HomePage;