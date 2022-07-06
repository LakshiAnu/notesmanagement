import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import './Noteslist.css';

function Noteslist() {
    const [notes, setNotes] = useState([]);
    const viewData = async() => {
        const res = await fetch("http://localhost:8003/getNotes",{
            method: "GET",
            headers: {
                "Content-type": "application/json"
            }
        })

        const data = await res.json();
        
        if(res.status === 422 || !data){
            alert("Error: "+data);
        }else{
            setNotes(data)
        }
    }
    useEffect(()=>{
        viewData();
    })
    return (
        <div className="container">
            <div className="Noteslist">
                <div className="row">
                    <div className="col-md-6 text-start">
                        <h3>Notes List</h3>
                    </div>
                    <div className="col-md-6 text-end">
                        <Link to="/notescreate" className="btn btn-primary me-2">Create</Link>
                        <Link to="/" className="btn btn-warning">Logout</Link>
                    </div>
                </div>
                <div className="table-responsive">
                    <table className="table table-bordered table-hover">
                        <thead className="bg-dark text-white">
                            <tr>
                                <th>Title</th>
                                <th>Description</th>
                                <th>View</th>
                            </tr>
                        </thead>
                        <tbody>
                            {notes.map((note) => (
                                <tr key={note._id}>
                                    <td>{note.title}</td>
                                    <td>{note.description}</td>
                                    <td><button className="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#userModal"
                                        onClick={() => viewData(note._id)}>View</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Noteslist