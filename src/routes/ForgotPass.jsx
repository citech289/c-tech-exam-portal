import React from "react";
import { Link } from "react-router-dom";

const ForgotPass = () => {
  return (
    <div className="border border-orange-500 p-6 max-w-xl mx-auto mt-8 mb-8">
      <h2 className="text-center text-white bg-[#2e5c84] font-bold text-2xl py-3 mb-6 rounded-md">
        Login Here
      </h2>

      <form className="space-y-5">
        <div>
          <label className="block">
            Email:
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border rounded-full px-4 py-2 mt-1"
              required
            />
          </label>
        </div>

        <div className="flex space-x-4">
          {/* <button
            type="submit"
            className="bg-[#2e5c84] cursor-pointer text-white rounded-md hover:bg-gradient-to-r from-[#2e5c84] to-orange-500 transition font-medium px-6 py-2"
          >
            Submit
          </button> */}
          <button
            type="reset"
            className="bg-[#2e5c84] cursor-pointer text-white rounded-md hover:bg-gradient-to-r from-[#2e5c84] to-orange-500 transition font-medium px-6 py-2"
          >
            Reset
          </button>
          <Link
            to="/"
            className="bg-orange-500 cursor-pointer text-white rounded-md hover:bg-gradient-to-r from-orange-500 to-[#2e5c84] transition font-medium px-6 py-2 flex items-center"
          >
            Back to Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ForgotPass;
