import React from 'react';

export default function Information({ timeInfo, activeBar, dayTime }) {

return (
<div className={activeBar ? "information-container" : "information-container information-container-active"} id={!dayTime ? "night" : null}>
    <div className="info-box"><h6>Current Timezone</h6><p>{timeInfo.timezone}</p></div>    
    <div className="info-box"><h6>Day of the Week</h6><p>{timeInfo.day_of_week}</p></div>
    <div className="info-box"><h6>Day of the Year</h6><p>{timeInfo.day_of_year}</p></div>    
    <div className="info-box"><h6>Week Number</h6><p>{timeInfo.week_number}</p></div>    
</div>
)
} 