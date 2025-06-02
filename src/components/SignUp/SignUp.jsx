import React, { useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash, FaSlash } from 'react-icons/fa6';

const SignUp = () => {
const [errorMessage,setErrorMassage]=useState('')
const [success,setSuccess]=useState(false)
const [showPassword,setShowPassword]=useState(false)
  const navigate= useNavigate()
    const {createUser}= useContext(AuthContext)
    
    const handleSignUP=e=>{
      e.preventDefault()
const form =e.target;
const email =form.email.value;
const name =form.name.value;
const password =form.password.value;
const terms =form.terms.checked;
const singUp= {email,password,name,terms}
console.log(singUp)

setErrorMassage('')
setSuccess(false)
if(!terms){
  setErrorMassage('please accept our terms and conditions')
  return
}
const passwordRegex= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;
if(!passwordRegex.test(password)){
setErrorMassage('At least one uppercase,one lowercase,one number and at least one special character')
return
}
createUser(email,password)
.then(result=>{
  console.log(result)
  e.target.reset()
  navigate('/SignIn')
  setSuccess(true)
})
.catch(error=>{
  console.log('error',error.message)
  setErrorMassage(error.message)
  setSuccess(false)
})
    }
    return (
        <div>
         <div className="hero bg-base-200 min-h-screen ">
  <div className="hero-content flex-col lg:flex">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sign Up now!</h1>
      
    </div>
    <form onSubmit={handleSignUP} className="card bg-base-100 w-full shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset relative">
          <label className="label">Name</label>
          <input type="text" className="input w-full" placeholder="Enter Your Name" name='name' required />
          <label className="label">Email</label>
          <input type="email" className="input w-full" placeholder=" Enter Your Email" name='email' required />
          <label className="label">Password</label>
          <input type={showPassword ? 'text' : 'password'}className="input w-full" placeholder=" Enter Your Password"  name='password' required/>
         <button className='bnt-sm absolute right-3 top-45' onClick={()=>{setShowPassword(!showPassword)}}> {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye />}</button>
          <div><a className="link link-hover">Forgot password?</a></div>
          <fieldset className="fieldset bg-base-100 border-base-300 rounded-box  border p-4 w-full">
  <label className="label ">
    <input type="checkbox" name='terms' defaultChecked className="checkbox" />
  Accept our Terms and Conditions
  </label>
</fieldset>
          <button  className="btn  text-center text-2xl border-[#331A15] border-1 bg-[#D2B48C] text-[#331A15]">Sign Up</button>
           <p>Already Have an Account Please! <Link to={'/signIn'} className='text-blue-700 underline'>Sign In</Link> </p>
       <p className=' text-red-700'>{errorMessage&& <>{errorMessage}</> }</p>
      {
        success && Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your Account bee Created Succesfully",
  showConfirmButton: false,
  timer: 1500
})
      }
        </fieldset>
      </div>
    </form>

  </div>
</div>
        </div>
    );
};

export default SignUp;