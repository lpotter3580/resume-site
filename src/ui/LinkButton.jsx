import { useState } from "react";
import '../App.css';
import { FaDownload } from "react-icons/fa";

export default function LinkButton({text, href, icon, newTab, active}) {
    let targetText = "_self";
    if(newTab){
        targetText = "_blank";
    }

    let activeText = "linkButton";
    if(active){
        activeText = "linkButton active";
    }

    if(text === "Resume"){
        icon = <FaDownload class="icon"/>;
    }

    return (
        <>
            <a href={href} target={targetText} class={activeText} class={activeText} download>{icon}{text}</a>
        </>
    )
}