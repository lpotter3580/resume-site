import { useState } from "react";
import '../App.css';
import LinkButton from "./LinkButton";
import NavLinksData from "../data/links.json";

export default function NavBar ({activeLink}) {
    const linkDataArr = [];
    Object.keys(NavLinksData).forEach(key => linkDataArr.push({href: NavLinksData[key].href, text: NavLinksData[key].text, icon:NavLinksData[key].icon, newTab: NavLinksData[key].newTab, active: NavLinksData[key].active}));
    
    for(let i = 0; i < linkDataArr.length; i++){
        if(linkDataArr[i].text === activeLink){
            linkDataArr[i].href = "#";
            linkDataArr[i].active = true;
            linkDataArr[i].newTab = false;
            break;
        }
    }

    const navLinks = linkDataArr.map(button =>
        <li key={button.text}><LinkButton href={button.href} text={button.text} newTab={button.newTab} active={button.active}/></li>
    );
    return (
        <>
        <header class="container">
            <a href="#"><img src="../assets/logan1.jpg" alt="Logan Potter" id="icon" onclick="advanceImage()"></img></a>
            <nav>
                <ul class="container">
                    {navLinks}
                </ul>
            </nav>
        </header>
        </>
    )
}