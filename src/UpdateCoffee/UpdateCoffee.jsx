import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateCoffee = () => {
    const coffee= useLoaderData()
    const {_id, name, photo, chef, taste, category, price, supplier } = coffee
    console.log(coffee)
    return (
        <div>
            <h1>This is Coffee:{name} </h1>
            <h1>This is Coffee:{photo} </h1>
        </div>
    );
};

export default UpdateCoffee;