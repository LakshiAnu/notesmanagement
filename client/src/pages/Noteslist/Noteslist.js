import React,{useState, useEffect} from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import './Noteslist.css';

function Noteslist() {
    const params = useParams();
    const navigate = useNavigate();
    const [notes, setNotes] = useState([]);
    const viewData = async() => {
        const res = await fetch(`http://localhost:8003/getNotes/${params.id}`,{
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
    },[])
    const editData = (id) => {
        navigate(`/notesedit/${params.id}/${id}`);
    }
    const deleteData = async(id) => {
        const res = await fetch(`http://localhost:8003/deleteNote/${id}`,{
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
            }
        })
        const data = await res.json();
        if(res.status === 422 || !data){
            alert("Error: "+data);
        }else{
            alert('Successfully deleted');
            viewData();
        }
    }
    return (
        <div className="container">
            <div className="Noteslist">
                <div className="row">
                    <div className="col-md-6 text-start">
                        <h3>Notes List</h3>
                    </div>
                    <div className="col-md-6 text-end">
                        <Link to={`/notescreate/${params.id}`} className="btn btn-primary me-2">Create</Link>
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
                                    <td><button className="btn btn-primary btn-sm" onClick={() => editData(note._id)}>Edit</button>
                                    <button className="btn btn-danger btn-sm" onClick={() => deleteData(note._id)}>Delete</button>
                                    </td>
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