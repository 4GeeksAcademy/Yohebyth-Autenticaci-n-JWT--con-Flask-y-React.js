import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Dataform, Form } from "../component/dataform";

export const Signup = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    return (
        <div className="jumbotron">
            <h1 className="Title">Signup</h1>
            <Dataform />
        </div>
    );
};