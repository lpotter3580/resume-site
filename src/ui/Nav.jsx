import { useState } from "react";
import '../App.css';
import LinkButton from "./LinkButton";
import NavLinksData from "../data/links.json";
import getNavLinks from "../data/getNavLinks";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function NavBar ({activeLink}) {

    const imgUrl = new URL('/logo.png', import.meta.url).href;

    let navLinks = getNavLinks();
    return (
        <>
        <header class="container">
            <Link to="/"><img alt="Logan Potter" src={imgUrl} id="icon" onclick="advanceImage()"></img></Link>
            <nav class="desktop">
                <ul class="container">
                    {navLinks}
                </ul>
            </nav>
            <FaBars size={114} class="hamburger-icon mobile" onClick={loadHamburger}/>
            <ul id="hamburgerMenu">
                {navLinks}
            </ul>
        </header>
        </>
    )
}

function loadHamburger(){
    var menu = document.getElementById("hamburgerMenu");
    if (menu.style.display === "none") {
        menu.style.display = "flex";
    } else {
        menu.style.display = "none";
    }
}