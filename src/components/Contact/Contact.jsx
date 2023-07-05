import React from 'react';
import Lottie from 'react-lottie';
import animationData from "../../lottie/email.json"
const Contact = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <div>
            <div className='py-16 container mx-auto'>
                <div className='relative section__title mt-10'>
                    <h3 className='text-center py-3 text-4xl text-white'>Contact With Me</h3>
                </div>
                <div className='flex gap-10 items-center'>
                    <div className='w-6/12'>
                        <form className='flex gap-5 flex-col'>
                            <div>
                                <label htmlFor="" className='text-white'>Your Name</label>
                                <input type="text" placeholder="Name" className="input w-full" />
                            </div>
                            <div>
                                <label htmlFor="" className='text-white'> Your Email</label>
                                <input type="email" placeholder="Email" className="input w-full" />
                            </div>
                            <div>
                                <label htmlFor="" className='text-white'>Your Message</label>
                                <textarea rows={5} className="textarea w-full" placeholder="Message"></textarea>
                            </div>
                            <div>
                                <button className='btn btn-sm btn-outline inline text-white capitalize rounded-md px-7'>Send</button>
                            </div>
                        </form>
                    </div>
                    <div className='w-6/12'>
                        <Lottie
                            options={defaultOptions}
                            height={700}
                            width={700}
                        />
                    </div>
                </div>



            </div>
        </div>
    );
};

export default Contact;