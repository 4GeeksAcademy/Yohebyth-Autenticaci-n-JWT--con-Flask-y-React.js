import React from "react";
import { Dataform } from "../component/dataform";
import { Link} from "react-router-dom";

export const Login = () => {

    return (
        <div className="jumbotron">
            <h1 className="Title">Login</h1>
            <Dataform page={"login"}/>
            <Link to='/private'>
                go to private
            </Link>
        </div>
    );
};