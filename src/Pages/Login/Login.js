import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from '../../assets/images/login/login.svg'
import { AuthContext } from "../../Context/AuthProvider";

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {login} = useContext(AuthContext);

    const from = location?.state?.from?.pathname || '/';

    const handleEmailPassword = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;


        login(email, password)
        .then(result => {
            const user = result.user;
            form.reset();
            const currentUser = {
              email: user.email
            }
            fetch('http://localhost:5000/jwt', {
              method: 'POST',
              headers: {
                'content-type' : 'application/json',
              },
              body: JSON.stringify(currentUser)
            })
            .then(res => res.json())
            .then(data => {
              // console.log(data.token);
              localStorage.setItem('token', data.token);
              navigate(from, {replace: true});
            })
            // console.log(user);
        })
        .catch(error => console.log(error));
    }

  return (
    <div className="hero mb-32 mt-5 md:mt-24">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-4/5 md:mx-10">
          <img className="w-full " src={loginImg} alt="" />
        </div>
        <div className="card md:mx-10 flex-shrink-0 w-full max-w-sm border-2 border-gray-200">
            <h2 className="text-center text-4xl pt-11 font-bold">Login</h2>
          <form onSubmit={handleEmailPassword} className="card-body">
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
              <input type="submit" placeholder="Login" className="btn bg-orange-600 border-none hover:bg-orange-600"/>
            </div>
            <p className="text-center mt-7">Don't have any account? please <Link className="font-bold text-orange-500" to="/signup">Sign up</Link></p>

          </form>
          
        </div>
      </div>
    </div>
  );
};

export default Login;
