import React from 'react';

import banner from './../../../images/more/3.png'
import aroma from './../../../images/icons/1.png'
import quality from './../../../images/icons/2.png'
import grades from './../../../images/icons/3.png'
import rosting from './../../../images/icons/4.png'
import CoffeeVariety from '../CoffeVariety/CoffeeVariety';
import Footer from './Footer/Footer';

const Home = () => {
    return (

        <div >
            {/*  navbar section start */}
            <div className=''>
               
                {/* navbar section end*/}

                {/* Banner Section start */}
                <div className='relative'>
                    <img src={banner} className=' h-full md:h-[800px]  w-full ' alt="" />
                    <div className='translate-x-3/12 absolute lg:-translate-y-85 -translate-y-12/12 pr-6'>
                        <h1 className=' text-sm font-bold lg:text-xl  text-white sm:pr-6'>Would you like a Cup of Delicious Coffee?</h1>
                        <p className='text-white  text-xs lg:mt-4 mr-2'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of  <br /> every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                        <button class="btn btn-warning lg:mt-8 mb-3 pt-2">Learn More</button>
                    </div>
                </div>
                {/* Quality Coffe Section  */}
                <section className=' bg-[#ECEAE3] flex md:flex-row flex-col gap-10 pb-12 pt-12 pl-19 pr-22 '>
                    <div>
                        <img src={aroma} alt="" className='h-[70px] w-[70px]' />
                        <h1 className='text-[#331A15] text-4xl mt-4'>Awesome Aroma</h1>
                        <p className='text-2xl mt-2'>You will definitely be a fan of the design & aroma of your coffee</p>
                    </div>
                    <div>
                        <img src={quality} alt="" />
                        <h1 className='text-[#331A15] text-4xl  mt-4' >High Quality</h1>
                        <p className='text-2xl mt-2'>You will definitely be a fan of the design & aroma of your coffee</p>
                    </div>
                    <div>
                        <img src={grades} alt="" />
                        <h1 className='text-[#331A15] text-4xl mt-4'>Pure Grades</h1>
                        <p className='text-2xl mt-2'>You will definitely be a fan of the design & aroma of your coffee</p>
                    </div>
                    <div>
                        <img src={rosting} alt="" />
                        <h1 className='text-[#331A15] text-4xl mt-4'>Proper Roasting</h1>
                        <p className='text-2xl mt-2'>You will definitely be a fan of the design & aroma of your coffee</p>
                    </div>
                </section>
            </div>
            <CoffeeVariety></CoffeeVariety>

        </div>
    );
};

export default Home;