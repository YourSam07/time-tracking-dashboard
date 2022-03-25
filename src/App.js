import { useEffect, useState } from 'react';
import './App.css';
import ProfileWidget from './Components/ProfileWidget';
import SqWidget from './Components/SqWidget';


function App() {
  const [data, setData] = useState([]);
  const [period, setPeriod] = useState("weekly");

  useEffect(() => {
    fetch('data.json'
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then((response) => response.json())
      .then((myJson) => setData(myJson))
  }, [])


  return (
    <div className="App">
      <div className="wrapper">
        <ProfileWidget activeInterval={period} setperiod={setPeriod} />
        <div className="rightSideWidgets">
          {data.map(item => {
            return  < SqWidget bgcolor = { item.color } imgLoc = { item.image } cardTitle = { item.title }
            Hrs = { item.timeframes[period].current } lastWeekHrs = { item.timeframes[period].previous } />}
          )
          }
        </div>
      </div>
    </div>
  );
}

export default App;
