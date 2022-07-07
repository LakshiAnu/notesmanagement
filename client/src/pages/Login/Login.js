import React,{useState} from 'react'
import {Link, useNavigate} from 'react-router-dom';
import './Login.css';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const signIn = async(e) => {
        e.preventDefault();
        if(username && password){
            const res = await fetch(`http://localhost:8003/getUserLogin/${username}/${password}`,{
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            })

            const data = await res.json();
            console.log(data);
            
            if(res.status === 422 || !data){
                alert("Error: "+data);
            }else if(data.type == "admin"){
                navigate("/userlist")
            }else if(data.type == "user"){
                navigate("/noteslist");
            }
        }else {
            alert("Please enter your username and password");
        }
    }
    return (
        <div className="container">
            <div className="Login">
                <div className="col-md-6 login-container">
                    <div className="sign-container col-12">
                        <h2>Sign In</h2>
                        <form className="text-start" style={{marginTop: '5rem'}}>
                            <div className="mb-3">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" className="form-control" id="email" placeholder="name@example.com" value={username} onChange={(e)=>setUsername(e.target.value)} />
                            </div>
                            <div className="mb-3">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="***********" value={password} onChange={(e)=>setPassword(e.target.value)} />
                            </div>
                            <div className="d-grid gap-2 mt-5">
                            <button className="btn btn-success btn-lg" onClick={signIn}>Sign In</button>
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