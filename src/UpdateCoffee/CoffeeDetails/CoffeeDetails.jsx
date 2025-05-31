import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CoffeeDetails = () => {
    const coffee =useLoaderData()
        const {_id, name, photo, chef, taste, category, price, supplier } = coffee
        console.log(coffee)
    return (
        <div>
            This is Coffee Details of{name} :This is Coffee:{photo}
        </div>
    );
};

export default CoffeeDetails;