import React from "react";
import logo from "../images/logo.png";

function Header(){
    return(
        <div className="header">
            <nav className="mainNav navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#" data-aos="zoom-in"> <img src={logo} width="50px" alt="" /><span className="navbar-brand-name">Chatbot</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav" data-aos="zoom-in">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" href="#services">Services</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" href="#team">Team</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
