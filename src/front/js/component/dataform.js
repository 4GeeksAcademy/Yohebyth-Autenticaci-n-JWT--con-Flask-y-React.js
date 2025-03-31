import React, {useContext, useState} from "react";
import { Link, useNavigate} from "react-router-dom";
import { Context } from "../store/appContext";


export const Dataform = ({page}) => {

    const navigate = useNavigate();
    const { actions} = useContext(Context);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

const handleSubmit = async (email, password) => {
    if (page == "signup")
        await actions.signup(email, password)  
        navigate("/login");   
    if (page == "login"){  
        await actions.login(email, password)
        actions.getUser().then(newUser => {
            !newUser? console.log("no autorizado") : navigate("/private");;
        });                
    }        
};

    return (
        <div className="dataform">
            <form onSubmit={ (evt) => {
                evt.preventDefault(); 
                handleSubmit(email, password);
                }}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder = "email" onChange={(evt) => setEmail(evt.target.value)} aria-describedby="emailHelp" required />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder = "password" onChange={(evt) => setPassword(evt.target.value)} required />
                </div>
                <button type="submit" className="btn btn-dark button1">Enviar</button>
            </form>
            <hr className="my-4" />

            <Link to="/">
                <button className="btn btn-dark button1" href="#" role="button"> Back home </button>
            </Link>
        </div>
    );
};
