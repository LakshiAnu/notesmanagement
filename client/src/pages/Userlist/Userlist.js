import React, {useEffect,useState} from 'react'
import './Userlist.css';

function Userlist() {
    const [userData, setUserData] = useState([]);
    const getData = async() => {
        const res = await fetch("http://localhost:8003/getUsers",{
            method: "GET",
            headers: {
                "Content-type": "application/json"
            }
        })

        const data = await res.json();
        console.log(data);

        if(res.status === 422 || !data){
            alert("Error: "+data);
        }else{
            setUserData(data)
        }
    }
    useEffect(()=>{
        getData()
    },[])
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
                            
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Userlist">
                <h3>Users List</h3>
                <div className="table-responsive">
                    <table className="table table-bordered table-hover bg-dark text-white">
                        <thead>
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
                                    <td><button className="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#userModal">View</button></td>
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