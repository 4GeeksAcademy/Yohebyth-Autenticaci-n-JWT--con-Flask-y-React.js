import React from "react";
import { Dataform } from "../component/dataform";
import "../../styles/index.css";

export const Signup = () => {

    return (
        <div className="jumbotron">
            <h1 className="datah1">Signup</h1>
            <Dataform page={"signup"}/>
        </div>
    );
};