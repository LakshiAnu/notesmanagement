import React, {useState} from 'react'
import "./Notescreate.css";

function Notescreate() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const addNote = async() => {

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
                                <textarea name="txtDescription" id="txtDescription" rows="10" placeholder="Description" className="form-control" onChange={(e)=>setDescription(e.target.value)}>{description}</textarea>
                            </div>
                            <div className="mt-2 text-start">
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