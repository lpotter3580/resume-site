function generateProjects(){
    const HobbyDataArr = [];
    Object.keys(ProjectData).forEach(key => ProjectDataArr.push({title: ProjectData[key].title, description: ProjectData[key].description, startDate:ProjectData[key].startDate, endDate: ProjectData[key].endDate, role: ProjectData[key].role, skillsList: ProjectData[key].skillsList, imgUrl: ProjectData[key].imgUrl, altText: ProjectData[key].altText, link: ProjectData[key].link}));
    
    const Projects = ProjectDataArr.map(card =>
        <li key={card.title}><ProjectCard title={card.title} description={card.description} startDate={card.startDate} endDate={card.endDate} role={card.role} skillsList={"Skills: " + card.skillsList} imgUrl={card.imgUrl} altText={card.altText} link={card.link}/></li>
    );

    return Hobbies
}

export default function HobbiesPage(){
    return(
        <>
            <main>
                <h1 class="whiteText">Hobbies</h1>

                <p>
                    Here you will find a list of my non-computing hobbies, clubs, and overall just what I like to do when I'm not working!
                </p>
            </main>
        </>
    );
}