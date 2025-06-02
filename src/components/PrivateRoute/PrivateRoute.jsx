import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
const {user,loading} =useContext(AuthContext);
if(loading){
    return <div className='text-center'> <span className="loading loading-ring loading-xl "></span></div>
}

if(user){
    return children;
}
    return (
        <Navigate to={'/signIn'}>
            
        </Navigate>
    );
};

export default PrivateRoute;