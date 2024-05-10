import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
    const { createUser, updateUserProfile, setLoading } = useAuth();
    const [showPass, setShowPass] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const handleRegister = (e) => {
      e.preventDefault();
      const form = e.target;
      const name = form?.name.value;
      const imageURL = form?.imageURL.value;
      const email = form?.email.value;
      const password = form?.password.value;
      createUser(email, password)
        .then((result) => {
          console.log(result.user);
          updateUserProfile({ displayName: name, photoURL: imageURL })
            .then(() => {
              setLoading(false);
              navigate(location?.state ? location.state : "/");
              toast.success("Registration successful");
            })
            .catch((err) => {
              setLoading(false);
              toast.error(err.message);
            });
        })
        .catch((err) => {
          toast.error(err.message);
          setLoading(false);
        });
    };
    return (
      <div>
        <div className="bg-[#fff9f9] md:p-24 mt-10">
          <h1 className="text-2xl font-bold text-center">Please Register</h1>
          <form onSubmit={handleRegister} className="card-body md:w-3/4  mx-auto">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Name</span>
              </label>
              <input
                type="text"
                required
                name="name"
                placeholder="Enter your name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Photo URL</span>
              </label>
              <input
                type="text"
                required
                name="imageURL"
                placeholder="Photo URL"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <input
                type="email"
                required
                name="email"
                placeholder="Enter your email address"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  required
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered w-full"
                />
                <span
                  className="absolute top-4 right-4"
                  onClick={() => setShowPass(!showPass)}
                >
                  {showPass ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
              <label className="label">
                <a
                  href="#"
                  className="label-text-alt link link-hover font-medium"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#db4437] text-white uppercase">
                Register
              </button>
            </div>
          </form>
          <p className="text-center mt-4">
            Already have an account?{" "}
            <Link className="text-red-600 font-bold" to="/login">
              Login
            </Link>
          </p>
        </div>

      </div>
    );
  };
  
  export default Register;
