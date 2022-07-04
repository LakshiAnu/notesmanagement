import React, {useState} from 'react'
import './Register.css';
import {Link} from 'react-router-dom';

function Register() {
    
    const [inpvalue, setInpvalue] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        mobile: "",
        type: "",
        dob: "",
    });
    const setData = (e) => {
        const {name, value} = e.target;
        setInpvalue((preval)=>{
            return {
                ...preval,
                [name]: value
            }
        });
    }
    return (
    <div className="container">
        <div className="Register">
            <div className="col-md-10 register-container">
                <h2>Register</h2>
                <form className="row text-start" style={{marginTop: '5rem'}}>
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label htmlFor="firstName">First Name</label>
                            <input type="firstName" className="form-control" id="firstName" name="firstName" placeholder="Jane" required value={inpvalue.firstName} onChange={setData} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" className="form-control" id="email" name="email" placeholder="name@example.com" required value={inpvalue.email} onChange={setData} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="mobile">Mobile</label>
                            <input type="number" className="form-control" id="mobile" name="mobile" placeholder="94xxxxxxxxx" required value={inpvalue.mobile} onChange={setData} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="type">User Type</label>
                            <select id="type" name="type" className="form-select" required value={inpvalue.type} onChange={setData}>
                                <option value="">Select User Type</option>
                                <option value="admin">Admin</option>
                                <option value="user">User</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="lastName" className="form-control" id="lastName" name="lastName" placeholder="Doe" required value={inpvalue.lastName} onChange={setData} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="dob">Date of Birth</label>
                            <input type="date" className="form-control" id="dob" name="dob" required value={inpvalue.dob} onChange={setData} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" name="password" placeholder="***********" required value={inpvalue.password} onChange={setData} />
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