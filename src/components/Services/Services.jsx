import React from 'react';
import creative from "../../assets/image/creative.png"
import development from "../../assets/image/development.png"
import responsive from "../../assets/image/responsive.png"
import wordpress from "../../assets/image/wordpress.png"
import shopify from "../../assets/image/shopify.png"
import figma from "../../assets/image/figma.png"
const Services = () => {
    return (
        <div>
            <div className='py-16 container mx-auto'>
                <div className='relative section__title my-10'>
                    <h3 className='text-center py-3 text-4xl text-white'>Services</h3>
                </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5'>

                    <div className="card bg-base-100 shadow-xl">
                        <div className='flex items-center'>
                            <div className='w-4/12'>
                                <figure><img  src={creative} alt="Shoes" /></figure>
                            </div>
                            <div className='w-8/12'>
                                <div className="card-body">
                                    <h2 className="card-title">Creative web Design</h2>
                                    <p className='text-justify'>Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development</p>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl">
                        <div className='flex items-center'>
                            <div className='w-4/12'>
                                <figure><img  src={development} alt="Shoes" /></figure>
                            </div>
                            <div className='w-8/12'>
                                <div className="card-body">
                                    <h2 className="card-title">MERN Stack Projects</h2>
                                    <p className='text-justify'>Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development</p>
                                   
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-xl">
                        <div className='flex items-center'>
                            <div className='w-4/12'>
                                <figure><img  src={responsive} alt="Shoes" /></figure>
                            </div>
                            <div className='w-8/12'>
                                <div className="card-body">
                                    <h2 className="card-title">Responsive Design</h2>
                                    <p className='text-justify'>Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development</p>
                                   
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-xl">
                        <div className='flex items-center'>
                            <div className='w-4/12'>
                                <figure><img  src={wordpress} alt="Shoes" /></figure>
                            </div>
                            <div className='w-8/12'>
                                <div className="card-body">
                                    <h2 className="card-title">Wordpres Website</h2>
                                    <p className='text-justify'>Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development</p>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl">
                        <div className='flex items-center'>
                            <div className='w-4/12'>
                                <figure><img  src={shopify} alt="Shoes" /></figure>
                            </div>
                            <div className='w-8/12'>
                                <div className="card-body">
                                    <h2 className="card-title">Shopify Store</h2>
                                    <p className='text-justify'>Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development</p>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl">
                        <div className='flex items-center'>
                            <div className='w-4/12'>
                                <figure><img  src={figma} alt="Shoes" /></figure>
                            </div>
                            <div className='w-8/12'>
                                <div className="card-body">
                                    <h2 className="card-title">Figma To HTML</h2>
                                    <p className='text-justify'>Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development</p>
                                   
                                </div>
                            </div>
                        </div>
                    </div>



                </div>


            </div>
        </div>
    );
};

export default Services;