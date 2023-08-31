import React from "react";

export const Register = () => {

    const handleChange = (event) => {
        console.log(event.target)
    }

    return(
        <div classNameName="container">
            <div classNameName="row">            
                <h3 classNameName="mb-3">Registro de Contactos</h3>
                <div classNameName="col-12">
                    <div classNameName="mb-3">
                        <label for="name" classNameName="form-label">Full Name</label>
                        <input type="text" classNameName="form-control" id="name" placeholder="Full Name" onChange={handleChange}/>
                    </div>
                </div>
                <div classNameName="col-12">
                    <div className="mb-3">
                        <label for="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Email"/>
                    </div>
                </div>
                <div classNameName="col-12">
                    <div className="mb-3">
                        <label for="address" className="form-label">Address</label>
                        <input type="text" className="form-control" id="address" placeholder="Address"/>
                    </div>
                </div>
                <div classNameName="col-12">
                    <div className="mb-3">
                        <label for="phone" className="form-label">Phone</label>
                        <input type="n" className="form-control" id="phone" placeholder="Phone Number"/>
                    </div>
                </div>
                <div classNameName="col-12">
                    <div className="mb-3">
                        <label for="agenda_slug" className="form-label">Agenda</label>
                        <input type="text" className="form-control" id="agenda_slug" placeholder="Maria's Agenda" disabled/>
                    </div>
                </div>
                <div classNameName="d-flex justify-content-center">
                 <button classNameName="btn btn-info col-5">Registrar Contacto</button>
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