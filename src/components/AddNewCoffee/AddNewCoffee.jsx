import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaArrowCircleLeft } from "react-icons/fa";
const AddNewCoffee = () => {
    return (
        <div className=' bg-[#F4F3F0] lg:p-24'>
            <div className=' flex items-center gap-0.5 ml-4 p-6'>
                <FaArrowCircleLeft className='block' />
                <p className='cursor-pointer'><NavLink to={'/'}> Back To Home</NavLink></p>
            </div>

            <div>
                <h1 className='text-[#374151] text-5xl font-bold text-center'>Add New Coffee</h1>
                <p className='text-[#1B1A1AB2] text-center mt-8'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. <br /> The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>


<div className='mt-8'>
    <form >
        <div className='md:flex gap-3'>
             <div className='form-control md:w-1/2'>
                    <label className='label'>
                        <span className='label-text text-[#1B1A1ACC] text-xl mb-2'> Coffee Name</span>
                    </label>
                    <label className='input-group'>
                        <input type="text" placeholder='Coffee Name' name='name' className='input input-bordered w-full' />
                    </label>
                </div>
             <div className='form-control md:w-1/2'>
                    <label className='label'>
                        <span className='label-text mb-2 text-[#1B1A1ACC] text-xl'> Chef Name</span>
                    </label>
                    <label className='input-group'>
                        <input type="text" placeholder='Chef Name' name='name' className='input input-bordered w-full' />
                    </label>
                </div>
        </div>
        <div className='md:flex gap-3'>
             <div className='form-control md:w-1/2'>
                    <label className='label'>
                        <span className='label-text mb-2 text-[#1B1A1ACC] text-xl'> Supplier Name</span>
                    </label>
                    <label className='input-group'>
                        <input type="text" placeholder='Supplier Name' name='name' className='input input-bordered w-full' />
                    </label>
                </div>
             <div className='form-control md:w-1/2'>
                    <label className='label'>
                        <span className='label-text mb-2 text-[#1B1A1ACC] text-xl'> Taste</span>
                    </label>
                    <label className='input-group'>
                        <input type="text" placeholder='Taste' name='name' className='input input-bordered w-full' />
                    </label>
                </div>
        </div>
        <div className='md:flex gap-3'>
             <div className='form-control md:w-1/2'>
                    <label className='label'>
                        <span className='label-text mb-2 text-[#1B1A1ACC] text-xl'> Category Name</span>
                    </label>
                    <label className='input-group'>
                        <input type="text" placeholder='Category Name' name='name' className='input input-bordered w-full' />
                    </label>
                </div>
             <div className='form-control md:w-1/2'>
                    <label className='label'>
                        <span className='label-text mb-2 text-[#1B1A1ACC] text-xl'> Details</span>
                    </label>
                    <label className='input-group'>
                        <input type="text" placeholder='Details' name='name' className='input input-bordered w-full' />
                    </label>
                </div>
        </div>
        <input type="submit" value={'Add Coffee'} className='btn mt-5 text-center text-2xl border-[#331A15] border-1 bg-[#D2B48C] text-[#331A15] w-full' />
    </form>
</div>
            
        </div>
    );
};

export default AddNewCoffee;