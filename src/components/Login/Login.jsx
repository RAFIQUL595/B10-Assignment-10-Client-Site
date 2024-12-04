import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex justify-center items-center py-10 bg-gray-100">
      <form className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border rounded"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 border rounded"
            placeholder="Enter your password"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Login
        </button>
        <button
          type="button"
          className="w-full btn py-2 rounded mt-4 transition"
        >
          <FcGoogle></FcGoogle> Login with Google
        </button>
        <button
          type="button"
          className="w-full btn py-2 rounded mt-4 transition"
        >
          <FaGithub></FaGithub> Login with GitHub
        </button>

        <div className="text-center mt-4">
          <p>
            Don't have an account?{" "}
            <Link to="/register">
              <span className="text-blue-500 cursor-pointer">Register</span>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
