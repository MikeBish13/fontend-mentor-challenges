import React from 'react';
import btnUpIcon from '../assets/imgs/desktop/icon-arrow-up.svg';

export default function Button({activeBar, setActiveBar}) {

    let clickedStyle = {
        transform: 'rotate(180deg)' 
    }

return (
<div>
    <button className={activeBar ? "btn" : "btn btn-active"} onClick={() => setActiveBar(!activeBar)}><h6>{activeBar ? 'More' : 'less'}</h6><img style={!activeBar ? clickedStyle : null} src={btnUpIcon} alt="arrow button"></img></button>
</div>
)
} 