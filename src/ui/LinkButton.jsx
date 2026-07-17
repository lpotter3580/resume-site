import { useState } from "react";
import '../App.css';
import { FaDownload, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function LinkButton({text, href, external}) {
    if(external){
        let icon = "";
        if(text === "Resume"){
            icon = <FaDownload class="icon"/>;
        }
        if(text === "Email me!"){
            icon = <FaEnvelope class="icon"/>;
        }
        return (
            <>
                <a href={href} target="_blank" class="linkButton" download>{icon}{text}</a>
            </>
        )
    }else{
        let linkText = "/" + text.toLowerCase();
        linkText = linkText.replace(" ", "-");
        if(linkText === "/home"){
            linkText = "/";
        } 
        return (
            <>
                <Link to={linkText} class="linkButton">{text}</Link>
                
            </>
        )
    }
}