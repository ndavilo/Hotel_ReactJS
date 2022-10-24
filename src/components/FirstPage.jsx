import React from "react";
import entrance from "../img/entrance.jpg"

function FirstPage(){
    return(
        <div>
            <div className="image-container">
                <img className="firstpic" src={entrance} alt="entrance" />
                <span className="title span">Welcome to Azure</span>
                <span className="description span">Please feel free to contact us, on how to serve you better</span>
                <span className="line top span"></span>
                <span className="line left span"></span>
            </div>
            <h1 className="firstpage-h1">
                A FUN EXPERIENCE AT AZURE
            </h1>
            <h5 className="firstpage-h5">
                This is an Introduction to the next generation of modern luxury at an affordable rate.
                We are located at No 49 Charity road 54 progress college road Alimosho Local Government Area, Abule Egba 100276
            </h5>
        </div>
    );
}

export default FirstPage;