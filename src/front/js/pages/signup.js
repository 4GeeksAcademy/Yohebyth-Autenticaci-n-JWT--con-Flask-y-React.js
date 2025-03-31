import React from "react";
import { Dataform } from "../component/dataform";

export const Signup = () => {

    return (
        <div className="jumbotron">
            <h1 className="Title">Signup</h1>
            <Dataform page={"signup"}/>
        </div>
    );
};