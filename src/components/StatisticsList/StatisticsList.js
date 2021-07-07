import React from 'react';
import PropTypes from 'prop-types';
import StatisticsItem from '../StatisticsItem/StatisticsItem';
import styles from "./StatisticsList.module.css"


  
  

const StatisticsList =({statData}) => 
<ul className={styles.List}>
{statData.map(({ label, percentage, id}) =>  

    <StatisticsItem key={id} title={label} interest={percentage}/>         

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