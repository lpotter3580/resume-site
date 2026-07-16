export default function ProjectCard({title, description, startDate, endDate, role, skillsList, imageUrl, link}){
    return (
        <>
        <section class="bubble spaceAbove container">
            <img href={imageUrl} alt="Alt text placeholder"></img>
            <div>
                <div>
                    <h3><a src={link}>{title}</a></h3>
                    <h4 class="right">{skillsList}</h4>
                    <h4>{role}</h4>
                    <h4>{startDate} - {endDate}</h4>
                    
                </div>
                <p>{description}</p>
            </div>
        </section>
        </>
    );
}