import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import loginImg from '../../assets/images/login/login.svg'
import { AuthContext } from "../../Context/AuthProvider";

const SignUp = () => {
    const {createUser, updateUser} = useContext(AuthContext);


    const handleEmailPassword = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, email, password);

        createUser(email, password, name)
        .then(result => {
            const user = result.user;
            updateProfile(name);
            console.log(user)
        })
        .catch(error => {
            console.error(error);
        })  
    }

    const updateProfile = (name) => {
        const userInfo = {
            displayName: name
        }
        updateUser(userInfo)
        .then(() => {})
        .catch(error => console.error(error));
    }

  return (
    <div className="hero mb-32 mt-5 md:mt-11">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-4/5 md:mx-10">
          <img className="w-full " src={loginImg} alt="" />
        </div>
        <div className="card md:mx-10 flex-shrink-0 w-full max-w-sm border-2 border-gray-200">
            <h2 className="text-center text-4xl pt-11 font-bold">Sign up</h2>
          <form onSubmit={handleEmailPassword} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="/#" className="label-text-alt link link-hover" alt="fsda">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input type="submit" placeholder="Sign up" className="btn bg-orange-600 border-none hover:bg-orange-600"/>
            </div>
            <p className="text-center mt-7">Already have an account? please <Link className="font-bold text-orange-500" to="/login">Login</Link></p>

          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
