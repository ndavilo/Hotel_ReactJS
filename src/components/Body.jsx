import React from "react";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import Reservation from "./Reservation";
import Map from "./Map";

function Body(){
    return(
        <div>
            <div className="mainbody">
                <FirstPage />
                <SecondPage />
                <ThirdPage />
                <Map />
            </div>
            <div className="sidebody">
                <Reservation />
            </div>

        </div>
    );
}

export default Body;