import React from 'react';
import coffeimage1 from '../../../images/cups/Rectangle 9.png'
import coffeimage2 from '../../../images/cups/Rectangle 10.png'
import coffeimage3 from '../../../images/cups/Rectangle 11.png'
import coffeimage4 from '../../../images/cups/Rectangle 12.png'
import coffeimage5 from '../../../images/cups/Rectangle 13.png'
import coffeimage6 from '../../../images/cups/Rectangle 14.png'
import coffeimage7 from '../../../images/cups/Rectangle 15.png'
import coffeimage8 from '../../../images/cups/Rectangle 16.png'
const CoffeeVariety = () => {
    return (
        <div>
            <div className='text-center '>
                <p className='text-[#1B1A1A] text-xl'>Follow Us Now</p>
                <h1 className='text-6xl font-medium'>Follow on Instagram</h1>
            </div>
            <div className='flex flex-wrap gap-8 text-center items-center justify-items-center mt-12'>
                <img src={coffeimage1} alt="" />
                <img src={coffeimage2} alt="" />
                <img src={coffeimage3} alt="" />
                <img src={coffeimage4} alt="" />
                <img src={coffeimage5} alt="" />
                <img src={coffeimage6} alt="" />
                <img src={coffeimage7} alt="" />
                <img src={coffeimage8} alt="" />
            </div>
        </div>
    );
};

export default CoffeeVariety;