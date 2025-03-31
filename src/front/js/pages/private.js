import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Private = ()=> {
	const navigate = useNavigate();
	const { actions } = useContext(Context);
	const [user, setUser] = useState(null);

	useEffect( () => {
			actions.getUser().then(newUser => {
				!newUser? navigate("/login") : setUser(newUser);
			});		
	}, [navigate, actions] );	 
	
	if (!user) return null;

	const closeSession = () => {
		actions.closeSession();
		navigate("/")
	}

	return (
		<div className="text-center">			
			<h1>{user.email}</h1>
			<p>
				<img className="Homeimg"  src="https://www.mundotoro.com/wp-content/uploads/2017/03/dentro.jpg" />
			</p>
			<button className="btn btn-dark button1" href="#" role="button" onClick={() => closeSession()}> Close session </button>
		</div>
	);
};