import React, { useState } from "react";

export const Register = () => {

    const [data, setData] = useState({
        name: "",
        email:"",
        address:"",
        phone:"",
        agenda_slug:"Maria's Agenda"
    })

    const handleChange = (event) => {
        setData(event.target.value)
        console.log(event)
    }

    return(
        <div className="container">
            <div className="row">            
                <h3 className="mb-3">Registro de Contactos</h3>
                <div className="col-12">
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Full Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Full Name" onChange={(event)=>{
                            setData({...data, name: event.target.value})
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
                <div className="col-12">
                    <div className="mb-3">
                        <input type="hidden" className="form-control" id="agenda_slug" placeholder="Maria's Agenda" disabled/>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-info col-5">Registrar Contacto</button>
                </div>
            </div>
        </div>
        
    )

}

