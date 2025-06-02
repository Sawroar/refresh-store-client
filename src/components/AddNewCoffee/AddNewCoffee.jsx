import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaArrowCircleLeft } from "react-icons/fa";
import Swal from 'sweetalert2';
const AddNewCoffee = () => {


    const handleAddCoffee=(event)=>{
        event.preventDefault()
        const form =event.target;
        const name =form.coffee.value;
        const photo =form.photo.value;
        const chef =form.chef.value;
        const taste =form.taste.value;
        const category =form.category.value;
        const price =form.price.value;
        const supplier =form.supplier.value;
const newCoffee ={name,photo,chef,taste,category,price,supplier}

// send data to the server 
fetch('https://refresh-store-server.vercel.app/coffee',{
    method: 'POST',
    headers :{'content-type':'application/json'

    },
    body: JSON.stringify(newCoffee)
})
.then(res=>res.json())
.then(data=>{
      if(data.insertedId){
       Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your coffee has been added",
  showConfirmButton: false,
  timer: 1500
});
    }
})
    }
    return (
        <div className=' bg-[#F4F3F0] lg:p-24'>
            <div className=' flex items-center gap-0.5 ml-4 p-6'>
              <p><NavLink to={'/'}><FaArrowCircleLeft className='block' /></NavLink></p>  
                <p className='cursor-pointer'><NavLink to={'/'}> Back To Home</NavLink></p>
            </div>

            <div>
                <h1 className='text-[#374151] text-5xl font-bold text-center'>Add New Coffee</h1>
                <p className='text-[#1B1A1AB2] text-center mt-8'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. <br /> The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>


<div className='mt-8'>
    <form onSubmit={handleAddCoffee} >
        <div className='md:flex gap-3'>
             <div className='form-control md:w-1/2'>
                    <label className='label'>
                        <span className='label-text text-[#1B1A1ACC] text-xl mb-2'> Coffee Name</span>
                    </label>
                    <label className='input-group'>
                        <input type="text" placeholder='Coffee Name' name='coffee' className='input input-bordered w-full' />
                    </label>
                </div>
             <div className='form-control md:w-1/2'>
                    <label className='label'>
                        <span className='label-text mb-2 text-[#1B1A1ACC] text-xl'> Chef Name</span>
                    </label>
                    <label className='input-group'>
                        <input type="text" placeholder='Chef Name' name='chef' className='input input-bordered w-full' />
                    </label>
                </div>
        </div>
        <div className='md:flex gap-3'>
             <div className='form-control md:w-1/2'>
                    <label className='label'>
                        <span className='label-text mb-2 text-[#1B1A1ACC] text-xl'> Supplier Name</span>
                    </label>
                    <label className='input-group'>
                        <input type="text" placeholder='Supplier Name' name='supplier' className='input input-bordered w-full' />
                    </label>
                </div>
             <div className='form-control md:w-1/2'>
                    <label className='label'>
                        <span className='label-text mb-2 text-[#1B1A1ACC] text-xl'> Taste</span>
                    </label>
                    <label className='input-group'>
                        <input type="text" placeholder='Taste' name='taste' className='input input-bordered w-full' />
                    </label>
                </div>
        </div>
        <div className='md:flex gap-3'>
             <div className='form-control md:w-1/2'>
                    <label className='label'>
                        <span className='label-text mb-2 text-[#1B1A1ACC] text-xl'> Category Name</span>
                    </label>
                    <label className='input-group'>
                        <input type="text" placeholder='Category Name' name='category' className='input input-bordered w-full' />
                    </label>
                </div>
             <div className='form-control md:w-1/2'>
                    <label className='label'>
                        <span className='label-text mb-2 text-[#1B1A1ACC] text-xl'> Price</span>
                    </label>
                    <label className='input-group'>
                        <input type="text" placeholder='Details' name='price' className='input input-bordered w-full' />
                    </label>
                </div>
        </div>

        <input type="text" className=' input input-bordered w-full mb-2 mt-3' placeholder='Photo Url' name='photo' />
        <input type="submit" value={'Add Coffee'} className='btn mt-5 text-center text-2xl border-[#331A15] border-1 bg-[#D2B48C] text-[#331A15] w-full' />
    </form>
</div>
            
        </div>
    );
};

export default AddNewCoffee;