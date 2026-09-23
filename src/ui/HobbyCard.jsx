export default function HobbyCard({title, description, startDate, endDate, role, imgUrl, altText}){
    return (
        <>
        <section class="bubble">
            <div class="container mb-15">
                <img src={imgUrl} alt={altText} class="project-size"></img>
                <div>
                    <div>
                        <h3>{title}</h3>
                        <ul class="list">
                            <li><h4>{role}</h4></li>
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