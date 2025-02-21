import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import SocialLogin from "../Components/SocialLogin";

const SignUp = () => {
  const axiosPublic = useAxiosPublic();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      // console.log(loggedUser);
      updateUserProfile(data.name, data.photo).then(() => {
        // Create user entry to DB-->
        const userInfo = {
          name: data.name,
          email: data.email,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          if (res.data.insertedId) {
            console.log("user added to db");
            reset();
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "User Created Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/");
          }
        });
      });
    });
  };
  return (
    <>
      <Helmet>
        <title>Sign Up || Bistro Boss</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen w-10/12 mx-auto">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up Now</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600 my-1">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  {...register("photo", { required: true })}
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  className="input input-bordered"
                />
                {errors.photo && (
                  <span className="text-red-600 my-1">
                    Photo URL is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
                {errors.email && (
                  <span className="text-red-600 my-1">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern:
                      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,20}$/,
                  })}
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                {errors.password?.type === "required" && (
                  <span className="text-red-600">Password is Required</span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-600">
                    Password must be 6 Character
                  </span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className="text-red-600">
                    Password maximum 20 Character
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-600">
                    Password must contain a number, uppercase and lowercase
                  </span>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <p className="text-center mb-5">
              <small>
                Already Have an Account?{" "}
                <Link to="/login" className="text-red-600 font-bold">
                  Login
                </Link>
              </small>
            </p>
            <div className="flex justify-center items-center pb-10">
              <SocialLogin />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
