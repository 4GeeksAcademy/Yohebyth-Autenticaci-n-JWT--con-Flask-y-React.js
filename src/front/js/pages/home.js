import React, { useContext } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {

	return (
		<div className="text-center mt-5">
			<h1>Hello!</h1>
			<div className="homebuttons">
				<Link to="/login" className="btn btn-dark home-button">login</Link>
				<Link to="/signup" className="btn btn-dark home-button">Signup</Link>
			</div>
			<p>
				<img className="Homeimg"  src="https://fi-hatchbox-production-active-storage-blobs.s3.amazonaws.com/vh4xbi6vccxxnh7y2jhuq919bwft" />
			</p>
		</div>
	);
};
