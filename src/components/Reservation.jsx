import React from "react";
import Social from "./Social";

function Reservation(){
    return (
            <div class = "report-box">
                <form action="" method="post">
                    <div class="user-box">  
                        <input type="date" name="" required="" />
                        <label>ARRIVAL DATE</label>
                    </div>
                    <div class="user-box">  
                        <input type="date" name="" required="true" />
                        <label>DEPARTURE DATE</label>
                    </div>
                    <div class="user-box">  
                        <input type="text" name="" required="true" />
                        <label>ROOM TYPE</label>
                    </div>
                    <div class="user-box">  
                        <input type="number" name="" required="" placeholder="IF ANY?" />
                        <label>ROOM NUMBER</label>
                    </div>
                    <div class="user-box">  
                        <input type="text" name="" required="" placeholder="IF ANY?" />
                        <label>PROMO CODE</label>
                    </div>
                    <div class="user-box">  
                        <input type="text" name="" required="" />
                        <label>PAYMENT METHOD</label>
                    </div>
                    <div class="user-box">  
                        <input type="text" name="" required="" />
                        <label>SPECIAL REQUEST</label>
                    </div>
                    <a href="https://google.com/" class="submit-btn">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        SUBMIT
                    </a>
                </form>
                <Social />
            </div>

    );
}

export default Reservation;