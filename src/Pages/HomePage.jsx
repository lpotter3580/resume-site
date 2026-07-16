import ProjectCard from "../ui/ProjectCard";
import ProjectData from "../data/projects.json"


function generateProjects(){
    const ProjectDataArr = [];
    Object.keys(ProjectData).forEach(key => ProjectDataArr.push({title: ProjectData[key].title, description: ProjectData[key].description, startDate:ProjectData[key].startDate, endDate: ProjectData[key].endDate, role: ProjectData[key].role, skillsList: ProjectData[key].skillsList, imgUrl: ProjectData[key].imgUrl, link: ProjectData[key].link}));
    
    const Projects = ProjectDataArr.map(card =>
        <li key={card.title}><ProjectCard title={card.title} description={card.description} startDate={card.startDate} endDate={card.endDate} role={card.role} skillsList={card.skillsList} imgUrl={card.imgUrl} link={card.link}/></li>
    );

    return Projects
}

export default function HomePage(){

    let projects = generateProjects();

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
            <ul>
                {projects}
            </ul>
        </article>
    </main>
    );
}