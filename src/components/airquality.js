import './css/App.css';
import React, { useContext } from 'react';
import { WeekContext } from './App'; // Make sure this path points to where your WeekContext is exported.

import { ReactComponent as Background } from './img/bg-blur.svg';
import { ReactComponent as Good } from './img/happyboy.png';
import { ReactComponent as Moderate } from './img/midboy.png';
import { ReactComponent as Unhealthy } from './img/sadboy.png';
import { ReactComponent as Dangerous } from './img/unhealthyboy.png';
import { ReactComponent as Severe } from './img/dangerboy.png';
import { ReactComponent as Hazardous } from './img/hazardboy.png';

function Card({ day, aqi }) {
  let aqiIcon;
  switch (aqi) {
    case 'Severe':
      aqiIcon = < Severe/>;
      break;
    case 'Moderate':
      aqiIcon = <Moderate />;
      break;
    case 'Unhealthy':
      aqiIcon = <Unhealthy />;
      break;
    case 'Dangerous':
      aqiIcon = <Dangerous />;
      break;
    case 'Hazardous':
      aqiIcon = <Hazardous />;
      break;
    default:
      aqiIcon = <Good />;
  }
  
  return (
    <div className="card">
      <div className="card-date">
        <p>{day}</p>
      </div>
      <div className="card-header">
        <h3>{day}</h3>
        <div className="aqi">
          <p>{aqi}</p>
        </div>
        {aqiIcon}
      </div>
      <div className="card-details">
        {/* Your details here */}
      </div>
    </div>
  );
}

const airquality = () => {
  const [weekData] = useContext(WeekContext);

  if (!weekData || !weekData.list || weekData.list.length === 0) {
    return <div className="content">Loading data or no data available...</div>;
  }

  // Use JavaScript's Date object to get today's day index
  const todayIndex = new Date().getDay(); // Sunday - 0, Monday - 1, ..., Saturday - 6
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const cards = weekData.list.slice(0, 5).map((data, index) => {
    // Get the day of the week for the index
    const dayOfWeek = daysOfWeek[(todayIndex + index) % 7];

    // Select the appropriate weather icon
    let aqiIcon;
    switch (data.weather[0].main) {
      case 'Severe':
        aqiIcon = <Severe />;
        break;
      case 'MOderate':
        aqiIcon = <Moderate />;
        break;
      case 'Unhealthy':
        aqiIcon = <Unhealthy />;
        break;
      case 'Dangerous':
        aqiIcon = <Dangerous />;
        break;
      case 'Hazardous':
        aqiIcon = <Hazardous />;
        break;
      default:
        aqiIcon = <Good />;
    }

    return (
      <Card
        key={index}
        day={index === 0 ? 'Today' : dayOfWeek} // 'Today' for the first card, calculated day of the week for the others
        weather={data.weather[0].main}
        temp={Math.round(data.main.temp)}
        // ... pass other necessary props based on your data structure
      />
    );
  });

  return (
    <div className="content">
      <div id="activities">
        <h1>Days</h1>
        <div id="card-array">{cards}</div>
      </div>
      <Background />
    </div>
  );
};

export default airquality;