import React, { useContext } from 'react';
import logo from '../../../images/more/logo1.png'
import banground from '../../../images/more/15.jpg'
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
const Navbar = () => {

    const {user,signOutUser} =useContext(AuthContext)


    const handleSignOut=()=>{
        signOutUser()
        .then(()=>{
            console.log('user sign out successfully')
        })
        .catch(error=>{
            console.log('error',error.message)
        })
    }
    const links = <>
        <li><NavLink to={'/'}className='text-white'>Home</NavLink></li>
      {
        user && <>   <li><NavLink to={'/oderCoffee'} className='text-white'>Oder Coffee</NavLink></li>
        <li><NavLink to={'/addNewCoffee'} className='text-white'>Add New Coffee</NavLink></li></>
      }
        <li><NavLink to={'/signUp'} className='text-white'>Sign Up</NavLink></li>
        <li><NavLink to={'/signIn'} className='text-white'>Sign In</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar  shadow-sm" style={{background:`url(${banground})`}}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                           <img className='h-8 w-8' src={logo} alt="" fill="none" viewBox="0 0 24 24" stroke="currentColor" />
                          
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-[#331A15] rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl"> <img className='h-[60px] w-[60px] hidden sm:block' src={logo} alt="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className=' flex items-center justify-center'>

{ user? 
<> 
<span className='text-white mr-3'>  <h1>Hi ! {user?.displayName && user?.photoURL}</h1></span>
<a onClick={handleSignOut} className='btn mr-3 sm:btn-sm'>Sign Out</a>
</> 
    : <Link className='text-white mr-3' to={'/signIn'}>Sign In</Link>}
                        <h1 className='md:text-2xl font-semibold mr-2 text-white'>Espresso Emporium</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;