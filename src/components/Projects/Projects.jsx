import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FaGithub, FaLink } from 'react-icons/fa';
const Projects = () => {
    return (
        <div className='py-16 container mx-auto' id='projects'>
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
                   
                </TabList>


                {/* html css projects  */}
                <TabPanel>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 custom__projects'>
                        <div className="card bg-base-100 shadow-xl">
                            <figure className='bg__css1 project__image'>

                            </figure>
                            <div className="card-body">
                                <p>I made this website with html css</p>
                                <h3 className='text-xl font-bold'>Technologies</h3>
                                <div className='flex gap-2 flex-wrap'>
                                    <button className='btn btn-sm bg-[#FFA500] text-white capitalize hover:text-black'>Html</button>
                                    <button className='btn btn-sm bg-[#FFA500] text-white capitalize hover:text-black'>Css</button>
                        
                                </div>
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
                                <h3 className='text-xl font-bold'>Technologies</h3>
                                <div className='flex gap-2 flex-wrap'>
                                    <button className='btn btn-sm bg-[#FFA500] text-white capitalize hover:text-black'>Html</button>
                                    <button className='btn btn-sm bg-[#FFA500] text-white capitalize hover:text-black'>Css</button>
                        
                                </div>
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
                                <h3 className='text-xl font-bold'>Technologies</h3>
                                <div className='flex gap-2 flex-wrap'>
                                    <button className='btn btn-sm bg-[#FFA500] text-white capitalize hover:text-black'>Html</button>
                                    <button className='btn btn-sm bg-[#FFA500] text-white capitalize hover:text-black'>Css</button>
                        
                                </div>
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
                                <h3 className='text-xl font-bold'>Technologies</h3>
                                <div className='flex gap-2 flex-wrap'>
                                    <button className='btn btn-sm bg-[#FFA500] text-white capitalize hover:text-black'>Html</button>
                                    <button className='btn btn-sm bg-[#FFA500] text-white capitalize hover:text-black'>Css</button>
                        
                                </div>
                                <div className="flex justify-center gap-5">
                                    <a href="https://github.com/itscopebd/bicker-zone" target='_blank' className='text-[#FFA500] flex items-center gap-2'> <FaGithub></FaGithub> GitHub Link </a>
                                    <a href="https://itscopebd.github.io/bicker-zone/" target='_blank' className='text-[#FFA500] flex items-center gap-2'> <FaLink></FaLink> Live Link</a>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-base-100 shadow-xl">
                            <figure className='bg__css5 project__image'>

                            </figure>
                            <div className="card-body">
                                <p>I made this website with html css</p>
                                <h3 className='text-xl font-bold'>Technologies</h3>
                                <div className='flex gap-2 flex-wrap'>
                                    <button className='btn btn-sm bg-[#FFA500] text-white capitalize hover:text-black'>Html</button>
                                    <button className='btn btn-sm bg-[#FFA500] text-white capitalize hover:text-black'>Css</button>
                        
                                </div>
                                <div className="flex justify-center gap-5">
                                    <a href="https://github.com/itscopebd/-tea-house" target='_blank' className='text-[#FFA500] flex items-center gap-2'> <FaGithub></FaGithub> GitHub Link </a>
                                    <a href="https://itscopebd.github.io/-tea-house/" target='_blank' className='text-[#FFA500] flex items-center gap-2'> <FaLink></FaLink> Live Link</a>
                                </div>
                            </div>
                        </div>


                    </div>
                </TabPanel>


                <TabPanel>

                </TabPanel>
                <TabPanel>

                </TabPanel>
                <TabPanel>
                    {/* Javascript projects  */}
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 custom__projects'>

                        <div className="card bg-base-100 shadow-xl">
                            <figure className='bg__js1 project__image'>

                            </figure>
                            <div className="card-body">
                                <p>On this website the data is loaded from the api and the countries are shown continent wise.</p>
                                <h3 className='text-xl font-bold'>Technologies</h3>
                                <div className='flex gap-2 flex-wrap'>
                                    <button className='btn btn-sm bg-[#FFA500] text-white capitalize hover:text-black'>Html</button>
                                    <button className='btn btn-sm bg-[#FFA500] text-white capitalize hover:text-black'>Css</button>
                                    <button className='btn btn-sm bg-[#FFA500] text-white capitalize hover:text-black'>Javascript</button>
                        
                                </div>

                                <div className="flex justify-center gap-5">
                                    <a href="https://github.com/itscopebd/search-country-region" target='_blank' className='text-[#FFA500] flex items-center gap-2'> <FaGithub></FaGithub> GitHub Link </a>
                                    <a href="https://itscopebd.github.io/search-country-region/" target='_blank' className='text-[#FFA500] flex items-center gap-2'> <FaLink></FaLink> Live Link</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </TabPanel>

                <TabPanel>
                    {/* React projects  */}
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 custom__projects'>

                        <div className="card bg-base-100 shadow-xl">
                            <figure className='bg__react1 project__image'>

                            </figure>
                            <div className="card-body">
                                <p className='text-justify'>This website is made with kids toys.User can login to view product details. User can add and delete products. User can also edit etc.</p>
                                <h3 className='text-xl font-bold'>Technologies</h3>
                                <div className='flex gap-2 flex-wrap'>
                                    <button className='btn btn-sm bg-[#FFA500] text-white capitalize hover:text-black'>Tailwind</button>
                                    <button className='btn btn-sm bg-[#FFA500] text-white capitalize hover:text-black'>React js</button>
                                    <button className='btn btn-sm bg-[#FFA500] text-white capitalize hover:text-black'>Node js</button>
                                    <button className='btn btn-sm bg-[#FFA500] text-white capitalize hover:text-black'>Express js</button>
                                    <button className='btn btn-sm bg-[#FFA500] text-white capitalize hover:text-black'>Firebase</button>
                                    <button className='btn btn-sm bg-[#FFA500] text-white capitalize hover:text-black'>JWT</button>
                                    <button className='btn btn-sm bg-[#FFA500] text-white capitalize hover:text-black'>MongoDB</button>
                                </div>



                                <div className="flex justify-center gap-5">
                                    <a href="https://github.com/itscopebd/toyfriend-client" target='_blank' className='text-[#FFA500] flex items-center gap-2'> <FaGithub></FaGithub> GitHub Link </a>
                                    <a href="https://toyfriend-f917a.web.app/" target='_blank' className='text-[#FFA500] flex items-center gap-2'> <FaLink></FaLink> Live Link</a>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-base-100 shadow-xl">
                            <figure className='bg__react2 project__image'>

                            </figure>
                            <div className="card-body">
                                <p className='text-justify'>This website is made with exercises. On this website you will find exercise instructors. You can enroll in the class. Admin can make a user an admin or instructor. Admin user and instructor can login and logout</p>
                                <h3 className='text-xl font-bold'>Technologies</h3>
                                <div className='flex gap-2 flex-wrap'>
                                    <button className='btn btn-sm bg-[#FFA500] text-white capitalize hover:text-black'>Tailwind</button>
                                    <button className='btn btn-sm bg-[#FFA500] text-white capitalize hover:text-black'>React js</button>
                                    <button className='btn btn-sm bg-[#FFA500] text-white capitalize hover:text-black'>Node js</button>
                                    <button className='btn btn-sm bg-[#FFA500] text-white capitalize hover:text-black'>Express js</button>
                                    <button className='btn btn-sm bg-[#FFA500] text-white capitalize hover:text-black'>Firebase</button>
                                    <button className='btn btn-sm bg-[#FFA500] text-white capitalize hover:text-black'>JWT</button>
                                    <button className='btn btn-sm bg-[#FFA500] text-white capitalize hover:text-black'>MongoDB</button>
                                    <button className='btn btn-sm bg-[#FFA500] text-white capitalize hover:text-black'>Stripe Js</button>
                                </div>



                                <div className="flex justify-center gap-5">
                                    <a href="https://github.com/itscopebd/summer-camp-school-client" target='_blank' className='text-[#FFA500] flex items-center gap-2'> <FaGithub></FaGithub> GitHub Link </a>
                                    <a href="https://musiclearner-cdea8.web.app/" target='_blank' className='text-[#FFA500] flex items-center gap-2'> <FaLink></FaLink> Live Link</a>
                                </div>
                            </div>
                        </div>

                        <div className="card bg-base-100 shadow-xl">
                            <figure className='bg__react3 project__image'>

                            </figure>
                            <div className="card-body">
                                <p className='text-justify'>You can hire cook from this website. According to their work experiences. You can also hire them by looking at their client's reviews. Whose life can be seen and so on.</p>
                                <h3 className='text-xl font-bold'>Technologies</h3>
                                <div className='flex gap-2 flex-wrap'>
                                    <button className='btn btn-sm bg-[#FFA500] text-white capitalize hover:text-black'>Tailwind</button>
                                    <button className='btn btn-sm bg-[#FFA500] text-white capitalize hover:text-black'>React js</button>
                                    <button className='btn btn-sm bg-[#FFA500] text-white capitalize hover:text-black'>Node js</button>
                                    <button className='btn btn-sm bg-[#FFA500] text-white capitalize hover:text-black'>Express js</button>
                                    <button className='btn btn-sm bg-[#FFA500] text-white capitalize hover:text-black'>Firebase</button>
                                    <button className='btn btn-sm bg-[#FFA500] text-white capitalize hover:text-black'>JWT</button>
                                    <button className='btn btn-sm bg-[#FFA500] text-white capitalize hover:text-black'>MongoDB</button>

                                </div>



                                <div className="flex justify-center gap-5">
                                    <a href="https://github.com/itscopebd/foodzoon" target='_blank' className='text-[#FFA500] flex items-center gap-2'> <FaGithub></FaGithub> GitHub Link </a>
                                    <a href="https://email-password-auth-902dd.web.app/" target='_blank' className='text-[#FFA500] flex items-center gap-2'> <FaLink></FaLink> Live Link</a>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-base-100 shadow-xl">
                            <figure className='bg__react4 project__image'>

                            </figure>
                            <div className="card-body">
                                <p className='text-justify'> Donations can be found from this website. Donation can update his account. User can login and register. Admin can approve donation etc</p>
                                <h3 className='text-xl font-bold'>Technologies</h3>
                                <div className='flex gap-2 flex-wrap'>
                                    <button className='btn btn-sm bg-[#FFA500] text-white capitalize hover:text-black'>Tailwind</button>
                                    <button className='btn btn-sm bg-[#FFA500] text-white capitalize hover:text-black'>React js</button>
                                    <button className='btn btn-sm bg-[#FFA500] text-white capitalize hover:text-black'>Node js</button>
                                    <button className='btn btn-sm bg-[#FFA500] text-white capitalize hover:text-black'>Express js</button>
                                    <button className='btn btn-sm bg-[#FFA500] text-white capitalize hover:text-black'>Firebase</button>
                                    <button className='btn btn-sm bg-[#FFA500] text-white capitalize hover:text-black'>JWT</button>
                                    <button className='btn btn-sm bg-[#FFA500] text-white capitalize hover:text-black'>MongoDB</button>

                                </div>



                                <div className="flex justify-center gap-5">
                                    <a href="https://github.com/itscopebd/foodzoon" target='_blank' className='text-[#FFA500] flex items-center gap-2'> <FaGithub></FaGithub> GitHub Link </a>
                                    <a href="https://email-password-auth-902dd.web.app/" target='_blank' className='text-[#FFA500] flex items-center gap-2'> <FaLink></FaLink> Live Link</a>
                                </div>
                            </div>
                        </div>

                    </div>

                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Projects;