import NavLinksData from "./links.json";
import LinkButton from "../ui/LinkButton";
export default function getNavLinks(){
    const linkDataArr = [];
    Object.keys(NavLinksData).forEach(key => linkDataArr.push({href: NavLinksData[key].href, text: NavLinksData[key].text, icon:NavLinksData[key].icon, external: NavLinksData[key].external}));

    const navLinks = linkDataArr.map(button =>
        <li key={button.text}><LinkButton href={button.href} text={button.text} external={button.external}/></li>
    );

    return navLinks;
}