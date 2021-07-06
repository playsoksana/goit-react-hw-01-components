import React from 'react';
import PropTypes from 'prop-types';
import styles from './StatisticsItem.module.css'

const StatisticsItem =({title, interest}) =>
 <>
   <span className={styles.label}>{title}</span>
   <span className="percentage">{interest}%</span> 
</>

StatisticsItem.propTypes = {
    title: PropTypes.string.isRequired,
    interest: PropTypes.number.isRequired,
}

export default StatisticsItem; 