import React from 'react'
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Mail, Lock } from "lucide-react";

const Login = () => {


    
  return (
    <>

    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        {/* Left Section */}
        <div className="bg-red-400 text-white p-8 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome back!</h1>
            <p className="mb-6">Rise and grind, it's habit time</p>
            <p className="mb-3">Don’t have an account?</p>
            <button className="bg-white text-red-500 font-semibold px-6 py-2 rounded-full hover:bg-gray-100 transition">
              Sign Up
            </button>
          </div>
          {/* Illustration */}
          <div className="mt-8 flex justify-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="illustration"
              className="w-64"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Log In</h2>

          {/* Email */}
          <div className="mb-4 relative">
            <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
            <input
              type="email"
              placeholder="Email"
              className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-red-300 outline-none"
            />
          </div>

          {/* Password */}
          <div className="mb-2 relative">
            <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-red-300 outline-none"
            />
          </div>

          <a href="#" className="text-sm text-red-400 mb-4 block">
            Forget your password?
          </a>

          <button className="w-full bg-red-400 text-white py-2 rounded-lg font-semibold hover:bg-red-500 transition">
            Login
          </button>

          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="px-2 text-gray-400 text-sm">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Social Logins */}
          <button className="w-full flex items-center justify-center gap-2 border py-2 rounded-lg mb-3 hover:bg-gray-50">
            <FaFacebook className="text-blue-500" /> Sign up with Facebook
          </button>

          <button className="w-full flex items-center justify-center gap-2 border py-2 rounded-lg hover:bg-gray-50">
            <FaGoogle className="text-red-500" /> Sign up with Google
          </button>
        </div>
      </div>
    </div>
  


    </>
  )
}

export default Login