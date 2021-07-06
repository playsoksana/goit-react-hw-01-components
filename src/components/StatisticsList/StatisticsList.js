import React from 'react';
import PropTypes from 'prop-types';
import StatisticsItem from '../StatisticsItem/StatisticsItem';
import styles from "./StatisticsList.module.css"


const getRandomEl = () =>   
  Math.floor(Math.random() * Math.floor(255));     
  

const StatisticsList =({statData}) => 
<ul className={styles.list}>
{statData.map(({ label, percentage, id}) =>  
<li  className={styles.item} style={{backgroundColor: "rgb(" + getRandomEl() + "," + getRandomEl() + "," + getRandomEl() + ")" }} key={id}>
    <StatisticsItem title={label} interest={percentage}/>         
</li>
)}
</ul>;

StatisticsList.propTypes = {
    statData: PropTypes.arrayOf(PropTypes.shape(
        {
        id: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired
        }
    )).isRequired,
 
}

export default StatisticsList;