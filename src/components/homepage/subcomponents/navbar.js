import React, { Component } from 'react';
import "../../../assets/css/bootstrap.min.css";
import "../../../assets/css/bootstrap-override.css";
import "../../../assets/css/style.css";
import Menu from '@mui/icons-material/Menu' ;

import { useNavigate } from "react-router-dom";

export const Navbar = ({pageNumberNow}) => {

    const navigate = useNavigate();

    const handleClick = (path) => {
        navigate(path);
    }
    
    return(
        <div className="relative overlay-2" >

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

                {
                    pageNumberNow === 0 ? 
                    // <a className="nav-link active font-josefin small-text mr-2 ml-2" >Sponsors</a>
                    <a className="navbar-brand font-josefin normal-text pl-3 p-3 mr-2 ml-2" href=""> ❄ HOME </a>
                    : 
                    // <a className="nav-link font-josefin small-text mr-2 ml-2" >Sponsors</a>
                    <a className="navbar-brand font-josefin normal-text pl-3 p-3 active mr-2 ml-2" href="" onClick={() => handleClick('/')}> ❄ HOME </a>
                }

                {/* <a className="navbar-brand font-josefin normal-text pl-3 p-3 mr-2 ml-2" href="#" onClick={() => handleClick('/')}> ❄ HOME </a> */}

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span ><Menu /></span>
                </button>

                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item" >
                            {
                                pageNumberNow === 1 ? 
                                <a style = {{cursor: "pointer"}} className="nav-link active font-josefin small-text mr-2 ml-2" >Sponsor</a>
                                : 
                                <a style = {{cursor: "pointer"}} className="nav-link font-josefin small-text mr-2 ml-2" onClick={() => handleClick('/sponsor')} >Sponsor</a>
                            }
                        </li>
                        <li className="nav-item">{
                                pageNumberNow === 2 ? 
                                <a style = {{cursor: "pointer"}}  className="nav-link active font-josefin small-text mr-2 ml-2" >Sport</a>
                                : 
                                <a style = {{cursor: "pointer"}}   className="nav-link font-josefin small-text mr-2 ml-2"  onClick={() => handleClick('/sport')} >Sport</a>
                            }
                            
                        </li>
                        <li className="nav-item">
                            {
                                pageNumberNow === 3 ? 
                                <a style = {{cursor: "pointer"}}  className="nav-link active font-josefin small-text mr-2 ml-2">Sustainability</a>
                                : 
                                <a style = {{cursor: "pointer"}}  className="nav-link font-josefin small-text mr-2 ml-2"  onClick={() => handleClick('/sustainability')} >Sustainability</a>
                            }
                        </li>
                        <li className="nav-item">
                            {
                                pageNumberNow === 4 ? 
                                <a style = {{cursor: "pointer"}}  className="nav-link active font-josefin small-text mr-2 ml-2">FAQ</a>
                                : 
                                <a style = {{cursor: "pointer"}}  className="nav-link font-josefin small-text mr-2 ml-2" onClick={() => handleClick('/faq')} >FAQ</a>
                            }
                            
                        </li>
                    </ul>
                </div>
            </nav>

        </div>
    )
}