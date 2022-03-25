import React from 'react'
import style from "./ProfileWidget.module.css"

const ProfileWidget = ({activeInterval, setperiod}) => {

  const activateAssign = (name) => {
    setperiod(name);
    document.getElementById(name).style.color="white";
    activeInterval = name;
    if (activeInterval === "daily"){
        document.getElementById("weekly").style.color="hsl(235, 45%, 61%)";
        document.getElementById("monthly").style.color="hsl(235, 45%, 61%)";
    } else if (activeInterval === "weekly") {
        document.getElementById("daily").style.color="hsl(235, 45%, 61%)";
        document.getElementById("monthly").style.color="hsl(235, 45%, 61%)";
    } else {
        document.getElementById("daily").style.color="hsl(235, 45%, 61%)";
        document.getElementById("weekly").style.color="hsl(235, 45%, 61%)";
    }
    
  }
  return (
    <div className={style.ProfileWidget}>
        <div class={style.prof}>
            <img src="/images/image-jeremy.png" alt="" />
            <p>Report for</p>
            <h1>Jeremy Robson</h1>
        </div>
        <div class={style.options}>
            <ul>
                <li onClick={() => activateAssign("daily")} id="daily">Daily</li>
                <li onClick={() => activateAssign("weekly")} id="weekly">Weekly</li>
                <li onClick={() => activateAssign("monthly")} id="monthly">Monthly</li>
            </ul>
         </div>   
    </div>
  )
}

export default ProfileWidget