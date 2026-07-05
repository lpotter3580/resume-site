import { useState } from "react";
import '../App.css';
import LinkButton from "./LinkButton";
import { FaDownload } from "react-icons/fa";

export default function NavBar ({activeLink}) {
    if(LinkButton.text === activeLink){
        LinkButton.href = "#";
        LinkButton.active = true;
        LinkButton.newTab = false;
    }
    return (
        <>
        <header class="container">
            <a href="#"><img src="../assets/logan1.jpg" alt="Logan Potter" id="icon" onclick="advanceImage()"></img></a>
            <nav>
                <ul class="container">
                    <li><LinkButton href={"#"} text={"Home"} newTab={false} active={true}/></li>
                    <li><LinkButton href={"../assets/lpotter-resume.pdf"} text={"Resume"} icon={<FaDownload/>} newTab={true} active={false}/></li>
                    <li><LinkButton href={"#"} text={"About Me"} newTab={false} active={false}/></li>
                </ul>
            </nav>
        </header>
        </>
    )
}