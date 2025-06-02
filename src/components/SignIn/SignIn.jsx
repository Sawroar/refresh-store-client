import { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/firesbase.init";
import { FcGoogle } from "react-icons/fc";
const SignIn = () => {
const navigate= useNavigate();
  const {signInUser,errorMessage,setErrorMassage,signInWithGoogle,showPassword,setShowPassword,setSuccess,success}=useContext(AuthContext)
 const emailRef= useRef()
  const handleSignIn=e=>{
    e.preventDefault()
    const form =e.target;
    const email=form.email.value;
    const password=form.password.value;
  signInUser(email,password)
  .then(result=>{
    console.log(result.user)
    if(! result.user.emailVerified){
      setErrorMassage('Please verify your email address')
    
    }
    else{
      setErrorMassage(true)
    }

    e.target.reset()
    navigate('/')
  })
  .catch(error=>{
    console.log('error',error.message)
  })
  }
 const  handleInGoogleSign=()=>{
signInWithGoogle()
.then(result=>{
  console.log(result)
  navigate('/')
  .then(error=>console.log('error', error.message))
})
 }
 const handleForgetPassword=()=>{
  const email=emailRef.current.value;
  if(!email){
setErrorMassage('Please Provide a Valid Email Address')
  }
  else{
    sendPasswordResetEmail(auth,email)
    .then(()=>{
Swal.fire({
         position: "top-end",
         icon: "success",
         title: "Reset Email Has been Sent. Please Check Your Mail",
         showConfirmButton: false,
         timer: 1500
       })
    })
  }
 }
 

    return (
          <div>
         <div className="hero bg-base-200 min-h-screen ">
  <div className="hero-content flex-col lg:flex">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sign In now!</h1>
      
    </div>
    <form onSubmit={handleSignIn} className="card bg-base-100 w-full shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" ref={emailRef} placeholder=" Enter Your Email" name="email"  required/>
          <label className="label" >Password</label>
          <input type="password" className="input" placeholder=" Enter Your Password" name="password" required />
          <div><a className="link link-hover" onClick={handleForgetPassword}>Forgot password?</a></div>
          <button className="btn  text-center text-2xl border-[#331A15] border-1 bg-[#D2B48C] text-[#331A15]">Login</button>
        <p>New to This Website Please! <Link to={'/SignUp'}  className='text-blue-700 underline'> Sign Up</Link> </p>
<p className="btn btn-ghost  bg-White border-[#331A15] border-1" onClick={handleInGoogleSign}> <FcGoogle className="text-2xl" />Sign In With Google </p>
       <p className=' text-red-700'>{errorMessage&& <>{errorMessage}</> }</p>
        {
               success && Swal.fire({
         position: "top-end",
         icon: "success",
         title: "Your Account Has been Created Succesfully",
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

export default SignIn;