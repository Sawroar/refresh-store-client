import React from 'react';
import errorPage from '../../../images/404/404.gif'
const ErrorPage = () => {
    return (
        <div className='flex justify-center items-center'>
            <img className='text-center' src={errorPage} alt="" />
        </div>
    );
};

export default ErrorPage;