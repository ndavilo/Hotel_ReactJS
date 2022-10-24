import React from "react";
import room1 from "../img/room1.jpg"
import room2 from "../img/room2.jpg"
import room3 from "../img/room3.jpg"
import room4 from "../img/room4.jpg"
import room5 from "../img/room5.jpg"
import room6 from "../img/room6.jpg"
import room7 from "../img/room7.jpg"
import room8 from "../img/room8.jpg"


function Room(){
    return(
                <div class="room-container">
                    <div class="room-card">
                        <div class="room-image">
                            <span class="discount-tag">10% Discount for more than 3 nights</span>
                            <img src={room1} class="room-thumb" alt="room" />
                            <a href="{% url 'charts' %}" class="card-btn">View Rooms</a>
                        </div>
                        <div class="room-info">
                            <h2 class="room-brand">DELUXE ROOMS</h2>
                            <span class="price">₦ 35,000</span>
                        </div>
                    </div>  
                    <div class="room-card">
                        <div class="room-image">
                            <span class="discount-tag">10% Discount for more than 3 nights</span>
                            <img src={room2} class="room-thumb" alt="room" />
                            <a href="{% url 'charts' %}" class="card-btn">View Rooms</a>
                        </div>
                        <div class="room-info">
                            <h2 class="room-brand">SUPERIOR CLASSIC ROOMS</h2>
                            <span class="price">₦ 38,000</span>
                        </div>
                    </div>  
                    <div class="room-card">
                        <div class="room-image">
                            <span class="discount-tag">10% Discount for more than 3 nights</span>
                            <img src={room3} class="room-thumb" alt="room" />
                            <a href="{% url 'charts' %}" class="card-btn">View Rooms</a>
                        </div>
                        <div class="room-info">
                            <h2 class="room-brand">SUPERIOR BUSINESS ROOMS</h2>
                            <span class="price">₦ 45,000</span>
                        </div>
                    </div>  
                    <div class="room-card">
                        <div class="room-image">
                            <span class="discount-tag">10% Discount for more than 3 nights</span>
                            <img src={room3} class="room-thumb" alt="room" />
                            <a href="{% url 'charts' %}" class="card-btn">View Rooms</a>
                        </div>
                        <div class="room-info">
                            <h2 class="room-brand">SUPERIOR ROOMS</h2>
                            <span class="price">₦ 50,000</span>
                        </div>
                    </div> 
                </div>

    );
}


export default Room;