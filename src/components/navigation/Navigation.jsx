import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../container/Container";

//Styles
import './Navigation.css'

export const Navigation = (props) => {
    const lang = useContext(UserContext);
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light px-5">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">Breaking Bad Api</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page">{props.language[lang].Inicio}</Link>
                            </li>
                        </ul>
                        <select value={lang} onChange={props.handLang} className="form-inline my-2 my-lg-0">
                            <option value="ES">ES</option>
                            <option value="EN">EN</option>
                        </select>
                    </div>
                </div>
            </nav>
        </>
    )
}