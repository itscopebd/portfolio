import React from 'react';
import perfectImage from "../../assets/image/perfect.png"
import ideaImage from "../../assets/image/idea.png"
import bestImage from "../../assets/image/best.png"
const Quality = () => {
    return (
        <div className='container bg-white mx-auto grid md:grid-cols-3 gap-10'>
            <div className="card py-10">
                <figure><img className='w-32 h-32' src={perfectImage} alt="Shoes" /></figure>
                <div className="card-body border-none text-black">
                    <h2 className="card-title text-center text-3xl block">Pixel Perfect</h2>
                    <p className='text-center'>My design service is dedicated to delivering meticulous, refined, and pixel-perfect creations for your utmost satisfaction.</p>
                  
                </div>
            </div>
            <div className="card py-10">
                <figure><img className='w-32 h-32' src={bestImage} alt="Shoes" /></figure>
                <div className="card-body border-none text-black">
                    <h2 className="card-title text-center text-3xl block">High Quality</h2>
                    <p className='text-center'>My design service is dedicated to delivering meticulous, refined, and pixel-perfect creations for your utmost satisfaction.</p>
                  
                </div>
            </div>
            <div className="card py-10 ">
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