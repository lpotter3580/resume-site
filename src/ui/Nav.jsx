import { useState } from "react";
import '../App.css';
import LinkButton from "./LinkButton";
import NavLinksData from "../data/links.json";
import getNavLinks from "../data/getNavLinks";

export default function NavBar ({activeLink}) {

    const imgUrl = new URL('/logan1.jpg', import.meta.url).href;

    let navLinks = getNavLinks();
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