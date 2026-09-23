import HobbyCard from "../ui/HobbyCard";
import HobbyData from "../data/hobbies"

function generateHobbies(){
    const HobbyDataArr = [];
    Object.keys(HobbyData).forEach(key => HobbyDataArr.push({title: HobbyData[key].title, description: HobbyData[key].description, startDate:HobbyData[key].startDate, endDate: HobbyData[key].endDate, role: HobbyData[key].role, skillsList: HobbyData[key].skillsList, imgUrl: HobbyData[key].imgUrl, altText: HobbyData[key].altText, link: HobbyData[key].link}));
    
    const Hobbies = HobbyDataArr.map(card =>
        <li key={card.title}><HobbyCard title={card.title} description={card.description} startDate={card.startDate} endDate={card.endDate} role={card.role} imgUrl={card.imgUrl} altText={card.altText}/></li>
    );

    return Hobbies
}

export default function HobbiesPage(){
    let hobbies = generateHobbies();
    return(
        <>
            <main>
                <h1 class="whiteText">Hobbies</h1>

                <p class="bubble">
                    Here you will find a list of my non-computing hobbies, clubs, and overall what I like to do when I'm not working!
                </p>

                <ul>
                    {hobbies}
                </ul>
            </main>
        </>
    );
}