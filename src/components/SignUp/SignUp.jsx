import React from 'react';

const SignUp = () => {
    return (
        <div>
         <div className="hero bg-base-200 min-h-screen ">
  <div className="hero-content flex-col lg:flex">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sign Up now!</h1>
      
    </div>
    <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn  text-center text-2xl border-[#331A15] border-1 bg-[#D2B48C] text-[#331A15]">Login</button>
        </fieldset>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default SignUp;