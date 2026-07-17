export default function ProjectCard({title, description, startDate, endDate, role, skillsList, imgUrl, link}){
    return (
        <>
        <section class="bubble">
            <div class="container">
                <img src={imgUrl} alt="Alt text placeholder" class="project-size"></img>
                <div>
                    <div>
                        <a href={link} target="_blank"><h3>{title}</h3></a>
                        <h4>{role}</h4>
                        <h4>{startDate} - {endDate}</h4>
                        <h4 class="right">{skillsList}</h4>
                        
                    </div>
                    <p class="large">{description}</p>
                </div>
                
            </div>
            <p class="small">{description}</p>
        </section>
        </>
    );
}