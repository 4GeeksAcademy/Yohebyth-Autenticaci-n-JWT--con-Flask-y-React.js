import React from "react";
import { Dataform } from "../component/dataform";
import "../../styles/index.css";

export const Login = () => {

    return (
        <div className="jumbotron">
            <h1 className="datah1">Login</h1>
            <Dataform page={"login"}/>
        </div>
    );
};