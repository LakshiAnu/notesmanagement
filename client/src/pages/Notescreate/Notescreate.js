import React, {useState} from 'react'
import {useParams, useNavigate, Link} from 'react-router-dom';
import "./Notescreate.css";

function Notescreate() {
    const params = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const addNote = async(e) => {
        e.preventDefault();
        const user = params.id;

        const res = await fetch("http://localhost:8003/createNote",{
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                title, description, user
            })
        })

        const data = await res.json();

        if(res.status === 422 || !data){
            alert("Error: "+data);
            console.log(data);
        }else{
            alert("Successfully added");
            navigate(`/noteslist/${user}`);
        }
    }
    return (
        <div className="container">
            <div className="Notescreate">
                <div className="col-md-10 notes-container">
                    <h2>Create a Note</h2>
                    <form className="row text-start" style={{ marginTop: '5rem' }}>
                        <div className="col-md-12">
                            <div className="mb-3">
                                <label htmlFor="title">Title</label>
                                <input type="text" className="form-control" id="title" name="title" placeholder="New Note" required value={title} onChange={(e)=>setTitle(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="txtDescription">Description</label>
                                <textarea name="txtDescription" id="txtDescription" rows="10" placeholder="Description" className="form-control" onChange={(e)=>setDescription(e.target.value)} value={description}></textarea>
                            </div>
                            <div className="mt-2 text-start">
                                <Link to={`/noteslist/${params.id}`} className="btn btn-warning btn-lg me-1">Back</Link>
                                <button className="btn btn-success btn-lg" onClick={addNote}>Save</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Notescreate