import React from "react";
import LoginFooter from "./loginFooter/LoginFooter";

const Login = () => {
  return (
    <>
      <div className=" grid grid-cols-3 text-white">
        <div className=" grid-cols-1 "></div>
        <div className=" grid-cols-6 z-10 pt-[40px]">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="max-h-[50px] fill-white ">
            <g>
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </g>
          </svg>
          <div className=" font-bold text-6xl pt-[56px] ">
            <h1>Happening</h1>
            <h1 className="pt-9">now</h1>
          </div>
          <div className="pt-20 text-3xl font-bold ">Join today.</div>
          {/* join button */}
          <div className="pt-5">
            <button className=" w-80 flex justify-center  bg-white text-gray-600 font-bold py-3 px-4 rounded-full ">
              <img className=" w-6 mr-3 " src="../src/assets/g.png" alt="" />
              Sign up with Google
            </button>
            <button className=" w-80 flex justify-center items-center bg-white text-gray-600 font-bold py-3 px-4 rounded-full mt-5 ">
              <i className="fa-brands fa-apple fa-2x mr-3"></i>Sign up with Apple
            </button>
          </div>
          {/* OR */}
          <div className=" flex items-center my-4  w-80 gap-2">
            <hr className="flex-grow border-t border-gray-400 " />
            <span>or</span>
            <hr className="  flex-grow border-t border-gray-400" />
          </div>
          {/* Create account */}
          <button className=" w-80 flex justify-center items-center bg-blue-500 text-white font-bold py-3 px-4 rounded-full mt-5 ">
            Create account
          </button>
          <p className="mt-2 w-80">
            By signing up,you agreee to the <span className=" text-blue-500">Terms of Service</span> and{" "}
            <span className=" text-blue-500">Privacy Policy</span>, including{" "}
            <span className=" text-blue-500">Cookie Use.</span>
          </p>
          <br />
          <br />
          <br />
          <h2 className="px-2 font-bold-400 text-2xl w-80">Already have an account?</h2>
          <button className=" w-80 flex justify-center items-center border bg-black-500 text-blue-500 font-bold py-3 px-4 rounded-full mt-5 ">
            Sign in
          </button>
          
          <LoginFooter/>
        </div>
       
        <div className="col-span-3 text-center"></div>
        
      </div>
      
      
    </>
  );
};

export default Login;
