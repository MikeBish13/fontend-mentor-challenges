import React from 'react';
import sun from '../assets/imgs/desktop/icon-sun.svg';
import moon from '../assets/imgs/desktop/icon-moon.svg';

export default function Timer({ timeInfo, location, dayHours, dayTime, activeBar }) {
    
    let currentTime = new Date(timeInfo.datetime).toTimeString();

return (
<div className={activeBar ? "time-container" : "time-container time-container-active"}>
    <h4 className="welcome-message"><img className="weather-icon" alt="weather icon" src={ !dayTime ? moon : sun}></img>Good {dayHours}<span className="message-extra">, it's currently</span></h4>
    <h1 className="current-time">{ currentTime.slice(0, 5) }<span className="timezone">{currentTime.slice(9, 12)}</span></h1>
    <h3>In {location.city}, {location.country_name}</h3>
</div>
)
} 