import React from 'react'
import './Register.css';
import {Link} from 'react-router-dom';

function Register() {
    return (
    <div className="container">
        <div className="Register">
            <div className="col-md-10 register-container">
                <h2>Register</h2>
                <form className="row text-start" style={{marginTop: '5rem'}}>
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label htmlFor="firstName">First Name</label>
                            <input type="firstName" className="form-control" id="firstName" placeholder="Jane" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" className="form-control" id="email" placeholder="name@example.com" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="mobile">Mobile</label>
                            <input type="number" className="form-control" id="mobile" placeholder="94xxxxxxxxx" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="type">User Type</label>
                            <select id="type" className="form-select" required>
                                <option value="admin">Admin</option>
                                <option value="user">User</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="lastName" className="form-control" id="lastName" placeholder="Doe" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="dob">Date of Birth</label>
                            <input type="date" className="form-control" id="dob" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="***********" required />
                        </div>
                    </div>
                    <div class="mt-4 text-start">
                        <button className="btn btn-success btn-lg">Create an Account</button>
                    </div>
                    <div className="mt-1 text-start">
                        <p>Already have an account? <Link to="/" className="register">Sign In</Link></p>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}

export default Register