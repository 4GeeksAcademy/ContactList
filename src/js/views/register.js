import React, { useState } from "react";
import { useNavigate } from "react-router";

export const Register = () => {

    const navigate = useNavigate()
    const [data, setData] = useState({
        full_name: "",
        email:"",
        address:"",
        phone:"",
        agenda_slug:"mariaAgenda"
    });

    const handleChange = (event) => {
        setData(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(data)

        const config = {
            method: "POST", // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers: {
              "Content-Type": "application/json"
            }
        }    
        
        fetch("https://playground.4geeks.com/apis/fake/contact/", config)
        .then((res) => res.json()) 
        .catch((error) => console.error("Error:", error))    
        .then((response) => navigate("/"));
        
    };


    return(
        <div className="container">
            <div className="row">
                <form onSubmit={handleSubmit}>            
                    <h3 className="mb-3">Registro de Contactos</h3>
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
                        <button className="btn btn-info col-5" type="submit">Registrar Contacto</button>
                    </div>
                </form>
            </div>
        </div>
        
    )

}

