import { useState } from "react";
import './App.css'

function NavBar () {
    return (
        <>
        <header class="container">
            <a href="#"><img src="images/Logan1.jpg" alt="Logan Potter" id="icon" onclick="advanceImage()"></img></a>
            <nav>
                <ul class="container">
                    <li><a class="active" href="#">Home</a></li>
                    <li><a href="lpotter-resume.pdf" target="_blank"><i class="fa-solid fa-download"></i>Resume</a></li>
                    <li><a href="about-me.html">About Me</a></li>
                </ul>
            </nav>
        </header>
        </>
    )
}

export default NavBar