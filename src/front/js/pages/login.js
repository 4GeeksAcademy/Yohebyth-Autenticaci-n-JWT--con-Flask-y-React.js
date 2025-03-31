import React from "react";
import { Dataform } from "../component/dataform";

export const Login = () => {

    return (
        <div className="jumbotron">
            <h1 className="Title">Login</h1>
            <Dataform page={"login"}/>
        </div>
    );
};