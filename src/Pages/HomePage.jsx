import ProjectCard from "../ui/ProjectCard";

export default function HomePage(){
    return (
    <main>
        <section class="bubble spaceAbove">
            <h1>Hey! I'm Logan!</h1>
            <p>I am a web designer/developer and graphic designer.<br/>
            I am also a New Media Interactive Development student at RIT.<br/>
            <br/>
            I combine visual communication design and technical web development skills to create<br/>
            fluid user experiences that are easy to use and pleasant to look at.<br/><br/>
            Scroll down to see some of my recent projects!
            </p>
        </section>

        <article class="spaceAbove">
            <h2 class="whiteText">Projects</h2>
            <ProjectCard></ProjectCard>
        </article>
    </main>
    );
}