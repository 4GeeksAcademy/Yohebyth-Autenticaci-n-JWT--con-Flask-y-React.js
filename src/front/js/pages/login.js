import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Dataform } from "../component/dataform";

export const Login = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    return (
        <div className="jumbotron">
            <h1 className="Title">Login</h1>
            <Dataform />
        </div>
    );
};