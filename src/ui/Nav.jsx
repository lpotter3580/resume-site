import { useState } from "react";
import '../App.css';
import LinkButton from "./LinkButton";
import NavLinksData from "../data/links.json";

export default function NavBar ({activeLink}) {

    const imgUrl = new URL('/logan1.jpg', import.meta.url).href;

    const linkDataArr = [];
    Object.keys(NavLinksData).forEach(key => linkDataArr.push({href: NavLinksData[key].href, text: NavLinksData[key].text, icon:NavLinksData[key].icon, external: NavLinksData[key].external}));
    
    for(let i = 0; i < linkDataArr.length; i++){
        if(linkDataArr[i].text === activeLink){
            linkDataArr[i].href = "#";
            linkDataArr[i].external = false;
            break;
        }
    }

    const navLinks = linkDataArr.map(button =>
        <li key={button.text}><LinkButton href={button.href} text={button.text} external={button.external}/></li>
    );
    return (
        <>
        <header class="container">
            <a href="#"><img alt="Logan Potter" src={imgUrl} id="icon" onclick="advanceImage()"></img></a>
            <nav>
                <ul class="container">
                    {navLinks}
                </ul>
            </nav>
        </header>
        </>
    )
}