import React, {useEffect,useState} from 'react'
import {Link} from 'react-router-dom';
import './Userlist.css';
import Userinfo from '../../components/Userinfo/Userinfo';

function Userlist() {
    const [userData, setUserData] = useState([]);
    const [userSingleData, setUserSingleData] = useState([]);
    
    const getData = async() => {
        const res = await fetch("http://localhost:8003/getUsers",{
            method: "GET",
            headers: {
                "Content-type": "application/json"
            }
        })

        const data = await res.json();
        
        if(res.status === 422 || !data){
            alert("Error: "+data);
        }else{
            setUserData(data)
        }
    }

    useEffect(()=>{
        getData()
    },[])

    const viewData = async(id) => {
        const res = await fetch(`http://localhost:8003/getUser/${id}`,{
            method: "GET",
            headers: {
                "Content-type": "application/json"
            }
        })
        const data = await res.json();
        if(res.status === 422 || !data){
            alert("Error: "+data);
        }else{
            setUserSingleData(data)
        }
    }
    return (
        <div className="container">
            <div className="modal" tabindex="-1" id="userModal">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">User Info</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <Userinfo data={userSingleData}/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Userlist">
                <div className="row">
                    <div className="col-md-6 text-start">
                        <h3>Users List</h3>
                    </div>
                    <div className="col-md-6 text-end">
                        <Link to="/" className="btn btn-warning">Logout</Link>
                    </div>
                </div>
                <div className="table-responsive">
                    <table className="table table-bordered table-hover">
                        <thead className="bg-dark text-white">
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Date of Birth</th>
                                <th>Mobile</th>
                                <th>Status</th>
                                <th>Type</th>
                                <th>View</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userData.map((users)=>(
                                <tr key={users._id}>
                                    <td>{users.firstName}</td>
                                    <td>{users.lastName}</td>
                                    <td>{users.email}</td>
                                    <td>{users.dob}</td>
                                    <td>{users.mobile}</td>
                                    <td>{users.status === true ? 'active' : 'not active'}</td>
                                    <td>{users.type}</td>
                                    <td><button className="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#userModal"
                                    onClick={()=>viewData(users._id)}>View</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Userlist