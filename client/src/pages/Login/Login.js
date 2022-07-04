import React from 'react'
import {Link} from 'react-router-dom';
import './Login.css';

function Login() {
    return (
        <div className="container">
        <div className="Login">
            <div className="col-md-6 login-container">
                <div className="sign-container col-12">
                <h2>Sign In</h2>
                <form className="text-start" style={{marginTop: '5rem'}}>
                    <div className="mb-3">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="***********" />
                    </div>
                    <div class="d-grid gap-2 mt-5">
                    <button className="btn btn-success btn-lg">Sign In</button>
                    </div>
                    <div className="mt-3">
                    <p>Don't have an account yet? <Link to="/register" className="register">Register</Link></p>
                    </div>
                </form>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Login