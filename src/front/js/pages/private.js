import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { Login } from "./login";

export const Private = ()=> {
	const navigate = useNavigate();
	const { store, actions } = useContext(Context);
	const [user, setUser] = useState();

	useEffect( () => {
			actions.getUser().then(newUser => setUser(newUser));
			console.log(user);		
	}, [] );		 	 	

	return (
		<div className="jumbotron">			
			<h1>{user ? user.email : navigate("/login")}</h1>
		</div>
	);
};