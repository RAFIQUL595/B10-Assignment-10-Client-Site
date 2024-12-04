import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const Login = () => {
  const { handelLogin, handelGoogle, handleGitHub } = useContext(AuthContext);
  const navigate = useNavigate();

  const handelLoginFrom = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    // Get the currently signed-in user
    handelLogin(email, password)
      .then((result) => {
        Swal.fire({
          title: "Login Successful!",
          text: `Your account has been created successfully. Welcome ${result?.user?.displayName}`,
          icon: "success",
        });
        navigate("/");
      })
      .catch((error) => {
        toast.error("Login failed. Please check your credentials.");
      });
  };

  // Google Login
  const handleGoogleLogin = () => {
    handelGoogle()
      .then((result) => {
        Swal.fire({
          title: "Google Login Successful!",
          text: `Your account has been created successfully. Welcome ${result?.displayName}`,
          icon: "success",
        });
        navigate("/");
      })
      .catch((error) => {
        toast.error("Google login failed. Please try again.");
      });
  };

  // GitHub Login
  const handleGitHubLogin = () => {
    handleGitHub()
      .then((result) => {
        Swal.fire({
          title: "GitHub Login Successful!",
          text: `Your account has been created successfully. Welcome ${result?.user?.displayName}`,
          icon: "success",
        });
        navigate("/");
      })
      .catch((error) => {
        toast.error("GitHub login failed. Please try again.");
      });
  };

  return (
    <div className="flex justify-center items-center py-10 bg-gray-100">
      <Helmet>
        <title>Login | Chill Gamer</title>
      </Helmet>
      <form
        onSubmit={handelLoginFrom}
        className="bg-white p-8 rounded shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            className="w-full px-4 py-2 border rounded"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            name="password"
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
          onClick={handleGoogleLogin}
          className="w-full btn py-2 rounded mt-4 transition"
        >
          <FcGoogle></FcGoogle> Login with Google
        </button>
        <button
          type="button"
          onClick={handleGitHubLogin}
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
