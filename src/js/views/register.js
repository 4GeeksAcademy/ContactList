import React from "react";

export const Register = () => {

    const handleChange = (event) => {
        console.log(event.target.value)
    }

    return(
        <div className="container">
            <div className="row">            
                <h3 className="mb-3">Registro de Contactos</h3>
                <div className="col-12">
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Full Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Full Name" onChange={handleChange}/>
                    </div>
                </div>
                <div className="col-12">
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Email"/>
                    </div>
                </div>
                <div className="col-12">
                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">Address</label>
                        <input type="text" className="form-control" id="address" placeholder="Address"/>
                    </div>
                </div>
                <div className="col-12">
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <input type="n" className="form-control" id="phone" placeholder="Phone Number"/>
                    </div>
                </div>
                <div className="col-12">
                    <div className="mb-3">
                        <label htmlFor="agenda_slug" className="form-label">Agenda</label>
                        <input type="text" className="form-control" id="agenda_slug" placeholder="Maria's Agenda" disabled/>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-info col-5">Registrar Contacto</button>
                </div>
            </div>
        </div>
        
    )

}

/*
        "address": "47568 NW 34ST, 33434 FL, USA",
        "agenda_slug": "my_super_agenda",
        "email": "dave@gmail.com",
        "full_name": "Dave Bradley",
        "id": 90917025568,
        "phone": "7864445566"
*/