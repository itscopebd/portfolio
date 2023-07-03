import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FaBeer, FaGithub, FaLink } from 'react-icons/fa';
const Projects = () => {
    return (
        <div className='py-16 container mx-auto'>
            <div className='relative section__title my-10'>
                <h3 className='text-center py-3 text-4xl text-white'>My Projects</h3>
            </div>
            <Tabs>
                <TabList className='flex gap-5 mb-10'>
                    <Tab className=" capitalize active:bg-[#FFA500]  btn shadow-sm shadow-[#FFA500] px-5 py-2 text-black">Css</Tab>
                    <Tab className=" btn capitalize shadow-sm shadow-[#FFA500] px-5 py-2 text-black">Bootstrap</Tab>
                    <Tab className=" btn capitalize shadow-sm shadow-[#FFA500] px-5 py-2 text-black"> Tailwindcss</Tab>
                    <Tab className=" btn capitalize shadow-sm shadow-[#FFA500] px-5 py-2 text-black">Javascript</Tab>
                    <Tab className=" btn capitalize shadow-sm shadow-[#FFA500] px-5 py-2 text-black">React Js</Tab>
                    <Tab className=" btn capitalize shadow-sm shadow-[#FFA500] px-5 py-2 text-black">Mongodb</Tab>
                </TabList>


{/* html css projects  */}
                <TabPanel>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 custom__projects'>
                        <div className="card bg-base-100 shadow-xl">
                            <figure className='bg__css1 project__image'> 
                            
                            </figure>
                            <div className="card-body">
                                <p>I made this website with html css</p>
                                <div className="flex justify-center gap-5">
                                    <a href="https://github.com/itscopebd/influencer-gear" target='_blank' className='text-[#FFA500] flex items-center gap-2'> <FaGithub></FaGithub> GitHub Link </a>
                                    <a href="https://itscopebd.github.io/influencer-gear/" target='_blank' className='text-[#FFA500] flex items-center gap-2'> <FaLink></FaLink> Live Link</a>
                                </div>
                            </div>
                        </div>

                        <div className="card bg-base-100 shadow-xl">
                            <figure className='bg__css2 project__image'> 
                            
                            </figure>
                            <div className="card-body">
                                <p>I made this website with html css</p>
                                <div className="flex justify-center gap-5">
                                    <a href="https://github.com/itscopebd/Architects" target='_blank' className='text-[#FFA500] flex items-center gap-2'> <FaGithub></FaGithub> GitHub Link </a>
                                    <a href="https://itscopebd.github.io/Architects/" target='_blank' className='text-[#FFA500] flex items-center gap-2'> <FaLink></FaLink> Live Link</a>
                                </div>
                            </div>
                        </div>

                        <div className="card bg-base-100 shadow-xl">
                            <figure className='bg__css3 project__image'> 
                            
                            </figure>
                            <div className="card-body">
                                <p>I made this website with html css</p>
                                <div className="flex justify-center gap-5">
                                    <a href="https://github.com/itscopebd/reveal" target='_blank' className='text-[#FFA500] flex items-center gap-2'> <FaGithub></FaGithub> GitHub Link </a>
                                    <a href="https://itscopebd.github.io/reveal/" target='_blank' className='text-[#FFA500] flex items-center gap-2'> <FaLink></FaLink> Live Link</a>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-base-100 shadow-xl">
                            <figure className='bg__css4 project__image'> 
                            
                            </figure>
                            <div className="card-body">
                                <p>I made this website with html css</p>
                                <div className="flex justify-center gap-5">
                                    <a href="https://github.com/itscopebd/bicker-zone" target='_blank' className='text-[#FFA500] flex items-center gap-2'> <FaGithub></FaGithub> GitHub Link </a>
                                    <a href="https://itscopebd.github.io/bicker-zone/" target='_blank' className='text-[#FFA500] flex items-center gap-2'> <FaLink></FaLink> Live Link</a>
                                </div>
                            </div>
                        </div>


                    </div>
                </TabPanel>
                <TabPanel>
                    <h2 className='text-white'>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Projects;