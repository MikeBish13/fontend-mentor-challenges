import React, { useEffect, useState } from 'react';
import './styles/App.css';
import Timer from './components/Time.js';
import Information from './components/Information.js';
import Quotes from './components/Quotes.js';
import Button from './components/Button.js';
import dayTimeBackground from './assets/imgs/desktop/bg-image-daytime.jpg';
import nightTimeBackground from './assets/imgs/desktop/bg-image-nighttime.jpg';

function App() {
    const [ timeInfo, settimeInfo ] = useState({});
    const [ location, setLocation ] = useState({});
    const [ dayHours, setDayHours ] = useState('');
    const [ quote, setQuote] = useState({});
    const [ dayTime, setDayTime ] = useState(false);
    const [ activeBar, setActiveBar ] = useState(true);

        
    const timeOfDay = (hours) => {
      let currentHour = new Date(hours.datetime).getHours();
      console.log(currentHour);
      if (currentHour >= 5 && currentHour < 12) {
        setDayHours('Morning')
        setDayTime(true)
        document.body.style.backgroundImage = 'linear-gradient(rgba(0,0,0,0.4), rgba(0, 0, 0, 0.4)), url(' + dayTimeBackground + ')'
      } else if (currentHour >= 12 && currentHour < 18) {
        setDayHours('Afternoon')
        setDayTime(true)
        document.body.style.backgroundImage = 'linear-gradient(rgba(0,0,0,0.4), rgba(0, 0, 0, 0.4)), url(' + dayTimeBackground + ')'
      } else {
        setDayHours('Evening')
        setDayTime(false)
        document.body.style.backgroundImage = 'linear-gradient(rgba(0,0,0,0.4), rgba(0, 0, 0, 0.4)), url(' + nightTimeBackground + ')'
      }
    }
    
    useEffect(() => {
      Promise.all([
        fetch('https://freegeoip.app/json'),
        fetch('http://worldtimeapi.org/api/ip'),
        fetch('http://api.quotable.io/random')
      ]).then(function (responses) {
        return Promise.all(responses.map(function (response) {
          return response.json();
        }));
      }).then(function (data) {
        setLocation(data[0]);
        settimeInfo(data[1]);
        timeOfDay(data[1]);
        setQuote(data[2]);
      }).catch(function (error) {
        console.log(error);
      });
    }, [])
      
      useEffect(() => {
        const interval = setInterval(() => {
        fetch('http://worldtimeapi.org/api/ip')
        .then(res => res.json())
        .then(data => settimeInfo(data))
        }, 30000)
        return() => clearInterval(interval);
    }, []);


  return (
    <div className="App">
        <div className="container">
            <Quotes quote={quote} setQuote={setQuote} activeBar={activeBar} />
                  <div className="time-and-button-container">
                        <Timer timeInfo={timeInfo} location={location} dayHours={dayHours} dayTime={dayTime} activeBar={activeBar} />
                        <Button activeBar={activeBar} setActiveBar={setActiveBar}/>
                  </div>
        </div>
            <Information timeInfo={timeInfo} activeBar={activeBar} dayTime={dayTime} />
    </div>
  );
}

export default App;
