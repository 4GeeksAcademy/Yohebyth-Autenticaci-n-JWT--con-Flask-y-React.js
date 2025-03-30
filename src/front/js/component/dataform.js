import React from "react";
import { Link, useNavigate} from "react-router-dom";


export const Dataform = () => {

    const navigate = useNavigate()

const handleSubmit = (e) => {
    e.preventDefault();    
    navigate("/login");
};

    return (
        <div className="dataform">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" required />
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
