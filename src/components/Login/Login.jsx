import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Mail, Lock } from "lucide-react";
import imgNotes from "../../images/Screenshot 2025-09-14 162956.png"

const Login = () => {



  return (
    <>

    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        {/* Left Section */}
        <div className="bg-[#E35F60] text-white p-8 flex flex-col justify-between">
          <div className="flex flex-col items-center ">
            <h1 className="text-5xl font-bold mb-2 dm-serif-display-regular">Welcome back!</h1>
            <p className="mb-6">Rise and grind, it's habit time</p>
            <p className="mb-3 cursor-pointer hover:underline">Don’t have an account?</p>
            <button className="bg-white text-[#E35F60] cursor-pointer font-stretch-75%  dm-serif-display-regular px-15 py-2 rounded-full hover:bg-gray-100 transition">
              Sign Up
            </button>
          </div>
          {/* Illustration */}
          <div className="mt-8 flex justify-center">
            <img
              src={imgNotes}
              alt="illustration"
              className="w-100"
            />
          </div>
        </div>
        {/* Right Section */}
        <div className="p-8 flex flex-col justify-center">
            <div className="flex justify-center ">
          <h2 className="text-3xl  font-bold dm-serif-display-regular  text-6xl text-gray-800 mb-6">Log In</h2>
            </div>

          {/* Email */}
          <div className="mb-4 relative">
            <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
            <input
              type="email"
              placeholder="Email"
              className="w-full pl-10 pr-3 py-2 border-none bg-gray-200 rounded-lg focus:ring-2 focus:ring-red-300 outline-none"
            />
          </div>

          {/* Password */}
          <div className="mb-2 relative">
            <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-10 pr-3 py-2 border-none bg-gray-200 rounded-lg focus:ring-2 focus:ring-red-300 outline-none"
            />
          </div>

          <a href="#" className="text-sm text-red-400 mb-4 block">
            Forget your password?
          </a>

          <button className="w-full cursor-pointer justify-center bg-red-400 text-white py-2 rounded-lg font-semibold dm-serif-display-regular hover:bg-[#E35F60] transition">
            Login
          </button>

          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="px-2 text-gray-400 text-sm">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Social Logins */}
          <button className="w-full flex items-center justify-start gap-5 dm-serif-display-regular border-none py-2  px-4 rounded-lg mb-3 cursor-pointer bg-gray-200 hover:bg-gray-300">
            <FaFacebook className="text-blue-500 " /> Sign up with Facebook
          </button>

          <button className="w-full flex items-center justify-start dm-serif-display-regular gap-5 border-none  py-2 px-4 rounded-lg outline-none cursor-pointer bg-gray-200 hover:bg-gray-300">
            <FaGoogle className="text-[#E35F60]" /> Sign up with Google
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login