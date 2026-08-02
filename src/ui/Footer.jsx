import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import getNavLinks from "../data/getNavLinks";

export default function Footer(){
    let navLinks = getNavLinks();
    return (
        <>
            <footer>
                <h4>Logan Potter</h4>
                <nav class="vertical">
                    <a href="mailto: lpotter3580@gmail.com" target="_blank"><FaEnvelope/>lpotter3580@gmail.com</a>
                    <a href="https://github.com/lpotter3580" target="_blank"><FaGithub/>github</a>
                    <a href="https://www.linkedin.com/in/lpotter3580/" target="_blank"><FaLinkedin/>linkedin</a>
                </nav>
            </footer>
        </>
    );
}