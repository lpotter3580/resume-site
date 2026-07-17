import getNavLinks from "../data/getNavLinks";

export default function Footer(){
    let navLinks = getNavLinks();
    return (
        <>
            <footer>
                <h4>Logan Potter</h4>
                <nav class="vertical">
                    <a href="mailto: lpotter3580@gmail.com" target="_blank"><i class="fa-solid fa-envelope"></i>lpotter3580@gmail.com</a>
                    <a href="https://github.com/lpotter3580" target="_blank"><i class="fa-brands fa-github"></i>github</a>
                    <a href="https://www.linkedin.com/in/lpotter3580/" target="_blank"><i class="fa-brands fa-linkedin"></i>linkedin</a>
                </nav>
                <nav>
                    <ul class="container">
                        {navLinks}
                    </ul>
                </nav>
            </footer>
        </>
    );
}