import { useState } from "react";
import '../App.css';

export default function LinkButton({text, href, icon, newTab, active}) {
    let targetText = "_self"
    if(newTab){
        targetText = "_blank";
    }

    let activeText = "linkButton"
    if(active){
        activeText = "linkButton active";
    }

    return (
        <>
            <a href={href} target={targetText} class={activeText} class={activeText}>{icon}{text}</a>
        </>
    )
}