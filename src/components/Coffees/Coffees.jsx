import React, { useState } from 'react';
import { FaEye } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Link, NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';

const Coffees = ({ coffee, }) => {
    const {_id, name, photo, chef, taste, category, price, supplier } = coffee


    const handleDelete=(_id)=>{
fetch(`https://refresh-store-server.vercel.app/coffee/${_id}`,{
    method :'DELETE',
           
})
.then(res=>res.json())
.then(data=>{
    if(data.deletedCount >0){
       Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
    // const remaining= coffees.filter(cof=>cof.id !== _id)
    // setCoffees(remaining)
  }
});
    }
})
    }

    return (
        <div>
            <div className='flex items-center gap-5 bg-[#F5F4F1] lg:w-[648px] lg:h-[300px] rounded-2xl p-5'>
                <div><img src={photo} alt="" /></div>

                <div>
                    <p className='text-[#1B1A1A] text-xl'>Name: <span className='text-gray-600'>{name}</span></p>
                    <p className='text-[#1B1A1A] text-xl'>Chef: <span className='text-gray-600'>{chef}</span></p>
                    <p className='text-[#1B1A1A] text-xl'>Price:<span className='text-gray-600'>{price}</span></p>
                </div>
                <div>
                   {/* <Link to={`coffeeDetails/${_id}`}></Link>  */}
                   <Link><FaEye className='bg-[#D2B48C] rounded text-white text-2xl p-1 cursor-pointer' /></Link>
                   <Link to={`updateCoffee/${_id}`}> <MdEdit className='bg-[#3C393B] rounded text-white text-2xl p-1 mt-4 cursor-pointer' /></Link>
                    <MdDelete onClick={()=>handleDelete(_id)} className='bg-[#EA4744] rounded text-white text-2xl p-1 mt-4 cursor-pointer' />
                </div>

            </div>
        </div>
    );
};

export default Coffees;