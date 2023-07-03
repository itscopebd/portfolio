import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import img from "../../assets/image/rofiq.png"
const HeroSection = () => {
    return (
        <div className=''>
            <div className='grid md:grid-cols-2 lg:grid-cols-2 items-center justify-between h-screen container mx-auto'>
                <div className='pr-16'>
                    <div className='text-white'>
                        <p className='text-xl'>Hey, I'm </p>
                        <h1 className='text-5xl mt-4'>Md. Rofiqul Islam</h1>
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed once, initially
                                'Web Designer',
                                1000,
                                'Front-end Developer',
                                1000,
                                'React Developer',
                                1000,
                                'Full-Stack Developer',
                                1000,
                                'MERN Stack Developer',
                                1000,
                            ]}
                            speed={75}
                            style={{ fontSize: '4em' }}
                            repeat={Infinity} preRenderFirstString={true} omitDeletionAnimation={true}
                       />
                        <h2 className='text-justify'>Welcome to my portfolio! I'm Humayun Kabir, a dedicated web developer passionate about crafting engaging and innovative digital experiences. From designing stunning user interfaces to implementing robust back-end solutions, I thrive on turning ideas into reality. Explore my work and let's embark on a journey of creativity and excellence together.</h2>


                    </div>
                </div>
                <div className='text flex justify-center'>
                    <img className='h-full' src={img} alt="" />
                </div>
            </div>
        </div>

    );
};

export default HeroSection;