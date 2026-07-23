export default function ProjectCard({title, description, startDate, endDate, role, skillsList, imgUrl, link}){
    return (
        <>
        <section class="bubble">
            <div class="container mb-15">
                <img src={imgUrl} alt="Alt text placeholder" class="project-size"></img>
                <div>
                    <div>
                        <a href={link} target="_blank"><h3>{title}</h3></a>
                        <ul class="list">
                            <li><h4>{role}</h4></li>
                            <li><h4>{skillsList}</h4></li>
                            <li><h4>{startDate} - {endDate}</h4></li>
                        </ul>
                        
                    </div>
                    
                    <p class="large">{description}</p>
                </div>

                
            </div>
            <p class="small">{description}</p>
        </section>
        </>
    );
}