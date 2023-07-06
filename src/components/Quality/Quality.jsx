import React, { useEffect } from 'react';
import perfectImage from "../../assets/image/perfect.png"
import ideaImage from "../../assets/image/idea.png"
import bestImage from "../../assets/image/best.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Quality = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });

    }, []);
    return (
        <div className='container bg-white mx-auto grid md:grid-cols-3 gap-5 md:gap-10' data-aos="fade-up">
            <div className="card pt-10">
                <figure><img className='w-32 h-32' src={perfectImage} alt="Shoes" /></figure>
                <div className="card-body border-none text-black">
                    <h2 className="card-title text-center text-3xl block">Pixel Perfect</h2>
                    <p className='text-center'>My design service is dedicated to delivering meticulous, refined, and pixel-perfect creations for your utmost satisfaction.</p>
                  
                </div>
            </div>
            <div className="card">
                <figure><img className='w-32 h-32' src={bestImage} alt="Shoes" /></figure>
                <div className="card-body border-none text-black">
                    <h2 className="card-title text-center text-3xl block">High Quality</h2>
                    <p className='text-center'>My design service is dedicated to delivering meticulous, refined, and pixel-perfect creations for your utmost satisfaction.</p>
                  
                </div>
            </div>
            <div className="card pb-10 ">
                <figure><img className='w-32 h-32' src={ideaImage} alt="Shoes" /></figure>
                <div className="card-body border-none text-black">
                    <h2 className="card-title text-center text-3xl block">Awesome Idea</h2>
                    <p className='text-center'>My design service is dedicated to delivering meticulous, refined, and pixel-perfect creations for your utmost satisfaction.</p>
                  
                </div>
            </div>
        </div>
    );
};

export default Quality;