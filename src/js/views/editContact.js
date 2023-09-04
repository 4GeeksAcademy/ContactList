import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";



export const EditContact = () => {
	const params = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState({
        full_name: "",
        email:"",
        address:"",
        phone:"",
        agenda_slug:"Maria's Agenda",
    });

	const editContact = (event)=>{
		event.preventDefault();
		fetch (`https://playground.4geeks.com/apis/fake/contact/${params.id}`, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }})
            .then(response => {
				if (response.status === 204) {
				  alert("Contact edited successfully");
				} else {
				  alert("Failed to edit contact");
				}
			})
			.catch(error => {
				alert("An unexpected error occurred while editing contact");
			});
		  };


    return (
        <div className="container">
            <div>
                <form onSubmit={e => editContact(e)}>
                <h3 className="mb-3">Editar Contacto</h3>
                    <div className="col-12">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Full Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Full Name" onChange={(event)=>{
                                setData({...data, full_name: event.target.value})
                            }}/>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Email" onChange={(event)=>{
                                setData({...data, email: event.target.value})
                            }}/>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">Address</label>
                            <input type="text" className="form-control" id="address" placeholder="Address" onChange={(event)=>{
                                setData({...data, address: event.target.value})
                            }}/>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Phone</label>
                            <input type="n" className="form-control" id="phone" placeholder="Phone Number" onChange={(event)=>{
                                setData({...data, phone: event.target.value})
                            }}/>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-info col-5" type="submit">Guardar</button>
                    </div>
                    <Link to="/">Get back</Link>
                </form>
            </div>
        </div>
    );

};