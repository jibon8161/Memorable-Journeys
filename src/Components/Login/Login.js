import React from 'react';
import { FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <div>
                <div className="hero min-h-screen bg-base-200 shadow-2xl  shadow-zinc-600">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">


                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text  text-purple-800 font-semibold">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" name='email' className="input input-bordered shadow-inner  shadow-zinc-600 hover:bg-orange-200" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text  text-purple-800 font-semibold">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" name='pass' className="input input-bordered shadow-inner shadow-zinc-600 hover:bg-orange-200" />

                                </div>
                                {/* <div className='text-red-600'><p><small>{error}</small></p></div> */}
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </form>
                            <h1 className='text-purple-800 font-bold'>More login options</h1>
                            <div className="form-control mt-6 mx-auto mb-5 ">

                                <div>
                                    <button className="btn btn-circle btn-outline "><FaGoogle></FaGoogle></button>
                                </div>

                            </div>

                            <p><small>Are you new here? <Link to='/signup'><button className="btn btn-link btn-xs"><small>Register</small></button></Link> </small></p>

                            <p> <button className="btn btn-link btn-xs"><small>Forget password? Don't Worry Click Here </small></button></p>


                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;