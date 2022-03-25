import React from 'react'
import styles from "./SqWidget.module.css"

const SqWidget = (props) => {
  const {bgcolor, imgLoc, cardTitle, Hrs, lastWeekHrs} = props;
  return (
    <div className={styles.box} style={{ backgroundColor: bgcolor, backgroundImage: `url(${imgLoc})`}}>
        <div className={styles.mainBox}>
          <div className={styles.head}>
            <div className={styles.title}>{cardTitle}</div>
            <div className={styles.threeDots}>...</div>
          </div>          
          <div className={styles.time}>{Hrs}hrs </div>
          <div className={styles.msg}>Last Week - {lastWeekHrs}hrs</div>
        </div>
      </div>  
    )
}

export default SqWidget