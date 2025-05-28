import React from 'react';
import { FaEye } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import coffee1 from ".././../../images/1.png"
import coffee2 from ".././../../images/2.png"
import coffee3 from ".././../../images/3.png"
import coffee4 from ".././../../images/4.png"
import coffee5 from ".././../../images/5.png"
import coffee6 from ".././../../images/6.png"
import bgimgae from ".././../../images/more/1.png"

const OderCoffee = () => {
    return (
        <div style={{  backgroundImage:`url(${bgimgae})`}}>
            <h1 className='text-center mt-4'>--- Sip & Savor ---</h1>
            <h1 className='text-[#331A15] text-5xl text-center font-bold'>Our Popular Products</h1>
            <div className='flex flex-wrap gap-5 text-center lg:ml-56 mt-4'>
                <div>
                    <div className='flex items-center gap-5 bg-[#F5F4F1] rounded-2xl p-5'>
                        <div><img src={coffee1} alt="" /></div>

                        <div><p className='text-[#1B1A1A] text-xl'>Name: <span className='text-gray-600'>Americano Coffee</span></p>
                            <p className='text-[#1B1A1A] text-xl'>Chef: <span className='text-gray-600'>Mr. Matin Pau</span></p>
                            <p className='text-[#1B1A1A] text-xl'>Price:<span className='text-gray-600'> 890 Taka</span></p>
                        </div>
                        <div>
                            <FaEye className='bg-[#D2B48C] rounded text-white text-2xl p-1 cursor-pointer' />
                            <MdEdit className='bg-[#3C393B] rounded text-white text-2xl p-1 mt-4 cursor-pointer' />
                            <MdDelete className='bg-[#EA4744] rounded text-white text-2xl p-1 mt-4 cursor-pointer' />
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex items-center gap-5 bg-[#F5F4F1] rounded-2xl p-5'>
                        <div><img src={coffee2} alt="" /></div>

                        <div><p className='text-[#1B1A1A] text-xl'>Name: <span className='text-gray-600'>Americano Coffee</span></p>
                            <p className='text-[#1B1A1A] text-xl'>Chef: <span className='text-gray-600'>Mr. Matin Pau</span></p>
                            <p className='text-[#1B1A1A] text-xl'>Price:<span className='text-gray-600'> 890 Taka</span></p>
                        </div>
                        <div>
                            <FaEye className='bg-[#D2B48C] rounded text-white text-2xl p-1 cursor-pointer' />
                            <MdEdit className='bg-[#3C393B] rounded text-white text-2xl p-1 mt-4 cursor-pointer' />
                            <MdDelete className='bg-[#EA4744] rounded text-white text-2xl p-1 mt-4 cursor-pointer' />
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex items-center gap-5 bg-[#F5F4F1] rounded-2xl p-5'>
                        <div><img src={coffee3} alt="" /></div>

                        <div><p className='text-[#1B1A1A] text-xl'>Name: <span className='text-gray-600'>Americano Coffee</span></p>
                            <p className='text-[#1B1A1A] text-xl'>Chef: <span className='text-gray-600'>Mr. Matin Pau</span></p>
                            <p className='text-[#1B1A1A] text-xl'>Price:<span className='text-gray-600'> 890 Taka</span></p>
                        </div>
                        <div>
                            <FaEye className='bg-[#D2B48C] rounded text-white text-2xl p-1 cursor-pointer' />
                            <MdEdit className='bg-[#3C393B] rounded text-white text-2xl p-1 mt-4 cursor-pointer' />
                            <MdDelete className='bg-[#EA4744] rounded text-white text-2xl p-1 mt-4 cursor-pointer' />
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex items-center gap-5 bg-[#F5F4F1] rounded-2xl p-5'>
                        <div><img src={coffee4} alt="" /></div>

                        <div><p className='text-[#1B1A1A] text-xl'>Name: <span className='text-gray-600'>Americano Coffee</span></p>
                            <p className='text-[#1B1A1A] text-xl'>Chef: <span className='text-gray-600'>Mr. Matin Pau</span></p>
                            <p className='text-[#1B1A1A] text-xl'>Price:<span className='text-gray-600'> 890 Taka</span></p>
                        </div>
                        <div>
                            <FaEye className='bg-[#D2B48C] rounded text-white text-2xl p-1 cursor-pointer' />
                            <MdEdit className='bg-[#3C393B] rounded text-white text-2xl p-1 mt-4 cursor-pointer' />
                            <MdDelete className='bg-[#EA4744] rounded text-white text-2xl p-1 mt-4 cursor-pointer' />
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex items-center gap-5 bg-[#F5F4F1] rounded-2xl p-5'>
                        <div><img src={coffee5} alt="" /></div>

                        <div><p className='text-[#1B1A1A] text-xl'>Name: <span className='text-gray-600'>Americano Coffee</span></p>
                            <p className='text-[#1B1A1A] text-xl'>Chef: <span className='text-gray-600'>Mr. Matin Pau</span></p>
                            <p className='text-[#1B1A1A] text-xl'>Price:<span className='text-gray-600'> 890 Taka</span></p>
                        </div>
                        <div>
                            <FaEye className='bg-[#D2B48C] rounded text-white text-2xl p-1 cursor-pointer' />
                            <MdEdit className='bg-[#3C393B] rounded text-white text-2xl p-1 mt-4 cursor-pointer' />
                            <MdDelete className='bg-[#EA4744] rounded text-white text-2xl p-1 mt-4 cursor-pointer' />
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex items-center gap-5 bg-[#F5F4F1] rounded-2xl p-5'>
                        <div><img src={coffee6} alt="" /></div>

                        <div><p className='text-[#1B1A1A] text-xl'>Name: <span className='text-gray-600'>Americano Coffee</span></p>
                            <p className='text-[#1B1A1A] text-xl'>Chef: <span className='text-gray-600'>Mr. Matin Pau</span></p>
                            <p className='text-[#1B1A1A] text-xl'>Price:<span className='text-gray-600'> 890 Taka</span></p>
                        </div>
                        <div>
                            <FaEye className='bg-[#D2B48C] rounded text-white text-2xl p-1 cursor-pointer' />
                            <MdEdit className='bg-[#3C393B] rounded text-white text-2xl p-1 mt-4 cursor-pointer' />
                            <MdDelete className='bg-[#EA4744] rounded text-white text-2xl p-1 mt-4 cursor-pointer' />
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default OderCoffee;