import React from 'react';
import refresh from '../assets/imgs/desktop/icon-refresh.svg'

export default function Quotes({ quote, setQuote, activeBar }) {

    const retrieveQuote = () => {
        fetch('http://api.quotable.io/random')
        .then(data => data.json())
        .then(data => setQuote(data));
    }

return (
<div className={activeBar ? "quote-container" : "quote-container-inactive"}>
    <div className="quote-details">
    <p className="quote-text">{ quote.content }</p>
    <h5 className="quote-author"> { quote.author }</h5>
    </div>
    <button className="quote-refresh" onClick={ retrieveQuote }><img src={ refresh } alt="refresh"></img></button>
</div>
)
} 