import React from 'react';

import bgimgae from ".././../../images/more/1.png"
import { useLoaderData } from 'react-router-dom';
import Coffees from '../Coffees/Coffees';


const OderCoffee = () => {
    const loadedCoffees= useLoaderData();
    
    // const [coffees,setCoffees]=useState(loadedCoffees);

    return (
        <div style={{  backgroundImage:`url(${bgimgae})`}}>
            <h1 className='text-center mt-4'>--- Sip & Savor ---</h1>
            <h1 className='text-[#331A15] text-5xl text-center font-bold'>Our Popular Products {loadedCoffees.length}</h1>
<div className='flex flex-wrap gap-5 text-center lg:ml-30 mt-4'>

            {
                loadedCoffees.map(coffee=><Coffees key={coffee._id}coffee={coffee}></Coffees>)
            }
</div>


        </div>
    );
};

export default OderCoffee;