import { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="border border-[#2e5c84] p-6 max-w-xl mx-auto mt-8 mb-8">
      <h2 className="text-center text-white bg-orange-500 border border-[#2e5c84] font-bold text-2xl py-3 mb-6 rounded-md">
        Login Here
      </h2>

      <form className="space-y-5">
        <div>
          <label className="block">
            Student Id:
            <input
              type="text"
              placeholder="Enter your Student Id"
              className="w-full border rounded-full px-4 py-2 mt-1"
              required
            />
          </label>
        </div>

        <div>
          <label className="block ">
            Password:
            <p className="text-sm text-gray-500">
              (Please enter your Password)
            </p>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your Password"
              className="w-full border rounded-full px-4 py-2 mt-1"
              required
            />
          </label>
          <div className="mt-2">
            <label className="text-sm">
              <input
                type="checkbox"
                onChange={() => setShowPassword(!showPassword)}
                className="mr-1"
              />
              Show Password
            </label>
          </div>
        </div>

        <div className="flex space-x-4">
          <Link to="/InstructionPage"
            type="submit"
            className="bg-[#2e5c84] border border-orange-500 cursor-pointer text-white rounded-md hover:bg-gradient-to-r from-[#2e5c84] to-orange-500 transition font-medium px-6 py-2"
          >
            Submit
          </Link>
          {/* .<button
            type="reset"
            className="bg-[#2e5c84] cursor-pointer text-white rounded-md hover:bg-gradient-to-r from-[#2e5c84] to-orange-500 transition font-medium px-6 py-2 "
          >
            Reset
          </button> */}
        </div>

        <div className="flex space-x-4">
          <Link to ="/ForgotPass" className="bg-[#2e5c84] border border-orange-500 cursor-pointer text-white rounded-md hover:bg-gradient-to-r from-[#2e5c84] to-orange-500 transition font-medium px-6 py-2">
            Forgot Password
          </Link>
          <Link to="/RegistrationForm" className="bg-[#2e5c84] border border-orange-500 cursor-pointer text-white rounded-md hover:bg-gradient-to-r from-[#2e5c84] to-orange-500 transition font-medium px-6 py-2">
            New Candidate for Exam
          </Link>
          <Link to="/RegistrationForm" className="bg-[#2e5c84] border border-orange-500 cursor-pointer text-white rounded-md hover:bg-gradient-to-r from-[#2e5c84] to-orange-500 transition font-medium px-6 py-2">
            New Candidate for Workshop
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
