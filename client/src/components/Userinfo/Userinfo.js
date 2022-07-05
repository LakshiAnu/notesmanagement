import React from 'react'

function Userinfo({data}) {
  return (
    <div className="row">
        <div className="col-md-6">
            <div className="row">
                <label className="col-md-5 fw-bold">First Name</label>
                <label className="col-md-7">{data.firstName}</label>
            </div>
            <div className="row mt-2">
                <label className="col-md-5 fw-bold">Email</label>
                <label className="col-md-7">{data.email}</label>
            </div>
            <div className="row mt-2">
                <label className="col-md-5 fw-bold">Date of Birth</label>
                <label className="col-md-7">{data.dob}</label>
            </div>
            <div className="row mt-2">
                <label className="col-md-5 fw-bold">Status</label>
                <label className="col-md-7">{data.status === true ? 'active' : 'not active'}</label>
            </div>
        </div>
        <div className="col-md-6">
            <div className="row">
                <label className="col-md-5 fw-bold">Last Name</label>
                <label className="col-md-7">{data.lastName}</label>
            </div>
            <div className="row mt-2">
                <label className="col-md-5 fw-bold">Mobile</label>
                <label className="col-md-7">{data.mobile}</label>
            </div>
            <div className="row mt-2">
                <label className="col-md-5 fw-bold">Type</label>
                <label className="col-md-7">{data.type}</label>
            </div>
        </div>
    </div>
  )
}

export default Userinfo