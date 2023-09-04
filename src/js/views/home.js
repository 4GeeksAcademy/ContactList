import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";


export const Home = () => {

	const [contacts, setContacts] = useState([])
	const [task,setTask] = useState ([]);
	const navigate = useNavigate()
	
	useEffect(() => {
		fetch ("https://playground.4geeks.com/apis/fake/contact/agenda/Maria's Agenda")
		.then(response => response.json())
		.then(response => {
			console.log(response)
			setContacts(response)
		})
	}, [])

		
	// const deleteContact = (contact_id) => {
	// 	const config = {
	// 		method: "DELETE",
	// 	}
	// fetch (`https://playground.4geeks.com/apis/fake/contact/${contact_id}`, config)
	// .then ((response)=> response.json())
	// .then (response => console.log("success"))
	// };



	return(
	
	<div className="text-center mt-5">
		<Link to={"/register"} className="btn btn-info"> Registrar nuevo contacto</Link>
		<div className="card mb-3">
			{contacts.map((contact, index)=> { 
				return( 
					<div className="row g-0" key={index}>
						<div className="col-12 col-md-8 contact-text-container">
							<div className="card-body">
								<div className="row">
									<h5 className="col-10 card-title contact-text mt-3" id="contact-tittle">{contact.full_name}</h5>
									<div className="d-flex justify-content-end">
										<i className="fas fa-times" onClick={()=> setTask(task.filter((t,currentIndex) => index != currentIndex))}></i>
										<Link to={`/editContact/${contact.id}`} className="col-1 far fa-edit"></Link>									
									</div>
										
									{/* <button className="col-1 fas fa-trash button-delete" onClick={() => {deleteContact(contact.id)}} ></button> */}
								</div>
								<p className="card-text contact-text"><i className="fas fa-map-marker-alt me-3"></i>{contact.address}</p>
								<p className="card-text contact-text"><i className="fas fa-phone me-3"></i>{contact.phone}</p>
								<p className="card-text contact-text"><i className="fas fa-envelope me-3"></i>{contact.email}</p>
							</div>
						</div>
				</div>
				)
				})
			}
		</div>
	</div>
	)
};
