import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>Hello!</h1>
			<p>
				<img className="Homeimg"  src="https://fi-hatchbox-production-active-storage-blobs.s3.amazonaws.com/vh4xbi6vccxxnh7y2jhuq919bwft" />
			</p>
		</div>
	);
};
